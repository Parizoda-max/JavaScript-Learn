export const coreLanguage = {
  title: 'Asosiy til',
  topics: [
    {
      id: 'control-flow',
      title: 'Boshqaruv tarmoqlari',
      intro:
        'Dasturlar qaror qabul qiladi. `if`, `else if`, `else` va ternar operator qaysi buyruqlar bajarilishini shartga qarab tanlaydi.',
      blocks: [
        {
          type: 'p',
          text: 'Shart — JavaScript truthy yoki falsy deb baholaydigan ifodadir. `0`, `""`, `null`, `undefined`, `NaN` va `false` — falsy; deyarli qolgan hamma narsa truthy.',
        },
        {
          type: 'code',
          code: `const temperature = 38;

if (temperature > 30) {
  console.log("Issiq");
} else if (temperature > 20) {
  console.log("Iliq");
} else {
  console.log("Salqin");
}`,
        },
        { type: 'heading', text: 'Ternar operator' },
        {
          type: 'p',
          text: 'Ternar `condition ? a : b` — shart truthy bo‘lsa `a`, falsy bo‘lsa `b` ni qaytaradi. Ikki qiymatdan birini tanlashning ixcham usuli.',
        },
        {
          type: 'code',
          code: `const age = 20;
const label = age >= 18 ? "kattalar" : "yosh";
console.log(label); // "kattalar"`,
        },
        { type: 'heading', text: 'switch' },
        {
          type: 'p',
          text: '`switch` bitta qiymatni case lar ro‘yxati bilan taqqoslaydi. Har bir case `break` bilan tugashi kerak, aks holda bajarilish keyingi case ga «tushib ketadi».',
        },
        {
          type: 'code',
          code: `const color = "green";

switch (color) {
  case "red":
    console.log("to‘xta");
    break;
  case "green":
    console.log("yur");
    break;
  default:
    console.log("noma'lum rang");
}`,
        },
        {
          type: 'note',
          text: 'Truthy munosabati hamma joyda muhim: `0`, `""`, `null`, `undefined`, `NaN` va `false` falsy. Son 0 ishtirok etgan shartlarni doim ikki marta tekshiring.',
        },
      ],
      quiz: [
        {
          type: 'tf',
          question: '`"0"` satri falsy.',
          answer: 1,
          explain:
            '`"0"` — bo‘sh bo‘lmagan satr, har qanday bo‘sh bo‘lmagan satr truthy. Faqat 0 soni falsy.',
        },
        {
          type: 'mc',
          question: 'Qaysi qiymat falsy?',
          options: ['`" "` (bo‘sh joy)', '`[]` (bo‘sh massiv)', '`0`', '`-1`'],
          answer: 2,
          explain:
            '`0` falsy. Bo‘sh massiv, bo‘sh joyli satr va manfiy sonlar truthy.',
        },
        {
          type: 'code',
          question: 'Bu nima chiqaradi?',
          code: `console.log(5 > 3 ? "katta" : "kichik");`,
          options: ['"katta"', '"kichik"', 'true', 'undefined'],
          answer: 0,
          explain: '`5 > 3` sharti to‘g‘ri, shuning uchun ternar birinchi qiymatni qaytaradi.',
        },
      ],
    },
    {
      id: 'loops',
      title: 'Tsikllar',
      intro:
        'Tsikllar takroriy ishni bajaradi. `for`, `while` va `do...while` blokni istalgancha bajaradi.',
      blocks: [
        { type: 'heading', text: 'for' },
        {
          type: 'p',
          text: '`for` tsiklining uch qismi bor: boshlang‘ich qiymat, har bir aylanishdan oldin tekshiriladigan shart va har aylanishdan keyin bajariladigan yangilash.',
        },
        {
          type: 'code',
          code: `for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0, 1, 2 chiqadi`,
        },
        { type: 'heading', text: 'while va do...while' },
        {
          type: 'p',
          text: '`while` tanani bajarishdan oldin shartni tekshiradi. `do...while` tanani bir marta bajaradi, keyin tekshiradi.',
        },
        {
          type: 'code',
          code: `let n = 0;
while (n < 3) {
  n++;
}
console.log(n); // 3

let x = 10;
do {
  x++;
} while (x < 5);
console.log(x); // 11, chunki tana hech bo‘lmasa bir marta bajariladi`,
        },
        { type: 'heading', text: 'break va continue' },
        {
          type: 'list',
          items: [
            '`break` tsiklni darhol to‘xtatadi',
            '`continue` ushbu aylanishni tashlab, keyingisiga o‘tadi (shart qayta tekshiriladi)',
          ],
        },
        {
          type: 'code',
          code: `for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // 3 ni tashlab o‘tish
  if (i === 5) break;    // 5 da to‘xtash
  console.log(i);
}
// 0, 1, 2, 4 chiqadi`,
        },
        {
          type: 'note',
          text: 'Cheksiz tsikl — sharti hech qachon false bo‘lmaydigan tsikl — sahifani muzlatib, brauzerni osib qo‘yishi mumkin. Sahifa javob bermay qolsa, avvalo tsikl shartlarini tekshiring.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'Bu tsikl necha marta chiqaradi?',
          code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
          options: ['4', '5', '6', 'Cheksiz'],
          answer: 1,
          explain:
            'Tsikl `i < 5` bo‘lganda aylanadi: i 0,1,2,3,4 qiymatlarini oladi — jami 5 marta.',
        },
        {
          type: 'mc',
          question: 'Tsiklda `continue` nima qiladi?',
          options: [
            'Tsiklni darhol to‘xtatadi',
            'Tsiklni boshidan boshlaydi',
            'Keyingi aylanishga o‘tadi',
            'Xato tashlaydi',
          ],
          answer: 2,
          explain: '`continue` keyingi aylanishga o‘tadi; tsiklni `break` to‘xtatadi.',
        },
        {
          type: 'code',
          question: '`n` qanday qiymat bilan chiqariladi?',
          code: `let n = 0;
while (n > 0) {
  n++;
}
console.log(n);`,
          options: ['1', '0', '-1', 'Bu cheksiz tsikl'],
          answer: 1,
          explain:
            'Boshidanoq `n > 0` sharti false (n=0), shuning uchun tana bajarilmaydi, n=0 qoladi.',
        },
      ],
    },
    {
      id: 'functions',
      title: 'Funksiyalar',
      intro:
        'Funksiya — qayta ishlatiladigan kod bloki. Uni nom bilan chaqirasiz, ixtiyoriy kirish qiymatlari berib, javob olishingiz mumkin.',
      blocks: [
        { type: 'heading', text: 'Funksiya eʼlonlari' },
        {
          type: 'code',
          code: `function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5`,
        },
        {
          type: 'p',
          text: '`return` qiymatni chaqiruvchiga qaytaradi. `return` bo‘lmasa, funksiya `undefined` qaytaradi.',
        },
        { type: 'heading', text: 'Funksiya ifodalari va strelka funksiyalari' },
        {
          type: 'code',
          code: `const multiply = function (a, b) {
  return a * b;
};

const subtract = (a, b) => a - b;

console.log(multiply(3, 4)); // 12
console.log(subtract(7, 2)); // 5`,
        },
        {
          type: 'p',
          text: 'Strelka funksiyalari (`=>`) qisqaroq sintaksis. Tana bitta ifodadan iborat bo‘lsa, `return` yashirin ishlaydi.',
        },
        { type: 'heading', text: 'Parametrlar va standart qiymatlar' },
        {
          type: 'p',
          text: 'Yetishmayotgan argument `undefined` bo‘ladi, bu ko‘pincha muammo keltiradi. Standart parametrlar argument berilmasa qiymat qo‘yadi.',
        },
        {
          type: 'code',
          code: `function greet(name = "do‘st") {
  return "Salom, " + name;
}

console.log(greet());           // "Salom, do'st"
console.log(greet("Ada"));      // "Salom, Ada"`,
        },
        {
          type: 'p',
          text: '`...rest` sintaksisi qo‘shimcha argumentlarni massivga yig‘adi.',
        },
        {
          type: 'code',
          code: `function sumAll(...numbers) {
  let total = 0;
  for (const n of numbers) total += n;
  return total;
}

console.log(sumAll(1, 2, 3, 4)); // 10`,
        },
        {
          type: 'note',
          text: 'Funksiya eʼlonlarini faylda paydo bo‘lishidan oldin chaqirish mumkin (hoisting). Funksiya ifodalari va strelka funksiyalari avval aniqlanishi shart.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'Bu funksiya chaqiruvi nima chiqaradi?',
          code: `function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,
          options: ['"2, 3"', '5', 'undefined', 'NaN'],
          answer: 1,
          explain: '`add(2, 3)` → `2 + 3` = `5`.',
        },
        {
          type: 'mc',
          question: '`return` yo‘q bo‘lsa, funksiya nima qaytaradi?',
          options: ['`null`', '`0`', '`undefined`', 'Bo‘sh satr'],
          answer: 2,
          explain: 'Har bir funksiya qiymat qaytaradi; `return` bo‘lmasa bu `undefined`.',
        },
        {
          type: 'code',
          question: 'Bu nima chiqaradi?',
          code: `const double = (x) => x * 2;
console.log(double(21));`,
          options: ['21', '42', '"21, 21"', 'undefined'],
          answer: 1,
          explain:
            'Yagona jika ifodali strelka funksiyasi uni yashirin qaytaradi: `21 * 2 = 42`.',
        },
      ],
    },
    {
      id: 'arrays',
      title: 'Massivlar',
      intro:
        'Massiv — tartiblangan qiymatlar ro‘yxati. Massivlar JavaScript ning eng ko‘p ishlatiladigan maʼlumot strukturasi bo‘lib, juda ko‘p metodga ega.',
      blocks: [
        {
          type: 'p',
          text: 'Massiv kvadrat qavslar bilan yaratiladi. Elementlar `0` dan boshlanadigan indekslarga ega.',
        },
        {
          type: 'code',
          code: `const fruits = ["olma", "banan", "gilos"];
console.log(fruits[0]);   // "olma"
console.log(fruits[2]);   // "gilos"
console.log(fruits.length); // 3`,
        },
        { type: 'heading', text: 'Qo‘shish va olib tashlash' },
        {
          type: 'code',
          code: `const nums = [1, 2, 3];
nums.push(4);         // oxiriga qo‘shadi
console.log(nums);    // [1, 2, 3, 4]

nums.pop();           // oxiridan olib tashlaydi
console.log(nums);    // [1, 2, 3]

nums.unshift(0);      // boshiga qo‘shadi
nums.shift();         // boshidan olib tashlaydi
console.log(nums);    // [1, 2, 3]`,
        },
        {
          type: 'p',
          text: '`push`/`pop`/`shift`/`unshift` massivni joyida o‘zgartiradi. Massiv metodlari sahifasida `map`, `filter`, `reduce` kabi yana o‘nlab metodlar bor.',
        },
        { type: 'heading', text: 'Massivlar obyektdir' },
        {
          type: 'p',
          text: 'Massiv — obyektning alohida turi. Ularda tartiblangan qiymatlar saqlanadi, lekin ichkarida ular obyekt — shuning uchun `typeof []` → `"object"`.',
        },
        {
          type: 'code',
          code: `console.log(typeof []); // "object"
console.log(Array.isArray([])); // true`,
        },
        {
          type: 'note',
          text: 'Massivlar havola (reference) bilan uzatiladi. `arr2 = arr1` bilan nusxa qilsangiz, ikkala nom bitta massivga ishora qiladi — birini o‘zgartirsak, ikkinchisiga ham taʼsir qiladi. Nusxa uchun `[...arr1]` yoki `arr1.slice()` ishlating.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'Bu massivda `"gilos"` qaysi indeksda?',
          code: `const fruits = ["olma", "banan", "gilos"];`,
          options: ['1', '2', '3', '"gilos"'],
          answer: 1,
          explain: 'Massiv indekslari 0 dan boshlanadi: olma=0, banan=1, gilos=2.',
        },
        {
          type: 'mc',
          question: 'Qaysi juftlik `push` va `pop` ni to‘g‘ri taʼriflaydi?',
          options: [
            '`push` boshiga qo‘shadi, `pop` boshidan oladi',
            '`push` oxiriga qo‘shadi, `pop` oxiridan oladi',
            'Ikkalasi faqat yangi uzunlikni qaytaradi',
            'Ular faqat satrlarda ishlaydi',
          ],
          answer: 1,
          explain: '`push` oxiriga qo‘shadi; `pop` oxirgi elementni olib tashlab qaytaradi.',
        },
        {
          type: 'tf',
          question: '`const b = a` bilan nusxalash sizga `a` massivning mustaqil nusxasini beradi.',
          answer: 1,
          explain:
            '`b = a` ikkala nomni BIRTA massivga yo‘naltiradi. Haqiqiy nusxa uchun spread (`[...a]`) ishlating.',
        },
      ],
    },
    {
      id: 'objects',
      title: 'Obyektlar',
      intro:
        'Obyektlar maʼlumotni kalit/qiymat juftliklari ko‘rinishida saqlaydi. JavaScript deyarli hamma narsani — foydalanuvchilar, mahsulotlar, sozlamalar va boshqalarni obyekt orqali modellashtiradi.',
      blocks: [
        { type: 'heading', text: 'Obyekt literallari' },
        {
          type: 'code',
          code: `const user = {
  name: "Ada",
  age: 36,
  admin: true,
};

console.log(user.name);    // "Ada"   nuqta belgisi
console.log(user["age"]);  // 36      kvadrat qavs
console.log(user.city);    // undefined: bunday kalit yo‘q`,
        },
        {
          type: 'p',
          text: 'Nuqta belgisi toza, lekin kvadrat qavs dinamik kalitlarga imkon beradi — kalit satrga baholanadigan istalgan ifoda bo‘lishi mumkin.',
        },
        { type: 'heading', text: 'Ichma-ich joylashuv' },
        {
          type: 'p',
          text: 'Obyekt qiymatlari boshqa obyektlar yoki massivlar bo‘lishi mumkin, bu rich tuzilmalar qurish imkonini beradi.',
        },
        {
          type: 'code',
          code: `const user = {
  name: "Ada",
  address: {
    city: "London",
    zip: "EC1A",
  },
  roles: ["admin", "editor"],
};

console.log(user.address.city); // "London"
console.log(user.roles[1]);     // "editor"`,
        },
        { type: 'heading', text: 'Metodlar va hisoblangan kalitlar' },
        {
          type: 'code',
          code: `const greeting = "salomlashish";

const person = {
  name: "Grace",
  [greeting]: () => "Assalomu alaykum!",
  greet() {
    return "Salom, " + this.name;
  },
};

console.log(person.salomlashish()); // "Assalomu alaykum!"
console.log(person.greet());  // "Salom, Grace"`,
        },
        {
          type: 'p',
          text: '`greet() {}` qisqartmasi metod. Uning ichida `this` metod chaqirilgan obyektga ishora qiladi. `this` to‘liq classes mavzusida ko‘riladi.',
        },
        { type: 'heading', text: 'Obyekt qisqartmasi' },
        {
          type: 'code',
          code: `const name = "Lin";
const age = 28;

const person = { name, age }; // { name: name, age: age } bilan bir xil
console.log(person);          // { name: "Lin", age: 28 }`,
        },
        {
          type: 'note',
          text: 'Obyektlar havola bilan taqqoslanadi. Tarkibi bir xil bo‘lgan ikkita obyekt hali ham turli obyekt: `{a:1} === {a:1}` → `false`.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: '`user` o‘zgaruvchisidagi obyektning `city` xossasini qanday o‘qish mumkin?',
          options: [
            '`user.city`',
            '`user->city`',
            '`user[city]`',
            '`city.user`',
          ],
          answer: 0,
          explain: 'Nuqta belgisi `object.property` ko‘rinishida: `user.city`. Kvadrat qavsga qo‘shtirnoq kerak: `user["city"]`.',
        },
        {
          type: 'tf',
          question: 'Tarkibi bir xil bo‘lgan ikkita obyekt `===` ostida teng.',
          answer: 1,
          explain:
            'Obyektlar havola (identifikatsiya) bo‘yicha taqqoslanadi. `{a:1} === {a:1}` → false.',
        },
        {
          type: 'code',
          question: 'Bu nima chiqaradi?',
          code: `const user = { name: "Ada", "age": 36 };
console.log(user["name"]);`,
          options: ['"Ada"', '36', 'undefined', 'Xato'],
          answer: 0,
          explain:
            'Kalit satri `"name"` bilan kvadrat qavs belgisi `user.name` bilan bitta xossani o‘qiydi.',
        },
      ],
    },
    {
      id: 'strings',
      title: 'Satrlar bilan ishlash',
      intro:
        'Satrlar — bu matn. Bu sahifada asosiy jihatlar, har bir metod esa o‘z maʼlumotnoma sahifasida batafsil bayon etilgan.',
      blocks: [
        { type: 'heading', text: 'Satr yaratish' },
        {
          type: 'code',
          code: `const single = 'bitta qo‘shtirnoq';
const double = "ikkita qo‘shtirnoq";
const template = \`template literal \${2 + 3}\`;
console.log(template); // "template literal 5"`,
        },
        {
          type: 'p',
          text: 'Template literal (qaytarma belgi) `${...}` bilan ifoda kiritish va ko‘p qatorli matnga imkon beradi.',
        },
        { type: 'heading', text: 'Xossalar va asosiy metodlar' },
        {
          type: 'code',
          code: `const s = "JavaScript";
console.log(s.length);         // 10
console.log(s.toUpperCase());  // "JAVASCRIPT"
console.log(s.toLowerCase());  // "javascript"
console.log(s.charAt(4));      // "S"
console.log(s.includes("Script")); // true
console.log(s.slice(0, 4));    // "Java"
console.log(s.split("a"));     // ["J", "v", "Script"]`,
        },
        { type: 'heading', text: 'Satrlar o‘zgarmas' },
        {
          type: 'p',
          text: 'Satrlarni joyida o‘zgartirib bo‘lmaydi. `toUpperCase()` kabi metodlar YANGI satr qaytaradi; asl satr o‘zgarmaydi.',
        },
        {
          type: 'code',
          code: `let word = "salom";
word.toUpperCase();
console.log(word); // "salom", o‘zgarmadi!

word = word.toUpperCase();
console.log(word); // "SALOM"`,
        },
        {
          type: 'note',
          text: 'Satrlar `===` bilan qiymat bo‘yicha taqqoslanadi, obyektlardan farqli ravishda. `"abc" === "abc"` → `true`.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'Bu nima chiqaradi?',
          code: `console.log("Hello".length);`,
          options: ['4', '5', '6', '"5"'],
          answer: 1,
          explain: 'H-e-l-l-o — 5 ta belgi, demak `.length` — 5.',
        },
        {
          type: 'tf',
          question: '`word.toUpperCase()` `word` dagi satrni butunlay o‘zgartiradi.',
          answer: 1,
          explain:
            'Satrlar o‘zgarmas. `toUpperCase()` yangi satr qaytaradi; saqlash uchun qayta tayinlash kerak.',
        },
        {
          type: 'mc',
          question: 'Template literal qaysi belgi bilan boshlanadi?',
          options: ['Qaytarma belgi `` ` ``', 'Bitta qo‘shtirnoq', 'Ikkita qo‘shtirnoq', '`$` belgisi'],
          answer: 0,
          explain:
            'Template literal qaytarma belgi bilan o‘raladi va `${...}` bilan qiymat kiritish imkonini beradi.',
        },
      ],
    },
    {
      id: 'numbers',
      title: 'Sonlar va matematika',
      intro:
        'Sonlar boshqa tillardagi butun sonlardan farqli ishlaydi. O‘ziga xosliklarni o‘rganing — suzuvchi nuqta aniqligi, `NaN` va cheksizlik.',
      blocks: [
        { type: 'heading', text: 'Sonlar asoslari' },
        {
          type: 'code',
          code: `console.log(0.1 + 0.2); // 0.30000000000000004 ?!
console.log(10 / 4);      // 2.5
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log("abc" * 2);   // NaN (son emas)`,
        },
        {
          type: 'p',
          text: 'Sonlar ikki marta aniqligidagi suzuvchi nuqtada saqlanadi, shuning uchun ayrim o‘nli kasrlar aynan ifodalanmaydi. Shu sababli `0.1 + 0.2` aniq `0.3` bo‘lmaydi.',
        },
        { type: 'heading', text: 'NaN' },
        {
          type: 'p',
          text: '`NaN` son bo‘lmagan ifoda hosil qilinganda chiqadi. JavaScript da o‘ziga teng bo‘lmagan yagona qiymat.',
        },
        {
          type: 'code',
          code: `console.log(NaN === NaN);      // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("hi"));       // true (yumshoq, avval o‘zgartiradi)
console.log(Number.isNaN("hi"));// false (qat'iy)`,
        },
        { type: 'heading', text: 'Satrdan son o‘qish' },
        {
          type: 'code',
          code: `console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14"));  // 3.14
console.log(Number("42"));        // 42
console.log(Number("42px"));      // NaN`,
        },
        {
          type: 'p',
          text: '`parseInt`/`parseFloat` satrni boshidan, raqam bo‘lmagan belgiga qadar o‘qiydi. `Number()` butun satrni o‘zgartiradi yoki muvaffaqiyatsiz bo‘ladi.',
        },
        { type: 'heading', text: 'Math yordamchi funksiyalari' },
        {
          type: 'code',
          code: `console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.7));   // 4
console.log(Math.ceil(4.2));    // 5
console.log(Math.max(1, 8, 3)); // 8
console.log(Math.min(1, 8, 3)); // 1
console.log(Math.abs(-5));      // 5
console.log(Math.random());     // 0 dan 1 gacha`,
        },
        {
          type: 'note',
          text: 'Sonlar va Math metodlarining to‘liq to‘plami «Metodlar maʼlumotnomasi» bo‘limida o‘z sahifalariga ega.',
        },
      ],
      quiz: [
        {
          type: 'tf',
          question: 'JavaScript da `0.1 + 0.2` aynan `0.3` ga teng.',
          answer: 1,
          explain:
            'Suzuvchi nuqta saqlash natijani `0.30000000000000004` qiladi. Taqqoslashda epsilon ishlating yoki kerak bo‘lganda yaxlitlang.',
        },
        {
          type: 'code',
          question: '`parseInt("42px")` nima qaytaradi?',
          options: ['42', 'NaN', '0', '"42px"'],
          answer: 0,
          explain: '`parseInt` boshidan raqamlarni o‘qib, "px" da to‘xtaydi — 42.',
        },
        {
          type: 'mc',
          question: '`1 / 0` natijasi qanday?',
          options: ['Hech narsa (undefined)', '`Infinity`', '`NaN`', 'Xato tashlaydi'],
          answer: 1,
          explain: 'JavaScript da nolga bo‘lish xato tashlamaydi, balki `Infinity` qaytaradi.',
        },
      ],
    },
  ],
}