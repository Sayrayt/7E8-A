const arr = ['OE', 'OI', 'MC', 'DP', 'KI', 'LD', 'OK', 'ON', 'ME', 'CH', 'MC', 'NO', 'NA', 'EB',
    'AA', 'KI', 'HH', 'ME', 'CH', 'NA', 'PC', 'OI', 'EB', 'AA', 'HH', 'KI', 'AA', 'MC',
    'HF', 'KI', 'ME', 'DH', 'OO', 'AA', 'CH', 'NA', 'FA', 'DH', 'NA', 'CK', 'OO', 'AA',
    'OI', 'AA', 'CH', 'ME', 'FA', 'OO', 'DP', 'FN', 'FG', 'NA', 'FG', 'NA', 'DH', 'AA',
    'EB', 'HF', 'DP', 'EB', 'ME', 'FG', 'MC', 'EB', 'AA', 'KI', 'ON', 'AJ', 'KI', 'IE',
    'AA', 'OI', 'FA', 'AA', 'NO', 'CH', 'OO', 'HH', 'AJ', 'ME', 'IE', 'EO', 'OI', 'CK',
    'AA', 'MC', 'FG', 'CH', 'NA', 'FG', 'ME', 'DD', 'OI', 'KC', 'ME', 'MC', 'NO', 'OI',
    'CK', 'AA', 'AJ', 'NA', 'MC', 'FG', 'OO', 'HH', 'NA', 'FG', 'ME', 'DP', 'FN', 'AJ',
    'FM', 'CK', 'AA', 'KI', 'HH', 'ME', 'CH', 'NA', 'PC', 'OI', 'IE', 'AA', 'AJ', 'ME',
    'AA', 'FG', 'KI', 'DP', 'FN', 'NO', 'KI', 'AA', 'OE', 'ME', 'DP', 'OI', 'NO', 'KI',
    'IE', 'AA', 'OK', 'FG', 'ME', 'KC', 'ME', 'MC', 'FG', 'HF', 'ME', 'AJ', 'AJ', 'KI',
    'IE', 'EJ', 'AA', 'AJ', 'KI', 'AA', 'OI', 'AA', 'HF', 'MC', 'ME', 'IE', 'AA', 'OE',
    'FG', 'KI', 'CH', 'KI', 'IE', 'AA', 'DH', 'OI', 'CH', 'KI', 'HF', 'KI', 'IE', 'AA',
    'HF', 'KI', 'IE', 'AJ', 'FM', 'NG', 'AA', 'NF', 'NA', 'AA', 'ON', 'HF', 'NA', 'ON',
    'PC', 'NA', 'FG', 'FN', 'AA', 'FG', 'CH', 'OI', 'AA', 'ON', 'AJ', 'EB', 'AA', 'AJ',
    'NA', 'MC', 'FG', 'OO', 'HH', 'DP', 'ME', 'AJ', 'OI', 'EB', 'AA', 'HF', 'KI', 'IE',
    'MC', 'NO', 'NA', 'AA', 'CD', 'LD', 'DD', 'KI', 'AA', 'NH', 'ME', 'DP', 'KI', 'CH',
    'OO', 'MC', 'MC', 'NO', 'KI', 'DD', 'KI', 'AA', 'OI', 'AA', 'CD', 'LD', 'DD', 'KI',
    'AA', 'AH', 'NO', 'CH', 'NA', 'OI', 'AJ', 'MC', 'NO', 'KI', 'DD', 'KI', 'AA', 'CC',
    'CH', 'KI', 'AJ', 'FG', 'KI', 'HF', 'AA', 'HH', 'CH', 'OI', 'AA', 'NA', 'NO', 'FG',
    'OI', 'HF', 'AJ', 'KI', 'DH', 'AA', 'MC', 'KI', 'ON', 'ME', 'IE', 'MC', 'FG', 'HF',
    'OI', 'OI', 'AA', 'PO', 'LD', 'DD', 'KI', 'AA', 'NH', 'ME', 'DP', 'KI', 'CH', 'OO',
    'MC', 'MC', 'NO', 'KI', 'DD', 'KI', 'AA', 'OI', 'AA', 'BK', 'LD', 'DD', 'KI', 'AA',
    'AH', 'NO', 'CH', 'NA', 'OI', 'AJ', 'MC', 'NO', 'KI', 'DD', 'KI', 'AA', 'CC', 'CH',
    'KI', 'AJ', 'FG', 'KI', 'HF', 'AA', 'HH', 'CH', 'KI', 'ON', 'HF', 'OI', 'AJ', 'OO',
    'DP', 'OI', 'MC', 'FN', 'AA', 'AJ', 'NA', 'AA', 'DD', 'DP', 'OO', 'KK', 'OI', 'AJ',
    'OO', 'AA', 'ON', 'KI', 'AA', 'FB', 'JA', 'JA', 'AA', 'NO', 'DH', 'EJ', 'AA', 'CH',
    'NA', 'MC', 'EO', 'OI', 'CH', 'OI', 'DP', 'OI', 'AA', 'HH', 'CH', 'KI', 'CH', 'FM',
    'HF', 'AA', 'ON', 'KI', 'AA', 'CD', 'AA', 'FG', 'FM', 'MC', 'NG', 'AA', 'NO', 'DH',
    'AA', 'OI', 'AA', 'MC', 'AA', 'CK', 'KI', 'ON', 'OO', 'AA', 'CC', 'KI', 'CH', 'MC',
    'OI', 'CH', 'KI', 'HF', 'NA', 'DP', 'OI', 'AA', 'OK', 'ON', 'ME', 'CH', 'EJ', 'AA',
    'FA', 'NA', 'CK', 'HF', 'NA', 'FG', 'OI', 'HF', 'AA', 'AJ', 'NA', 'AA', 'AJ', 'ME',
    'DH', 'AA', 'CH', 'EB', 'ON', 'AA', 'HH', 'DP', 'NA', 'PC', 'ON', 'NA', 'CH', 'DH',
    'KI', 'HF', 'NG', 'AA', 'AL', 'CH', 'OI', 'KC', 'ME', 'DH', 'AA', 'CD', 'LD', 'IE',
    'AA', 'NH', 'ME', 'DP', 'KI', 'CH', 'OO', 'MC', 'MC', 'NO', 'OI', 'IE', 'AA', 'CC',
    'CH', 'KI', 'AJ', 'FG', 'EJ', 'AA', 'FA', 'NA', 'CK', 'HF', 'NA', 'FG', 'OI', 'HF',
    'AA', 'NO', 'JP', 'MC', 'FG', 'CH', 'OI', 'AJ', 'MC', 'NO', 'OI', 'IE', 'AA', 'HH',
    'DP', 'NA', 'PC', 'ON', 'NA', 'CH', 'DH', 'EJ', 'AA', 'KI', 'NO', 'NA', 'FA', 'NA',
    'DP', 'MC', 'EB', 'AA', 'HF', 'AA', 'FB', 'JA', 'AA', 'NO', 'DH', 'AA', 'KI', 'FG',
    'AA', 'NH', 'ME', 'CH', 'DP', 'OI', 'AJ', 'NA', 'NG', 'AA', 'NH', 'FM', 'DP', 'NA',
    'AA', 'KI', 'MC', 'HF', 'KI', 'KK', 'KI', 'BN', 'ON', 'ME', 'AJ', 'NA', 'AA', 'KI',
    'FG', 'AA', 'AJ', 'ME', 'DH', 'ME', 'PC', 'NO', 'KI', 'LD', 'CC', 'NA', 'EO', 'OI',
    'MC', 'FG', 'MC', 'NO', 'OI', 'CK', 'AA', 'FA', 'NA', 'CK', 'HF', 'NA', 'FG', 'KC',
    'OI', 'NO', 'KI', 'HF', 'AA', 'FA', 'AJ', 'NA', 'KC', 'OI', 'FG', 'ME', 'DP', 'FN',
    'AJ', 'NA', 'EB', 'AA', 'KC', 'NA', 'MC', 'FG', 'FN', 'AA', 'AL', 'KI', 'DP', 'FN',
    'EO', 'OI', 'AA', 'OI', 'AA', 'FC', 'HL', 'AA', 'MC', 'AJ', 'KI', 'HF', 'NA', 'AA',
    'FA', 'ON', 'CH', 'NA', 'MC', 'FN', 'FG', 'ME', 'EJ', 'AA', 'CD', 'HP', 'HP', 'FB',
    'AA', 'NO', 'KI', 'AJ', 'FG', 'CH', 'KI', 'DP', 'FN', 'AJ', 'NA', 'EB', 'AA', 'CC',
    'CH', 'NA', 'FA', 'NA', 'EJ', 'AA', 'HH', 'KI', 'FG', 'KI', 'DH', 'OO', 'AA', 'KC',
    'FG', 'KI', 'AA', 'AJ', 'ME', 'NO', 'KI', 'FG', 'KI', 'CH', 'FM', 'ME', 'AA', 'MC',
    'KC', 'OI', 'FG', 'NA', 'JP', 'FG', 'AA', 'MC', 'ME', 'KK', 'EB', 'AA', 'OO', 'DH',
    'AJ', 'ME', 'ME', 'AA', 'HF', 'MC', 'ME', 'CK', 'AA', 'KI', 'MC', 'FG', 'NA', 'DP',
    'FN', 'AJ', 'FM', 'CK', 'MH', 'AA', 'JL', 'ME', 'CK', 'KI', 'MC', 'DP', 'KI', 'HF',
    'NA', 'NO', 'OI', 'OI', 'EJ', 'AA', 'NA', 'AA', 'HF', 'KI', 'ME', 'AJ', 'AJ', 'FM',
    'ME', 'AA', 'ON', 'ME', 'IE', 'MC', 'FG', 'HF', 'OI', 'EB', 'AA', 'HH', 'ME', 'CH',
    'ME', 'AJ', 'ME', 'MC', 'ME', 'AJ', 'FM', 'AA', 'AJ', 'NA', 'AA', 'FG', 'ME', 'CH',
    'CH', 'OI', 'FG', 'KI', 'CH', 'OI', 'JP', 'AA', 'CC', 'NA', 'EO', 'OI', 'MC', 'FG',
    'MC', 'NO', 'KI', 'IE', 'AA', 'CI', 'ME', 'CH', 'DH', 'NA', 'AJ', 'OI', 'OI', 'NG',
    'AA', 'AL', 'KI', 'FG', 'ME', 'CH', 'EB', 'AA', 'KI', 'DD', 'CH', 'KI', 'DH', 'AJ',
    'KI', 'IE', 'AA', 'FG', 'ME', 'CH', 'CH', 'OI', 'FG', 'KI', 'CH', 'OI', 'OI', 'EJ',
    'AA', 'NO', 'CH', 'OO', 'HH', 'AJ', 'FM', 'CK', 'AA', 'HH', 'CH', 'KI', 'DH', 'FM',
    'EO', 'DP', 'ME', 'AJ', 'AJ', 'FM', 'CK', 'AA', 'CH', 'NA', 'IE', 'KI', 'AJ', 'KI',
    'HF', 'EJ', 'AA', 'KK', 'KI', 'DP', 'FN', 'EO', 'KI', 'DD', 'KI', 'AA', 'NO', 'KI',
    'DP', 'OI', 'KC', 'ME', 'MC', 'FG', 'HF', 'NA', 'AA', 'HF', 'KI', 'IE', 'MC', 'NO',
    'AA', 'OI', 'AA', 'HF', 'KI', 'KI', 'CH', 'OO', 'BN', 'ME', 'AJ', 'OI', 'EB', 'AA',
    'MC', 'OI', 'DP', 'FN', 'AJ', 'KI', 'AA', 'KI', 'MC', 'DP', 'NA', 'KK', 'OI', 'DP',
    'NA', 'AA', 'AJ', 'NA', 'PC', 'OI', 'MC', 'FG', 'MC', 'NO', 'OO', 'JP', 'AA', 'CI',
    'ME', 'CH', 'DH', 'NA', 'AJ', 'OI', 'JP', 'AA', 'OI', 'AA', 'HH', 'CH', 'OI', 'KK',
    'DP', 'OI', 'FA', 'OI', 'DP', 'NA', 'AA', 'ME', 'ME', 'AA', 'KI', 'NO', 'KI', 'AJ',
    'KC', 'NA', 'FG', 'ME', 'DP', 'FN', 'AJ', 'FM', 'IE', 'AA', 'CH', 'NA', 'FA', 'DD',
    'CH', 'KI', 'DH', 'NG', 'AA', 'AH', 'MC', 'HH', 'ME', 'EO', 'AJ', 'FM', 'ME', 'AA',
    'ON', 'ME', 'IE', 'MC', 'FG', 'HF', 'OI', 'EB', 'AA', 'MC', 'KI', 'HF', 'ME', 'FG',
    'MC', 'NO', 'OI', 'CK', 'AA', 'HF', 'KI', 'IE', 'MC', 'NO', 'AA', 'MC', 'KI', 'FA',
    'ON', 'NA', 'DP', 'OI', 'AA', 'OO', 'MC', 'DP', 'KI', 'HF', 'OI', 'EB', 'AA', 'ON',
    'DP', 'EB', 'AA', 'ON', 'NA', 'DP', 'FN', 'AJ', 'ME', 'IE', 'EO', 'OI', 'CK', 'AA',
    'OO', 'ON', 'NA', 'CH', 'KI', 'HF', 'AA', 'HH', 'KI', 'AA', 'HF', 'CH', 'NA', 'DD',
    'OO', 'AA', 'HF', 'AA', 'AL', 'KI', 'DH', 'ME', 'CH', 'NA', 'AJ', 'OI', 'OI', 'EJ',
    'AA', 'BM', 'OI', 'DP', 'ME', 'FA', 'OI', 'OI', 'EJ', 'AA', 'NA', 'AA', 'FA', 'NA',
    'FG', 'ME', 'DH', 'AA', 'OI', 'AA', 'AJ', 'NA', 'AA', 'KK', 'ME', 'CH', 'DP', 'OI',
    'AJ', 'MC', 'NO', 'KI', 'DH', 'AA', 'AJ', 'NA', 'HH', 'CH', 'NA', 'HF', 'DP', 'ME',
    'AJ', 'OI', 'OI', 'NG', 'AA', 'OE', 'AA', 'CK', 'KI', 'ON', 'ME', 'AA', 'OE', 'OI',
    'MC', 'DP', 'KI', 'LD', 'OK', 'ON', 'ME', 'CH', 'MC', 'NO', 'KI', 'IE', 'AA', 'KI',
    'HH', 'ME', 'CH', 'NA', 'PC', 'OI', 'OI', 'AA', 'MC', 'KI', 'HF', 'ME', 'FG', 'MC',
    'NO', 'OI', 'ME', 'AA', 'HF', 'KI', 'IE', 'MC', 'NO', 'NA', 'AA', 'HF', 'AA', 'FG',
    'ME', 'KC', 'ME', 'AJ', 'OI', 'ME', 'AA', 'NO', 'KI', 'CH', 'KI', 'FG', 'NO', 'KI',
    'DD', 'KI', 'AA', 'HF', 'CH', 'ME', 'DH', 'ME', 'AJ', 'OI', 'AA', 'CH', 'NA', 'FA',
    'DD', 'CH', 'KI', 'DH', 'OI', 'DP', 'OI', 'AA', 'DD', 'CH', 'OO', 'HH', 'HH', 'OO',
    'AA', 'NA', 'CH', 'DH', 'OI', 'IE', 'AA', 'BE', 'GP', 'BG', 'AA', 'ML', 'OF', 'LD',
    'EB', 'AA', 'OI', 'AA', 'CD', 'HG', 'LD', 'EB', 'AA', 'HH', 'KI', 'DP', 'ME', 'HF',
    'FM', 'ME', 'EJ', 'AA', 'CD', 'LD', 'EB', 'AA', 'OI', 'AA', 'BK', 'LD', 'EB', 'AA',
    'FG', 'NA', 'AJ', 'NO', 'KI', 'HF', 'FM', 'ME', 'AA', 'NA', 'CH', 'DH', 'OI', 'OI',
    'CE', 'NG', 'AA', 'HL', 'FA', 'AA', 'HG', 'JA', 'AA', 'ON', 'OI', 'HF', 'OI', 'FA',
    'OI', 'IE', 'EJ', 'AA', 'EO', 'ME', 'MC', 'FG', 'OI', 'AA', 'KK', 'CH', 'OI', 'DD',
    'NA', 'ON', 'AA', 'OI', 'AA', 'KK', 'KI', 'DP', 'ME', 'ME', 'AA', 'CD', 'HP', 'AA',
    'CH', 'NA', 'FA', 'DP', 'OI', 'KC', 'AJ', 'FM', 'CK', 'AA', 'HH', 'KI', 'AA', 'KC',
    'OI', 'MC', 'DP', 'ME', 'AJ', 'AJ', 'KI', 'MC', 'FG', 'OI', 'AA', 'DD', 'NA', 'CH',
    'AJ', 'OI', 'FA', 'KI', 'AJ', 'KI', 'HF', 'AA', 'OI', 'AA', 'DD', 'CH', 'OO', 'HH',
    'HH', 'EJ', 'AA', 'CH', 'NA', 'FA', 'AJ', 'KI', 'HF', 'CH', 'ME', 'DH', 'ME', 'AJ',
    'AJ', 'KI', 'AA', 'OO', 'KC', 'NA', 'MC', 'FG', 'HF', 'KI', 'HF', 'NA', 'HF', 'EO',
    'OI', 'CK', 'AA', 'HF', 'AA', 'KK', 'KI', 'EB', 'CK', 'AA', 'HH', 'CH', 'KI', 'FG',
    'OI', 'HF', 'AA', 'MC', 'KI', 'HF', 'ME', 'FG', 'MC', 'NO', 'OI', 'CK', 'AA', 'HF',
    'KI', 'IE', 'MC', 'NO', 'AA', 'HF', 'AA', 'OE', 'OI', 'MC', 'DP', 'KI', 'LD', 'OK',
    'ON', 'ME', 'CH', 'MC', 'NO', 'KI', 'IE', 'AA', 'KI', 'HH', 'ME', 'CH', 'NA', 'PC',
    'OI', 'OI', 'EJ', 'AA', 'MC', 'HF', 'FM', 'EO', 'ME', 'AA', 'AG', 'CD', 'AA', 'ON',
    'OI', 'HF', 'OI', 'FA', 'OI', 'OI', 'AA', 'OI', 'AA', 'HH', 'EB', 'FG', 'OI', 'AA',
    'KK', 'CH', 'OI', 'DD', 'NA', 'ON', 'AA', 'KK', 'FM', 'DP', 'OI', 'AA', 'HH', 'KI',
    'DP', 'AJ', 'KI', 'MC', 'FG', 'FN', 'JP', 'AA', 'CH', 'NA', 'FA', 'KK', 'OI', 'FG',
    'FM', 'EJ', 'AA', 'ON', 'KI', 'AA', 'PO', 'HP', 'AA', 'ON', 'OI', 'HF', 'OI', 'FA',
    'OI', 'IE', 'AA', 'HH', 'KI', 'AJ', 'ME', 'MC', 'DP', 'OI', 'AA', 'HH', 'KI', 'FG',
    'ME', 'CH', 'OI', 'AA', 'HF', 'AA', 'DP', 'OI', 'KC', 'AJ', 'KI', 'DH', 'AA', 'MC',
    'KI', 'MC', 'FG', 'NA', 'HF', 'ME', 'AA', 'MC', 'HF', 'FM', 'EO', 'ME', 'AA', 'FB',
    'JA', 'GE', 'HG', 'JA', 'ID', 'AA', 'OI', 'AA', 'KK', 'FM', 'DP', 'OI', 'AA', 'MC',
    'HF', 'ME', 'ON', 'ME', 'AJ', 'FM', 'AA', 'HF', 'AA', 'KK', 'KI', 'ME', 'HF', 'FM',
    'ME', 'AA', 'DD', 'CH', 'OO', 'HH', 'HH', 'FM', 'NG', 'MB']

function countUniqueElements(arr) {
    const elementCount = {};

    for (let item of arr) {
        if (elementCount[item]) {
            elementCount[item]++;
        } else {
            elementCount[item] = 1;
        }
    }

//массив из уникальных элементов и их количества
    const uniqueElementsWithCounts = [];

    for (let item in elementCount) {
        if (elementCount.hasOwnProperty(item)) {
            uniqueElementsWithCounts.push({ item, count: elementCount[item] });
        }
    }

    uniqueElementsWithCounts.sort((a, b) => b.count - a.count);

    return uniqueElementsWithCounts;
}

console.log(countUniqueElements(arr));

const obj = {
    'FA': 'з',
    'NA': "а",
    'CK': "х",
    'HF': "в",
    "FG": "т",
    "KC": "ч",
    "OI": "и",
    "NO": "к",
    "KI": "о",
    "AA": " ",
    "AJ": 'н',
    "MC": 'с',
    "ME": 'е',
    "CH": 'р',
    "FM": "ы",
    "JP": "ю",
    "DD": "г",
    "DH": 'м',
    "EO": "ш",
    "DP": "л",
    "HH": "п",
    "OO": "у",
    "FN": "ь",
    "IE": "й",
    "PC": "ц",
    "ON": "д",
    "OE": "В",
    "NH": "Б",
    "AH": "у",
    "KK": "б",
    "EJ": ",",
    "EB": "я",
    "NG": ".",
    "CC": "ф",
    "CI": "Г",
    "BN": "ж",
    "AL": "П",
    "HL": "И",
    "JL": "Ч",
    "LD": "-",
    "OK": "О",
    "FC": "[",
    "MH": "]",
    "NF": "Н",
    "CD": "1",
    "FB": "6",
    "JA": "0",
    "BE": '"',
    "BG": '"',
    "ML": "(",
    "CE": ")",
    "GP": "A",
    "OF": "9",
    "HG": "7",
    "BK": "4",
    "HP": "5",
    "AG": "3",
    "ID": "%",
    "GE": "—",
    "PO": "2",
    "BM": "С",
    "MB": ""
}

const newArray = [];
const indicies = [];

for (let i = 0; i < arr.length; i++) {
    const key = arr[i];

    if (obj.hasOwnProperty(key)) {
        indicies.push(i);
        newArray.push(obj[key]);
    } else {
        newArray.push(arr[i]);
    }
}

console.log(newArray.join(''));
console.log(indicies);
