import * as cartAPIUtil from "../util/cart_api_util"
export const RECEIVE_CART = "RECEIVE_CART";

export const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
})

export const fetchCart = userId => dispatch => (
    cartAPIUtil.apiReceiveCart(userId)
    .then((cart) => dispatch(receiveCart(cart)))
)
//when user click on cart icon