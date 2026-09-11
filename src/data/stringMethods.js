export const stringMethods = {
  id: 'string-methods',
  title: 'String methods',
  intro:
    'Every string is equipped with methods for searching, slicing, transforming, and comparing text. This page explains each one.',
  blocks: [
    {
      type: 'p',
      text: 'Strings are immutable: every method returns a new string and never changes the original. The methods are grouped by what they do.',
    },
    { type: 'heading', text: 'Looking things up' },
    {
      type: 'p',
      text: '`indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith`, and `at` find text or positions. They are the fast, readable way to search a string.',
    },
    { type: 'heading', text: 'Transforming' },
    {
      type: 'p',
      text: '`toUpperCase`, `toLowerCase`, `trim`, `padStart`, `padEnd`, `repeat`, and `replace` build new strings from existing ones.',
    },
    { type: 'heading', text: 'Slicing and splitting' },
    {
      type: 'p',
      text: '`slice`, `substring`, and `split` cut strings into smaller pieces.',
    },
  ],
  methods: [
    {
      name: 'at()',
      syntax: 'string.at(index)',
      desc: 'Returns the character at the given index, supporting negative indexes to count from the end.',
      code: `const s = "hello";
console.log(s.at(1));    // "e"
console.log(s.at(-1));   // "o"  (last character)
console.log(s.at(-2));   // "l"`,
    },
    {
      name: 'charAt()',
      syntax: 'string.charAt(index)',
      desc: 'Returns the character at the given index. Returns an empty string for indexes outside the string.',
      code: `const s = "hello";
console.log(s.charAt(0)); // "h"
console.log(s.charAt(9)); // ""  (out of range)`,
      note: '`at()` also accepts negative indexes; `charAt()` does not.',
    },
    {
      name: 'charCodeAt()',
      syntax: 'string.charCodeAt(index)',
      desc: 'Returns the UTF-16 code unit (a number between 0 and 65535) at the given index.',
      code: `const s = "A";
console.log(s.charCodeAt(0)); // 65  (Unicode code for "A")`,
    },
    {
      name: 'codePointAt()',
      syntax: 'string.codePointAt(index)',
      desc: 'Like `charCodeAt`, but reads the full code point at the index, including characters outside the BMP such as emoji. Better for international text.',
code: `const s = "A";
console.log(s.codePointAt(0)); // 65
const heart = "\\u{1F493}"; // a heart character outside the BMP
console.log(heart.codePointAt(0)); // 128147`,
    },
    {
      name: 'concat()',
      syntax: 'string.concat(str1, str2, ...)',
      desc: 'Joins one or more strings together into a new string. The `+` operator or template literals are preferred in modern code.',
      code: `const a = "Hello";
const b = a.concat(" ", "world");
console.log(b); // "Hello world"`,
    },
    {
      name: 'endsWith()',
      syntax: 'string.endsWith(searchString, endLength?)',
      desc: 'Returns true if the string ends with the given substring. An optional length limits how much of the string to consider.',
      code: `const file = "photo.jpg";
console.log(file.endsWith(".jpg"));  // true
console.log(file.endsWith(".png"));  // false`,
    },
    {
      name: 'includes()',
      syntax: 'string.includes(searchString, position?)',
      desc: 'Returns true if the substring appears anywhere at or after the given position (default 0). Case-sensitive.',
      code: `const s = "JavaScript is fun";
console.log(s.includes("fun"));   // true
console.log(s.includes("Java"));  // true
console.log(s.includes("java"));  // false (case-sensitive)`,
    },
    {
      name: 'indexOf()',
      syntax: 'string.indexOf(searchString, position?)',
      desc: 'Returns the index of the first occurrence of the substring, or -1 if it is not found.',
      code: `const s = "banana";
console.log(s.indexOf("a")); // 1  (first "a")
console.log(s.indexOf("n")); // 2
console.log(s.indexOf("z")); // -1 not found`,
    },
    {
      name: 'lastIndexOf()',
      syntax: 'string.lastIndexOf(searchString, position?)',
      desc: 'Returns the index of the last occurrence of the substring, or -1 if it is not found.',
      code: `const s = "banana";
console.log(s.lastIndexOf("a")); // 5  (last "a")`,
    },
    {
      name: 'localeCompare()',
      syntax: 'string.localeCompare(otherString)',
      desc: 'Compares two strings according to the user\'s locale. Returns a negative number, zero, or a positive number for sorting.',
      code: `const a = "apple";
const b = "banana";
console.log(a.localeCompare(b)); // negative: a sorts first
console.log(b.localeCompare(a)); // positive: b sorts last
console.log(a.localeCompare(a)); // 0: equal`,
    },
    {
      name: 'match()',
      syntax: 'string.match(regexp)',
      desc: 'Matches the string against a regular expression. Returns an array of matches for a global regex, or the first match (with capture groups) otherwise. Returns null if there is no match.',
      code: `const phrase = "The rain in Spain";
const g = phrase.match(/[a-z]+/g);
console.log(g); // ["he", "rain", "in", "pain"]

const single = phrase.match(/[A-Z]/);
console.log(single); // matches "T"`,
    },
    {
      name: 'matchAll()',
      syntax: 'string.matchAll(regexp)',
      desc: 'Returns an iterator of all matches, each including capture groups. The regex must have the global flag. Use `Array.from(...)` or a `for...of` loop to consume it.',
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
      desc: 'Normalizes Unicode text so that canonically equivalent character sequences become identical. Useful when comparing accent-heavy or combined-character text.',
      code: `const a = "\\u00E9"; // é  (precomposed)
const b = "e\\u0301"; // e + combining accent
console.log(a === b);          // false
console.log(a.normalize() === b.normalize()); // true`,
    },
    {
      name: 'padEnd()',
      syntax: 'string.padEnd(targetLength, padString?)',
      desc: 'Pads the end of the string until it reaches the target length, using the pad string (default a space).',
      code: `const order = "42";
console.log(order.padEnd(5, "0")); // "42000"
console.log("hi".padEnd(6, "."));  // "hi...."`,
    },
    {
      name: 'padStart()',
      syntax: 'string.padStart(targetLength, padString?)',
      desc: 'Pads the start of the string until it reaches the target length. Great for zero-padding numbers.',
      code: `const n = "7";
console.log(n.padStart(3, "0")); // "007"
console.log("clock".padStart(8, "-")); // "---clock"`,
    },
    {
      name: 'repeat()',
      syntax: 'string.repeat(count)',
      desc: 'Returns a new string with the original repeated the given number of times.',
      code: `console.log("ab".repeat(3)); // "ababab"
console.log("> ".repeat(2));   // "> > "`,
    },
    {
      name: 'replace()',
      syntax: 'string.replace(pattern, replacement)',
      desc: 'Replaces the first occurrence of the pattern (a string or regex) with the replacement. Only the FIRST match is replaced unless the regex has the global flag.',
      code: `const s = "cat and cat";
console.log(s.replace("cat", "dog")); // "dog and cat"
console.log(s.replace(/cat/g, "dog")); // "dog and dog"

const t = "hello";
console.log(t.replace("hello", (m) => m.toUpperCase())); // "HELLO"`,
    },
    {
      name: 'replaceAll()',
      syntax: 'string.replaceAll(pattern, replacement)',
      desc: 'Replaces every occurrence of the pattern. When the pattern is a string, it replaces ALL matches without needing a global regex.',
      code: `const s = "cat and cat";
console.log(s.replaceAll("cat", "dog")); // "dog and dog"

const t = "2024-01-15";
console.log(t.replaceAll("-", "/")); // "2024/01/15"`,
    },
    {
      name: 'search()',
      syntax: 'string.search(regexp)',
      desc: 'Returns the index of the first match of a regular expression, or -1 if there is no match. Unlike `indexOf`, it accepts a regex.',
      code: `const s = "today is the 5th";
console.log(s.search(/\\d+/)); // 12  index of "5"`,
    },
    {
      name: 'slice()',
      syntax: 'string.slice(start, end?)',
      desc: 'Returns a substring from `start` to `end` (exclusive). Negative indexes count from the end. Does not include `end`.',
      code: `const s = "JavaScript";
console.log(s.slice(0, 4));  // "Java"
console.log(s.slice(4));     // "Script"
console.log(s.slice(-6));    // "Script"
console.log(s.slice(-6, -1)); // "Scrip"`,
    },
    {
      name: 'split()',
      syntax: 'string.split(separator, limit?)',
      desc: 'Splits the string into an array of substrings on every occurrence of the separator. An empty separator splits into characters.',
      code: `const csv = "a,b,c";
console.log(csv.split(","));  // ["a", "b", "c"]
console.log("hello".split("")); // ["h","e","l","l","o"]`,
    },
    {
      name: 'startsWith()',
      syntax: 'string.startsWith(searchString, position?)',
      desc: 'Returns true if the string starts with the given substring. An optional position tells it where to start looking.',
      code: `const s = "JavaScript";
console.log(s.startsWith("Java"));  // true
console.log(s.startsWith("Script")); // false
console.log(s.startsWith("Script", 4)); // true`,
    },
    {
      name: 'substring()',
      syntax: 'string.substring(start, end?)',
      desc: 'Like `slice`, but negative indexes are treated as 0, and if `start` is greater than `end` the two are swapped. Prefer `slice` for predictable behavior.',
      code: `const s = "JavaScript";
console.log(s.substring(0, 4));  // "Java"
console.log(s.substring(4));     // "Script"
console.log(s.substring(-3));    // "JavaScript" (negatives become 0)`,
    },
    {
      name: 'toLowerCase()',
      syntax: 'string.toLowerCase()',
      desc: 'Returns a new string with every character converted to lowercase. The original is unchanged.',
      code: `console.log("HELLO World".toLowerCase()); // "hello world"`,
    },
    {
      name: 'toUpperCase()',
      syntax: 'string.toUpperCase()',
      desc: 'Returns a new string with every character converted to uppercase.',
      code: `console.log("hello World".toUpperCase()); // "HELLO WORLD"`,
    },
    {
      name: 'toLocaleLowerCase() / toLocaleUpperCase()',
      syntax: 'string.toLocaleLowerCase()',
      desc: 'Case conversion that respects locale-specific mappings, such as the Turkish dotted/dotless "i". Usually matches `toLowerCase` for English.',
      code: `console.log("ISTANBUL".toLocaleLowerCase("tr"));
// "ıstanbul" with the Turkish dotless i`,
    },
    {
      name: 'trim()',
      syntax: 'string.trim()',
      desc: 'Removes whitespace (spaces, tabs, newlines) from both ends of the string. Does not change the middle.',
      code: `const s = "  padded  ";
console.log(s.trim()); // "padded"
console.log(s.length);  // 10 original untouched`,
    },
    {
      name: 'trimStart()',
      syntax: 'string.trimStart()',
      desc: 'Removes whitespace only from the start of the string.',
      code: `console.log("  hi there  ".trimStart()); // "hi there  "`,
    },
    {
      name: 'trimEnd()',
      syntax: 'string.trimEnd()',
      desc: 'Removes whitespace only from the end of the string.',
      code: `console.log("  hi there  ".trimEnd()); // "  hi there"`,
    },
    {
      name: 'toString() / valueOf()',
      syntax: 'string.toString()',
      desc: 'Both return the string itself. These exist so strings behave consistently with objects in conversions.',
      code: `const s = "abc";
console.log(s.toString()); // "abc"
console.log(s.valueOf());  // "abc"`,
    },
    {
      name: 'String.fromCharCode()',
      syntax: 'String.fromCharCode(num1, num2, ...)',
      desc: 'Static method. Builds a string from one or more UTF-16 code unit numbers.',
      code: `console.log(String.fromCharCode(72, 105)); // "Hi"`,
    },
    {
      name: 'String.fromCodePoint()',
      syntax: 'String.fromCodePoint(num1, ...)',
      desc: 'Static method. Builds a string from full Unicode code points, including emoji and other astral characters.',
      code: `console.log(String.fromCodePoint(65));      // "A"
console.log(String.fromCodePoint(128512)); // "�"`,
    },
    {
      name: 'String.raw()',
      syntax: 'String.raw`template literal`',
      desc: 'Static method. Returns the raw (unescaped) text of a template literal, so backslashes are kept literally.',
      code: `const raw = String.raw\`line1\\nline2\`;
console.log(raw.includes("\\\\n")); // true, backslash kept`,
    },
  ],
  quiz: [
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log("hello world".includes("world"));`,
      options: ['true', 'false', '"world"', 'An error'],
      answer: 0,
      explain: '`includes` returns boolean true when the substring appears anywhere.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const s = "abcd";
console.log(s.slice(1, 3));`,
      options: ['"bcd"', '"bc"', '"cd"', '"bd"'],
      answer: 1,
      explain: '`slice(1,3)` starts at index 1 ("b") and stops BEFORE index 3, so it returns "bc".',
    },
    {
      type: 'mc',
      question: 'Why is `at(-1)` often preferred over `charAt(len-1)`?',
      options: [
        '`at()` supports negative indexes from the end',
        '`charAt` does not exist',
        '`at()` returns an array',
        '`charAt` mutates the string',
      ],
      answer: 0,
      explain: '`at(-1)` reads from the end directly; `charAt` only accepts non-negative indexes.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const list = "1,2,3";
console.log(list.split(",").length);`,
      options: ['1', '2', '3', '4'],
      answer: 2,
      explain: 'Splitting "1,2,3" on "," produces the array ["1","2","3"], length 3.',
    },
    {
      type: 'tf',
      question: '`"cat".replace("t", "r")` changes the string permanently to "car".',
      answer: 1,
      explain: 'Strings are immutable. `replace` returns a NEW string; the original "cat" is unchanged.',
    },
  ],
}