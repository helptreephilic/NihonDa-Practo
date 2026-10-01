import { createPractice, kanjiCell, kanjiModal } from '../app.js';
import { kanjiNatureData } from '../data/kanji-nature-data.js';

createPractice({
    prefix: 'kanji-nature',
    data: kanjiNatureData,
    guide: it => it.kanji,
    gridCell: kanjiCell,
    modal: kanjiModal,
    toggleLabels: ['Show Kanji Grid', 'Hide Kanji Grid']
});