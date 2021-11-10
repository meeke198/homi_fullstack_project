import * as cartItemsAPIUtil from "../util/cart_items_api_util"
import { receiveCart } from "./cart_actions";
const CREATE_CART_ITEM = "CREATE_CART_ITEM"; 
const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS" ;
const UPDATE_CART_ITEM = " UPDATE_CART_ITEM";
const DELETE_CART_ITEM = "DELETE_CART_ITEM";


export const createCartItem = (cartItem) => ({
    type: CREATE_CART_ITEM,
    cartItem
})

export const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})


export const updateCartItem = (cartItem) => ({
    type: UPDATE_CART_ITEM,
    cartItem
})


export const delateCartItem = (cartItemId) => ({
    type: DELETE_CART_ITEM,
    cartItemId
})

export const thunkCreateCartItem = (productId, quantity) => dispatch=> (
    cartItemsAPIUtil.apiCreateCartItem(productId, quantity)
    .then(cartItem => dispatch(createCartItem(cartItem)))
)

export const thunkReceiveCartItems = () => dispatch => (
    cartItemsAPIUtil.apiCreateCartItem()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
)


export const thunkUpdateCartItem = (cartItem) => dispatch => (
    cartItemsAPIUtil.apiUpdateCartItem(cartItem)
    .then(cartItem => dispatch(updateCartItem(cartItem)))
)


export const thunkDelateCartItem = (cartItemId) => (
    cartItemsAPIUtil.apiDeleteCartItem(cartItemId)
    .then(() => dispatch(delateCartItem(cartItemId)))
)


