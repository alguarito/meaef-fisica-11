import { HIEM_TEMPLATE, PERIODOS } from '../data/curriculum.js';
import { guardarHIEM, cargarHIEM, desbloquearInsignia, contarHIEMCompletadas } from '../db.js';
import { navigate } from '../router.js';
import { showToast } from '../toast.js';

export async function renderHIEM(container, params) {
  const pid = parseInt(params?.pid);
  const sid = parseInt(params?.sid);
  const hiemId = params?.hiemId;

  if (!pid || !sid || !hiemId) { navigate('home'); return; }

  const periodo = PERIODOS.find(p => p.id === pid);
  const semana = periodo?.semanas[sid - 1];
  if (!periodo || !semana) { navigate('home'); return; }

  // Load existing HIEM data
  const existing = await cargarHIEM(hiemId);
  const data = existing || { momento1: '', momento2: '', momento3: '', cer_aseveracion: '', cer_evidencia: '', cer_razonamiento: '', completada: false };

  const phet = periodo.phet[semana.sesionB.phetIndex];

  container.innerHTML = `
    <div class="container container-form page-enter">
      <!-- Header -->
      <div style="padding:var(--sp-2) 0 var(--sp-1)">
        <button class="btn btn-ghost mb-2" style="width:auto;padding:0.5rem 1rem" id="back-btn">
          ← Semana ${sid}
        </button>
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem">
          <span style="font-size:1.5rem">📝</span>
          <div>
            <h2 style="font-size:1.1rem;margin-bottom:2px">Ficha HIEM</h2>
            <p class="text-xs text-muted">Semana ${sid} · ${semana.titulo}</p>
          </div>
        </div>
        <div class="chip" style="margin-bottom:var(--sp-2)">🔬 ${phet.nombre} · ${semana.sesionB.objetivo}</div>
      </div>

      <!-- HIEM Explanation -->
      <div class="card mb-3" style="background:var(--clr-accent-dim);border-color:var(--clr-border-strong)">
        <p class="text-xs" style="color:var(--clr-accent);font-weight:600;line-height:1.6">
          La ficha HIEM guía tu proceso de indagación en 4 momentos. Trabaja con tu equipo Guardianes del Sistema y registra cada etapa.
        </p>
      </div>

      <!-- 4 HIEM Moments -->
      ${HIEM_TEMPLATE.momentos.map((m, i) => `
        <div class="hiem-momento mb-2" style="border-top:3px solid ${m.color}">
          <div class="hiem-momento-header">
            <span class="hiem-momento-icon">${m.icono}</span>
            <div>
              <div class="hiem-momento-title" style="color:${m.color}">
                ${i + 1}. ${m.nombre}
              </div>
              <div class="hiem-momento-desc">${m.descripcion}</div>
            </div>
          </div>
          ${i < 3 ? `
          <textarea
            class="hiem-textarea"
            id="momento-${i + 1}"
            rows="4"
            placeholder="Escribe aquí tus observaciones del ${m.nombre}..."
            aria-label="${m.nombre}"
          >${i === 0 ? data.momento1 : i === 1 ? data.momento2 : data.momento3}</textarea>
          ` : `
          <!-- CER Section -->
          <div class="cer-grid">
            <div class="cer-item" style="border-top:2px solid #818cf8">
              <div class="cer-label" style="color:#818cf8">📌 C — Aseveración (Claim)</div>
              <p class="text-xs text-muted mb-1">¿Cuál es tu conclusión principal?</p>
              <textarea class="hiem-textarea" id="cer-claim" rows="3"
                placeholder="Mi conclusión es que..." aria-label="Aseveración">${data.cer_aseveracion}</textarea>
            </div>
            <div class="cer-item" style="border-top:2px solid #34d399">
              <div class="cer-label" style="color:#34d399">📊 E — Evidencia (Evidence)</div>
              <p class="text-xs text-muted mb-1">¿Qué datos del simulador apoyan tu conclusión?</p>
              <textarea class="hiem-textarea" id="cer-evidence" rows="3"
                placeholder="Los datos muestran que..." aria-label="Evidencia">${data.cer_evidencia}</textarea>
            </div>
            <div class="cer-item" style="border-top:2px solid #fb923c">
              <div class="cer-label" style="color:#fb923c">🧠 R — Razonamiento (Reasoning)</div>
              <p class="text-xs text-muted mb-1">¿Por qué esa evidencia apoya tu conclusión?</p>
              <textarea class="hiem-textarea" id="cer-reasoning" rows="3"
                placeholder="La evidencia apoya mi conclusión porque, según la física..." aria-label="Razonamiento">${data.cer_razonamiento}</textarea>
            </div>
          </div>
          `}
        </div>
      `).join('')}

      <!-- CER Rubric -->
      <div class="card mb-3" style="background:var(--clr-surface2)">
        <div class="section-label mb-2">📊 Rúbrica CER — ¿Cómo me evalúo?</div>
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-size:0.72rem">
            <tr style="background:var(--clr-surface)">
              <th style="padding:0.4rem;border:1px solid var(--clr-border);text-align:left">Dimensión</th>
              <th style="padding:0.4rem;border:1px solid var(--clr-border);text-align:center;color:#34d399">Logrado</th>
              <th style="padding:0.4rem;border:1px solid var(--clr-border);text-align:center;color:#fb923c">En proceso</th>
            </tr>
            <tr>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text)">Aseveración</td>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text-muted)">Clara, específica y comprobable</td>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text-muted)">Vaga o no comprobable</td>
            </tr>
            <tr style="background:var(--clr-surface)">
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text)">Evidencia</td>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text-muted)">Datos concretos del simulador</td>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text-muted)">Generalizaciones sin datos</td>
            </tr>
            <tr>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text)">Razonamiento</td>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text-muted)">Usa conceptos físicos correctamente</td>
              <td style="padding:0.4rem;border:1px solid var(--clr-border);color:var(--clr-text-muted)">Conexión incompleta con la teoría</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- Save Button -->
      <div style="display:flex;flex-direction:column;gap:var(--sp-1);margin-bottom:var(--sp-5)">
        <button class="btn btn-secondary" id="save-draft">
          💾 Guardar borrador
        </button>
        <button class="btn btn-primary" id="save-complete">
          ✅ Guardar y marcar como completada
        </button>
      </div>
    </div>
  `;

  document.getElementById('back-btn')?.addEventListener('click', () => navigate('semana', { pid, sid }));

  function collectData(completada) {
    return {
      hiemId,
      periodoId: pid,
      semanaId: sid,
      momento1: document.getElementById('momento-1')?.value || '',
      momento2: document.getElementById('momento-2')?.value || '',
      momento3: document.getElementById('momento-3')?.value || '',
      cer_aseveracion: document.getElementById('cer-claim')?.value || '',
      cer_evidencia: document.getElementById('cer-evidence')?.value || '',
      cer_razonamiento: document.getElementById('cer-reasoning')?.value || '',
      completada: completada ? 1 : 0
    };
  }

  document.getElementById('save-draft')?.addEventListener('click', async () => {
    await guardarHIEM(hiemId, collectData(false));
    showToast('💾 Borrador guardado', '#818cf8');
  });

  document.getElementById('save-complete')?.addEventListener('click', async () => {
    const d = collectData(true);
    const hasContent = d.momento1 || d.momento2 || d.momento3;
    const hasCER = d.cer_aseveracion || d.cer_evidencia || d.cer_razonamiento;

    if (!hasContent || !hasCER) {
      showToast('⚠️ Completa al menos los momentos y el CER', '#f97316');
      return;
    }

    await guardarHIEM(hiemId, d);

    // Check badges
    const count = await contarHIEMCompletadas();
    if (count >= 1) { const n = await desbloquearInsignia('explorador'); if (n) showToast('🔭 ¡Insignia: Explorador/a desbloqueada!', '#818cf8'); }
    if (count >= 5) { const n = await desbloquearInsignia('cientifico'); if (n) showToast('🔬 ¡Insignia: Científico/a desbloqueada!', '#34d399'); }

    showToast('✅ ¡Ficha HIEM guardada!', '#34d399');
    setTimeout(() => navigate('semana', { pid, sid }), 800);
  });

  // Auto-save on input
  let saveTimeout;
  container.querySelectorAll('.hiem-textarea').forEach(el => {
    el.addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(async () => {
        await guardarHIEM(hiemId, collectData(false));
      }, 2000);
    });
  });
}
