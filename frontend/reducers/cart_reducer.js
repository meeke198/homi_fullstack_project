import { RECEIVE_CART } from "../actions/cart_actions";

const cartReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CART:
         return action.cart
        case RECEIVE_CART:
         return action.cart
        default:
            return oldState;
    }
}
export default cartReducer;