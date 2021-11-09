export const $createCartItem = (productId, quantity) => (
    $.ajax({
        url: `api/products/${productId}`,
        method: "POST",
        data: {cartItem: {productId: productId, quantity: quantity}}
    })
)