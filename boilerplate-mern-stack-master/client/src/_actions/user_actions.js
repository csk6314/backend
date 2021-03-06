import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEM,
  SET_REMOVE_FALSE,
} from "./types";
import { USER_SERVER } from "../components/Config.js";

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function addToCart(id) {
  let body = {
    productId: id,
  };
  const request = axios
    .post(`${USER_SERVER}/addToCart`, body)
    .then((res) => res.data);

  return {
    type: ADD_TO_CART,
    payload: request,
  };
}

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/api/product/products_by_id?id=${cartItems}&type=array`)
    .then((res) => {
      // CartItem들에 해당하는 정보들을 Product Collection에서 가져온 후에
      // Quantity 정보를 넣어준다.
      userCart.forEach((cartItem) => {
        res.data.product.forEach((productDetail, i) => {
          if (cartItem.id === productDetail._id) {
            res.data.product[i].quantity = cartItem.quantity;
          }
        });
      });
      return res.data.product;
    });

  return {
    type: GET_CART_ITEMS,
    payload: request,
  };
}

export function removeCartItem(productId) {
  const request = axios
    .get(`/api/users/removeFromCart?id=${productId}`)
    .then((res) => {
      res.data.cart.forEach((item) => {
        res.data.productInfo.forEach((product, idx) => {
          if (item.id === product._id) {
            res.data.productInfo[idx].quantity = item.quantity;
          }
        });
      });

      return res.data;
    });

  return {
    type: REMOVE_CART_ITEM,
    payload: request,
  };
}

export function setRemoveFalse() {
  return {
    type:SET_REMOVE_FALSE
  }
}
