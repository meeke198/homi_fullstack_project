export const apiReceiveCart = (userId) => (
    $.ajax({
        url: `/api/carts/${userId}`
    })
)
export const apiCreateCart = (cart) => (
    $.ajax({
        method: 'POST',
        url: `/api/carts`,
        data: {cart}
    })
)