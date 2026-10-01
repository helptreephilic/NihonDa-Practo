import { createPractice } from '../app.js';
import { katakanaAlphabet } from '../data/katakana-data.js';

createPractice({
    prefix: 'kata',
    data: katakanaAlphabet,
    gridData: katakanaAlphabet,
    minAccuracy: 80,
    lineWidth: 12,
    penColor: '#0c8348',
    toggleLabels: ['Show Full Chart', 'Hide Full Chart'],
    gridCell: it => `<span class="chart-kana">${it.kana}</span><span class="chart-romaji">${it.romaji}</span>`,
    modal: it => ({ char: it.kana, title: `${it.kana} (${it.romaji})`, html: '' })
});