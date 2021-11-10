export const apiCreateCartItem = (productId, quantity) => (
    $.ajax({
        url: `api/products/${productId}`,
        method: "POST",
        data: {cartItem: {productId: productId, quantity: quantity}}
    })
)


export const apiReceiveCartItems = () => (
    $.ajax({
        url: `api/cart_items`
    })
)

export const apiUpdateCartItem = (cartItem) => (
    $.ajax({
        url: `api/cart_items/${cartItem.id}`,
        method: "PATCH",
        data: {cartItem}
    })
)

export const apiDeleteCartItem = (cartItemId) => (
    $.ajax({
        url: `api/products/${cartItemId}`,
        method: "DETELE",
    })
)