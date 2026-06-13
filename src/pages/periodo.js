import { PERIODOS } from '../data/curriculum.js';
import { obtenerProgreso } from '../db.js';
import { navigate } from '../router.js';

export async function renderPeriodo(container, params) {
  const pid = parseInt(params?.id) || null;

  // If no period selected, show all periods list
  if (!pid) {
    const progreso = await obtenerProgreso();
    container.innerHTML = `
      <div class="container page-enter">
        <div class="flex items-center gap-2 mt-2 mb-3">
          <h2>Los 4 Periodos</h2>
        </div>
        <div class="periodos-grid mb-4">
          ${PERIODOS.map(p => {
            const pSesiones = progreso.filter(pr => pr.periodoId === p.id).length;
            const pPct = Math.round((pSesiones / 20) * 100);
            return `
            <div class="periodo-card card-interactive"
              data-pid="${p.id}"
              role="button" tabindex="0">
              <div class="periodo-image-wrap" style="background:${p.gradient}">
                <img src="${p.imagen}" alt="${p.titulo}" class="periodo-img" loading="lazy" />
                <div class="periodo-image-overlay">
                  <span class="periodo-emoji">${p.emoji}</span>
                </div>
              </div>
              <div class="periodo-content">
                <div class="periodo-title">${p.titulo}</div>
                <div class="periodo-sub" style="color:${p.color}">${p.subtitulo}</div>
                <div class="periodo-desc">${p.descripcion}</div>
                <div style="margin-top:var(--sp-2);font-size:1rem;color:var(--clr-text-muted)">
                  🧪 <strong>Simuladores:</strong> ${p.phet.map(s=>s.nombre).join(' · ')}
                </div>
                <div class="periodo-progress-bar">
                  <div class="periodo-progress-fill" style="width:${pPct}%;background:${p.color}"></div>
                </div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
    `;
    container.querySelectorAll('.periodo-card').forEach(card => {
      const id = card.dataset.pid;
      card.addEventListener('click', () => navigate('periodo', { id }));
    });
    return;
  }

  const periodo = PERIODOS.find(p => p.id === pid);
  if (!periodo) { container.innerHTML = '<div class="container"><p>Periodo no encontrado</p></div>'; return; }

  const progreso = await obtenerProgreso();

  container.innerHTML = `
    <div class="container page-enter">
      <!-- Header / Panoramic Banner -->
      <div style="padding:var(--sp-2) 0 var(--sp-3)">
        <button class="btn btn-ghost mb-2" style="width:auto;padding:0.5rem 1rem" id="back-btn">
          ← Periodos
        </button>
        <div class="desktop-hero-banner periodo-card" style="cursor:default;margin-bottom:0">
          <div class="periodo-image-wrap" style="background:${periodo.gradient}">
            <img src="${periodo.imagen}" alt="${periodo.titulo}" class="periodo-img" />
            <div class="periodo-image-overlay" style="padding:var(--sp-4) var(--sp-3)">
              <span class="periodo-emoji" style="font-size:4rem">${periodo.emoji}</span>
            </div>
          </div>
          <div class="periodo-content">
            <div class="periodo-title" style="font-size:2rem">${periodo.titulo}</div>
            <div class="periodo-sub" style="color:${periodo.color}">${periodo.subtitulo}</div>
            <div class="periodo-desc" style="font-size:1.1rem">${periodo.descripcion}</div>
          </div>
        </div>
      </div>

      <div class="desktop-split">
        <!-- Left Column: Context & Simulators -->
        <div>
          <!-- Context CSC -->
          <div class="card mb-3" style="border-color:rgba(255,255,255,0.15);background:var(--clr-surface2)">
            <div class="section-label mb-1">Contexto socio-científico</div>
            <p class="text-sm" style="color:var(--clr-text)">🌍 ${periodo.contextoCSC}</p>
          </div>

          <!-- PhET Simulators -->
          <div class="section-label mb-2">Simuladores del periodo</div>
          <div style="display:flex;flex-direction:column;gap:var(--sp-1);margin-bottom:var(--sp-3)">
            ${periodo.phet.map((sim, i) => `
              <div class="semana-item card-interactive" data-url="${sim.url}" role="button" tabindex="0">
                <div class="semana-num" style="background:${periodo.colorDark}40;color:${periodo.color};font-size:1.3rem">
                  ${sim.emoji}
                </div>
                <div class="semana-info">
                  <div class="semana-name">${sim.nombre}</div>
                  <div class="semana-sessions">Simulador PhET</div>
                </div>
                <span style="color:${periodo.color}">▶</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Column: Weekly List -->
        <div>
          <div class="section-label mb-2">Semanas del periodo</div>
          <div style="display:flex;flex-direction:column;gap:var(--sp-1);margin-bottom:var(--sp-5)">
            ${periodo.semanas.map((semana, idx) => {
              const semNum = idx + 1;
              const sesAComp = progreso.some(p => p.periodoId === pid && p.semanaId === semNum && p.sesion === 'A');
              const sesBComp = progreso.some(p => p.periodoId === pid && p.semanaId === semNum && p.sesion === 'B');
              const ambas = sesAComp && sesBComp;
              return `
              <div class="semana-item card-interactive"
                data-pid="${pid}" data-sid="${semNum}"
                role="button" tabindex="0"
                aria-label="Semana ${semNum}: ${semana.titulo}">
                <div class="semana-num" style="background:${ambas ? periodo.color+'30' : 'var(--clr-surface2)'};color:${ambas ? periodo.color : 'var(--clr-text-dim)'}">
                  ${semNum}
                </div>
                <div class="semana-info">
                  <div class="semana-name">${semana.titulo}</div>
                  <div class="semana-sessions">
                    ${sesAComp ? '✅' : '⬜'} Sesión A (Teoría)
                    &nbsp;·&nbsp;
                    ${sesBComp ? '✅' : '⬜'} Sesión B (Lab)
                  </div>
                </div>
                <span class="semana-check" style="color:${ambas ? periodo.color : 'var(--clr-text-dim)'}">
                  ${ambas ? '✨' : '→'}
                </span>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn')?.addEventListener('click', () => navigate('periodo'));

  container.querySelectorAll('[data-url]').forEach(el => {
    el.addEventListener('click', () => navigate('lab', { url: el.dataset.url }));
  });

  container.querySelectorAll('[data-sid]').forEach(el => {
    el.addEventListener('click', () => navigate('semana', { pid: el.dataset.pid, sid: el.dataset.sid }));
  });
}
