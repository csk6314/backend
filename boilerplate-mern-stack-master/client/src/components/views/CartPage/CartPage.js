import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, removeCartItem, setRemoveFalse } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import { Empty } from "antd";

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  useEffect(() => {
    let cartItems = [];
    //리덕스 User State안에 cart 안에 상품이 들어있는지 확인
    if (user.userData && user.userData.cart) {
      if (!user.remove) {
        if (user.userData.cart.length > 0) {
          user.userData.cart.forEach((item) => {
            cartItems.push(item.id);
          });

          dispatch(getCartItems(cartItems, user.userData.cart)).then((res) =>
            calculateTotal(res.payload)
          );
        }
      } else {
        dispatch(setRemoveFalse());
      }
      
    }
  }, [user.userData]);

  const calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });
    setTotal(total);
    setShowTotal(true);
  };

  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((res) => {
      if (res.payload.productInfo.length <= 0) {
        setShowTotal(false);
      }
    });
  };

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>My Cart</h1>
      <UserCardBlock products={user.cartDetail} removeItem={removeFromCart} />
      {ShowTotal ? (
        <div style={{ marginTop: "3rem" }}>
          <h2>Total Amount : ${Total}</h2>
        </div>
      ) : (
        <>
          <Empty style={{ marginTop: "1rem" }} />
          <div style={{ marginTop: "3rem" }}>
            <h3>No Items in Cart T-T</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
