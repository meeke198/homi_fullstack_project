import * as cartAPIUtil from "../util/cart_api_util"
export const RECEIVE_CART = "RECEIVE_CART";

export const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
})

export const fetchCart = userId => dispatch => (
    cartAPIUtil.apiFetchCart(userId)
    .then((cart) => dispatch(receiveCart(cart)))
)

export const createCart = (cart, userId) => (dispatch) =>
  cartAPIUtil
    .apiCreateCart(cart, userId)
    .then((cart) => dispatch(receiveCart(cart)));
//when user click on cart icon