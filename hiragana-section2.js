import { createPractice } from '../app.js';
import { hiraganaVocab } from '../data/vocab-data.js';

createPractice({
    prefix: 'hvocab',
    data: hiraganaVocab,
    shuffle: true,
    minAccuracy: 80,
    lineWidth: 8,
    toggleLabels: ['Show Word List', 'Hide Word List'],
    gridCell: it => `<span class="vocab-kana">${it.kana}</span><div class="vocab-details"><span class="vocab-english">${it.english}</span><span class="vocab-romaji">${it.romaji}</span></div>`
});