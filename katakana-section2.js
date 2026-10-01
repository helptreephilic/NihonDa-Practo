import { createPractice } from '../app.js';
import { katakanaVocab } from '../data/katakana-vocab-data.js';

createPractice({
    prefix: 'kvocab',
    data: katakanaVocab,
    shuffle: true,
    minAccuracy: 80,
    lineWidth: 8,
    penColor: '#0c8348',
    toggleLabels: ['Show Word List', 'Hide Word List'],
    gridCell: it => `<span class="vocab-kana">${it.kana}</span><div class="vocab-details"><span class="vocab-english">${it.english}</span><span class="vocab-romaji">${it.romaji}</span></div>`
});