export const arrayMethods = {
  id: 'array-methods',
  title: 'Array methods',
  intro:
    'Arrays ship with a rich toolkit: search, transform, filter, reduce, and more. This page explains each method in detail.',
  blocks: [
    {
      type: 'p',
      text: 'Array methods divide into two camps: those that MUTATE the array in place, and those that return a NEW array and leave the original alone. The functional methods (`map`, `filter`, `reduce`, `forEach`, ...) are the most important to master.',
    },
    { type: 'heading', text: 'Mutating vs non-mutating' },
    {
      type: 'p',
      text: '`push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, and `fill` change the array. `map`, `filter`, `slice`, `concat`, and the `to...` methods return new arrays.',
    },
    { type: 'heading', text: 'The big three' },
    {
      type: 'p',
      text: '`map` converts every element, `filter` keeps only the elements that pass a test, and `reduce` folds the whole array into one value. If you learn these three plus `forEach`, most array work becomes straightforward.',
    },
  ],
  methods: [
    {
      name: 'push()',
      syntax: 'array.push(...items)',
      desc: 'Adds items to the END of the array. Mutates the array and returns the new length.',
      code: `const a = [1, 2];
const len = a.push(3, 4);
console.log(a);   // [1, 2, 3, 4]
console.log(len); // 4`,
    },
    {
      name: 'pop()',
      syntax: 'array.pop()',
      desc: 'Removes and returns the LAST element. Mutates the array. Returns undefined on an empty array.',
      code: `const a = [1, 2, 3];
const last = a.pop();
console.log(last); // 3
console.log(a);    // [1, 2]`,
    },
    {
      name: 'shift()',
      syntax: 'array.shift()',
      desc: 'Removes and returns the FIRST element, shifting everything else left. Slower than `pop`, because every index must move.',
      code: `const a = [1, 2, 3];
const first = a.shift();
console.log(first); // 1
console.log(a);     // [2, 3]`,
    },
    {
      name: 'unshift()',
      syntax: 'array.unshift(...items)',
      desc: 'Adds items to the FRONT of the array. Mutates the array and returns the new length.',
      code: `const a = [2, 3];
const len = a.unshift(0, 1);
console.log(a);   // [0, 1, 2, 3]
console.log(len); // 4`,
    },
    {
      name: 'at()',
      syntax: 'array.at(index)',
      desc: 'Returns the element at the given index. Negative indexes count from the end, making `arr.at(-1)` the last element.',
      code: `const a = [10, 20, 30];
console.log(a.at(0));  // 10
console.log(a.at(-1)); // 30`,
    },
    {
      name: 'length',
      syntax: 'array.length',
      desc: 'A property, not a method. Holds the number of elements. Setting it lower truncates the array; setting it higher pads with empty slots.',
      code: `const a = [1, 2, 3];
console.log(a.length); // 3
a.length = 1;
console.log(a); // [1]`,
    },
    {
      name: 'concat()',
      syntax: 'array.concat(...values)',
      desc: 'Returns a NEW array that combines the original with the given arrays or values. Does not mutate. The spread operator `[...arr]` does the same job and is preferred.',
      code: `const a = [1, 2];
const b = [3, 4];
const c = a.concat(b, 5);
console.log(c); // [1, 2, 3, 4, 5]
console.log(a); // [1, 2] unchanged`,
    },
    {
      name: 'slice()',
      syntax: 'array.slice(start?, end?)',
      desc: 'Returns a NEW array with the elements from `start` to `end` (exclusive). Negative indexes count from the end. The classic way to copy an array.',
      code: `const a = [1, 2, 3, 4];
console.log(a.slice(1, 3)); // [2, 3]
console.log(a.slice(-2));   // [3, 4]
const copy = a.slice();
console.log(copy === a);    // false: a real copy`,
    },
    {
      name: 'splice()',
      syntax: 'array.splice(start, deleteCount?, ...items)',
      desc: 'Mutates the array: removes `deleteCount` elements from `start` and inserts `items` in their place. Returns the removed elements.',
      code: `const a = [1, 2, 3, 4, 5];
const removed = a.splice(1, 2, "x", "y");
console.log(a);       // [1, "x", "y", 4, 5]
console.log(removed); // [2, 3]`,
    },
    {
      name: 'indexOf()',
      syntax: 'array.indexOf(searchElement, fromIndex?)',
      desc: 'Returns the first index where the element appears, or -1. Uses strict equality (`===`).',
      code: `const a = [1, 2, 3, 2];
console.log(a.indexOf(2));  // 1
console.log(a.indexOf(9));  // -1`,
    },
    {
      name: 'lastIndexOf()',
      syntax: 'array.lastIndexOf(searchElement, fromIndex?)',
      desc: 'Returns the LAST index where the element appears, or -1.',
      code: `const a = [1, 2, 3, 2];
console.log(a.lastIndexOf(2)); // 3`,
    },
    {
      name: 'includes()',
      syntax: 'array.includes(searchElement, fromIndex?)',
      desc: 'Returns true if the array contains the element. Uses SameValueZero, so it can find `NaN`, which `indexOf` cannot.',
      code: `const a = [1, 2, NaN];
console.log(a.includes(2));    // true
console.log(a.includes(NaN));  // true
console.log(a.indexOf(NaN));   // -1`,
    },
    {
      name: 'find()',
      syntax: 'array.find(callbackFn, thisArg?)',
      desc: 'Returns the FIRST element for which the callback returns a truthy value, or undefined if none matches. Ideal for finding objects by property.',
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
      desc: 'Returns the index of the first element matching the callback, or -1.',
      code: `const a = [5, 12, 8, 130];
console.log(a.findIndex((n) => n > 100)); // 3
console.log(a.findIndex((n) => n < 4));   // -1`,
    },
    {
      name: 'findLast()',
      syntax: 'array.findLast(callbackFn, thisArg?)',
      desc: 'Like `find`, but it searches from the END of the array backwards.',
      code: `const a = [1, 2, 3, 4];
console.log(a.findLast((n) => n % 2 === 0)); // 4`,
    },
    {
      name: 'findLastIndex()',
      syntax: 'array.findLastIndex(callbackFn, thisArg?)',
      desc: 'Like `findIndex`, but searches backwards, returning the index of the last match.',
      code: `const a = [1, 2, 3, 4];
console.log(a.findLastIndex((n) => n % 2 === 0)); // 3`,
    },
    {
      name: 'every()',
      syntax: 'array.every(callbackFn, thisArg?)',
      desc: 'Returns true only if the callback returns truthy for EVERY element. Returns true for an empty array (vacuously true).',
      code: `const a = [2, 4, 6];
console.log(a.every((n) => n % 2 === 0)); // true
console.log(a.every((n) => n > 3));       // false`,
    },
    {
      name: 'some()',
      syntax: 'array.some(callbackFn, thisArg?)',
      desc: 'Returns true if the callback returns truthy for AT LEAST ONE element. Returns false for an empty array.',
      code: `const a = [1, 2, 3];
console.log(a.some((n) => n > 2)); // true
console.log(a.some((n) => n > 9)); // false`,
    },
    {
      name: 'filter()',
      syntax: 'array.filter(callbackFn, thisArg?)',
      desc: 'Returns a NEW array with only the elements for which the callback is truthy. Does not mutate.',
      code: `const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2, 4, 6]
console.log(nums); // unchanged`,
    },
    {
      name: 'map()',
      syntax: 'array.map(callbackFn, thisArg?)',
      desc: 'Returns a NEW array with every element transformed by the callback. Same length as the original.',
      code: `const nums = [1, 2, 3];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9]

const prices = [10, 20];
console.log(prices.map((p) => "$" + p)); // ["$10", "$20"]`,
    },
    {
      name: 'flat()',
      syntax: 'array.flat(depth?)',
      desc: 'Returns a NEW array with nested arrays flattened up to the given depth (default 1). `Infinity` flattens fully.',
      code: `const a = [1, [2, [3, [4]]]];
console.log(a.flat());          // [1, 2, [3, [4]]]
console.log(a.flat(2));         // [1, 2, 3, [4]]
console.log(a.flat(Infinity));  // [1, 2, 3, 4]`,
    },
    {
      name: 'flatMap()',
      syntax: 'array.flatMap(callbackFn, thisArg?)',
      desc: 'Runs `map`, then flattens the result ONE level. Returns a new array.',
      code: `const words = ["hi", "ok"];
console.log(words.flatMap((w) => w.split("")));
// ["h", "i", "o", "k"]`,
    },
    {
      name: 'forEach()',
      syntax: 'array.forEach(callbackFn, thisArg?)',
      desc: 'Calls the callback once for each element. Returns undefined; use it for SIDE EFFECTS (like logging), not for building results.',
      code: `const a = [10, 20];
a.forEach((n, index) => {
  console.log(index, n);
});
// 0 10
// 1 20`,
      note: 'To build a new array, use `map` or `filter`. `forEach` cannot be stopped early with `break`; use a `for...of` loop when you need to bail out.',
    },
    {
      name: 'reduce()',
      syntax: 'array.reduce(callbackFn, initialValue?)',
      desc: 'Folds the array into a single value. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.',
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
      desc: 'Like `reduce`, but processes the array from the last element to the first.',
      code: `const a = [1, 2, 3];
const diff = a.reduceRight((acc, n) => acc - n, 0);
// (((0 - 3) - 2) - 1) =
console.log(diff); // -6`,
    },
    {
      name: 'sort()',
      syntax: 'array.sort(compareFn?)',
      desc: 'Sorts the array IN PLACE. Without a compare function, elements are sorted as strings, which produces surprises with numbers. Mutates the original array.',
      code: `const a = [10, 1, 21, 2];
console.log(a.sort()); // [1, 10, 2, 21]  as strings!

const b = [10, 1, 21, 2];
b.sort((x, y) => x - y);
console.log(b); // [1, 2, 10, 21] ascending`,
      note: 'To sort without mutating, copy first: `[...arr].sort(...)`.',
    },
    {
      name: 'reverse()',
      syntax: 'array.reverse()',
      desc: 'Reverses the order of the array IN PLACE, returning the same array.',
      code: `const a = [1, 2, 3];
console.log(a.reverse()); // [3, 2, 1]
console.log(a);           // [3, 2, 1] mutated`,
    },
    {
      name: 'fill()',
      syntax: 'array.fill(value, start?, end?)',
      desc: 'Mutates by filling elements with a static value from `start` (default 0) to `end` (default length). Great for creating arrays of repeated values.',
      code: `const a = [1, 2, 3, 4];
a.fill(0, 1, 3);
console.log(a); // [1, 0, 0, 4]
console.log(new Array(3).fill("x")); // ["x", "x", "x"]`,
    },
    {
      name: 'join()',
      syntax: 'array.join(separator?)',
      desc: 'Joins all elements into a string, separated by the separator (default ",").',
      code: `const a = ["2024", "01", "15"];
console.log(a.join("-")); // "2024-01-15"
console.log([1, 2, 3].join(" + ")); // "1 + 2 + 3"`,
    },
    {
      name: 'copyWithin()',
      syntax: 'array.copyWithin(target, start?, end?)',
      desc: 'Copies part of the array over another part of the SAME array, in place. Rarely used, but handy for in-place modifications.',
      code: `const a = [1, 2, 3, 4, 5];
a.copyWithin(0, 3);
console.log(a); // [4, 5, 3, 4, 5]`,
    },
    {
      name: 'entries() / keys() / values()',
      syntax: 'array.entries()',
      desc: 'Return iterators over index/value pairs, keys, or values. Useful with `for...of` when you need the index too.',
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
      desc: 'Non-mutating versions of `reverse`, `sort`, and `splice`. They return a NEW array and leave the original untouched.',
      code: `const a = [3, 1, 2];
const sorted = a.toSorted();
const reversed = a.toReversed();
console.log(sorted);   // [1, 2, 3]
console.log(reversed); // [2, 1, 3]
console.log(a);        // [3, 1, 2] unchanged`,
    },
    {
      name: 'with()',
      syntax: 'array.with(index, value)',
      desc: 'Returns a NEW array with the element at `index` replaced by `value`, without mutating the original.',
      code: `const a = [1, 2, 3];
const b = a.with(1, 99);
console.log(b); // [1, 99, 3]
console.log(a); // [1, 2, 3] unchanged`,
    },
    {
      name: 'Array.from()',
      syntax: 'Array.from(arrayLike, mapFn?)',
      desc: 'Static method. Creates an array from array-like objects (like strings or `arguments`) or iterables (like `Set`), with an optional mapping step.',
      code: `console.log(Array.from("abc"));     // ["a", "b", "c"]
console.log(Array.from([1, 2, 3], (n) => n * 2)); // [2, 4, 6]
console.log(Array.from(new Set([1, 1, 2])));      // [1, 2]`,
    },
    {
      name: 'Array.of()',
      syntax: 'Array.of(...items)',
      desc: 'Static method. Creates an array from its arguments — unlike `Array(3)`, which creates an array of 3 empty slots.',
      code: `console.log(Array.of(7));  // [7]
console.log(Array(7));    // [ , , , , , , ] 7 empty slots
console.log(Array.of(1, 2, 3)); // [1, 2, 3]`,
    },
    {
      name: 'Array.isArray()',
      syntax: 'Array.isArray(value)',
      desc: 'Static method. Returns true if the value is an array. The reliable check, because `typeof []` is "object".',
      code: `console.log(Array.isArray([1]));   // true
console.log(Array.isArray("ab"));  // false
console.log(Array.isArray({}));    // false`,
    },
  ],
  quiz: [
    {
      type: 'code',
      question: 'What does this print?',
      code: `const nums = [1, 2, 3, 4];
const result = nums.filter((n) => n % 2 === 0).map((n) => n * 10);
console.log(result);`,
      options: ['[2, 4]', '[20, 40]', '[10, 20, 30, 40]', '[2, 4, 20, 40]'],
      answer: 1,
      explain: '`filter` keeps [2, 4], then `map` doubles each: [20, 40].',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const a = [1, 2];
const b = a;
b.push(3);
console.log(a);`,
      options: ['[1, 2]', '[1, 2, 3]', '[3, 2, 1]', 'An error'],
      answer: 1,
      explain: 'Arrays are references. `b` points at the SAME array as `a`, so the push is visible through both.',
    },
    {
      type: 'mc',
      question: 'Which method MUTATES the original array?',
      options: ['`map()`', '`filter()`', '`sort()`', '`slice()`'],
      answer: 2,
      explain: '`sort()` sorts in place. `map`, `filter`, and `slice` all return new arrays.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const a = [10, 5, 15];
a.sort();
console.log(a);`,
      options: ['[5, 10, 15]', '[10, 5, 15]', '[10, 15, 5]', '["5", "10", "15"]'],
      answer: 2,
      explain:
        'Without a compare function, elements sort as STRINGS, so 10, 5, 15 become "10","5","15" -> ["10","15","5"] -> [10, 15, 5].',
    },
    {
      type: 'code',
      question: 'What is the result of this reduce?',
      code: `const nums = [1, 2, 3, 4];
const r = nums.reduce((acc, n) => acc + n, 0);
console.log(r);`,
      options: ['10', '24', '4', '1234'],
      answer: 0,
      explain: '1 + 2 + 3 + 4 = 10. The initial value 0 becomes the first accumulator.',
    },
  ],
}