import { PERIODOS, INSIGNIAS } from '../data/curriculum.js';
import { obtenerProgreso, obtenerInsignias } from '../db.js';
import { navigate } from '../router.js';

export async function renderProgreso(container) {
  const progreso = await obtenerProgreso();
  const insignias = await obtenerInsignias();
  const insigniasIds = new Set(insignias.map(i => i.insigniaId));

  const totalSesiones = 80;
  const completadas = progreso.length;
  const pct = Math.round((completadas / totalSesiones) * 100);

  container.innerHTML = `
    <div class="container page-enter">
      <div style="padding:var(--sp-2) 0 var(--sp-3)">
        <h2>📊 Mi Progreso</h2>
        <p class="text-sm text-muted">Bitácora del Científico — Guardianes del Sistema</p>
      </div>

      <div class="desktop-dashboard">
        <!-- Left Sidebar (Overview, Stats, Motivation) -->
        <div class="dashboard-sidebar">
          <!-- Overall Progress -->
          <div class="card card-glow mb-3">
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="section-label">Progreso general</div>
                <h1 style="color:var(--clr-accent);font-size:2.5rem;line-height:1">${pct}%</h1>
              </div>
              <div style="font-size:3rem">🌱</div>
            </div>
            <div style="height:12px;background:var(--clr-surface2);border-radius:var(--r-full);overflow:hidden;margin-bottom:0.5rem">
              <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--clr-accent),#6ee7b7);border-radius:var(--r-full);transition:width 1.2s ease"></div>
            </div>
            <p class="text-xs text-muted">${completadas} de ${totalSesiones} sesiones completadas</p>
          </div>

          <!-- Stats Grid -->
          <div class="grid-2 mb-3">
            <div class="progress-stat">
              <div class="progress-stat-num">${completadas}</div>
              <div class="progress-stat-label">Sesiones completadas</div>
            </div>
            <div class="progress-stat">
              <div class="progress-stat-num">${insigniasIds.size}</div>
              <div class="progress-stat-label">Insignias obtenidas</div>
            </div>
            <div class="progress-stat">
              <div class="progress-stat-num">${Math.round(completadas / 2)}</div>
              <div class="progress-stat-label">Semanas cubiertas</div>
            </div>
            <div class="progress-stat">
              <div class="progress-stat-num">${Math.max(0, PERIODOS.filter(p => progreso.filter(pr => pr.periodoId === p.id).length >= 20).length)}</div>
              <div class="progress-stat-label">Periodos terminados</div>
            </div>
          </div>

          <!-- Motivational message -->
          ${pct === 0 ? `
          <div class="card" style="text-align:center;border-color:var(--clr-border-strong)">
            <div style="font-size:2rem;margin-bottom:0.5rem">🚀</div>
            <h3 style="margin-bottom:0.5rem">¡Empieza tu aventura!</h3>
            <p class="text-sm text-muted mb-2">Aún no has completado ninguna sesión. ¡El viaje de los Guardianes del Sistema comienza con el primer paso!</p>
            <button class="btn btn-primary" id="start-btn">Ir al Periodo 1</button>
          </div>
          ` : pct === 100 ? `
          <div class="card" style="text-align:center;border-color:var(--clr-accent);background:var(--clr-accent-dim)">
            <div style="font-size:3rem;margin-bottom:0.5rem">🌱⚡🎓</div>
            <h3 style="color:var(--clr-accent);margin-bottom:0.5rem">¡Guardián/a del Sistema!</h3>
            <p class="text-sm mb-2">Has completado los 4 periodos. Ahora eres un/a Guardián/a del Sistema oficial. ¡Felicitaciones!</p>
          </div>
          ` : `
          <div class="card" style="text-align:center">
            <div style="font-size:2rem;margin-bottom:0.5rem">💪</div>
            <h3 style="margin-bottom:0.5rem">${pct < 25 ? '¡Sigue adelante!' : pct < 50 ? '¡Vas muy bien!' : pct < 75 ? '¡A mitad del camino!' : '¡Casi lo logras!'}</h3>
            <p class="text-sm text-muted">Continúa completando sesiones para desbloquear todas las insignias.</p>
          </div>
          `}
        </div>

        <!-- Right Main (Period breakdown & Badges) -->
        <div class="dashboard-main">
          <!-- Period breakdown -->
          <div class="section-label mb-2">Progreso por periodo</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:var(--sp-2);margin-bottom:var(--sp-4)">
            ${PERIODOS.map(p => {
              const done = progreso.filter(pr => pr.periodoId === p.id).length;
              const pPct = Math.round((done / 20) * 100);
              return `
              <div class="card card-interactive" data-pid="${p.id}" style="padding:var(--sp-3)">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <span style="font-size:2rem">${p.emoji}</span>
                    <div>
                      <div style="font-family:var(--ff-display);font-size:1.1rem;font-weight:700;color:var(--clr-text)">${p.titulo}</div>
                      <div class="text-xs text-muted" style="font-size:0.9rem">${done}/20 sesiones</div>
                    </div>
                  </div>
                  <span style="font-family:var(--ff-display);font-weight:800;color:${p.color};font-size:1.5rem">${pPct}%</span>
                </div>
                <div style="height:8px;background:var(--clr-surface2);border-radius:var(--r-full);overflow:hidden;margin-top:var(--sp-2)">
                  <div style="height:100%;width:${pPct}%;background:${p.gradient};border-radius:var(--r-full);transition:width 1s ease"></div>
                </div>
              </div>`;
            }).join('')}
          </div>

          <!-- Badges -->
          <div class="section-label mb-2">🏅 Tus Insignias</div>
          <div class="badge-grid mb-4">
            ${INSIGNIAS.map(ins => {
              const unlocked = insigniasIds.has(ins.id);
              const obtainedDate = insignias.find(i => i.insigniaId === ins.id)?.fechaObtenida;
              return `
              <div class="badge-item ${unlocked ? 'unlocked' : 'locked'}"
                title="${ins.descripcion}${obtainedDate ? '\nObtenida: ' + new Date(obtainedDate).toLocaleDateString('es-CO') : ''}">
                <span class="badge-icon" style="filter:${unlocked ? `drop-shadow(0 0 8px ${ins.color})` : 'none'}">${ins.icono}</span>
                <span class="badge-name" style="color:${unlocked ? ins.color : 'var(--clr-text-dim)'}">${ins.nombre}</span>
                ${unlocked ? '<span style="font-size:0.6rem;color:var(--clr-text-dim)">Obtenida</span>' :
                  `<span style="font-size:0.6rem;color:var(--clr-text-dim)">${ins.descripcion}</span>`}
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>
      <div style="height:var(--sp-4)"></div>
    </div>
  `;

  document.getElementById('start-btn')?.addEventListener('click', () => navigate('periodo', { id: 1 }));
  container.querySelectorAll('[data-pid]').forEach(el => {
    el.addEventListener('click', () => navigate('periodo', { id: el.dataset.pid }));
  });
}
