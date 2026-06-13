import { PERIODOS } from '../data/curriculum.js';
import { marcarProgreso, obtenerProgreso, desbloquearInsignia, contarHIEMCompletadas } from '../db.js';
import { navigate } from '../router.js';
import { showToast } from '../toast.js';

// Markdown + Math renderer (supports $$ block equations and $inline$)
function md(text) {
  // 1. Protect block equations $$...$$  (may span multiple lines)
  const equationBlocks = [];
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, eq) => {
    const idx = equationBlocks.length;
    equationBlocks.push(eq.trim());
    return `%%EQ${idx}%%`;
  });

  // 2. Inline math $...$
  text = text.replace(/\$([^$\n]+?)\$/g, (_, eq) =>
    `<span class="math-inline"><em style="font-family:'Georgia',serif;font-style:italic;color:#4338ca;background:#eef2ff;padding:0.1em 0.35em;border-radius:4px;font-size:0.95em">${eq}</em></span>`
  );

  // 3. Bold/italic/code
  text = text
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code style="background:var(--clr-surface2);padding:0.1em 0.45em;border-radius:5px;font-size:0.88em;color:var(--clr-accent);font-family:var(--ff-mono)">$1</code>');

  // 4. Headings
  text = text
    .replace(/^## (.+)$/gm,  '<h3 style="color:var(--clr-text);margin:1.5rem 0 0.6rem;font-size:1.2rem">$1</h3>')
    .replace(/^### (.+)$/gm, '<h4 style="color:var(--clr-text);margin:1.1rem 0 0.4rem">$1</h4>');

  // 5. Tables
  text = text.replace(/\| (.+) \|/gm, (m) => {
    const cells = m.slice(1,-1).split('|').map(c => c.trim());
    return `<tr>${cells.map(c => `<td style="padding:0.5rem 0.75rem;border:1px solid var(--clr-border)">${c}</td>`).join('')}</tr>`;
  }).replace(/(<tr>.*<\/tr>\s*)+/g, m =>
    `<table style="width:100%;border-collapse:collapse;margin:1rem 0;font-size:0.9rem;border-radius:8px;overflow:hidden">${m}</table>`
  );

  // 6. Lists
  text = text
    .replace(/^- (.+)$/gm, '<li style="margin-bottom:0.4rem;padding-left:0.5rem">$1</li>')
    .replace(/(<li.*<\/li>\s*)+/g, m => `<ul style="margin:0.6rem 0 1rem 1.2rem;color:var(--clr-text-muted)">${m}</ul>`)
    .replace(/^(\d+)\. (.+)$/gm, '<li style="margin-bottom:0.4rem">$2</li>');

  // 7. Paragraphs
  text = text
    .replace(/\n\n/g, '</p><p style="margin-bottom:0.85rem;color:var(--clr-text-muted)">')
    .replace(/^(?!<[a-z%])(.+)$/gm, (m, p1) => p1 ? `<p style="margin-bottom:0.85rem;color:var(--clr-text-muted)">${p1}</p>` : '');

  // 8. Restore block equations as beautiful rendered blocks
  text = text.replace(/%%EQ(\d+)%%/g, (_, idx) => {
    const eq = equationBlocks[parseInt(idx)];
    return `<div class="equation-block">
      <div style="font-family:'Georgia',serif;font-size:1.25rem;color:#1e1b4b;text-align:center;letter-spacing:0.03em;line-height:1.8">
        ${eq.replace(/\\\\?([a-zA-Z]+)/g, (_,cmd) => {
          const map = { rho:'ρ', cdot:'·', frac:' ÷ ', sqrt:'√', Delta:'Δ', delta:'δ',
            alpha:'α', beta:'β', gamma:'γ', theta:'θ', pi:'π', sigma:'σ', omega:'ω',
            mu:'μ', lambda:'λ', eta:'η', epsilon:'ε', tau:'τ', phi:'φ',
            times:'×', pm:'±', geq:'≥', leq:'≤', neq:'≠', infty:'∞',
            rightarrow:'→', leftarrow:'←', approx:'≈', propto:'∝',
            partial:'∂', nabla:'∇', int:'∫', sum:'Σ', prod:'Π',
            vec:'', hat:'', dot:'', bar:'', tilde:'~'
          };
          return map[cmd] ?? (_);
        }).replace(/_\{(.+?)\}/g, '<sub>$1</sub>').replace(/\^\{(.+?)\}/g, '<sup>$1</sup>')
            .replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>').replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>')
        }
      </div>
      <div style="font-size:0.75rem;color:#6366f1;text-align:right;margin-top:4px;font-weight:600;letter-spacing:0.04em">ECUACIÓN</div>
    </div>`;
  });

  return text;
}

export async function renderSemana(container, params) {
  const pid = parseInt(params?.pid);
  const sid = parseInt(params?.sid);
  if (!pid || !sid) { navigate('periodo'); return; }

  const periodo = PERIODOS.find(p => p.id === pid);
  if (!periodo) { navigate('periodo'); return; }

  const semana = periodo.semanas[sid - 1];
  if (!semana) { navigate('periodo', { id: pid }); return; }

  let activeTab = 'A';
  const progreso = await obtenerProgreso();
  const sesAComp = progreso.some(p => p.periodoId === pid && p.semanaId === sid && p.sesion === 'A');
  const sesBComp = progreso.some(p => p.periodoId === pid && p.semanaId === sid && p.sesion === 'B');

  function render() {
    const phet = periodo.phet[semana.sesionB.phetIndex];
    const teoriaHTML = md(semana.sesionA.teoria);

    container.innerHTML = `
      <div class="container page-enter">
        <!-- Back button & header -->
        <div style="padding:var(--sp-2) 0">
          <button class="btn btn-ghost mb-2" style="width:auto;padding:0.5rem 1rem" id="back-btn">
            ← ${periodo.titulo}
          </button>

          <div style="display:flex;align-items:center;gap:var(--sp-1);margin-bottom:var(--sp-1)">
            <span style="background:${periodo.gradient};-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:var(--ff-display);font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em">
              Semana ${sid}
            </span>
          </div>
          <h2 style="margin-bottom:0.25rem">${semana.titulo}</h2>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
            <span class="chip">${periodo.emoji} ${periodo.titulo}</span>
            <span class="chip">📅 Semana ${sid}</span>
          </div>
        </div>

        <!-- Session Tabs -->
        <div class="session-tabs">
          <button class="session-tab ${activeTab === 'A' ? 'active' : ''}" id="tab-a" role="tab" aria-selected="${activeTab === 'A'}">
            <span class="session-tab-icon">📖</span>
            <span class="session-tab-label" style="color:${sesAComp ? 'var(--clr-accent)' : 'inherit'}">
              ${sesAComp ? '✅ ' : ''}Sesión A
            </span>
            <span style="font-size:0.7rem;color:var(--clr-text-dim)">Teoría + CSC</span>
          </button>
          <button class="session-tab ${activeTab === 'B' ? 'active' : ''}" id="tab-b" role="tab" aria-selected="${activeTab === 'B'}">
            <span class="session-tab-icon">🔬</span>
            <span class="session-tab-label" style="color:${sesBComp ? 'var(--clr-accent)' : 'inherit'}">
              ${sesBComp ? '✅ ' : ''}Sesión B
            </span>
            <span style="font-size:0.7rem;color:var(--clr-text-dim)">Lab + HIEM</span>
          </button>
        </div>

        <!-- Session A Content -->
        ${activeTab === 'A' ? `
        <div id="content-area">
          <div class="card mb-3">
            <div class="section-label mb-2">📖 ${semana.sesionA.titulo}</div>
            <div class="content-body">${teoriaHTML}</div>
          </div>

          <!-- Discussion Questions -->
          <div class="section-label mb-2">💬 Preguntas orientadoras</div>
          <div style="margin-bottom:var(--sp-3)">
            ${semana.sesionA.preguntas.map((q, i) => `
              <div class="pregunta-item">
                <span class="pregunta-num">${i + 1}.</span>
                <span class="pregunta-text">${q}</span>
              </div>
            `).join('')}
          </div>

          <button class="btn btn-primary mb-3 ${sesAComp ? 'btn-secondary' : ''}" id="complete-a">
            ${sesAComp ? '✅ Sesión completada' : '✔ Marcar Sesión A como completada'}
          </button>
        </div>
        ` : `
        <!-- Session B Content -->
        <div id="content-area">
          <!-- PhET Simulator -->
          <div class="section-label mb-2">🔬 Simulador PhET</div>
          <div class="phet-container mb-3">
            <div class="phet-header">
              <span style="font-size:1.2rem">${phet.emoji}</span>
              <div>
                <div style="font-family:var(--ff-display);font-size:0.85rem;font-weight:600;color:var(--clr-text)">${phet.nombre}</div>
                <div style="font-size:0.7rem;color:var(--clr-text-muted)">Objetivo: ${semana.sesionB.objetivo}</div>
              </div>
            </div>
            <iframe
              class="phet-frame"
              src="${phet.url}"
              allowfullscreen
              title="Simulador PhET: ${phet.nombre}"
              loading="lazy">
            </iframe>
          </div>

          <!-- HIEM Button -->
          <div class="card mb-3" style="border-color:var(--clr-border-strong)">
            <div class="section-label mb-1">📝 Ficha HIEM</div>
            <p class="text-sm mb-2">Completa la Hoja de Indagación de Estructura Mínima para esta sesión.</p>
            <div style="display:flex;gap:0.5rem">
              <button class="btn btn-ghost" id="open-hiem" style="flex:1">
                📝 Abrir Ficha HIEM
              </button>
            </div>
          </div>

          <button class="btn btn-primary mb-3 ${sesBComp ? 'btn-secondary' : ''}" id="complete-b">
            ${sesBComp ? '✅ Sesión completada' : '✔ Marcar Sesión B como completada'}
          </button>
        </div>
        `}
      </div>
    `;

    // Tab switching
    document.getElementById('tab-a')?.addEventListener('click', () => { activeTab = 'A'; render(); });
    document.getElementById('tab-b')?.addEventListener('click', () => { activeTab = 'B'; render(); });

    // Back button
    document.getElementById('back-btn')?.addEventListener('click', () => navigate('periodo', { id: pid }));

    // Complete Session A
    document.getElementById('complete-a')?.addEventListener('click', async () => {
      if (!sesAComp) {
        await marcarProgreso(pid, sid, 'A');
        await checkInsignias();
        showToast('✅ Sesión A completada', '#34d399');
        navigate('periodo', { id: pid });
      }
    });

    // Complete Session B
    document.getElementById('complete-b')?.addEventListener('click', async () => {
      if (!sesBComp) {
        await marcarProgreso(pid, sid, 'B');
        await checkInsignias();
        showToast('✅ Sesión B completada', '#34d399');
        navigate('periodo', { id: pid });
      }
    });

    // Open HIEM
    document.getElementById('open-hiem')?.addEventListener('click', () => {
      navigate('hiem', { pid, sid, hiemId: semana.sesionB.hiemId });
    });
  }

  async function checkInsignias() {
    const prog = await obtenerProgreso();
    const hiemsComp = await contarHIEMCompletadas();

    if (hiemsComp >= 1) { const n = await desbloquearInsignia('explorador'); if (n) showToast('🔭 ¡Insignia desbloqueada: Explorador/a!', '#818cf8'); }
    if (hiemsComp >= 5) { const n = await desbloquearInsignia('cientifico'); if (n) showToast('🔬 ¡Insignia desbloqueada: Científico/a!', '#34d399'); }

    const p1done = prog.filter(p => p.periodoId === 1).length >= 20;
    if (p1done) { const n = await desbloquearInsignia('ingeniero'); if (n) showToast('⚙️ ¡Insignia desbloqueada: Ingeniero/a!', '#0ea5e9'); }

    const p2done = prog.filter(p => p.periodoId === 2).length >= 20;
    if (p2done) { const n = await desbloquearInsignia('termodinamico'); if (n) showToast('🌡️ ¡Insignia: Termodinámico/a!', '#f97316'); }

    const p3done = prog.filter(p => p.periodoId === 3).length >= 20;
    if (p3done) { const n = await desbloquearInsignia('electromagnetico'); if (n) showToast('⚡ ¡Insignia: Electromagnético/a!', '#a855f7'); }

    const allDone = prog.length >= 80;
    if (allDone) { const n = await desbloquearInsignia('guardian'); if (n) showToast('🌱 ¡GUARDIÁN/A DEL SISTEMA!', '#eab308'); }
  }

  render();
}
