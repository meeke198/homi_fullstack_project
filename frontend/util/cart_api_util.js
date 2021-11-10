export const apiReceiveCart = (userId) => {
    $.ajax({
        url: `/api/carts/${userId}`
    })
}