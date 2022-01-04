export const fetchProducts = () => {
  // debugger
    return $.ajax({
        url: "/api/products",
    });
};

export const fetchProduct = (productId) => {
  // debugger
  return $.ajax({
    url: `/api/products/${productId}`,
  });
};

