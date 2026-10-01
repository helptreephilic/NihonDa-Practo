import { createPractice } from '../app.js';
import { hiraganaAlphabet } from '../data/hiragana-data.js';

createPractice({
    prefix: 'hira',
    data: hiraganaAlphabet,
    gridData: hiraganaAlphabet,
    minAccuracy: 80,
    lineWidth: 12,
    toggleLabels: ['Show Full Chart', 'Hide Full Chart'],
    gridCell: it => `<span class="chart-kana">${it.kana}</span><span class="chart-romaji">${it.romaji}</span>`,
    modal: it => ({ char: it.kana, title: `${it.kana} (${it.romaji})`, html: '' })
});