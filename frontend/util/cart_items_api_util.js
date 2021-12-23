export const apiCreateCartItem = (cartItem) => (
    $.ajax({
        url: `api/cart_items`,
        method: "POST",
        data: {"cart_item": cartItem}
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
        url: `api/cart_items/${cartItemId}`,
        method: "DELETE",
    })
)


