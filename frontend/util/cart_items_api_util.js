export const apiCreateCartItem = (cart_item) => {
    // debugger
   return $.ajax({
        url: `api/cart_items`,
        method: "POST",
        data: {cart_item}
    })
}


export const apiReceiveCartItems = () => {
    // debugger
    return $.ajax({
        url: `api/cart_items`
    })
}

export const apiUpdateCartItem = (cart_item) => {
    // debugger
    return $.ajax({
        
        url: `api/cart_items/${cart_item.id}`,
        method: "PATCH",
        data: {cart_item}
    })
}

export const apiDeleteCartItem = (cartItemId) => {
    // debugger
    return $.ajax({
        url: `api/cart_items/${cartItemId}`,
        method: "DELETE",
    })
}


