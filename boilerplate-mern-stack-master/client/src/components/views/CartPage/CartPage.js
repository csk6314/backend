import React, { useEffect } from 'react';
import { useSelector, useDispatch}from 'react-redux';
import { getCartItems } from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';

const CartPage = () => {
  const user = useSelector(state=>state.user);
  const dispatch = useDispatch();

  useEffect(()=> {

      let cartItems = [];    
      //리덕스 User State안에 cart 안에 상품이 들어있는지 확인
      if(user.userData && user.userData.cart) {
        if(user.userData.cart.length > 0) {
          user.userData.cart.forEach((item)=> {
            cartItems.push(item.id);
          })

          dispatch(getCartItems(cartItems,user.userData.cart));
        }  
      }


  },[user.userData])

  return (
    <div style={{width:'85%', margin:'3rem auto'}}>
      <h1>My Cart</h1>
      <UserCardBlock products={user.cartDetail && user.cartDetail.product}/>
    </div>
  )
}

export default CartPage