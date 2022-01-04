import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, UPDATE_ALL_PRODUCTS } from "../actions/product_actions";

const productsReducer = (state = [], action) => {
    // debugger
    Object.freeze(state);
    let nextState = Object.assign([], state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            // debugger
            return Object.values(action.products).map ((product) => {
                product.isShown = true
                return product;
            }
            )
        case UPDATE_ALL_PRODUCTS:
            // debugger
            return action.products;
        case RECEIVE_PRODUCT:
            // debugger
            const index = state.findIndex(item => item.id === action.product.id) 
            if (index > -1) {
                nextState[index] = action.product
            }
            return nextState;
        default:
            return state;
    }
}

export default productsReducer;