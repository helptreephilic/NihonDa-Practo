import { createPractice, kanjiCell, kanjiModal } from '../app.js';
import { kanjiConceptsData } from '../data/kanji-concept-data.js';

createPractice({
    prefix: 'kanji-concepts',
    data: kanjiConceptsData,
    guide: it => it.kanji,
    gridCell: kanjiCell,
    modal: kanjiModal,
    toggleLabels: ['Show Kanji Grid', 'Hide Kanji Grid']
});