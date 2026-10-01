const baseNumbers = {
    1: { kanji: '一', romaji: 'ichi' },
    2: { kanji: '二', romaji: 'ni' },
    3: { kanji: '三', romaji: 'san' },
    4: { kanji: '四', romaji: 'yon' },
    5: { kanji: '五', romaji: 'go' },
    6: { kanji: '六', romaji: 'roku' },
    7: { kanji: '七', romaji: 'nana' },
    8: { kanji: '八', romaji: 'hachi' },
    9: { kanji: '九', romaji: 'kyuu' },
    10: { kanji: '十', romaji: 'juu' }
};

export function generateNumberData(num) {
    if (num <= 10) return { ...baseNumbers[num], number: num };
    if (num === 100) return { kanji: '百', romaji: 'hyaku', number: 100 };

    let tens = Math.floor(num / 10);
    let ones = num % 10;
    
    let kanji = '';
    let romaji = '';

    if (tens > 1) {
        kanji += baseNumbers[tens].kanji + baseNumbers[10].kanji;
        romaji += baseNumbers[tens].romaji + baseNumbers[10].romaji;
    } else if (tens === 1) {
        kanji += baseNumbers[10].kanji;
        romaji += baseNumbers[10].romaji;
    }

    if (ones > 0) {
        kanji += baseNumbers[ones].kanji;
        romaji += romaji ? ' ' + baseNumbers[ones].romaji : baseNumbers[ones].romaji;
    }

    // Include the numeric value in the output object
    return { number: num, kanji: kanji, romaji: romaji.replace(/\s+/g, '') };
}

// Generate the 1 to 100 array dynamically
export const kanjiNumbers1to100 = Array.from({ length: 100 }, (_, i) => generateNumberData(i + 1));