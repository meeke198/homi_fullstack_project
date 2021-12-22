import { RECEIVE_CART_ITEMS, CREATE_CART_ITEM, UPDATE_CART_ITEM, DELETE_CART_ITEM } from "../actions/cart_items_actions";

const cartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case CREATE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem
            return nextState;
        case RECEIVE_CART_ITEMS:
             return action.cartItems;
        case UPDATE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem
            return nextState;
        case DELETE_CART_ITEM:
            delete nextState[action.cartItemId]
            return nextState;
        default:
            return oldState;
    }
}
export default cartItemsReducer;