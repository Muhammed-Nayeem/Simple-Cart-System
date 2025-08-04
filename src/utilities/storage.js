const getStoredCart = () => {
  let storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const saveCartToLS = (cart) => {
  let stringifiedCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifiedCart);
};

const removeFromLS = (productIndex) => {
  let storedCart = getStoredCart();
  let remainingProducts = storedCart.filter((_, index) => index !== productIndex);
  saveCartToLS(remainingProducts);
};

const addToLS = (productId) => {
  let storedCart = getStoredCart();
  storedCart.push(productId);
  saveCartToLS(storedCart);
};

export { addToLS, getStoredCart, removeFromLS };
