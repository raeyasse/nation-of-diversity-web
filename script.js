// ── PAGE NAVIGATION ──
function showPage(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ── TOAST NOTIFICATION ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── ADD TO CART ──
function addToCart(name) {
  showToast('Added ' + name + ' to cart 🕯️');
}

// ── SHOP FILTER BUTTONS ──
function setFilter(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
