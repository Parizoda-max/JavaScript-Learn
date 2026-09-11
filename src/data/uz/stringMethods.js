export const stringMethods = {
  id: 'string-methods',
  title: 'Satr metodlari',
  intro:
    'Har bir satrda matnni qidirish, kesish, o‘zgartirish va taqqoslash metodlari mavjud. Bu sahifa har birini batafsil tushuntiradi.',
  blocks: [
    {
      type: 'p',
      text: 'Satrlar o‘zgarmas: har bir metod yangi satr qaytaradi va aslini o‘zgartirmaydi. Metodlar vazifasiga ko‘ra guruhlangan.',
    },
    { type: 'heading', text: 'Qidiruv' },
    {
      type: 'p',
      text: '`indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith` va `at` matn yoki pozitsiyalarni topadi. Bu satr qidiruvining tez va o‘qilishi oson usuli.',
    },
    { type: 'heading', text: 'O‘zgartirish' },
    {
      type: 'p',
      text: '`toUpperCase`, `toLowerCase`, `trim`, `padStart`, `padEnd`, `repeat` va `replace` mavjud satrlardan yangilarini yasaydi.',
    },
    { type: 'heading', text: 'Kesish va bo‘lish' },
    {
      type: 'p',
      text: '`slice`, `substring` va `split` satrlarni kichik bo‘laklarga bo‘ladi.',
    },
  ],
  methods: [
    {
      name: 'at()',
      syntax: 'string.at(index)',
      desc: 'Berilgan indeksdagi belgini qaytaradi; manfiy indekslar oxirdan hisoblaydi.',
      code: `const s = "salom";
console.log(s.at(1));    // "a"
console.log(s.at(-1));   // "m"  (oxirgi belgi)
console.log(s.at(-2));   // "o"`,
    },
    {
      name: 'charAt()',
      syntax: 'string.charAt(index)',
      desc: 'Berilgan indeksdagi belgini qaytaradi. Indeks satrdan tashqari bo‘lsa bo‘sh satr qaytaradi.',
      code: `const s = "salom";
console.log(s.charAt(0)); // "s"
console.log(s.charAt(9)); // ""  (chegaradan tashqari)`,
      note: '`at()` manfiy indekslarni ham qabul qiladi; `charAt()` qabul qilmaydi.',
    },
    {
      name: 'charCodeAt()',
      syntax: 'string.charCodeAt(index)',
      desc: 'Berilgan indeksdagi UTF-16 kod birligini (0 dan 65535 gacha son) qaytaradi.',
      code: `const s = "A";
console.log(s.charCodeAt(0)); // 65  ("A" uchun Unicode kod)`,
    },
    {
      name: 'codePointAt()',
      syntax: 'string.codePointAt(index)',
      desc: '`charCodeAt` kabi, lekin to‘liq kod nuqtasini o‘qiydi — emoji kabi BMP dan tashqari belgilar ham. Xalqaro matn uchun yaxshiroq.',
      code: `const s = "A";
console.log(s.codePointAt(0)); // 65`,
    },
    {
      name: 'concat()',
      syntax: 'string.concat(str1, str2, ...)',
      desc: 'Bir yoki bir nechta satrni birlashtirib, yangi satr qaytaradi. Zamonaviy kodda `+` operatori yoki template literal afzal.',
      code: `const a = "Salom";
const b = a.concat(" ", "dunyo");
console.log(b); // "Salom dunyo"`,
    },
    {
      name: 'endsWith()',
      syntax: 'string.endsWith(searchString, endLength?)',
      desc: 'Satr berilgan pastki satr bilan tugasa true qaytaradi. Ixtiyoriy `endLength` faqat satrning qancha qismini hisobga olishni belgilaydi.',
      code: `const file = "rasm.jpg";
console.log(file.endsWith(".jpg"));  // true
console.log(file.endsWith(".png"));  // false`,
    },
    {
      name: 'includes()',
      syntax: 'string.includes(searchString, position?)',
      desc: 'Pastki satr berilgan pozitsiyadan (standart 0) boshlab uchrasa true qaytaradi. Katta-kichik harfga sezgir.',
      code: `const s = "JavaScript qiziqarli";
console.log(s.includes("qiziqarli"));   // true
console.log(s.includes("Java"));  // true
console.log(s.includes("java"));  // false (harf sezgirligi)`,
    },
    {
      name: 'indexOf()',
      syntax: 'string.indexOf(searchString, position?)',
      desc: 'Pastki satr birinchi uchragan joyining indeksini qaytaradi; topilmasa -1.',
      code: `const s = "banana";
console.log(s.indexOf("a")); // 1  (birinchi "a")
console.log(s.indexOf("n")); // 2
console.log(s.indexOf("z")); // -1 topilmadi`,
    },
    {
      name: 'lastIndexOf()',
      syntax: 'string.lastIndexOf(searchString, position?)',
      desc: 'Pastki satr oxirgi uchraganda joyining indeksini qaytaradi; topilmasa -1.',
      code: `const s = "banana";
console.log(s.lastIndexOf("a")); // 5  (oxirgi "a")`,
    },
    {
      name: 'localeCompare()',
      syntax: "string.localeCompare(otherString)",
      desc: 'Ikki satrni foydalanuvchi joylashuviga (locale) mos ravishda taqqoslaydi. Saralash uchun manfiy, nol yoki musbat son qaytaradi.',
      code: `const a = "olma";
const b = "banan";
console.log(a.localeCompare(b)); // manfiy: a avval saralanadi
console.log(b.localeCompare(a)); // musbat: b keyin saralanadi
console.log(a.localeCompare(a)); // 0: teng`,
    },
    {
      name: 'match()',
      syntax: 'string.match(regexp)',
      desc: 'Satrni muntazam ifodaga moslashtiradi. Global regex uchun mosliklar massivini, aks holda birinchi moslikni (capture guruhlari bilan) qaytaradi. Moslik bo‘lmasa null.',
      code: `const phrase = "The rain in Spain";
const g = phrase.match(/[a-z]+/g);
console.log(g); // ["he", "rain", "in", "pain"]

const single = phrase.match(/[A-Z]/);
console.log(single); // "T" ni moslashtiradi`,
    },
    {
      name: 'matchAll()',
      syntax: 'string.matchAll(regexp)',
      desc: 'Barcha mosliklar (har biri capture guruhlari bilan) ustidan iterator qaytaradi. Regex global flagga ega bo‘lishi shart. `Array.from(...)` yoki `for...of` bilan isteʼmol qilinadi.',
      code: `const s = "cat, car, cab";
for (const m of s.matchAll(/c(a)[tb]/g)) {
  console.log(m[0], m[1]);
}
// "cat" "a"
// "cab" "a"`,
    },
    {
      name: 'normalize()',
      syntax: 'string.normalize(form?)',
      desc: 'Unicode matnini normalizatsiya qiladi, shunda kanonik ekvivalent belgi ketma-ketliklari bir xil bo‘ladi. Urg‘uli yoki birlashtirilgan belgili matnni taqqoslashda foydali.',
      code: `const a = "\\u00E9"; // é  (precomposed)
const b = "e\\u0301"; // e + birlashtirilgan urg'u
console.log(a === b);          // false
console.log(a.normalize() === b.normalize()); // true`,
    },
    {
      name: 'padEnd()',
      syntax: 'string.padEnd(targetLength, padString?)',
      desc: 'Satrning oxirini to‘ldirib, belgilangan uzunlikka yetkazadi (standart bo‘sh joy).',
      code: `const order = "42";
console.log(order.padEnd(5, "0")); // "42000"
console.log("hi".padEnd(6, "."));  // "hi...."`,
    },
    {
      name: 'padStart()',
      syntax: 'string.padStart(targetLength, padString?)',
      desc: 'Satrning boshini to‘ldirib, belgilangan uzunlikka yetkazadi. Sonlarni nol bilan to‘ldirish uchun ajoyib.',
      code: `const n = "7";
console.log(n.padStart(3, "0")); // "007"
console.log("clock".padStart(8, "-")); // "---clock"`,
    },
    {
      name: 'repeat()',
      syntax: 'string.repeat(count)',
      desc: 'Asl satr berilgan marta takrorlangan yangi satr qaytaradi.',
      code: `console.log("ab".repeat(3)); // "ababab"
console.log("> ".repeat(2));   // "> > "`,
    },
    {
      name: 'replace()',
      syntax: 'string.replace(pattern, replacement)',
      desc: 'Naqshning (satr yoki regex) birinchi uchraganini almashtiradi. Regex global flagga ega bo‘lmasa faqat BIRINCHI moslik almashtiriladi.',
      code: `const s = "cat and cat";
console.log(s.replace("cat", "dog")); // "dog and cat"
console.log(s.replace(/cat/g, "dog")); // "dog and dog"

const t = "hello";
console.log(t.replace("hello", (m) => m.toUpperCase())); // "HELLO"`,
    },
    {
      name: 'replaceAll()',
      syntax: 'string.replaceAll(pattern, replacement)',
      desc: 'Naqshning har bir uchraganini almashtiradi. Naqsh satr bo‘lganda global regex shart emas.',
      code: `const s = "cat and cat";
console.log(s.replaceAll("cat", "dog")); // "dog and dog"

const t = "2024-01-15";
console.log(t.replaceAll("-", "/")); // "2024/01/15"`,
    },
    {
      name: 'search()',
      syntax: 'string.search(regexp)',
      desc: 'Muntazam ifoda birinchi moslagan joyining indeksini qaytaradi; moslik bo‘lmasa -1. `indexOf` dan farqli, regex qabul qiladi.',
      code: `const s = "bugun 5-kun";
console.log(s.search(/\\d+/)); // 6  "5" indeksi`,
    },
    {
      name: 'slice()',
      syntax: 'string.slice(start, end?)',
      desc: '`start` dan `end` gacha (end kirmaydi) pastki satr qaytaradi. Manfiy indekslar oxirdan hisoblanadi.',
      code: `const s = "JavaScript";
console.log(s.slice(0, 4));  // "Java"
console.log(s.slice(4));     // "Script"
console.log(s.slice(-6));    // "Script"
console.log(s.slice(-6, -1)); // "Scrip"`,
    },
    {
      name: 'split()',
      syntax: 'string.split(separator, limit?)',
      desc: 'Satrni ajratuvchining har bir uchraganida pastki satrlar massiviga bo‘ladi. Bo‘sh ajratuvchi belgilarga bo‘ladi.',
      code: `const csv = "a,b,c";
console.log(csv.split(","));  // ["a", "b", "c"]
console.log("salom".split("")); // ["s","a","l","o","m"]`,
    },
    {
      name: 'startsWith()',
      syntax: 'string.startsWith(searchString, position?)',
      desc: 'Satr berilgan pastki satr bilan boshlansa true qaytaradi. Ixtiyoriy `position` qayerdan boshlashni belgilaydi.',
      code: `const s = "JavaScript";
console.log(s.startsWith("Java"));  // true
console.log(s.startsWith("Script")); // false
console.log(s.startsWith("Script", 4)); // true`,
    },
    {
      name: 'substring()',
      syntax: 'string.substring(start, end?)',
      desc: '`slice` kabi, lekin manfiy indekslar 0 deb olinadi va `start` > `end` bo‘lsa ular almashtiriladi. Bashorat qilib bo‘ladigan xatti-harakat uchun `slice` ni afzal ko‘ring.',
      code: `const s = "JavaScript";
console.log(s.substring(0, 4));  // "Java"
console.log(s.substring(4));     // "Script"
console.log(s.substring(-3));    // "JavaScript" (manfiy 0 bo‘ladi)`,
    },
    {
      name: 'toLowerCase()',
      syntax: 'string.toLowerCase()',
      desc: 'Har bir belgi kichik harfga aylantirilgan yangi satr qaytaradi. Asl o‘zgarmaydi.',
      code: `console.log("HELLO World".toLowerCase()); // "hello world"`,
    },
    {
      name: 'toUpperCase()',
      syntax: 'string.toUpperCase()',
      desc: 'Har bir belgi katta harfga aylantirilgan yangi satr qaytaradi.',
      code: `console.log("salom World".toUpperCase()); // "SALOM WORLD"`,
    },
    {
      name: 'toLocaleLowerCase() / toLocaleUpperCase()',
      syntax: 'string.toLocaleLowerCase()',
      desc: 'Joylashuvga xos harf o‘zgarishlarini hisobga oladigan variant. Inglizcha matnda `toLowerCase` bilan bir xil bo‘ladi.',
      code: `console.log("İSTANBUL".toLocaleLowerCase("tr"));
// "istanbul" (turkcha nuqtali i bilan)`,
    },
    {
      name: 'trim()',
      syntax: 'string.trim()',
      desc: 'Satrning ikki chetidan (bo‘sh joy, tab, yangi qator) bo‘sh joylarni olib tashlaydi. O‘rta qismiga tegmaydi.',
      code: `const s = "  to‘ldirilgan  ";
console.log(s.trim()); // "to‘ldirilgan"
console.log(s.length);  // 10 asl satr o‘zgarmaydi`,
    },
    {
      name: 'trimStart()',
      syntax: 'string.trimStart()',
      desc: 'Faqat satr boshidagi bo‘sh joylarni olib tashlaydi.',
      code: `console.log("  salom  ".trimStart()); // "salom  "`,
    },
    {
      name: 'trimEnd()',
      syntax: 'string.trimEnd()',
      desc: 'Faqat satr oxiridagi bo‘sh joylarni olib tashlaydi.',
      code: `console.log("  salom  ".trimEnd()); // "  salom"`,
    },
    {
      name: 'toString() / valueOf()',
      syntax: 'string.toString()',
      desc: 'Ikkalasi satrning o‘zini qaytaradi. Bu metodlar satrlar o‘zgarishlarda obyektlar kabi izchil ishlashi uchun mavjud.',
      code: `const s = "abc";
console.log(s.toString()); // "abc"
console.log(s.valueOf());  // "abc"`,
    },
    {
      name: 'String.fromCharCode()',
      syntax: 'String.fromCharCode(num1, num2, ...)',
      desc: 'Statik metod. Bir yoki bir nechta UTF-16 kod birligidan satr quradi.',
      code: `console.log(String.fromCharCode(72, 105)); // "Hi"`,
    },
    {
      name: 'String.fromCodePoint()',
      syntax: 'String.fromCodePoint(num1, ...)',
      desc: 'Statik metod. To‘liq Unicode kod nuqtalaridan, jumladan emoji va boshqa astral belgilardan satr quradi.',
      code: `console.log(String.fromCodePoint(65));      // "A"
console.log(String.fromCodePoint(128512)); // ""`,
    },
    {
      name: 'String.raw()',
      syntax: 'String.raw`template literal`',
      desc: 'Statik metod. Template literal matnini xom (o‘zgartirilmagan) holida qaytaradi — teskari qiyshiq belgilar o‘z holicha qoladi.',
      code: `const raw = String.raw\`qator1\\nqator2\`;
console.log(raw.includes("\\\\n")); // true, teskari qiyshiq saqlangan`,
    },
  ],
  quiz: [
    {
      type: 'code',
      question: 'Bu nima chiqaradi?',
      code: `console.log("hello world".includes("world"));`,
      options: ['true', 'false', '"world"', 'Xato'],
      answer: 0,
      explain: '`includes` pastki satr istalgan joyda uchrasa boolean true qaytaradi.',
    },
    {
      type: 'code',
      question: 'Bu nima chiqaradi?',
      code: `const s = "abcd";
console.log(s.slice(1, 3));`,
      options: ['"bcd"', '"bc"', '"cd"', '"bd"'],
      answer: 1,
      explain: '`slice(1,3)` indeks 1 dan ("b") boshlanib, 3 indeksdan OLDIN to‘xtaydi — natija "bc".',
    },
    {
      type: 'mc',
      question: 'NEGA `charAt(len-1)` o‘rniga `at(-1)` afzal?',
      options: [
        '`at()` manfiy indekslarni oxirdan o‘qiydi',
        '`charAt` mavjud emas',
        '`at()` massiv qaytaradi',
        '`charAt` satrni o‘zgartiradi',
      ],
      answer: 0,
      explain: '`at(-1)` to‘g‘ridan-to‘g‘ri oxirdan o‘qiydi; `charAt` faqat nomusbat indeks qabul qiladi.',
    },
    {
      type: 'code',
      question: 'Bu nima chiqaradi?',
      code: `const list = "1,2,3";
console.log(list.split(",").length);`,
      options: ['1', '2', '3', '4'],
      answer: 2,
      explain: '"1,2,3" ni "," ga bo‘lish ["1","2","3"] massivini beradi — uzunligi 3.',
    },
    {
      type: 'tf',
      question: '`"cat".replace("t", "r")` satrni doimiy ravishda "car" ga o‘zgartiradi.',
      answer: 1,
      explain: 'Satrlar o‘zgarmas. `replace` YANGI satr qaytaradi; asl "cat" o‘zgarmaydi.',
    },
  ],
}