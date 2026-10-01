import { createPractice, kanjiCell, kanjiModal } from '../app.js';
import { kanjiVerbsData } from '../data/kanji-verbs-data.js';

createPractice({
    prefix: 'kanji-verbs',
    data: kanjiVerbsData,
    guide: it => it.kanji,
    show: it => {
        document.getElementById('kv-stem').textContent = it.kanji;
        document.getElementById('kv-okurigana').textContent = it.okurigana;
    },
    gridCell: kanjiCell,
    modal: kanjiModal,
    toggleLabels: ['Show Verb Grid', 'Hide Verb Grid']
});