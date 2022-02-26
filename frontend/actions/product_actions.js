import * as ProductApiUtil from "../util/product_api_util"

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const UPDATE_ALL_PRODUCTS = "UPDATE_ALL_PRODUCTS";

export const receiveAllProducts = products => {
   return { type: RECEIVE_ALL_PRODUCTS,
    products
   }
}

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})
export const actionUpdateAllProducts = products => ({
    type: UPDATE_ALL_PRODUCTS,
    products
})


export const fetchProducts = (searchInputTerm) => dispatch => {
    return ProductApiUtil.fetchProducts(searchInputTerm).then((products) => {
        dispatch(receiveAllProducts(products))
        Promise.resolve()
    });
};

export const fetchProduct = productId => dispatch => {
    return ProductApiUtil.fetchProduct(productId)
    .then(productId => dispatch(receiveProduct(productId)))
}

export const updateAllProducts = products => dispatch => {
    return dispatch(actionUpdateAllProducts(products));
}