export const apiCreateCartItem = (cart_item) => {
   return $.ajax({
        url: `api/cart_items`,
        method: "POST",
        data: {cart_item}
    })
}


export const apiReceiveCartItems = () => {
    return $.ajax({
        url: `api/cart_items`
    })
}

export const apiUpdateCartItem = (cart_item) => {
    return $.ajax({
        url: `api/cart_items/${cart_item.id}`,
        method: "PATCH",
        data: {cart_item}
    })
}

export const apiDeleteCartItem = (cartItemId) => {
    return $.ajax({
        url: `api/cart_items/${cartItemId}`,
        method: "DELETE",
    })
}
// export const apiDeleteCartItems = (cart_items) => {
//     return $.ajax({
//         url: `api/cart_items`,
//         method: "DELETE",
//         data: {cart_items}
//     })
// }




