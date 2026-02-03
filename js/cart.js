// js/cart.js
const CART_KEY = "get_cart_v1";

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(productId, qty = 1) {
  const cart = getCart();
  const found = cart.find((i) => i.id === productId);
  if (found) found.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId) {
  const cart = getCart().filter((i) => i.id !== productId);
  saveCart(cart);
  return cart;
}

export function updateQty(productId, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return cart;

  item.qty = Math.max(1, Number(qty) || 1);
  saveCart(cart);
  return cart;
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

export function cartCount() {
  return getCart().reduce((acc, i) => acc + i.qty, 0);
}

export function cartTotal(products) {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
