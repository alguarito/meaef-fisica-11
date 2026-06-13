import './style.css';
import { initRouter } from './router.js';
import { initToast, showToast } from './toast.js';
import { registerSW } from 'virtual:pwa-register';

// ---- PWA Service Worker Registration ----
let updateSW = () => {};
try {
  updateSW = registerSW({
    onNeedRefresh() {
      showToast('🔄 Nueva versión disponible. Recargando...', '#34d399');
      setTimeout(() => updateSW(true), 2000);
    },
    onOfflineReady() {
      showToast('📶 App lista para usar sin internet', '#34d399');
    }
  });
} catch (e) {
  console.warn('PWA Service worker not supported or blocked:', e);
}

// ---- Init Toast System ----
initToast(document.getElementById('toast-container'));

// ---- Offline Banner ----
const offlineBanner = document.getElementById('offline-banner');
window.addEventListener('online', () => offlineBanner?.classList.remove('visible'));
window.addEventListener('offline', () => offlineBanner?.classList.add('visible'));

// ---- Bottom Navigation ----
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const route = item.dataset.route;
    window.location.hash = `#${route}`;
  });
});

function updateNav() {
  const hash = window.location.hash.slice(1).split('?')[0] || 'home';
  navItems.forEach(item => {
    item.classList.toggle('active',
      item.dataset.route === hash ||
      (hash === '' && item.dataset.route === 'home')
    );
  });
}

// ---- Init Router ----
const appEl = document.getElementById('app');
initRouter(appEl);

// Sync navigation active state on route changes
window.addEventListener('hashchange', updateNav);
updateNav();
