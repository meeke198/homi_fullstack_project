import * as ProductApiUtil from "../util/product_util"

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveAllProducts = products => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})

export const fetchProducts = () => dispatch => {
    return ProductApiUtil.fetchProducts()
    .then(products => dispatch(receiveAllProducts(products)));
};

export const fetchProduct = productId => dispatch => {
    return ProductApiUtil.fetchProduct(productId)
    .then(productId => dispatch(receiveProduct(productId)))
}