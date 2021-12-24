
export const apiCreateCart = (cart) => (
    $.ajax({
        method: 'POST',
        url: `/api/carts`,
        data: {cart}
    })
)
export const apiFetchCart = (user_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/carts/${user_id}`,
    
    })
)