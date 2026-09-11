export const jsonMethods = {
  id: 'json-methods',
  title: 'JSON methods',
  intro:
    'JSON (JavaScript Object Notation) is the standard format for exchanging data between a browser and a server. The JSON object has exactly two methods.',
  blocks: [
    { type: 'heading', text: 'The two methods' },
    {
      type: 'p',
      text: '`JSON.stringify` turns a value into a JSON string. `JSON.parse` turns a JSON string back into a value. Everything else built on top of JSON uses these two.',
    },
    {
      type: 'note',
      text: 'JSON is a subset of JavaScript syntax. Comments and trailing commas are NOT allowed. Keys must be double-quoted strings.',
    },
  ],
  methods: [
    {
      name: 'JSON.stringify()',
      syntax: 'JSON.stringify(value, replacer?, space?)',
      desc: 'Converts a value into a JSON string. Returns undefined for values that cannot be serialized (functions, symbols, undefined).',
      code: `const user = { name: "Ada", age: 36, roles: ["admin"] };
console.log(JSON.stringify(user));
// {"name":"Ada","age":36,"roles":["admin"]}

console.log(JSON.stringify({ a: 1 }, null, 2));
// pretty-printed with 2-space indentation`,
    },
    {
      name: 'stringify: what is serializable',
      syntax: 'JSON.stringify(value)',
      desc: 'Objects, arrays, strings, numbers, booleans, and null serialize. Functions, symbols, and undefined values are omitted or replaced with null in arrays.',
      code: `console.log(JSON.stringify({ a: undefined, b: () => 1, c: null }));
// {"c":null}
console.log(JSON.stringify([1, undefined, 3]));
// [1,null,3]`,
    },
    {
      name: 'stringify: replacer function',
      syntax: 'JSON.stringify(value, replacer)',
      desc: 'The second argument filters or transforms every key/value pair before serialization.',
      code: `const user = { name: "Ada", secret: "hunter2", age: 36 };
const cleaned = JSON.stringify(user, (key, val) =>
  key === "secret" ? undefined : val
);
console.log(cleaned);
// {"name":"Ada","age":36}  -- secret removed`,
    },
    {
      name: 'stringify: toJSON on objects',
      syntax: 'value.toJSON()',
      desc: 'If a value or one of its properties has a `toJSON` method, it is called during serialization and its return value is used instead.',
      code: `const point = {
  x: 3, y: 4,
  toJSON() { return \`(\${this.x},\${this.y})\`; },
};
console.log(JSON.stringify(point));
// "(3,4)" -- Date uses the same hook`,
    },
    {
      name: 'JSON.parse()',
      syntax: 'JSON.parse(text, reviver?)',
      desc: 'Parses a JSON string and returns the corresponding JavaScript value. Throws a SyntaxError if the text is not valid JSON.',
      code: `const raw = '{"name":"Ada","age":36}';
const user = JSON.parse(raw);
console.log(user.name); // "Ada"
console.log(typeof user); // "object"`,
    },
    {
      name: 'parse: reviver function',
      syntax: 'JSON.parse(text, reviver)',
      desc: 'The optional reviver is called for each key/value pair and can transform the parsed result. This is how dates and numbers get "revived".',
      code: `const raw = '{"when": "2024-01-15T00:00:00Z"}';
const obj = JSON.parse(raw, (key, value) => {
  if (key === "when") return new Date(value);
  return value;
});
console.log(obj.when instanceof Date); // true`,
    },
    {
      name: 'Handling invalid JSON',
      syntax: 'try { JSON.parse(text) } catch (e) {}',
      desc: '`JSON.parse` throws on invalid input. Wrap calls in try/catch (or return a fallback) when parsing untrusted data.',
      code: `const safeParse = (text) => {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};
console.log(safeParse('{bad json'));  // null
console.log(safeParse('{"ok":1}')); // { ok: 1 }`,
    },
  ],
  quiz: [
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(JSON.stringify({ name: "Ada", age: 36 }));`,
      options: [
        '{name:"Ada",age:36}',
        '{"name":"Ada","age":36}',
        "[object Object]",
        'An error (functions cannot be serialized)',
      ],
      answer: 1,
      explain: 'JSON stringifies keys double-quoted: {"name":"Ada","age":36}.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const data = JSON.parse('{"count": 5}');
console.log(data.count + 1);`,
      options: ['6', '"51"', 'NaN', 'An error'],
      answer: 0,
      explain: '`JSON.parse` returns real numbers, so 5 + 1 = 6.',
    },
    {
      type: 'mc',
      question: 'Which value can JSON.stringify serialize?',
      options: ['A function', 'A Symbol', 'A plain object', '`undefined` at the top level'],
      answer: 2,
      explain:
        'Plain objects serialize fine. Functions, symbols, and top-level undefined return undefined from stringify.',
    },
    {
      type: 'tf',
      question: 'JSON allows trailing commas and comments.',
      answer: 1,
      explain: 'JSON is strictly a subset of JavaScript — no trailing commas, no comments.',
    },
  ],
}

export const promiseMethods = {
  id: 'promise-methods',
  title: 'Promise methods',
  intro:
    'A Promise represents a value that will exist later. It starts pending, then settles as fulfilled (with a value) or rejected (with a reason). This page explains how to attach callbacks and combine promises.',
  blocks: [
    { type: 'heading', text: 'The basic flow' },
    {
      type: 'code',
      code: `const promise = fetch("/api/users");

promise
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("done"));`,
    },
    {
      type: 'note',
      text: 'Modern code usually consumes promises with `async`/`await` instead of chaining. Understanding `then`/`catch` is still essential, because `await` compiles down to the same machinery.',
    },
  ],
  methods: [
    {
      name: 'then()',
      syntax: 'promise.then(onFulfilled, onRejected?)',
      desc: 'Registers a function to run when the promise FULFILLS (succeeds). Returns a new promise that resolves to whatever the handler returns.',
      code: `Promise.resolve(42)
  .then((value) => value * 2)
  .then((doubled) => console.log(doubled)); // 84`,
    },
    {
      name: 'catch()',
      syntax: 'promise.catch(onRejected)',
      desc: 'Registers a function to run when the promise REJECTS (fails). Returns a new promise, so chains continue after an error is caught.',
      code: `Promise.reject(new Error("boom"))
  .catch((err) => {
    console.log("caught:", err.message);
    return "recovery value";
  })
  .then((v) => console.log(v)); // "recovery value"`,
    },
    {
      name: 'finally()',
      syntax: 'promise.finally(onFinally)',
      desc: 'Runs a callback whether the promise fulfilled OR rejected. Often used to clean up (hide spinners, close connections). Does not receive the value or the error.',
      code: `let spinner = true;
Promise.resolve("ok")
  .finally(() => { spinner = false; })
  .then(console.log); // "ok" after cleanup`,
    },
    {
      name: 'Promise.resolve()',
      syntax: 'Promise.resolve(value)',
      desc: 'Static method. Returns a promise that already fulfills with the given value (or passes through a promise unchanged). Useful for tests and for normalizing async paths.',
      code: `const p = Promise.resolve("instant");
p.then(console.log); // "instant"`,
    },
    {
      name: 'Promise.reject()',
      syntax: 'Promise.reject(reason)',
      desc: 'Static method. Returns a promise that immediately rejects with the given reason.',
      code: `const p = Promise.reject(new Error("nope"));
p.catch((err) => console.log(err.message)); // "nope"`,
    },
    {
      name: 'Promise.all()',
      syntax: 'Promise.all(iterable)',
      desc: 'Waits for ALL promises to fulfill. Resolves with an array of the results in order. Rejects immediately as soon as ANY promise rejects.',
      code: `const a = Promise.resolve(1);
const b = Promise.resolve(2);
Promise.all([a, b]).then(([x, y]) => {
  console.log(x + y); // 3
});`,
      note: 'Great for parallel fetches. One failure kills the whole result.',
    },
    {
      name: 'Promise.allSettled()',
      syntax: 'Promise.allSettled(iterable)',
      desc: 'Waits for ALL promises to settle (fulfill OR reject) and reports the outcome of each one. Never rejects, which makes it ideal for bulk work where partial failure is acceptable.',
      code: `Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(new Error("bad")),
]).then((results) => {
  console.log(results[0].status); // "fulfilled"
  console.log(results[1].status); // "rejected"
});`,
    },
    {
      name: 'Promise.any()',
      syntax: 'Promise.any(iterable)',
      desc: 'Resolves with the FIRST promise that fulfills. Rejects only if ALL promises reject (with an AggregateError). Ideal for racing several sources and taking the first that works.',
      code: `Promise.any([
  Promise.reject(new Error("cdn down")),
  Promise.resolve("from backup"),
]).then((v) => console.log(v)); // "from backup"`,
    },
    {
      name: 'Promise.race()',
      syntax: 'Promise.race(iterable)',
      desc: 'Resolves or rejects as soon as the FIRST promise settles — whether it fulfills OR rejects. Useful for timeouts.',
      code: `const timeout = (ms) =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), ms)
  );

Promise.race([
  slowRequest(),
  timeout(3000),
]).catch((err) => console.log(err.message)); // "timeout"`,
    },
    {
      name: 'The Promise constructor',
      syntax: 'new Promise((resolve, reject) => { ... })',
      desc: 'Low-level constructor used when the async work is not already promise-based. Call `resolve(value)` to fulfill or `reject(reason)` to fail. Prefer wrapping only legacy callback APIs.',
      code: `const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

await wait(1000); // "pauses" this async function`,
    },
    {
      name: 'async / await',
      syntax: 'const value = await promise;',
      desc: 'Not methods, but the ergonomic way to read promises. `async` functions always return a promise; `await` suspends execution until a promise settles. Use `try/catch` to handle rejection.',
      code: `async function loadUser(id) {
  try {
    const res = await fetch("/api/user/" + id);
    const user = await res.json();
    return user;
  } catch (err) {
    console.error("Load failed", err);
    return null;
  }
}`,
      note: '`await` only works inside `async` functions (or at top level in modern modules).',
    },
  ],
  quiz: [
    {
      type: 'mc',
      question: 'Which method should you use to wait for every promise, succeeding or failing?',
      options: ['`Promise.all`', '`Promise.allSettled`', '`Promise.race`', '`Promise.first`'],
      answer: 1,
      explain:
        '`allSettled` never rejects; it reports the status of every promise. `all` rejects on the first failure.',
    },
    {
      type: 'code',
      question: 'What does the `finally` block return / receive?',
      options: ['The fulfilled value', 'The rejection error', 'Nothing usable — it exists for cleanup', 'A new promise value'],
      answer: 2,
      explain:
        '`finally` callbacks receive neither value nor error. They exist purely for cleanup, and the result passes straight through.',
    },
    {
      type: 'mc',
      question: 'What does `Promise.race([fast, slow])` resolve to when `slow` takes longer?',
      options: [
        'The result of `fast`',
        'The result of `slow`',
        'Both, combined into an array',
        'The one that resolves first — including its outcome',
      ],
      answer: 3,
      explain:
        '`race` settles with whatever settles first, whether that means fulfillment or rejection.',
    },
    {
      type: 'tf',
      question: 'An `async` function always returns a Promise even if it `return`s a plain value.',
      answer: 0,
      explain:
        'Async functions wrap their return value in a fulfilled Promise automatically.',
    },
  ],
}

export const regexpMethods = {
  id: 'regexp-methods',
  title: 'RegExp methods',
  intro:
    'A RegExp (regular expression) describes a pattern to search text. This page focuses on the RegExp object\'s own methods; the string methods that accept regexes are covered in String methods.',
  blocks: [
    { type: 'heading', text: 'Creating a regex' },
    {
      type: 'code',
      code: `// literal syntax -- recommended
const pattern = /ab+c/g;

// constructor -- use when the pattern is dynamic
const flags = "g";
const dynamic = new RegExp("ab+c", flags);`,
    },
    { type: 'heading', text: 'Core flags' },
    {
      type: 'list',
      items: [
        '`g` (global) — match all occurrences, not just the first',
        '`i` (ignoreCase) — case-insensitive matching',
        '`m` (multiline) — `^` and `$` match line starts/ends',
        '`u` (unicode) — treat the pattern as full Unicode',
      ],
    },
  ],
  methods: [
    {
      name: 'test()',
      syntax: 'regexp.test(string)',
      desc: 'Returns a boolean: true if the pattern matches anywhere in the string. The simplest regex check.',
      code: `console.log(/llo/.test("hello"));  // true
console.log(/xyz/.test("hello"));  // false
console.log(/^a/i.test("Ada"));    // true (case-insensitive)`,
    },
    {
      name: 'exec()',
      syntax: 'regexp.exec(string)',
      desc: 'Returns an array-like object with the match details, or null. Without the `g` flag it finds the first match; with `g` each call advances to the next match.',
      code: `const re = /\\d+/g;
const text = "order 3, total 42";
let m;
while ((m = re.exec(text)) !== null) {
  console.log(m[0]); // "3", then "42"
}`,
    },
    {
      name: 'exec(): capture groups',
      syntax: 'regexp.exec(string)',
      desc: 'The returned match has `index` (position), and indexes 1..n hold capture group contents. Named groups (`(?<name>...)`) appear under `groups`.',
      code: `const m = /(\\d{4})-(\\d{2})/.exec("date 2024-01-15");
console.log(m[0]);        // "2024-01"
console.log(m[1]);        // "2024"
console.log(m.index);     // 5`,
    },
    {
      name: 'toString()',
      syntax: 'regexp.toString()',
      desc: 'Returns the regular expression as its literal source string, including flags.',
      code: `console.log(/\\d+/gi.toString()); // "/\\d+/gi"`,
    },
    {
      name: 'properties: source, flags, lastIndex',
      syntax: 'regexp.lastIndex',
      desc: '`source` holds the pattern text, `flags` the flags, and `lastIndex` tracks where the NEXT `exec` with the `g` flag will start.',
      code: `const re = /ab+/g;
console.log(re.source); // "ab+"
console.log(re.flags);  // "g"
re.exec("xx abbb");
console.log(re.lastIndex); // 6  (just past the match)`,
    },
    {
      name: 'Character classes and quantifiers (quick reference)',
      syntax: 'pattern syntax',
      desc: 'The building blocks of patterns: `\\d` digit, `\\w` word char, `\\s` whitespace, `.` any char, `+` one or more, `*` zero or more, `?` zero or one, `{n,m}` between n and m.',
      code: `console.log(/\\d{3}-\\d{4}/.test("555-1234")); // true
console.log(/^[A-Z]{2}\\d{4}$/.test("AB1234"));  // true
console.log(/colou?r/.test("color"));            // true
console.log(/colou?r/.test("colour"));           // true`,
    },
  ],
  quiz: [
    {
      type: 'mc',
      question: 'Which method returns a plain boolean for "does the pattern match"?',
      options: ['`exec()`', '`test()`', '`match()`', '`compile()`'],
      answer: 1,
      explain: '`test()` returns true/false. `exec()` returns match details, and `match()` lives on strings.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(/^cats?$/.test("cat"));`,
      options: ['true', 'false', 'A match object', 'undefined'],
      answer: 0,
      explain:
        '`s?` makes the "s" optional, and the anchors require the whole string to match — so both "cat" and "cats" match.',
    },
    {
      type: 'mc',
      question: 'Which flag makes a regex match ALL occurrences, not just the first?',
      options: ['`i`', '`m`', '`g`', '`u`'],
      answer: 2,
      explain: 'The global flag `g` tells methods like `match` and `exec` to keep going after the first match.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(/\\d+/.test("abc123def"));`,
      options: ['true', 'false', '"123"', '0'],
      answer: 0,
      explain: '`test` returns true if the digit pattern appears ANYWHERE, and it does ("123").',
    },
  ],
}