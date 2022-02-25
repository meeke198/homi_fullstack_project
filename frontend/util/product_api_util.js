export const fetchProducts = (searchTermInput) => {
    return $.ajax({
        url: `/api/products?search=${searchTermInput}`, 
    });
};

export const fetchProduct = (productId) => {
  return $.ajax({
    url: `/api/products/${productId}`,
  });
};

