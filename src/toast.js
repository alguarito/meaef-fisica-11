// Toast utility — shared across pages (no circular deps)
let _toastContainer = null;

export function initToast(container) {
  _toastContainer = container;
}

export function showToast(message, color = '#34d399') {
  const tc = _toastContainer || document.getElementById('toast-container');
  if (!tc) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="color:${color}">●</span> ${message}`;
  tc.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}
