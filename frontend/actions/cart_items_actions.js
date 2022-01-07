 import * as cartItemsAPIUtil from "../util/cart_items_api_util"
export const CREATE_CART_ITEM = "CREATE_CART_ITEM"; 
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS" ;
export const UPDATE_CART_ITEM = " UPDATE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";



export const createCartItem = (cartItem) => {
    // debugger
   return {
    type: CREATE_CART_ITEM,
    cartItem
}
}

export const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})


export const updateCartItem = (cartItem) => ({
    type: UPDATE_CART_ITEM,
    cartItem
})


export const deleteCartItem = (cartItemId) => ({
    type: DELETE_CART_ITEM,
    cartItemId
})

export const thunkCreateCartItem = (cartItem) => dispatch=> {
   cartItemsAPIUtil.apiCreateCartItem(cartItem)
    .then(cartItem => dispatch(createCartItem(cartItem)))
}

export const thunkFetchCartItems = () => (dispatch) => {
  return cartItemsAPIUtil
    .apiReceiveCartItems()
    .then((cartItems) => dispatch(receiveCartItems(cartItems)));
}
//when user click add item to cart

export const thunkUpdateCartItem = (cartItem) => dispatch => {
   return cartItemsAPIUtil.apiUpdateCartItem(cartItem)
    .then(
        cartItem => {
            // debugger
            dispatch(updateCartItem(cartItem))})
}


export const thunkDeleteCartItem = (cartItemId) => dispatch => {
    return cartItemsAPIUtil.apiDeleteCartItem(cartItemId)
    .then(() => dispatch(deleteCartItem(cartItemId)))
}


