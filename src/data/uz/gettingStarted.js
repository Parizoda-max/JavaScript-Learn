export const gettingStarted = {
  title: 'Boshlash',
  topics: [
    {
      id: 'introduction',
      title: 'Kirish',
      intro:
        'JavaScript — bu internet tizimining dasturlash tili. U statik sahifalarni interaktiv ilovalarga aylantiradi.',
      blocks: [
        {
          type: 'p',
          text: 'JavaScript har bir zamonaviy brauzerda hech qanday o‘rnatishsiz ishlaydi. Xuddi shu til Node.js orqali serverlarda ham ishlaydi.',
        },
        {
          type: 'p',
          text: 'JavaScript fayli — bu buyruqlar ro‘yxati. Brauzer sahifani yuklaganda ularni satrma-satr bajaradi: kiritilgan maʼlumotni o‘qiydi, ekrandagi narsalarni o‘zgartiradi va bosish/klaviatura kabi hodisalarga javob beradi.',
        },
        { type: 'heading', text: 'JavaScript nima qila oladi' },
        {
          type: 'list',
          items: [
            'Foydalanuvchi qarayotgan sahifa mazmunini yangilash',
            'Formalarni tekshirish va bosish, matn kiritish, aylantirish kabi harakatlarga javob berish',
            'Serverlardan maʼlumot olish va grafik, diagramma, o‘yinlar yaratish',
            'Kichik vidjetlardan tortib katta veb-ilovalargacha butun ilovalar qurish',
          ],
        },
        {
          type: 'p',
          text: 'JavaScript interpretirlanadigan til: brauzer kodni to‘g‘ridan-to‘g‘ri o‘qiydi, alohida kompilyatsiya bosqichi kerak emas. Shu sababli uni tez sinab ko‘rish va o‘rganish oson.',
        },
        {
          type: 'note',
          text: 'Ushbu kursda «metod» degani qiymatga tegishli funksiya — masalan `name.toUpperCase()` satrning metodidir. Siz ularning ko‘pini uchratasiz va har birining o‘z sahifasi bor.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'JavaScript asosan qayerda ishlaydi?',
          options: [
            'Faqat serverda',
            'Brauzerning o‘zida',
            'Faqat maxsus plagin orqali',
            'Faqat Node.js da',
          ],
          answer: 1,
          explain:
            'JavaScript har bir zamonaviy brauzerga o‘rnatilgan. U Node.js orqali serverda ham bajariladi, lekin brauzer uchun hech qanday o‘rnatish talab qilinmaydi.',
        },
        {
          type: 'tf',
          question:
            'JavaScript bajarilishidan oldin alohida kompilyatsiya bosqichidan o‘tadi.',
          answer: 1,
          explain:
            'JavaScript interpretirlanadi (zamonaviy brauzerlar ichkarida JIT optimizatsiya qiladi). Qo‘lda kompilyatsiya bosqichi yo‘q.',
        },
        {
          type: 'mc',
          question: '«Metod» deganda nimani tushunamiz?',
          options: [
            'Class yaratish usuli',
            'Qiymatga tegishli funksiya, masalan `name.toUpperCase()`',
            'Zaxiralangan kalit so‘z',
            'Tsikl turi',
          ],
          answer: 1,
          explain:
            'Metod — bu qiymatga (obyekt, satr, massiv va hokazo) biriktirilgan funksiya bo‘lib, nuqta orqali chaqiriladi.',
        },
      ],
    },
    {
      id: 'running-code',
      title: 'Brauzerda kod bajarish',
      intro:
        'Brauzer konsoli — JavaScript bilan tajriba qilishning eng tezkor joyi.',
      blocks: [
        {
          type: 'p',
          text: 'Har bir brauzerda dasturchilar vositalari mavjud. Chrome va Edge da `F12` yoki `Ctrl+Shift+I` (Mac da Cmd+Option+I) bosib «Console» bo‘limini oching.',
        },
        {
          type: 'code',
          code: `console.log("Salom, dunyo!");
console.log(2 + 2);`,
        },
        {
          type: 'p',
          text: '`console.log()` qiymatni konsolga chiqaradi. Bu dasturingiz nima qilayotganini ko‘rishning eng oddiy usuli.',
        },
        { type: 'heading', text: 'Sahifaga kod qo‘shish' },
        {
          type: 'p',
          text: 'Haqiqiy loyihada kodni `.js` fayllarga yozib, ularni HTML sahifadan ulaysiz. Sahifa ichida `<script>` tegi ham ishlatish mumkin, lekin alohida fayllar professional usul hisoblanadi.',
        },
        {
          type: 'code',
          code: `<!doctype html>
<html>
  <body>
    <script src="app.js"></script>
  </body>
</html>`,
        },
        {
          type: 'p',
          text: 'Sahifa yuklanganda brauzer `app.js` ni yuqoridan pastga o‘qib, har bir buyruqni tartib bilan bajaradi.',
        },
        {
          type: 'note',
          text: 'Komentariyalar — JavaScript eʼtibordan chetda qoldiruvchi izohlar. Qatordagi `//` dan keyingi hamma narsa eʼtiborga olinmaydi; `/* ... */` butun blokni chetlab o‘tadi.',
        },
        {
          type: 'code',
          code: `// Bu bitta qatorlik komentariya.
let x = 5; // komentariyalar satr oxirida ham turadi.

/* Bu komentariya
   ikki qatorni egallaydi. */`,
        },
      ],
      quiz: [
        {
          type: 'tf',
          question: 'Brauzer konsolida JavaScript to‘g‘ridan-to‘g‘ri bajarilishi mumkin.',
          answer: 0,
          explain:
            'Console bo‘limi JavaScript kiritishni qabul qiladi. Ifoda yozib, Enter bosish uni darhol bajaradi.',
        },
        {
          type: 'code',
          question: 'Brauzer oxirgi buyruqda nimani chiqaradi?',
          code: `console.log("one");
console.log("two");
console.log("three");`,
          options: ['one two three', 'three two one', 'three, keyin two, keyin one', 'one, keyin two, keyin three — tartib bilan'],
          answer: 3,
          explain:
            'Buyruqlar (va chiqarishlar) ular yozilgan tartibda, yuqoridan pastga bajariladi.',
        },
        {
          type: 'mc',
          question: 'Quyidagilardan qaysi biri JavaScript komentariyasi?',
          options: ['`// bu komentariya`', '`<!-- comment -->`', '`# comment`', '`REM comment`'],
          answer: 0,
          explain:
            '`//` JavaScript da bitta qatorlik komentariyani belgilaydi. Qolgan sintaksislar boshqa tillarga tegishli.',
        },
      ],
    },
    {
      id: 'linking-javascript',
      title: 'JavaScriptni HTMLga ulash',
      intro:
        'Brauzer JavaScript borligini faqat HTML orqali biladi. Bu darsda skriptni sahifaga ulashning har bir usulini ko‘rib chiqamiz.',
      blocks: [
        {
          type: 'p',
          text: 'HTML sahifaga JavaScript qo‘shishning uchta usuli bor: ichki `<script>` bloki, `src` orqali tashqi `.js` fayl va modul skripti. Tegni qayerga qo‘yishingiz ham muhim.',
        },
        { type: 'heading', text: '1. Tashqi fayl (tavsiya etiladi)' },
        {
          type: 'p',
          text: 'Kodni o‘z alohida `.js` faylida saqlab, `<script src="...">` bilan ulang. Bu mantiqni tuzilishdan ajratadi va brauzerga faylni keshlash imkonini beradi.',
        },
        {
          type: 'code',
          code: `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Mening sahifam</title>
  </head>
  <body>
    <h1>Salom</h1>

    <!-- skriptni <body> oxiriga ulang -->
    <script src="app.js"></script>
  </body>
</html>`,
        },
        {
          type: 'p',
          text: '`<script>` ni `<body>` oxiriga qo‘yish yuqoridagi HTML allaqachon tahlil qilingan bo‘lishini kafolatlaydi — yaʼni skript `<h1>` kabi elementlarni topa oladi.',
        },
        { type: 'heading', text: '2. Ichki <script> bloki' },
        {
          type: 'p',
          text: 'To‘g‘ridan-to‘g‘ri `<script>` va `</script>` orasiga yozilgan kod parser yetganda darhol ishlaydi. Kichik parchalar uchun qulay, lekin mantiqni markup bilan aralashtirib yuboradi.',
        },
        {
          type: 'code',
          code: `<!doctype html>
<html>
  <body>
    <script>
      console.log("Ichki skriptdan salom");
      const x = 2 + 2;
      console.log(x); // 4
    </script>
  </body>
</html>`,
        },
        { type: 'heading', text: '3. Modul skriptlari' },
        {
          type: 'p',
          text: '`type="module"` atributi `import`/`export` ishlashini va kechiktirilgan bajarilishni yoqadi. Modul skriptlari har doim kechiktiriladi, hujjat tahlil qilingandan keyin ishlaydi va faqat bir marta bajariladi.',
        },
        {
          type: 'code',
          code: `<!-- main.js import/export ishlatadi -->
<script type="module" src="main.js"></script>

<!-- modul skriptlari ichki ham bo‘lishi mumkin -->
<script type="module">
  import { greet } from './utils.js';
  console.log(greet('dunyo'));
</script>`,
        },
        { type: 'heading', text: 'defer va async' },
        {
          type: 'p',
          text: 'Odatiy `<script src>` yuklovchi paytida tahlilni to‘xtatadi. Ikki atribut buni hal qiladi:',
        },
        {
          type: 'list',
          items: [
            '`defer` — parallel yuklanadi, HAMMA hujjat tahlil qilingandan keyin tartibda ishlaydi',
            '`async` — parallel yuklanadi, tayyor bo‘lishi bilanoq ishlaydi, TARTIBNI saqlamaydi',
          ],
        },
        {
          type: 'code',
          code: `<!-- sahifa tahlil qilingandan keyin, tartibda ishlaydi -->
<script defer src="a.js"></script>
<script defer src="b.js"></script>

<!-- har bir yuklov tugashi bilanoq ishlaydi -->
<script async src="widget.js"></script>`,
        },
        {
          type: 'note',
          text: 'Butun DOM kerak bo‘lgan skriptlar uchun `defer` ishlating. Mustaqil skriptlar (masalan tahlil kodi) uchun `async` ishlating. `<head>` dagi oddiy `<script>` renderlashni to‘xtatadi — iloji bo‘lsa yoqlamang.',
        },
        {
          type: 'p',
          text: 'Agar skript yuklanmasa yoki xato bersa, brauzer uni konsolda yozadi va sahifani chizishda davom etadi. Konsol — bu sizning birinchi tuzatish vositangiz.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'Haqiqiy sahifada JavaScriptni yuklashning tavsiya etilgan usuli qaysi?',
          options: [
            '`<script src="app.js">` bilan tashqi fayl',
            'Hammasini komentariyaga yozish',
            'Har sahifada takrorlanuvchi ichki `<script>`',
            '`<style>` tegi',
          ],
          answer: 0,
          explain:
            'Tashqi fayllar kodni ajratadi, brauzer ularni keshlaydi va faqat bir marta yuklaydi. Ichki skriptlar kichik parchalar uchun yaxshi.',
        },
        {
          type: 'mc',
          question: 'NEGA `<script src>` ni `<body>` oxiriga qo‘yiladi?',
          options: [
            'Skript HTML tahlil qilinishidan oldin ishlashi uchun',
            'Skript ishga tushganda yuqoridagi HTML allaqachon tahlil qilingan bo‘lishi uchun',
            'Qayerda turishi muhim emas',
            'Fayl tezroq yuklanishi uchun',
          ],
          answer: 1,
          explain:
            'Body oxiridagi skript ishga tushganda uning ustidagi DOM tahlil qilingan bo‘ladi, demak skript o‘sha elementlarga kira oladi.',
        },
        {
          type: 'tf',
          question: '`async` skript har doim butun sahifa tahlil qilingandan keyin, tartibni saqlab ishlaydi.',
          answer: 1,
          explain:
            'Bu `defer` ning xossasi. `async` yuklov tugagani zahoti, tartibsiz ishlaydi.',
        },
        {
          type: 'mc',
          question: '`type="module"` nima bilan ishlashni yoqadi?',
          options: ['Tez animatsiyalar', '`import` va `export` buyruqlari', 'Ichki komentariyalar', 'Ichki CSS'],
          answer: 1,
          explain:
            'Modul skriptlari ES modul sintaksisini (`import`/`export`) qo‘llab-quvvatlaydi, har doim kechiktiriladi va bitta marta ishlaydi.',
        },
      ],
    },
    {
      id: 'variables',
      title: 'O‘zgaruvchilar va konstantalar',
      intro:
        'O‘zgaruvchilar — qiymatlarni saqlovchi nomlangan qutilar. Ularni yaratish uchun `let`, `const` va `var` so‘zlari ishlatiladi.',
      blocks: [
        {
          type: 'p',
          text: '`let` bilan o‘zgaruvchi eʼlon qiling, so‘ng `=` bilan qiymat bering. Keyinroq qiymatni o‘zgartirish mumkin.',
        },
        {
          type: 'code',
          code: `let greeting = "salom"; // e'lon qilish va qiymat berish
console.log(greeting);

greeting = "xayr"; // qayta qiymat berish
console.log(greeting);`,
        },
        {
          type: 'p',
          text: '`const` (constant qisqartmasi) ham o‘zgaruvchi eʼlon qiladi, lekin yaratilgandan keyin unga qayta qiymat berib bo‘lmaydi. Odatiy holatda `const` ishlating.',
        },
        {
          type: 'code',
          code: `const pi = 3.14159;
console.log(pi);   // 3.14159

pi = 3; // TypeError: konstantaga qayta qiymat berib bo‘lmaydi`,
        },
        {
          type: 'p',
          text: '`var` — o‘zgaruvchi eʼlon qilishning eski usuli. U ishlaydi, lekin uning scope (doira) qoidalari xatolarga sabab bo‘ladi, shu sababli zamonaviy JavaScript `let` va `const`ni afzal ko‘radi.',
        },
        { type: 'heading', text: 'Nomlash qoidalari' },
        {
          type: 'list',
          items: [
            'Nomlar harflar, raqamlar, `_` va `$` dan iborat bo‘lishi mumkin, lekin raqam bilan boshlanmaydi',
            'Nomlar katta-kichik harfga sezgir: `count` va `Count` — turli o‘zgaruvchilar',
            'Ko‘p so‘zli nomlar uchun camelCase ishlating: `totalPrice`, `userName`',
            'Zaxiralangan so‘zlarni (`if`, `for`, `class`) nom sifatida ishlatmang',
          ],
        },
        {
          type: 'note',
          text: 'Faqat o‘qiladigan, qayta qiymat berilmaydigan o‘zgaruvchi `const` bo‘lishi kerak. Qayta qiymat beriladigan o‘zgaruvchi (masalan tsikldagi hisoblagich) `let` bo‘ladi. `var` odatda ishlatilmaydi.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'Qaysi o‘zgaruvchiga qayta qiymat berib bo‘lmaydi?',
          options: ['`let`', '`const`', '`var`', 'Ham `const`, ham `let`'],
          answer: 1,
          explain:
            '`const` qayta qiymat berib bo‘lmaydigan bog‘lash eʼlon qiladi. `let` va `var` qayta qiymat olishi mumkin.',
        },
        {
          type: 'tf',
          question: '`speed` va `Speed` — bitta o‘zgaruvchi.',
          answer: 1,
          explain:
            'JavaScript nomlari katta-kichik harfga sezgir, shuning uchun `speed` va `Speed` ikki xil o‘zgaruvchi.',
        },
        {
          type: 'mc',
          question: 'Qaysi nom to‘g‘ri va tavsiya etilgan uslubda?',
          options: ['`total price`', '`2fast`', '`totalPrice`', '`if`'],
          answer: 2,
          explain:
            '`totalPrice` camelCase uslubiga va nomlash qoidalariga mos. Bo‘sh joy va boshida raqam yaroqsiz, `if` esa zaxiralangan.',
        },
      ],
    },
    {
      id: 'data-types',
      title: 'Maʼlumot turlari',
      intro:
        'JavaScript dagi har bir qiymat maʼlum turga ega. Yettita primitiv turni tushunish hammasining poydevoridir.',
      blocks: [
        {
          type: 'p',
          text: 'JavaScript da yettita primitiv tur va obyektlar bor. Primitiv — bu obyekt bo‘lmagan, o‘z metodlariga ega bo‘lmagan qiymat.',
        },
        { type: 'heading', text: 'Primitiv turlar' },
        {
          type: 'list',
          items: [
            '`string` — matn: `"hi"`, `\'hi\'`, `` `hi` ``',
            '`number` — butun va kasr sonlar: `42`, `3.14`, `-7`',
            '`boolean` — `true` yoki `false`',
            '`undefined` — hali qiymat berilmagan',
            '`null` — ataylab bo‘sh qiymat',
            '`bigint` — juda katta butun sonlar, oxirida `n`: `123n`',
            '`symbol` — noyob identifikatorlar',
          ],
        },
        {
          type: 'code',
          code: `console.log(typeof "hello"); // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object" (tarixiy xususiyat)
console.log(typeof 42n);      // "bigint"
console.log(typeof {});       // "object"`,
        },
        {
          type: 'p',
          text: '`typeof` operatori qiymat turini satr sifatida qaytaradi. Bundan tashqari, `typeof null` → `"object"` — tilning dastlabki davridan qolgan va moslik uchun saqlanayotgan xato.',
        },
        { type: 'heading', text: 'undefined va null' },
        {
          type: 'p',
          text: '`undefined` — «hali qiymat yo‘q» degani: eʼlon qilingan, lekin qiymat berilmagan o‘zgaruvchi yoki mavjud bo‘lmagan xossa. `null` — siz o‘zingiz qo‘ygan «ataylab bo‘sh qiymat».',
        },
        {
          type: 'code',
          code: `let nothing;              // undefined: qiymat berilmagan
console.log(nothing);

const empty = null;       // null: ataylab bo‘sh
console.log(empty);`,
        },
        {
          type: 'note',
          text: '`==` va `===` turlicha ishlaydi: `==` yumshoq taqqoslaydi (turlar o‘zgartiriladi), `===` qatʼiy taqqoslaydi (turlar mos bo‘lishi shart). Buni operatorlar darsida o‘rganasiz.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'JavaScript da nechta primitiv tur bor?',
          options: ['5', '6', '7', 'Cheksiz'],
          answer: 2,
          explain:
            'Yettita primitiv bor: string, number, boolean, undefined, null, bigint va symbol.',
        },
        {
          type: 'code',
          question: '`typeof null` qanday chiqadi?',
          code: `console.log(typeof null);`,
          options: ['"null"', '"undefined"', '"object"', '"boolean"'],
          answer: 2,
          explain:
            'Tarixiy o‘ziga xoslik: `typeof null` — "object" hisoblanadi, garchi null primitiv bo‘lsa ham.',
        },
        {
          type: 'mc',
          question: 'O‘zgaruvchiga `null` ni qachon berish kerak?',
          options: [
            'O‘zgaruvchi hech qachon ishlatilmaganida',
            'Qiymat ataylab bo‘sh ekanini belgila moqchi bo‘lganimizda',
            '"n" harfini son oldiga qo‘yish kerak bo‘lganda',
            'Hech qachon, JavaScript da `null` mavjud emas',
          ],
          answer: 1,
          explain:
            '`null` — «men bu yerga hech narsa saqlashni tanladim» degan aniq belgi. `undefined` esa avtomatik «hech qachon qiymat berilmagan» degani.',
        },
      ],
    },
    {
      id: 'operators',
      title: 'Operatorlar',
      intro:
        'Operatorlar qiymatlardan yangi qiymatlar hosil qiladi. Arifmetik, taqqoslash, mantiqiy va tayinlash operatorlari deyarli har bir satrda uchraydi.',
      blocks: [
        { type: 'heading', text: 'Arifmetika' },
        {
          type: 'code',
          code: `console.log(5 + 2); // 7  qo‘shish
console.log(5 - 2); // 3  ayirish
console.log(5 * 2); // 10 ko‘paytirish
console.log(5 / 2); // 2.5 bo‘lish
console.log(5 % 2); // 1  qoldiq (modul)
console.log(2 ** 3); // 8 daraja`,
        },
        { type: 'heading', text: 'Taqqoslash' },
        {
          type: 'code',
          code: `console.log(5 > 3);  // true
console.log(5 <= 5); // true
console.log(5 == "5");  // true  (yumshoq: tur o‘zgaradi)
console.log(5 === "5"); // false (qat'iy: tur bo‘yicha)
console.log(5 !== "5"); // true  (qat'iy teng emas)`,
        },
        {
          type: 'p',
          text: 'Har doim `===` va `!==` ni afzal ko‘ring. Yumshoq `==` va `!=` orqasida tur o‘zgartirish yashiringan: masalan `0 == false` to‘g‘ri bo‘lib chiqadi.',
        },
        { type: 'heading', text: 'Mantiqiy' },
        {
          type: 'code',
          code: `console.log(true && false); // false  VA: ikkalasi
console.log(true || false); // true   YOKI: bittasi
console.log(!true);         // false  EMAS: teskarisi`,
        },
        {
          type: 'p',
          text: 'Mantiqiy operatorlar har doim boolean qaytarmaydi. `a || b` agar `a` truthy bo‘lsa `a`, aks holda `b` ni qaytaradi. `a && b` agar `a` falsy bo‘lsa `a`, aks holda `b` ni qaytaradi. Bu standart qiymat berishda ishlatiladi.',
        },
        {
          type: 'code',
          code: `const name = "" || "mehmon"; // "" falsy, demak name = "mehmon"
console.log(name);

const loggedIn = true && "xush kelibsiz";
console.log(loggedIn); // "xush kelibsiz"`,
        },
        { type: 'heading', text: 'Tayinlash va qisqartma' },
        {
          type: 'code',
          code: `let n = 10;
n += 5;  // n = n + 5  -> 15
n -= 3;  // n = n - 3  -> 12
n *= 2;  // n = n * 2  -> 24
n++;     // n = n + 1  -> 25
n--;     // n = n - 1  -> 24
console.log(n);`,
        },
        {
          type: 'note',
          text: '`++` va `--` prefix va postfix shaklga ega. `x++` eski qiymatni qaytarib keyin oshiradi; `++x` avval oshirib yangi qiymatni qaytaradi. Kamdan-kam ahamiyatli, lekin hayratlanarli ifodalarni tushuntiradi.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'Bu nima chiqaradi?',
          code: `console.log(2 ** 3 + 1);`,
          options: ['9', '7', '11', '24'],
          answer: 0,
          explain:
            'Daraja (`2 ** 3`) qo‘shishdan oldin hisoblanadi: `8 + 1 = 9`.',
        },
        {
          type: 'mc',
          question: 'NEGA `===` ni `==` dan afzal ko‘riladi?',
          options: [
            'Har bir brauzerda tezroq',
            'Qiymat va turni birga taqqoslab, avtomatik tur o‘zgartirishni oldini oladi',
            'Ko‘proq maʼlumot turi bilan ishlaydi',
            'Booleanlarni faqat u taqqoslay oladi',
          ],
          answer: 1,
          explain:
            '`===` qiymat VA turni teng talab qiladi, shuning uchun `0 === false` — false, `0 == false` esa true.',
        },
        {
          type: 'code',
          question: 'Bu nima chiqaradi?',
          code: `console.log(5 % 2);`,
          options: ['2.5', '0', '1', '2'],
          answer: 2,
          explain: '`%` qoldiq operatori: 5 ni 2 ga bo‘lganda qoldiq 1.',
        },
      ],
    },
  ],
}