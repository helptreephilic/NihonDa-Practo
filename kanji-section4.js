import { createPractice, kanjiCell, kanjiModal } from '../app.js';
import { kanjiPeopleData } from '../data/kanji-people-data.js';

createPractice({
    prefix: 'kanji-people',
    data: kanjiPeopleData,
    guide: it => it.kanji,
    gridCell: kanjiCell,
    modal: kanjiModal,
    toggleLabels: ['Show Kanji Grid', 'Hide Kanji Grid']
});