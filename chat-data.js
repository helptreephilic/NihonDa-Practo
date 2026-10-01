export const introConversation = [
    // --- PART 1: INTRODUCTIONS ---
    {
        id: 1,
        botKana: 'こんにちは！はじめまして。',
        botRomaji: 'Konnichiwa! Hajimemashite.',
        botEnglish: 'Hello! Nice to meet you.',
        instruction: 'Reply with: Nice to meet you.',
        validationType: 'exact',
        acceptedReplies: ['hajimemashite', 'konnichiwa hajimemashite'],
        hint: 'hajimemashite'
    },
    {
        id: 2,
        botKana: 'おなまえは なん ですか？',
        botRomaji: 'Onamae wa nan desu ka?',
        botEnglish: 'What is your name?',
        instruction: 'Reply using your real name (e.g., I am John).',
        validationType: 'dynamic',
        requiredKeywords: ['desu'], 
        hint: 'watashi wa [your name] desu'
    },
    {
        id: 3,
        botKana: 'どこから きましたか？',
        botRomaji: 'Doko kara kimashita ka?',
        botEnglish: 'Where are you from?',
        instruction: 'Reply using your country/city (e.g., I came from Canada).',
        validationType: 'dynamic',
        requiredKeywords: ['kara', 'kimashita'], 
        hint: '[your country] kara kimashita'
    },
    {
        id: 4,
        botKana: 'なんさい ですか？',
        botRomaji: 'Nansai desu ka?',
        botEnglish: 'How old are you?',
        instruction: 'Reply with your age in numbers + sai (e.g., I am 20 years old / 20 sai desu).',
        validationType: 'dynamic',
        requiredKeywords: ['sai', 'desu'],
        hint: '[age] sai desu'
    },
    {
        id: 5,
        botKana: 'おしごとは なん ですか？',
        botRomaji: 'Oshigoto wa nan desu ka?',
        botEnglish: 'What is your job / What do you do?',
        instruction: 'Reply using your job or status (e.g., I am a student / gakusei desu).',
        validationType: 'dynamic',
        requiredKeywords: ['desu'],
        hint: '[your job] desu'
    },
    {
        id: 6,
        botKana: 'かぞくは なんちん ですか？',
        botRomaji: 'Kazoku wa nannin desu ka?',
        botEnglish: 'How many people are in your family?',
        instruction: 'Reply with a number + nin (e.g., 4 people / 4 nin desu).',
        validationType: 'dynamic',
        requiredKeywords: ['nin', 'desu'],
        hint: '[number] nin desu'
    },
    {
        id: 7,
        botKana: 'ぺっとが いまか？',
        botRomaji: 'Petto ga imasu ka?',
        botEnglish: 'Do you have a pet?',
        instruction: 'Reply with: Yes, I have. (hai, imasu) OR No, I do not. (iie, imasen).',
        validationType: 'exact',
        acceptedReplies: ['hai imasu', 'hai, imasu', 'iie imasen', 'iie, imasen'],
        hint: 'hai, imasu / iie, imasen'
    },

    // --- PART 2: DAILY ROUTINE ---
    {
        id: 8,
        botKana: 'まいにち なんじに おきますか？',
        botRomaji: 'Mainichi nanji ni okimasu ka?',
        botEnglish: 'What time do you wake up every day?',
        instruction: 'Reply with a number + time (e.g., I wake up at 7 / 7 ji ni okimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['ji', 'ni', 'okimasu'],
        hint: '[number] ji ni okimasu'
    },
    {
        id: 9,
        botKana: 'きょう、あさごはんを たべましたか？',
        botRomaji: 'Kyou, asagohan o tabemashita ka?',
        botEnglish: 'Did you eat breakfast today?',
        instruction: 'Reply with: Yes, I ate. (hai, tabemashita)',
        validationType: 'exact',
        acceptedReplies: ['hai tabemashita', 'hai, tabemashita', 'tabemashita'],
        hint: 'hai, tabemashita'
    },
    {
        id: 10,
        botKana: 'あさ、なにを のみますか？',
        botRomaji: 'Asa, nani o nomimasu ka?',
        botEnglish: 'What do you drink in the morning?',
        instruction: 'Reply with a drink (e.g., I drink coffee / kohii o nomimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['o', 'nomimasu'],
        hint: '[drink] o nomimasu'
    },
    {
        id: 11,
        botKana: 'どうやって しごとに いきますか？',
        botRomaji: 'Douyatte shigoto ni ikimasu ka?',
        botEnglish: 'How do you go to work (or school)?',
        instruction: 'Reply using transport (e.g., by car / kuruma de ikimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['de', 'ikimasu'],
        hint: '[vehicle] de ikimasu'
    },
    {
        id: 12,
        botKana: 'まいにち いそがしいですか？',
        botRomaji: 'Mainichi isogashii desu ka?',
        botEnglish: 'Are you busy every day?',
        instruction: 'Reply with: Yes, I am busy. (hai, isogashii desu)',
        validationType: 'exact',
        acceptedReplies: ['hai isogashii desu', 'hai, isogashii desu', 'isogashii desu'],
        hint: 'hai, isogashii desu'
    },
    {
        id: 13,
        botKana: 'なんじに ねますか？',
        botRomaji: 'Nanji ni nemasu ka?',
        botEnglish: 'What time do you go to sleep?',
        instruction: 'Reply with a number + time (e.g., I sleep at 11 / 11 ji ni nemasu).',
        validationType: 'dynamic',
        requiredKeywords: ['ji', 'ni', 'nemasu'],
        hint: '[number] ji ni nemasu'
    },

    // --- PART 3: FOOD & DRINK ---
    {
        id: 14,
        botKana: 'すきな にほんの たべものは なん ですか？',
        botRomaji: 'Suki na nihon no tabemono wa nan desu ka?',
        botEnglish: 'What is your favorite Japanese food?',
        instruction: 'Reply using a food (e.g., I like sushi / sushi ga suki desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ga', 'suki', 'desu'],
        hint: '[food] ga suki desu'
    },
    {
        id: 15,
        botKana: 'にく と さかな、どちらが すきですか？',
        botRomaji: 'Niku to sakana, dochira ga suki desu ka?',
        botEnglish: 'Meat or fish, which do you like?',
        instruction: 'Reply with one (e.g., I like meat / niku ga suki desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ga', 'suki', 'desu'],
        hint: 'niku ga suki desu / sakana ga suki desu'
    },
    {
        id: 16,
        botKana: 'きのうの よる、なにを たべましたか？',
        botRomaji: 'Kinou no yoru, nani o tabemashita ka?',
        botEnglish: 'What did you eat last night?',
        instruction: 'Reply with food (e.g., I ate curry / karee o tabemashita).',
        validationType: 'dynamic',
        requiredKeywords: ['o', 'tabemashita'],
        hint: '[food] o tabemashita'
    },
    {
        id: 17,
        botKana: 'りょうりを しれますか？',
        botRomaji: 'Ryouri o shimasu ka?',
        botEnglish: 'Do you cook?',
        instruction: 'Reply with: Yes, I cook. (hai, ryouri o shimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai ryouri o shimasu', 'hai, ryouri o shimasu', 'hai shimasu'],
        hint: 'hai, ryouri o shimasu'
    },
    {
        id: 18,
        botKana: 'どこで ひるごはんを たべますか？',
        botRomaji: 'Doko de hirugohan o tabemasu ka?',
        botEnglish: 'Where do you eat lunch?',
        instruction: 'Reply with a place (e.g., At a restaurant / resutoran de tabemasu).',
        validationType: 'dynamic',
        requiredKeywords: ['de', 'tabemasu'],
        hint: '[place] de tabemasu'
    },
    {
        id: 19,
        botKana: 'おさけを のみますか？',
        botRomaji: 'Osake o nomimasu ka?',
        botEnglish: 'Do you drink alcohol?',
        instruction: 'Reply with: Yes, I drink. (hai, nomimasu) OR No, I do not drink (iie, nomimasen).',
        validationType: 'exact',
        acceptedReplies: ['hai nomimasu', 'hai, nomimasu', 'iie nomimasen', 'iie, nomimasen'],
        hint: 'hai, nomimasu / iie, nomimasen'
    },

    // --- PART 4: HOBBIES & INTERESTS ---
    {
        id: 20,
        botKana: 'しゅみは なん ですか？',
        botRomaji: 'Shumi wa nan desu ka?',
        botEnglish: 'What are your hobbies?',
        instruction: 'Reply using your hobby (e.g., My hobby is reading / shumi wa dokusho desu).',
        validationType: 'dynamic',
        requiredKeywords: ['shumi', 'wa', 'desu'],
        hint: 'shumi wa [your hobby] desu'
    },
    {
        id: 21,
        botKana: 'どんな えいがが すきですか？',
        botRomaji: 'Donna eiga ga suki desu ka?',
        botEnglish: 'What kind of movies do you like?',
        instruction: 'Reply with a genre (e.g., I like action / akushon ga suki desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ga', 'suki', 'desu'],
        hint: '[genre] ga suki desu'
    },
    {
        id: 22,
        botKana: 'あにめを みますか？',
        botRomaji: 'Anime o mimasu ka?',
        botEnglish: 'Do you watch anime?',
        instruction: 'Reply with: Yes, I watch. (hai, mimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai mimasu', 'hai, mimasu', 'mimasu'],
        hint: 'hai, mimasu'
    },
    {
        id: 23,
        botKana: 'おんがくを ききますか？',
        botRomaji: 'Ongaku o kikimasu ka?',
        botEnglish: 'Do you listen to music?',
        instruction: 'Reply with: Yes, I listen. (hai, kikimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai kikimasu', 'hai, kikimasu', 'kikimasu'],
        hint: 'hai, kikimasu'
    },
    {
        id: 24,
        botKana: 'すぽーつを しますか？',
        botRomaji: 'Supootsu o shimasu ka?',
        botEnglish: 'Do you play sports?',
        instruction: 'Reply with: Yes, I play tennis (hai, tenisu o shimasu) OR No (iie, shimasen).',
        validationType: 'dynamic',
        requiredKeywords: ['shimasu', 'shimasen'],
        hint: 'hai, [sport] o shimasu / iie, shimasen'
    },
    {
        id: 25,
        botKana: 'しゅうまつに なにを しますか？',
        botRomaji: 'Shuumatsu ni nani o shimasu ka?',
        botEnglish: 'What do you do on weekends?',
        instruction: 'Reply with an action (e.g., I shop / kaimono o shimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['o', 'shimasu'],
        hint: '[action noun] o shimasu'
    },

    // --- PART 5: SHOPPING & PREFERENCES ---
    {
        id: 26,
        botKana: 'どこで かいものを しますか？',
        botRomaji: 'Doko de kaimono o shimasu ka?',
        botEnglish: 'Where do you go shopping?',
        instruction: 'Reply with a place (e.g., At the department store / depaato de kaimono o shimasu).',
        validationType: 'dynamic',
        requiredKeywords: ['de', 'shimasu'],
        hint: '[place] de kaimono o shimasu'
    },
    {
        id: 27,
        botKana: 'いま、なにが ほしいですか？',
        botRomaji: 'Ima, nani ga hoshii desu ka?',
        botEnglish: 'What do you want right now?',
        instruction: 'Reply with an item (e.g., I want a car / kuruma ga hoshii desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ga', 'hoshii', 'desu'],
        hint: '[item] ga hoshii desu'
    },
    {
        id: 28,
        botKana: 'あなたの まちは おおきいですか？',
        botRomaji: 'Anata no machi wa ookii desu ka?',
        botEnglish: 'Is your town big?',
        instruction: 'Reply with: Yes, it is big. (hai, ookii desu)',
        validationType: 'exact',
        acceptedReplies: ['hai ookii desu', 'hai, ookii desu', 'ookii desu'],
        hint: 'hai, ookii desu'
    },
    {
        id: 29,
        botKana: 'きょうの てんきは どうですか？',
        botRomaji: 'Kyou no tenki wa dou desu ka?',
        botEnglish: 'How is the weather today?',
        instruction: 'Reply with an adjective (e.g., It is hot / atsui desu).',
        validationType: 'dynamic',
        requiredKeywords: ['desu'],
        hint: 'atsui desu / samui desu / ii desu'
    },
    {
        id: 30,
        botKana: 'どの きせつが すきですか？',
        botRomaji: 'Dono kisetsu ga suki desu ka?',
        botEnglish: 'Which season do you like?',
        instruction: 'Reply with a season (e.g., I like summer / natsu ga suki desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ga', 'suki', 'desu'],
        hint: '[haru/natsu/aki/fuyu] ga suki desu'
    },
    {
        id: 31,
        botKana: 'にほんごの ほんを よみますか？',
        botRomaji: 'Nihongo no hon o yomimasu ka?',
        botEnglish: 'Do you read Japanese books?',
        instruction: 'Reply with: Yes, I read. (hai, yomimasu)',
        validationType: 'exact',
        acceptedReplies: ['hai yomimasu', 'hai, yomimasu', 'yomimasu'],
        hint: 'hai, yomimasu'
    },

    // --- PART 6: TRAVEL & GOALS ---
    {
        id: 32,
        botKana: 'にほんに いった ことが ありますか？',
        botRomaji: 'Nihon ni itta koto ga arimasu ka?',
        botEnglish: 'Have you ever been to Japan?',
        instruction: 'Reply with: Yes, I have. (hai, arimasu) OR No, I have not. (iie, arimasen).',
        validationType: 'exact',
        acceptedReplies: ['hai arimasu', 'hai, arimasu', 'iie arimasen', 'iie, arimasen'],
        hint: 'hai, arimasu / iie, arimasen'
    },
    {
        id: 33,
        botKana: 'にほんで どこに いきたいですか？',
        botRomaji: 'Nihon de doko ni ikitai desu ka?',
        botEnglish: 'Where do you want to go in Japan?',
        instruction: 'Reply with a city (e.g., I want to go to Tokyo / toukyou ni ikitai desu).',
        validationType: 'dynamic',
        requiredKeywords: ['ni', 'ikitai', 'desu'],
        hint: '[city] ni ikitai desu'
    },
    {
        id: 34,
        botKana: 'どうして にほんごを べんきょうしていますか？',
        botRomaji: 'Doushite nihongo o benkyoushiteimasu ka?',
        botEnglish: 'Why are you studying Japanese?',
        instruction: 'Reply with: Because I want to go to Japan. (nihon ni ikitai kara desu).',
        validationType: 'exact',
        acceptedReplies: ['nihon ni ikitai kara desu', 'nihon ni ikitai desu', 'nihonniikitaikaradesu'],
        hint: 'nihon ni ikitai kara desu'
    },
    {
        id: 35,
        botKana: 'にほんごは むずかしいですか？',
        botRomaji: 'Nihongo wa muzukashii desu ka?',
        botEnglish: 'Is Japanese difficult?',
        instruction: 'Reply with: Yes, it is difficult. (hai, muzukashii desu).',
        validationType: 'exact',
        acceptedReplies: ['hai muzukashii desu', 'hai, muzukashii desu', 'muzukashii desu'],
        hint: 'hai, muzukashii desu'
    },
    {
        id: 36,
        botKana: 'まいにち にほんごを べんきょうしますか？',
        botRomaji: 'Mainichi nihongo o benkyou shimasu ka?',
        botEnglish: 'Do you study Japanese every day?',
        instruction: 'Reply with: Yes, I study every day. (hai, mainichi benkyou shimasu).',
        validationType: 'exact',
        acceptedReplies: ['hai mainichi benkyou shimasu', 'hai, mainichi benkyou shimasu', 'hai benkyou shimasu'],
        hint: 'hai, mainichi benkyou shimasu'
    },
    {
        id: 37,
        botKana: 'だれと にほんごを べんきょうしますか？',
        botRomaji: 'Dare to nihongo o benkyou shimasu ka?',
        botEnglish: 'Who do you study Japanese with?',
        instruction: 'Reply with: I study alone. (hitori de benkyou shimasu).',
        validationType: 'exact',
        acceptedReplies: ['hitori de benkyou shimasu', 'hitoride benkyoushimasu'],
        hint: 'hitori de benkyou shimasu'
    },
    {
        id: 38,
        botKana: 'らいねん、なにを したいですか？',
        botRomaji: 'Rainen, nani o shitai desu ka?',
        botEnglish: 'What do you want to do next year?',
        instruction: 'Reply with: I want to go to Japan. (nihon ni ikitai desu).',
        validationType: 'exact',
        acceptedReplies: ['nihon ni ikitai desu', 'nihonniikitaidesu'],
        hint: 'nihon ni ikitai desu'
    },
    {
        id: 39,
        botKana: 'がんばりましょう！',
        botRomaji: 'Ganbarimashou!',
        botEnglish: 'Let us do our best!',
        instruction: 'Reply with: Yes, let us do our best! (hai, ganbarimashou).',
        validationType: 'exact',
        acceptedReplies: ['hai ganbarimashou', 'hai, ganbarimashou', 'ganbarimashou',],
        hint: 'hai, ganbarimashou'
    },
    {
        id: 40,
        botKana: 'きょうは ありがとう ございました。よろしく おねがいします。',
        botRomaji: 'Kyou wa arigatou gozaimashita. Yoroshiku onegaishimasu.',
        botEnglish: 'Thank you for today. Please treat me well going forward.',
        instruction: 'Reply with: Please treat me well. (yoroshiku onegaishimasu).',
        validationType: 'exact',
        acceptedReplies: ['yoroshiku onegaishimasu', 'yoroshikuonegaishimasu', 'kochira koso yoroshiku onegaishimasu'],
        hint: 'yoroshiku onegaishimasu'
    }
];