/* =====================================================================
   NihonGO – app.js
   Shared helpers (guide, drawing, modal, practice engine, chat engine),
   navigation, and a fault-tolerant loader for every section script.
   ===================================================================== */
const $ = id => document.getElementById(id);

/* ---------- Canvas guide (centered, auto-scaled) ---------- */
export function drawCenteredGuide(ctx, canvas, character) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    const maxW = canvas.width * 0.8;
    let size = Math.min(canvas.height * 0.8, 200);
    ctx.font = `${size}px sans-serif`;
    while (ctx.measureText(character).width > maxW && size > 10) {
        size -= 2;
        ctx.font = `${size}px sans-serif`;
    }
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#e0e0e0';
    ctx.fillText(character, canvas.width / 2, canvas.height / 2);
}

/* ---------- Mouse / touch / pen drawing ---------- */
export function attachDrawing(canvas, ctx, { lineWidth = 10, color = '#e91e63', onDraw } = {}) {
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    canvas.style.touchAction = 'none';
    let drawing = false;
    const pos = e => {
        const r = canvas.getBoundingClientRect();
        return [(e.clientX - r.left) * canvas.width / r.width, (e.clientY - r.top) * canvas.height / r.height];
    };
    canvas.addEventListener('pointerdown', e => {
        drawing = true;
        canvas.setPointerCapture?.(e.pointerId);
        const [x, y] = pos(e);
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y); ctx.stroke();
        onDraw?.();
    });
    canvas.addEventListener('pointermove', e => {
        if (!drawing) return;
        const [x, y] = pos(e);
        ctx.lineTo(x, y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y);
        onDraw?.();
    });
    const stop = () => { drawing = false; ctx.beginPath(); };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    canvas.addEventListener('pointerleave', stop);
}

/* ---------- ONE shared modal (set up exactly once) ---------- */
const modal = $('character-modal');
const modalTitle = $('modal-title');
const modalDetails = $('modal-details');
const modalCanvas = $('modal-canvas');
const modalCtx = modalCanvas.getContext('2d', { willReadFrequently: true });
let modalChar = '';

attachDrawing(modalCanvas, modalCtx, { lineWidth: 6 });
$('close-modal').addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });
$('modal-clear-btn').addEventListener('click', () => drawCenteredGuide(modalCtx, modalCanvas, modalChar));

export function openCharacterModal(char, title, html = '') {
    modalChar = char;
    modalTitle.textContent = title;
    modalDetails.innerHTML = html;
    modal.classList.remove('hidden');
    drawCenteredGuide(modalCtx, modalCanvas, char);
}

/* ---------- Kanji grid / modal content ---------- */
export function kanjiDetails(item) {
    let h = `<div style="color:var(--active-bg);font-weight:bold;font-size:22px;margin-bottom:10px">${item.english ?? ''}</div>`;
    h += `<div><strong>On:</strong> ${item.onyomi || '-'}<br><strong>Kun:</strong> ${item.kunyomi || '-'}</div>`;
    if (item.extraMeanings) h += `<div style="margin-top:8px;font-size:14px"><strong>Also means:</strong> ${item.extraMeanings}</div>`;
    if (item.example) h += `<div style="background:#121212;padding:12px;border-radius:8px;margin-top:12px;border-left:4px solid var(--active-bg)"><strong>Example:</strong> <span style="font-size:18px">${item.example.japanese}</span><br><i style="opacity:.8">${item.example.romaji}</i><br><span style="color:var(--active-bg)">${item.example.english}</span></div>`;
    return h;
}
export const kanjiCell = item =>
    `<span style="font-size:28px;font-weight:bold;display:block">${item.kanji}${item.okurigana || ''}</span><span style="font-size:12px;color:var(--active-bg);font-weight:bold">${(item.english || '').split('/')[0]}</span>`;
export const kanjiModal = item => ({ char: item.kanji, title: item.kanji + (item.okurigana || ''), html: kanjiDetails(item) });

/* ---------- Accuracy mask ---------- */
function buildMask(w, h, char) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const x = c.getContext('2d', { willReadFrequently: true });
    drawCenteredGuide(x, c, char);
    x.lineWidth = 22; x.lineJoin = 'round'; x.strokeStyle = '#000';
    x.strokeText(char, w / 2, h / 2);
    const d = x.getImageData(0, 0, w, h).data;
    const mask = new Uint8Array(w * h);
    let count = 0;
    for (let p = 0; p < mask.length; p++) if (d[p * 4 + 3] > 100) { mask[p] = 1; count++; }
    return { mask, count };
}

/* =====================================================================
   PRACTICE ENGINE
   Element ids follow one convention, for prefix P:
   P-display P-english P-readings P-typing-zone P-typing-hint P-input
   P-canvas-zone P-stroke-hint P-canvas P-accuracy P-clear-btn P-next-btn
   P-grid P-toggle-btn   |  radio names: P-mode, P-order
   ===================================================================== */
export function createPractice(cfg) {
    const p = cfg.prefix;
    const el = s => $(`${p}-${s}`);
    const display = el('display'), input = el('input'), canvas = el('canvas');
    if (!display || !input || !canvas) { console.error(`[NihonGO] Missing practice elements for "${p}"`); return; }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const typingZone = el('typing-zone'), canvasZone = el('canvas-zone');
    const typingHint = el('typing-hint'), strokeHint = el('stroke-hint'), accEl = el('accuracy');
    const nextBtn = el('next-btn'), clearBtn = el('clear-btn');
    const english = el('english'), readings = el('readings'), grid = el('grid'), toggleBtn = el('toggle-btn');

    let items = cfg.data.filter(d => d.kana !== '');
    if (cfg.shuffle) items = [...items].sort(() => Math.random() - 0.5);

    const minAcc = cfg.minAccuracy ?? 0;
    const W = canvas.width, H = canvas.height;
    const norm = s => String(s).trim().toLowerCase().replace(/\s+/g, '');
    const guideOf = it => (cfg.guide ? cfg.guide(it) : (it.kana ?? it.kanji));

    let index = 0, random = false, mistakes = 0, accuracy = 0, target = { mask: null, count: 0 };

    function paintAccuracy() {
        const good = accuracy >= 80;
        if (accEl) { accEl.textContent = `Live Accuracy: ${accuracy}%`; accEl.style.color = good ? '#4caf50' : ''; }
        if (nextBtn) nextBtn.style.backgroundColor = good ? '#4caf50' : '';
    }
    function resetCanvas() {
        const g = guideOf(items[index]);
        drawCenteredGuide(ctx, canvas, g);
        target = buildMask(W, H, g);
        accuracy = 0;
        paintAccuracy();
    }
    function calcAccuracy() {
        if (!target.count) return;
        const d = ctx.getImageData(0, 0, W, H).data;
        let hit = 0, miss = 0;
        for (let i = 0; i < d.length; i += 4) {
            if (d[i + 3] > 50 && d[i + 1] < 150) (target.mask[i / 4] ? hit++ : miss++);
        }
        const completeness = Math.min(hit / (target.count * 0.35), 1);
        const precision = hit + miss > 0 ? hit / (hit + miss) : 0;
        accuracy = Math.floor((completeness * 0.6 + precision * 0.4) * 100);
        paintAccuracy();
    }
    function load() {
        const it = items[index];
        mistakes = 0;
        if (typingHint) typingHint.textContent = '';
        display.classList.remove('highlight-correct');
        if (cfg.show) cfg.show(it, display); else display.textContent = it.kana ?? it.kanji;
        if (english) english.textContent = it.english ?? '';
        if (readings) readings.textContent = `On: ${it.onyomi || '-'} | Kun: ${it.kunyomi || '-'}`;
        if (strokeHint) strokeHint.textContent = cfg.strokeHint ? cfg.strokeHint(it) : `(${it.romaji})`;
        input.value = ''; input.disabled = false;
        resetCanvas();
        if (input.offsetParent) input.focus({ preventScroll: true });
    }
    function next() {
        index = random ? Math.floor(Math.random() * items.length) : (index + 1) % items.length;
        load();
    }

    document.getElementsByName(`${p}-mode`).forEach(r => r.addEventListener('change', e => {
        const typing = e.target.value === 'typing';
        typingZone.classList.toggle('hidden', !typing);
        canvasZone.classList.toggle('hidden', typing);
        if (typing) input.focus({ preventScroll: true });
    }));
    document.getElementsByName(`${p}-order`).forEach(r => r.addEventListener('change', e => {
        random = e.target.value === 'random';
    }));

    input.addEventListener('keydown', e => {
        if (e.key !== 'Enter' || input.disabled) return;
        const it = items[index];
        if (norm(input.value) === norm(it.romaji)) {
            display.classList.add('highlight-correct');
            input.disabled = true;
            setTimeout(next, 800);
        } else {
            mistakes++;
            input.style.backgroundColor = '#ffcccc';
            setTimeout(() => (input.style.backgroundColor = ''), 300);
            if (mistakes >= 3 && typingHint) typingHint.textContent = `(${it.romaji})`;
        }
    });

    attachDrawing(canvas, ctx, { lineWidth: cfg.lineWidth ?? 10, color: cfg.penColor ?? '#e91e63', onDraw: calcAccuracy });
    clearBtn?.addEventListener('click', resetCanvas);
    nextBtn?.addEventListener('click', () => {
        if (accuracy >= minAcc) next();
        else if (accEl) { accEl.style.color = '#e91e63'; setTimeout(paintAccuracy, 500); }
    });

    if (grid && cfg.gridCell) {
        (cfg.gridData || items).forEach(it => {
            const cell = document.createElement('div');
            cell.className = 'chart-cell';
            if (it.kana === '') { cell.classList.add('empty'); grid.appendChild(cell); return; }
            cell.innerHTML = cfg.gridCell(it);
            cell.addEventListener('click', () => {
                const n = items.indexOf(it);
                if (n < 0) return;
                index = n; load();
                if (cfg.modal) { const m = cfg.modal(it); openCharacterModal(m.char, m.title, m.html); }
            });
            grid.appendChild(cell);
        });
    }
    if (toggleBtn && grid) {
        const [showTxt, hideTxt] = cfg.toggleLabels || ['Show List', 'Hide List'];
        toggleBtn.addEventListener('click', () => {
            grid.classList.toggle('hidden');
            toggleBtn.textContent = grid.classList.contains('hidden') ? showTxt : hideTxt;
        });
    }
    load();
}

/* =====================================================================
   CHAT ENGINE   ids for prefix P: P-history P-instruction P-hint P-input P-send-btn
   ===================================================================== */
export function createChat(cfg) {
    const p = cfg.prefix;
    const history = $(`${p}-history`), instruction = $(`${p}-instruction`), hint = $(`${p}-hint`);
    const input = $(`${p}-input`), sendBtn = $(`${p}-send-btn`);
    if (!history || !instruction || !hint || !input || !sendBtn) { console.error(`[NihonGO] Missing chat elements for "${p}"`); return; }

    const clean = s => s.toLowerCase().replace(/[.,!?、。！？]/g, '').replace(/\s+/g, ' ').trim();
    const squash = s => s.replace(/\s+/g, '');
    let step = 0, mistakes = 0;

    function botTurn() {
        if (step >= cfg.data.length) {
            instruction.textContent = '🎉 Conversation Complete! Great job!';
            hint.textContent = '';
            input.disabled = true; sendBtn.disabled = true;
            return;
        }
        const d = cfg.data[step];
        const div = document.createElement('div');
        div.className = 'message msg-bot';
        div.innerHTML = `<span class="bot-kana">${d.botKana}</span><span class="bot-romaji">${d.botRomaji}</span><span class="bot-english">${d.botEnglish}</span>`;
        history.appendChild(div);
        history.scrollTop = history.scrollHeight;
        instruction.textContent = d.instruction;
        hint.textContent = '';
        input.value = ''; input.disabled = false; sendBtn.disabled = false;
        mistakes = 0;
        if (input.offsetParent) input.focus({ preventScroll: true });
    }

    function submit() {
        if (input.disabled) return;
        const raw = input.value.trim();
        const text = clean(raw);
        if (!text) return;
        const d = cfg.data[step];
        const ok = d.validationType === 'exact'
            ? d.acceptedReplies.some(a => squash(clean(a)) === squash(text))
            : d.requiredKeywords.every(k => text.includes(k));
        if (ok) {
            const div = document.createElement('div');
            div.className = 'message msg-user';
            div.textContent = raw;
            history.appendChild(div);
            history.scrollTop = history.scrollHeight;
            input.disabled = true; sendBtn.disabled = true;
            step++;
            setTimeout(botTurn, 800);
        } else {
            mistakes++;
            input.style.backgroundColor = '#ffcccc';
            setTimeout(() => (input.style.backgroundColor = ''), 300);
            if (mistakes >= 3) hint.textContent = `Hint: ${d.hint}`;
        }
    }

    input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
    sendBtn.addEventListener('click', submit);
    botTurn();
}

/* =====================================================================
   NAVIGATION
   ===================================================================== */
const navButtons = document.querySelectorAll('header nav button');
const appSections = document.querySelectorAll('.app-section');
navButtons.forEach(btn => btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    appSections.forEach(sec => sec.classList.toggle('hidden', sec.id !== btn.dataset.target));
}));

// Every .sub-nav controls the .sub-section siblings inside its own parent
document.querySelectorAll('.sub-nav').forEach(nav => {
    const buttons = nav.querySelectorAll('button');
    const sections = nav.parentElement.querySelectorAll(':scope > .sub-section');
    buttons.forEach(btn => btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sections.forEach(sec => sec.classList.toggle('hidden', sec.id !== btn.dataset.target));
    }));
});

/* =====================================================================
   SECTION LOADER – each script loads independently, so one broken
   file can never freeze the whole page (check the console for errors).
   ===================================================================== */
[
    'hiragana-section1', 'hiragana-section2', 'hiragana-section3',
    'katakana-section1', 'katakana-section2', 'katakana-section3',
    'kanji-section1', 'kanji-section2', 'kanji-section3', 'kanji-section4', 'kanji-section5'
].forEach(name =>
    import(`./scripts/${name}.js`).catch(err => console.error(`[NihonGO] Failed to load scripts/${name}.js`, err))
);