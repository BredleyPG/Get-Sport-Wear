// ===== Reveal suave =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-in");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ===== Cart =====
const CART_KEY = "GET_CART_V1";

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function setCart(items){
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartCount();
}
function updateCartCount(){
  const count = getCart().reduce((acc, i) => acc + (i.qty || 1), 0);
  document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = count);
}
updateCartCount();

window.Cart = {
  add(item){
    const cart = getCart();
    const idx = cart.findIndex(x => x.id === item.id);
    if (idx >= 0) cart[idx].qty += 1;
    else cart.push({ ...item, qty: 1 });
    setCart(cart);
  },
  list: getCart,
  clear(){ setCart([]); }
};
