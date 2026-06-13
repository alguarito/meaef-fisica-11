import { PERIODOS, INSIGNIAS } from '../data/curriculum.js';
import { obtenerProgreso, obtenerInsignias } from '../db.js';
import { navigate } from '../router.js';

export async function renderHome(container) {
  const progreso = await obtenerProgreso();
  const insignias = await obtenerInsignias();
  const insigniasIds = new Set(insignias.map(i => i.insigniaId));

  // Calculate overall stats
  const totalSesiones = PERIODOS.length * 10 * 2; // 4 periodos × 10 semanas × 2 sesiones
  const completadas = progreso.length;
  const pct = Math.round((completadas / totalSesiones) * 100);

  const html = `
    <div class="container page-enter">
      <!-- Hero / Header -->
      <div class="flex items-center justify-between mb-4 pb-3" style="border-bottom:1px solid var(--clr-border)">
        <div>
          <div class="hero-badge" style="margin-bottom:var(--sp-2)">⚡ Guardianes del Sistema</div>
          <h1 style="color:var(--clr-text); font-size:clamp(2rem, 4vw, 2.8rem); line-height:1.2;">Física 11°</h1>
          <p class="text-sm" style="color:var(--clr-text-muted);margin-top:0.25rem;">Modelo Energético-Ambiental MEAEF</p>
        </div>
        <div style="font-size:4rem; animation: float 4s ease-in-out infinite;">🌿</div>
      </div>

      <div class="desktop-dashboard">
        <!-- Left Sidebar (Stats & Badges) -->
        <div class="dashboard-sidebar">
          <!-- Progress Overview -->
          <div class="card card-glow mb-3">
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="section-label">Tu progreso</div>
                <h3 style="color:var(--clr-accent)">${pct}% completado</h3>
              </div>
              <div style="font-size:2rem">📊</div>
            </div>
            <div style="height:8px;background:var(--clr-surface2);border-radius:var(--r-full);overflow:hidden">
              <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--clr-accent),#6ee7b7);border-radius:var(--r-full);transition:width 1s ease"></div>
            </div>
            <div class="flex justify-between mt-1">
              <span class="text-xs text-muted">${completadas} sesiones</span>
              <span class="text-xs text-muted">${totalSesiones} total</span>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid-3 mb-3">
            <div class="progress-stat">
              <div class="progress-stat-num">${PERIODOS.length}</div>
              <div class="progress-stat-label">Periodos</div>
            </div>
            <div class="progress-stat">
              <div class="progress-stat-num">40</div>
              <div class="progress-stat-label">Semanas</div>
            </div>
            <div class="progress-stat">
              <div class="progress-stat-num">${insigniasIds.size}</div>
              <div class="progress-stat-label">Insignias</div>
            </div>
          </div>

          <!-- Badges Preview -->
          <div class="section-label mb-2">Tus Insignias</div>
          <div class="badge-grid mb-3">
            ${INSIGNIAS.slice(0, 6).map(ins => `
              <div class="badge-item ${insigniasIds.has(ins.id) ? 'unlocked' : 'locked'}"
                title="${ins.descripcion}">
                <span class="badge-icon">${ins.icono}</span>
                <span class="badge-name">${ins.nombre}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Main (Periods & Sims) -->
        <div class="dashboard-main">
          <!-- Periods Grid -->
          <div class="section-label mb-2">Los 4 Periodos</div>
          <div class="periodos-grid mb-4">
            ${PERIODOS.map(p => {
              const pSesiones = progreso.filter(pr => pr.periodoId === p.id).length;
              const pTotal = 20; // 10 semanas × 2 sesiones
              const pPct = Math.round((pSesiones / pTotal) * 100);
              return `
              <div class="periodo-card card-interactive"
                data-pid="${p.id}"
                role="button"
                tabindex="0"
                aria-label="Ir al ${p.titulo}">
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
                  <div class="periodo-progress-bar">
                    <div class="periodo-progress-fill" style="width:${pPct}%;background:${p.color}"></div>
                  </div>
                  <div style="display:flex;justify-content:space-between;margin-top:8px">
                    <span style="font-size:1rem;color:var(--clr-text-muted)">${pSesiones}/${pTotal} sesiones</span>
                    <span style="font-size:1rem;color:${p.color};font-weight:700">${pPct}%</span>
                  </div>
                </div>
              </div>`;
            }).join('')}
          </div>

          <!-- PhET Sims Quick Access -->
          <div class="section-label mb-2">Simuladores PhET Destacados</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:var(--sp-2);margin-bottom:var(--sp-4)">
            ${PERIODOS.map(p => p.phet.map(sim => `
              <div class="semana-item card-interactive" 
                data-url="${sim.url}"
                role="button" tabindex="0"
                aria-label="Abrir simulador ${sim.nombre}">
                <div class="semana-num" style="background:${p.colorDark}30;color:${p.color}">
                  ${sim.emoji}
                </div>
                <div class="semana-info">
                  <div class="semana-name">${sim.nombre}</div>
                  <div class="semana-sessions">${p.titulo}</div>
                </div>
                <span class="semana-check">↗</span>
              </div>
            `).join('')).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Period card navigation
  container.querySelectorAll('.periodo-card').forEach(card => {
    const pid = card.dataset.pid;
    const handler = () => navigate('periodo', { id: pid });
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => e.key === 'Enter' && handler());
  });

  // PhET simulator links
  container.querySelectorAll('[data-url]').forEach(el => {
    el.addEventListener('click', () => navigate('lab', { url: el.dataset.url }));
  });
}
