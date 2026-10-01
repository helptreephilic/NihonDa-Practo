export const katakanaConversation = [
    {
        id: 1,
        botKana: 'コンニチハ！カフェ ニ イキマショウ。',
        botRomaji: 'Konnichiwa! Kafe ni ikimashou.',
        botEnglish: 'Hello! Let us go to a cafe.',
        instruction: 'Reply with: Let us go. (ikimashou)',
        validationType: 'exact',
        acceptedReplies: ['ikimashou', 'hai ikimashou', 'hai, ikimashou'],
        hint: 'ikimashou'
    },
    {
        id: 2,
        botKana: 'ナニ オ ノミマスカ？ コーヒー？ ジュース？',
        botRomaji: 'Nani o nomimasu ka? Koohii? Juusu?',
        botEnglish: 'What will you drink? Coffee? Juice?',
        instruction: 'Reply with a drink (e.g., I drink coffee / koohii o nomimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['o', 'nomimasu'],
        hint: '[drink] o nomimasu'
    },
    {
        id: 3,
        botKana: 'ケーキ ト アイスクリーム、ドチラ ガ スキ デスカ？',
        botRomaji: 'Keeki to aisukuriimu, dochira ga suki desu ka?',
        botEnglish: 'Cake and ice cream, which do you like?',
        instruction: 'Reply with your choice (e.g., I like cake / keeki ga suki desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ga', 'suki', 'desu'],
        hint: '[food] ga suki desu'
    },
    {
        id: 4,
        botKana: 'メニュー ニ サンドイッチ ガ アリマス。タベマスカ？',
        botRomaji: 'Menyuu ni sandoicchi ga arimasu. Tabemasu ka?',
        botEnglish: 'There are sandwiches on the menu. Will you eat?',
        instruction: 'Reply with: Yes, I will eat. (hai, tabemasu)',
        validationType: 'exact',
        acceptedReplies: ['hai tabemasu', 'hai, tabemasu', 'tabemasu'],
        hint: 'hai, tabemasu'
    },
    {
        id: 5,
        botKana: 'クレジットカード デ ハライマスカ？',
        botRomaji: 'Kurejitto kaado de haraimasu ka?',
        botEnglish: 'Will you pay by credit card?',
        instruction: 'Reply with: Yes, I will pay by credit card. (hai, kurejitto kaado de haraimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['de', 'haraimasu'],
        hint: 'hai, kurejitto kaado de haraimasu'
    },
    {
        id: 6,
        botKana: 'ツギ ワ デパート ニ イキマショウ。',
        botRomaji: 'Tsugi wa depaato ni ikimashou.',
        botEnglish: 'Next, let us go to the department store.',
        instruction: 'Reply with: Let us go. (ikimashou)',
        validationType: 'exact',
        acceptedReplies: ['ikimashou', 'hai ikimashou', 'hai, ikimashou'],
        hint: 'ikimashou'
    },
    {
        id: 7,
        botKana: 'アタラシイ スマホ ガ ホシイ デスカ？',
        botRomaji: 'Atarashii sumaho ga hoshii desu ka?',
        botEnglish: 'Do you want a new smartphone?',
        instruction: 'Reply with: Yes, I want. (hai, hoshii desu)',
        validationType: 'exact',
        acceptedReplies: ['hai hoshii desu', 'hai, hoshii desu', 'hoshii desu'],
        hint: 'hai, hoshii desu'
    },
    {
        id: 8,
        botKana: 'パソコン モ ミマスカ？',
        botRomaji: 'Pasokon mo mimasu ka?',
        botEnglish: 'Will you look at computers too?',
        instruction: 'Reply with: Yes, I will look. (hai, mimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai mimasu', 'hai, mimasu', 'mimasu'],
        hint: 'hai, mimasu'
    },
    {
        id: 9,
        botKana: 'どんな スポーツ ガ スキ デスカ？',
        botRomaji: 'Donna supootsu ga suki desu ka?',
        botEnglish: 'What kind of sports do you like?',
        instruction: 'Reply with a sport (e.g., I like tennis / tenisu ga suki desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ga', 'suki', 'desu'],
        hint: '[sport] ga suki desu'
    },
    {
        id: 10,
        botKana: 'よく アニメ オ ミマスカ？',
        botRomaji: 'Yoku anime o mimasu ka?',
        botEnglish: 'Do you watch anime often?',
        instruction: 'Reply with: Yes, I watch often. (hai, yoku mimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai yoku mimasu', 'hai, yoku mimasu', 'yoku mimasu'],
        hint: 'hai, yoku mimasu'
    },
    {
        id: 11,
        botKana: 'ビデオ ゲーム オ シマスカ？',
        botRomaji: 'Bideo geemu o shimasu ka?',
        botEnglish: 'Do you play video games?',
        instruction: 'Reply with: Yes, I play. (hai, shimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai shimasu', 'hai, shimasu', 'shimasu'],
        hint: 'hai, shimasu'
    },
    {
        id: 12,
        botKana: 'ドコ カラ キマシタ カ？ アメリカ？ ヨーロッパ？',
        botRomaji: 'Doko kara kimashita ka? Amerika? Yooroppa?',
        botEnglish: 'Where did you come from? America? Europe?',
        instruction: 'Reply using your country (e.g., I came from Canada / kanada kara kimashita).',
        validationType: 'dynamic',
        requiredKeywords: ['kara', 'kimashita'],
        hint: '[country] kara kimashita'
    },
    {
        id: 13,
        botKana: 'ホテル ニ トマリマスカ？',
        botRomaji: 'Hoteru ni tomarimasu ka?',
        botEnglish: 'Will you stay at a hotel?',
        instruction: 'Reply with: Yes, I will stay. (hai, tomarimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai tomarimasu', 'hai, tomarimasu', 'tomarimasu'],
        hint: 'hai, tomarimasu'
    },
    {
        id: 14,
        botKana: 'タクシー ト バス、ドチラ デ カエリマスカ？',
        botRomaji: 'Takushii to basu, dochira de kaerimasu ka?',
        botEnglish: 'Taxi or bus, which will you return by?',
        instruction: 'Reply with transport (e.g., I will return by bus / basu de kaerimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['de', 'kaerimasu'],
        hint: '[basu / takushii] de kaerimasu'
    },
    {
        id: 15,
        botKana: 'キョウ ワ 楽シカッタ デスネ！ バイビー！',
        botRomaji: 'Kyou wa tanoshikatta desu ne! Baibii!',
        botEnglish: 'Today was fun, right! Bye-bye!',
        instruction: 'Reply with: Bye-bye! (baibai)',
        validationType: 'exact',
        acceptedReplies: ['baibai', 'baibii', 'bye bye'],
        hint: 'baibai'
    }
];