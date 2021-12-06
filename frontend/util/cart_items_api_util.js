export const apiCreateCartItem = (cartItem) => (
    $.ajax({
        url: `api/products/${cartItem.productId}`,
        method: "POST",
        data: {cartItem}
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