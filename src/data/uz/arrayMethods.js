export const arrayMethods = {
  id: 'array-methods',
  title: 'Massiv metodlari',
  intro:
    'Massivlar boy metodlar to‘plamiga ega: qidiruv, o‘zgartirish, filtrlash, qisqartirish va hokazo. Bu sahifa har bir metodi batafsil tushuntiradi.',
  blocks: [
    {
      type: 'p',
      text: 'Massiv metodlari ikki toifaga bo‘linadi: massivni JOYIDA o‘zgartiradiganlar va YANGI massiv qaytarib, aslini o‘zgartirmaydiganlar. Funktsional metodlar (`map`, `filter`, `reduce`, `forEach`) — eng muhimlari.',
    },
    { type: 'heading', text: 'Joyida o‘zgartiruvchi vs o‘zgartirmaydigan' },
    {
      type: 'p',
      text: '`push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse` va `fill` massivni o‘zgartiradi. `map`, `filter`, `slice`, `concat` va `to...` metodlar yangi massiv qaytaradi.',
    },
    { type: 'heading', text: 'Katta uchlik' },
    {
      type: 'p',
      text: '`map` har bir elementni o‘zgartiradi, `filter` testdan o‘tganlarini qoldiradi, `reduce` butun massivni bitta qiymatga yig‘adi. Shu uchta va `forEach` ni o‘rgansangiz, massiv ishlarining ko‘p qismi aniq bo‘ladi.',
    },
  ],
  methods: [
    {
      name: 'push()',
      syntax: 'array.push(...items)',
      desc: 'Elementlarni massiv OXIRIGA qo‘shadi. Massivni o‘zgartiradi va yangi uzunlikni qaytaradi.',
      code: `const a = [1, 2];
const len = a.push(3, 4);
console.log(a);   // [1, 2, 3, 4]
console.log(len); // 4`,
    },
    {
      name: 'pop()',
      syntax: 'array.pop()',
      desc: 'Oxirgi elementni olib tashlab qaytaradi. Massivni o‘zgartiradi. Bo‘sh massivda undefined.',
      code: `const a = [1, 2, 3];
const last = a.pop();
console.log(last); // 3
console.log(a);    // [1, 2]`,
    },
    {
      name: 'shift()',
      syntax: 'array.shift()',
      desc: 'Birinchi elementni olib tashlab qaytaradi, qolganlarini surib — har bir indeks ko‘chishi kerak, shuning uchun `pop` dan sekinroq.',
      code: `const a = [1, 2, 3];
const first = a.shift();
console.log(first); // 1
console.log(a);     // [2, 3]`,
    },
    {
      name: 'unshift()',
      syntax: 'array.unshift(...items)',
      desc: 'Elementlarni massiv BOSHIGA qo‘shadi. Massivni o‘zgartiradi va yangi uzunlikni qaytaradi.',
      code: `const a = [2, 3];
const len = a.unshift(0, 1);
console.log(a);   // [0, 1, 2, 3]
console.log(len); // 4`,
    },
    {
      name: 'at()',
      syntax: 'array.at(index)',
      desc: 'Berilgan indeksdagi elementni qaytaradi. Manfiy indekslar oxirdan hisoblanadi — `arr.at(-1)` oxirgi element.',
      code: `const a = [10, 20, 30];
console.log(a.at(0));  // 10
console.log(a.at(-1)); // 30`,
    },
    {
      name: 'length',
      syntax: 'array.length',
      desc: 'Metod emas, xossa. Elementlar sonini saqlaydi. Kichikroq qilib tayinlasangiz massiv qisqaradi; kattaroq qilib tayinlasangiz bo‘sh kataklar bilan to‘ladi.',
      code: `const a = [1, 2, 3];
console.log(a.length); // 3
a.length = 1;
console.log(a); // [1]`,
    },
    {
      name: 'concat()',
      syntax: 'array.concat(...values)',
      desc: 'Asl massivni berilgan massivlar yoki qiymatlar bilan birlashtirgan YANGI massiv qaytaradi. O‘zgartirmaydi. spread operator `[...arr]` xuddi shunday ish qiladi va afzal.',
      code: `const a = [1, 2];
const b = [3, 4];
const c = a.concat(b, 5);
console.log(c); // [1, 2, 3, 4, 5]
console.log(a); // [1, 2] o‘zgarmadi`,
    },
    {
      name: 'slice()',
      syntax: 'array.slice(start?, end?)',
      desc: '`start` dan `end` gacha (end kirmaydi) elementlar orqali YANGI massiv qaytaradi. Manfiy indekslar oxirdan. Massiv nusxalashning klassik usuli.',
      code: `const a = [1, 2, 3, 4];
console.log(a.slice(1, 3)); // [2, 3]
console.log(a.slice(-2));   // [3, 4]
const copy = a.slice();
console.log(copy === a);    // false: haqiqiy nusxa`,
    },
    {
      name: 'splice()',
      syntax: 'array.splice(start, deleteCount?, ...items)',
      desc: 'Massivni o‘zgartiradi: `start` dan `deleteCount` elementni olib tashlab, o‘rniga `items` ni qo‘yadi. Olib tashlanganlarini qaytaradi.',
      code: `const a = [1, 2, 3, 4, 5];
const removed = a.splice(1, 2, "x", "y");
console.log(a);       // [1, "x", "y", 4, 5]
console.log(removed); // [2, 3]`,
    },
    {
      name: 'indexOf()',
      syntax: 'array.indexOf(searchElement, fromIndex?)',
      desc: 'Element birinchi uchragan indeksni qaytaradi, aks holda -1. Qatʼiy tenglik (`===`) ishlatadi.',
      code: `const a = [1, 2, 3, 2];
console.log(a.indexOf(2));  // 1
console.log(a.indexOf(9));  // -1`,
    },
    {
      name: 'lastIndexOf()',
      syntax: 'array.lastIndexOf(searchElement, fromIndex?)',
      desc: 'Element oxirgi uchragan indeksni qaytaradi, aks holda -1.',
      code: `const a = [1, 2, 3, 2];
console.log(a.lastIndexOf(2)); // 3`,
    },
    {
      name: 'includes()',
      syntax: 'array.includes(searchElement, fromIndex?)',
      desc: 'Massivda element bor bo‘lsa true. SameValueZero ishlatadi — `NaN` ni ham topa oladi, `indexOf` topolmaydi.',
      code: `const a = [1, 2, NaN];
console.log(a.includes(2));    // true
console.log(a.includes(NaN));  // true
console.log(a.indexOf(NaN));   // -1`,
    },
    {
      name: 'find()',
      syntax: 'array.find(callbackFn, thisArg?)',
      desc: 'Callback truthy qiymat qaytargan BIRINCHI elementni qaytaradi; hech biri mos kelmasa undefined. Obyektlarni xossa bo‘yicha topish uchun ideal.',
      code: `const users = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Grace" },
];
const user = users.find((u) => u.id === 2);
console.log(user.name); // "Grace"`,
    },
    {
      name: 'findIndex()',
      syntax: 'array.findIndex(callbackFn, thisArg?)',
      desc: 'Callbackga mos kelgan birinchi elementning indeksini qaytaradi, aks holda -1.',
      code: `const a = [5, 12, 8, 130];
console.log(a.findIndex((n) => n > 100)); // 3
console.log(a.findIndex((n) => n < 4));   // -1`,
    },
    {
      name: 'findLast()',
      syntax: 'array.findLast(callbackFn, thisArg?)',
      desc: '`find` kabi, lekin OXIRidan boshlab orqaga qarab qidiradi.',
      code: `const a = [1, 2, 3, 4];
console.log(a.findLast((n) => n % 2 === 0)); // 4`,
    },
    {
      name: 'findLastIndex()',
      syntax: 'array.findLastIndex(callbackFn, thisArg?)',
      desc: '`findIndex` kabi, lekin orqaga qarab — oxirgi moslik indeksini qaytaradi.',
      code: `const a = [1, 2, 3, 4];
console.log(a.findLastIndex((n) => n % 2 === 0)); // 3`,
    },
    {
      name: 'every()',
      syntax: 'array.every(callbackFn, thisArg?)',
      desc: 'Faqat callback HAR BIR element uchun truthy qaytarsa true. Bo‘sh massiv uchun true (bo‘shlik holati).',
      code: `const a = [2, 4, 6];
console.log(a.every((n) => n % 2 === 0)); // true
console.log(a.every((n) => n > 3));       // false`,
    },
    {
      name: 'some()',
      syntax: 'array.some(callbackFn, thisArg?)',
      desc: 'Callback HECh BO‘LMASA bitta element uchun truthy qaytarsa true. Bo‘sh massiv uchun false.',
      code: `const a = [1, 2, 3];
console.log(a.some((n) => n > 2)); // true
console.log(a.some((n) => n > 9)); // false`,
    },
    {
      name: 'filter()',
      syntax: 'array.filter(callbackFn, thisArg?)',
      desc: 'Callback truthy bo‘lgan faqat elementlar orqali YANGI massiv qaytaradi. O‘zgartirmaydi.',
      code: `const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2, 4, 6]
console.log(nums); // o‘zgarmadi`,
    },
    {
      name: 'map()',
      syntax: 'array.map(callbackFn, thisArg?)',
      desc: 'Har bir element callback orqali o‘zgartirilgan YANGI massiv qaytaradi. Asl bilan bir xil uzunlikda.',
      code: `const nums = [1, 2, 3];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9]

const prices = [10, 20];
console.log(prices.map((p) => "$" + p)); // ["$10", "$20"]`,
    },
    {
      name: 'flat()',
      syntax: 'array.flat(depth?)',
      desc: 'Ichma-ich massivlarni berilgan chuqurlikka qadar (standart 1) tekislangan YANGI massiv qaytaradi. `Infinity` to‘liq tekislaydi.',
      code: `const a = [1, [2, [3, [4]]]];
console.log(a.flat());          // [1, 2, [3, [4]]]
console.log(a.flat(2));         // [1, 2, 3, [4]]
console.log(a.flat(Infinity));  // [1, 2, 3, 4]`,
    },
    {
      name: 'flatMap()',
      syntax: 'array.flatMap(callbackFn, thisArg?)',
      desc: '`map` ni bajarib, natijani BIR daraja tekislaydi. Yangi massiv qaytaradi.',
      code: `const words = ["hi", "ok"];
console.log(words.flatMap((w) => w.split("")));
// ["h", "i", "o", "k"]`,
    },
    {
      name: 'forEach()',
      syntax: 'array.forEach(callbackFn, thisArg?)',
      desc: 'Callbackni har bir element uchun bir marta chaqiradi. undefined qaytaradi; natija yig‘ish uchun emas, YON TAʼSIRLAR (masalan log) uchun ishlatiladi.',
      code: `const a = [10, 20];
a.forEach((n, index) => {
  console.log(index, n);
});
// 0 10
// 1 20`,
      note: 'Yangi massiv qurish uchun `map` yoki `filter` ishlating. `forEach` `break` bilan to‘xtamaydi; to‘xtash kerak bo‘lsa `for...of` ishlating.',
    },
    {
      name: 'reduce()',
      syntax: 'array.reduce(callbackFn, initialValue?)',
      desc: 'Massivni bitta qiymatga yig‘adi. Callback akkumulyator va joriy elementni oladi; qaytargани keyingi akkumulyator bo‘ladi.',
      code: `const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

const count = nums.reduce((acc, n) => {
  acc[n % 2 === 0 ? "even" : "odd"]++;
  return acc;
}, { even: 0, odd: 0 });
console.log(count); // { even: 2, odd: 2 }`,
    },
    {
      name: 'reduceRight()',
      syntax: 'array.reduceRight(callbackFn, initialValue?)',
      desc: '`reduce` kabi, lekin massivni oxirgi elementdan boshiga qarab ishlaydi.',
      code: `const a = [1, 2, 3];
const diff = a.reduceRight((acc, n) => acc - n, 0);
// (((0 - 3) - 2) - 1) =
console.log(diff); // -6`,
    },
    {
      name: 'sort()',
      syntax: 'array.sort(compareFn?)',
      desc: 'Massivni JOYIDA saralaydi. Taqqoslash funksiyasisiz elementlar SATR sifatida saralanadi — sonlarda kutilmagan natijalar beradi.',
      code: `const a = [10, 1, 21, 2];
console.log(a.sort()); // [1, 10, 2, 21]  satr sifatida!

const b = [10, 1, 21, 2];
b.sort((x, y) => x - y);
console.log(b); // [1, 2, 10, 21] o‘sib borish`,
      note: 'O‘zgartirmasdan saralash uchun avval nusxa oling: `[...arr].sort(...)`.',
    },
    {
      name: 'reverse()',
      syntax: 'array.reverse()',
      desc: 'Massiv tartibini JOYIDA teskarisiga aylantiradi, o‘sha massivni qaytaradi.',
      code: `const a = [1, 2, 3];
console.log(a.reverse()); // [3, 2, 1]
console.log(a);           // [3, 2, 1] o‘zgardi`,
    },
    {
      name: 'fill()',
      syntax: 'array.fill(value, start?, end?)',
      desc: 'Elementlarni statik qiymat bilan `start` (standart 0) dan `end` (standart uzunlik) gacha to‘ldirib o‘zgartiradi. Takrorlanuvchi qiymatli massivlar uchun ajoyib.',
      code: `const a = [1, 2, 3, 4];
a.fill(0, 1, 3);
console.log(a); // [1, 0, 0, 4]
console.log(new Array(3).fill("x")); // ["x", "x", "x"]`,
    },
    {
      name: 'join()',
      syntax: 'array.join(separator?)',
      desc: 'Elementlarni ajratuvchi (standart ",") bilan birlashtirib, satr qaytaradi.',
      code: `const a = ["2024", "01", "15"];
console.log(a.join("-")); // "2024-01-15"
console.log([1, 2, 3].join(" + ")); // "1 + 2 + 3"`,
    },
    {
      name: 'copyWithin()',
      syntax: 'array.copyWithin(target, start?, end?)',
      desc: 'Massivning bir qismini o‘sha MASSIVning boshqa qismiga ko‘chiradi, joyida. Kam ishlatiladi.',
      code: `const a = [1, 2, 3, 4, 5];
a.copyWithin(0, 3);
console.log(a); // [4, 5, 3, 4, 5]`,
    },
    {
      name: 'entries() / keys() / values()',
      syntax: 'array.entries()',
      desc: 'Indeks/qiymat juftliklari, kalitlar yoki qiymatlar ustidan iterator qaytaradi. Indeks kerak bo‘lganda `for...of` bilan foydali.',
      code: `const a = ["a", "b"];
for (const [i, v] of a.entries()) {
  console.log(i, v);
}
// 0 "a"
// 1 "b"`,
    },
    {
      name: 'toReversed() /  toSorted() / toSpliced()',
      syntax: 'array.toReversed()',
      desc: '`reverse`, `sort` va `splice` ning o‘zgartirmaydigan variantlari. YANGI massiv qaytaradi, aslini qo‘zg‘atmaydi.',
      code: `const a = [3, 1, 2];
const sorted = a.toSorted();
const reversed = a.toReversed();
console.log(sorted);   // [1, 2, 3]
console.log(reversed); // [2, 1, 3]
console.log(a);        // [3, 1, 2] o‘zgarmadi`,
    },
    {
      name: 'with()',
      syntax: 'array.with(index, value)',
      desc: '`index` da turgan elementni `value` ga almashtirilgan YANGI massiv qaytaradi, aslini o‘zgartirmaydi.',
      code: `const a = [1, 2, 3];
const b = a.with(1, 99);
console.log(b); // [1, 99, 3]
console.log(a); // [1, 2, 3] o‘zgarmadi`,
    },
    {
      name: 'Array.from()',
      syntax: 'Array.from(arrayLike, mapFn?)',
      desc: 'Statik metod. Massivga o‘xshash obyektlardan (satr, `arguments`) yoki iterables (masalan `Set`) massiv yaratadi; ixtiyoriy map qadami bilan.',
      code: `console.log(Array.from("abc"));     // ["a", "b", "c"]
console.log(Array.from([1, 2, 3], (n) => n * 2)); // [2, 4, 6]
console.log(Array.from(new Set([1, 1, 2])));      // [1, 2]`,
    },
    {
      name: 'Array.of()',
      syntax: 'Array.of(...items)',
      desc: 'Statik metod. Argumentlardan massiv yaratadi — `Array(3)` dan farqli, u 3 ta bo‘sh katakli massiv yaratadi.',
      code: `console.log(Array.of(7));  // [7]
console.log(Array(7));    // [ , , , , , , ] 7 bo‘sh katak
console.log(Array.of(1, 2, 3)); // [1, 2, 3]`,
    },
    {
      name: 'Array.isArray()',
      syntax: 'Array.isArray(value)',
      desc: 'Statik metod. Qiymat massiv bo‘lsa true. Ishonchli tekshiruv — chunki `typeof []` → "object".',
      code: `console.log(Array.isArray([1]));   // true
console.log(Array.isArray("ab"));  // false
console.log(Array.isArray({}));    // false`,
    },
  ],
  quiz: [
    {
      type: 'code',
      question: 'Bu nima chiqaradi?',
      code: `const nums = [1, 2, 3, 4];
const result = nums.filter((n) => n % 2 === 0).map((n) => n * 10);
console.log(result);`,
      options: ['[2, 4]', '[20, 40]', '[10, 20, 30, 40]', '[2, 4, 20, 40]'],
      answer: 1,
      explain: '`filter` [2, 4] ni qoldiradi, keyin `map` har birini 10 ga ko‘paytiradi: [20, 40].',
    },
    {
      type: 'code',
      question: 'Bu nima chiqaradi?',
      code: `const a = [1, 2];
const b = a;
b.push(3);
console.log(a);`,
      options: ['[1, 2]', '[1, 2, 3]', '[3, 2, 1]', 'Xato'],
      answer: 1,
      explain: 'Massivlar havola bilan. `b` xuddi `a` kabi BIRTA massivga ishora qiladi, push ikkala nom orqali ko‘rinadi.',
    },
    {
      type: 'mc',
      question: 'Qaysi metod ASL massivni o‘zgartiradi?',
      options: ['`map()`', '`filter()`', '`sort()`', '`slice()`'],
      answer: 2,
      explain: '`sort()` joyida saralaydi. `map`, `filter`, `slice` yangi massiv qaytaradi.',
    },
    {
      type: 'code',
      question: 'Bu nima chiqaradi?',
      code: `const a = [10, 5, 15];
a.sort();
console.log(a);`,
      options: ['[5, 10, 15]', '[10, 5, 15]', '[10, 15, 5]', '["5", "10", "15"]'],
      answer: 2,
      explain:
        'Taqqoslash funksiyasisiz elementlar SATR sifatida saralanadi: "10","5","15" → ["10","15","5"] → [10, 15, 5].',
    },
    {
      type: 'code',
      question: 'Bu reduce qanday natija beradi?',
      code: `const nums = [1, 2, 3, 4];
const r = nums.reduce((acc, n) => acc + n, 0);
console.log(r);`,
      options: ['10', '24', '4', '1234'],
      answer: 0,
      explain: '1 + 2 + 3 + 4 = 10. Boshlang‘ich 0 birinchi akkumulyator bo‘ladi.',
    },
  ],
}