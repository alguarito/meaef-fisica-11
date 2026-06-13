// Router SPA — Hash-based para compatibilidad con GitHub Pages
import { renderHome } from './pages/home.js';
import { renderPeriodo } from './pages/periodo.js';
import { renderSemana } from './pages/semana.js';
import { renderHIEM } from './pages/hiem.js';
import { renderProgreso } from './pages/progreso.js';
import { renderLab } from './pages/laboratorio.js';

const routes = {
  '': renderHome,
  'home': renderHome,
  'periodo': renderPeriodo,
  'semana': renderSemana,
  'hiem': renderHIEM,
  'progreso': renderProgreso,
  'lab': renderLab,
};

export function navigate(path, params = {}) {
  const hash = params
    ? `#${path}?${new URLSearchParams(params).toString()}`
    : `#${path}`;
  window.location.hash = hash;
}

export function parseRoute() {
  const hash = window.location.hash.slice(1) || '';
  const [path, queryString] = hash.split('?');
  const params = {};
  if (queryString) {
    new URLSearchParams(queryString).forEach((v, k) => { params[k] = v; });
  }
  return { path: path || 'home', params };
}

export function initRouter(appEl) {
  const handleRoute = async () => {
    try {
      const { path, params } = parseRoute();
      const routeKey = path.split('/')[0];
      const handler = routes[routeKey] || renderHome;
      appEl.innerHTML = `
        <div class="container" style="padding:var(--sp-4) 0;text-align:center">
          <div class="skeleton" style="height:120px;margin-bottom:var(--sp-2)"></div>
          <div class="skeleton" style="height:80px"></div>
        </div>
      `;
      await handler(appEl, params);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Routing/Render Error:', error);
      appEl.innerHTML = `
        <div class="container" style="padding:var(--sp-4) 0;text-align:center">
          <div style="font-size:3rem;margin-bottom:1rem">⚠️</div>
          <h3 style="color:var(--clr-text)">Error de carga</h3>
          <p class="text-sm text-muted mb-3" style="max-width:400px;margin:0.5rem auto">${error.message}</p>
          <button class="btn btn-primary" onclick="window.location.reload()" style="max-width:200px;margin:0 auto">Reintentar</button>
        </div>
      `;
    }
  };

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
