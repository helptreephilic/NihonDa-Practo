import { createPractice } from '../app.js';
import { kanjiNumbers1to100 } from '../data/kanji-numbers-data.js';

createPractice({
    prefix: 'kanji-num',
    data: kanjiNumbers1to100,
    guide: it => it.kanji,
    show: (it, el) => {
        el.innerHTML = `<div>${it.kanji}</div><div style="font-size:32px;color:var(--active-bg);margin-top:10px">${it.number}</div>`;
    },
    strokeHint: it => `${it.number} (${it.romaji})`,
    lineWidth: 6,
    toggleLabels: ['Show Counting Chart', 'Hide Counting Chart'],
    gridCell: it => `<span style="font-size:18px;font-weight:bold;display:block">${it.kanji}</span><span style="font-size:14px;font-weight:bold;color:var(--active-bg)">${it.number}</span>`,
    modal: it => ({ char: it.kanji, title: `${it.kanji} - ${it.number} (${it.romaji})`, html: '' })
});