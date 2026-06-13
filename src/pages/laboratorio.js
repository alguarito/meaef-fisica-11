import { navigate } from '../router.js';

export function renderLab(container, params) {
  const url = params?.url ? decodeURIComponent(params.url) : null;

  if (!url) {
    navigate('home');
    return;
  }

  // Extract sim name from URL
  const urlParts = url.split('/');
  const simSlug = urlParts[urlParts.indexOf('sims') + 2] || 'simulador';
  const simName = simSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;height:calc(100dvh - var(--nav-h));padding-top:var(--safe-top)">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem var(--sp-2);
        background:var(--clr-surface2);border-bottom:1px solid var(--clr-border);flex-shrink:0">
        <button id="back-btn"
          style="background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--r-sm);
          padding:0.4rem 0.75rem;color:var(--clr-text);font-family:var(--ff-display);font-size:0.8rem;
          font-weight:600;cursor:pointer;white-space:nowrap;-webkit-tap-highlight-color:transparent"
          aria-label="Volver">
          ← Volver
        </button>
        <div style="flex:1;min-width:0">
          <div style="font-family:var(--ff-display);font-size:0.85rem;font-weight:700;
            color:var(--clr-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
            🔬 ${simName}
          </div>
          <div style="font-size:0.68rem;color:var(--clr-text-muted)">Simulador PhET Colorado</div>
        </div>
        <a href="${url}" target="_blank" rel="noopener"
          style="background:var(--clr-accent-dim);border:1px solid var(--clr-border-strong);
          border-radius:var(--r-sm);padding:0.4rem 0.75rem;color:var(--clr-accent);
          font-family:var(--ff-display);font-size:0.78rem;font-weight:700;
          white-space:nowrap;display:flex;align-items:center;gap:4px"
          aria-label="Abrir en pantalla completa">
          ↗ Pantalla completa
        </a>
      </div>

      <!-- PhET iFrame — fills remaining space -->
      <iframe
        src="${url}"
        style="flex:1;width:100%;border:none;display:block"
        allowfullscreen
        allow="fullscreen"
        title="Simulador PhET: ${simName}"
        id="phet-frame">
      </iframe>
    </div>
  `;

  document.getElementById('back-btn')?.addEventListener('click', () => history.back());
}
