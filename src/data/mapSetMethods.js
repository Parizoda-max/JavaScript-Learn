export const mapSetMethods = {
  id: 'map-set-methods',
  title: 'Map and Set methods',
  intro:
    'Map and Set are modern collections. Map stores key/value pairs with any key type; Set stores unique values. Both replace awkward object/array tricks.',
  blocks: [
    { type: 'heading', text: 'Why Map instead of an object?' },
    {
      type: 'list',
      items: [
        'Map keys can be ANY type, including objects and functions',
        'Map preserves insertion order',
        'Map has a built-in `size` and easy iteration',
        'Maps avoid prototype-related key collisions',
      ],
    },
    { type: 'heading', text: 'Why Set instead of an array?' },
    {
      type: 'list',
      items: [
        'Set automatically prevents duplicates',
        'Lookup with `has` is fast',
        'Size updates automatically',
      ],
    },
  ],
  methods: [
    {
      name: 'set()',
      syntax: 'map.set(key, value)',
      desc: 'Adds or updates a key/value pair in the Map. Returns the Map itself (enabling chaining).',
      code: `const m = new Map();
m.set("name", "Ada");
m.set(42, "an answer");

const obj = { id: 1 };
m.set(obj, "an object key");

console.log(m.size); // 3`,
    },
    {
      name: 'get()',
      syntax: 'map.get(key)',
      desc: 'Returns the value for the key, or undefined if the key is not in the Map.',
      code: `const m = new Map([["name", "Ada"]]);
console.log(m.get("name")); // "Ada"
console.log(m.get("age"));  // undefined`,
    },
    {
      name: 'has()',
      syntax: 'map.has(key) / set.has(value)',
      desc: 'Returns true if the Map has the key (or the Set has the value). Uses SameValueZero, so it works with NaN.',
      code: `const m = new Map([["a", 1]]);
console.log(m.has("a")); // true
console.log(m.has("b")); // false`,
    },
    {
      name: 'delete()',
      syntax: 'map.delete(key) / set.delete(value)',
      desc: 'Removes the entry and returns true if it existed, false if it did not.',
      code: `const m = new Map([["a", 1]]);
console.log(m.delete("a")); // true
console.log(m.has("a"));    // false`,
    },
    {
      name: 'clear()',
      syntax: 'map.clear() / set.clear()',
      desc: 'Removes ALL entries from the Map or Set.',
      code: `const m = new Map([["a", 1], ["b", 2]]);
m.clear();
console.log(m.size); // 0`,
    },
    {
      name: 'size',
      syntax: 'map.size / set.size',
      desc: 'A read-only property giving the number of entries. Unlike arrays, `size` is not a method — access it without parentheses.',
      code: `const s = new Set([1, 2, 3]);
console.log(s.size); // 3 (not s.size())`,
    },
    {
      name: 'keys() / values() / entries()',
      syntax: 'map.entries()',
      desc: 'Return iterators over keys, values, or [key, value] pairs. Maps iterate in insertion order.',
      code: `const m = new Map([["a", 1], ["b", 2]]);
console.log([...m.keys()]);   // ["a", "b"]
console.log([...m.values()]); // [1, 2]
console.log([...m.entries()]); // [["a", 1], ["b", 2]]`,
    },
    {
      name: 'forEach()',
      syntax: 'map.forEach(callback, thisArg?) / set.forEach(callback)',
      desc: 'Calls the callback once per entry. For a Map, the callback receives (value, key, map). For a Set, it receives (value, value, set).',
      code: `const m = new Map([["a", 1], ["b", 2]]);
m.forEach((value, key) => {
  console.log(key, value);
});
// a 1
// b 2`,
    },
    {
      name: 'Set: add()',
      syntax: 'set.add(value)',
      desc: 'Adds a value to the Set if it is not already present. Returns the Set itself for chaining.',
      code: `const s = new Set();
s.add(1).add(2).add(1); // 1 is already there
console.log(s);         // Set { 1, 2 }
console.log(s.size);    // 2  (duplicate ignored)`,
    },
    {
      name: 'Set: duplication removal',
      syntax: 'new Set(array)',
      desc: 'The classic trick: wrap an array in a Set to remove duplicates, then spread it back to an array.',
      code: `const nums = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]`,
    },
    {
      name: 'Set: set operations',
      syntax: 'set.union(other) / set.intersection(other)',
      desc: 'Modern Set operations that return new Sets. `union` merges, `intersection` keeps common values, `difference` keeps only values not in the other set.',
      code: `const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
console.log([...a.union(b)]);        // [1, 2, 3, 4]
console.log([...a.intersection(b)]); // [2, 3]
console.log([...a.difference(b)]);   // [1]`,
    },
    {
      name: 'WeakMap / WeakSet',
      syntax: 'new WeakMap()',
      desc: 'Variants that only accept object keys and hold WEAK references, so they do not prevent garbage collection. They lack `size`, iteration, and `clear` — and they are perfect for private, per-object data.',
      code: `const cache = new WeakMap();
let user = { name: "Ada" };
cache.set(user, "cached value");
console.log(cache.get(user)); // "cached value"
user = null; // entry becomes eligible for GC`,
      note: 'You cannot iterate a WeakMap/WeakSet or read its size. Use a regular Map when you need iteration.',
    },
  ],
  quiz: [
    {
      type: 'mc',
      question: 'Which of these is a real advantage of a Map over a plain object?',
      options: [
        'Map keys must be strings',
        'Map keys can be objects or functions',
        'Maps sort their keys automatically',
        'Maps do not allow duplicate values',
      ],
      answer: 1,
      explain:
        'Maps accept ANY value as a key, including objects and functions. Plain objects coerce keys to strings.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const s = new Set([1, 2, 2, 3]);
console.log(s.size);`,
      options: ['4', '3', '"1223"', 'undefined'],
      answer: 1,
      explain: 'The Set keeps only unique values {1, 2, 3}, so size is 3.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const m = new Map([["a", 1]]);
m.delete("a");
console.log(m.has("a"));`,
      options: ['true', 'false', 'An error', 'undefined'],
      answer: 1,
      explain: '`delete` removes "a", and `has("a")` then returns false.',
    },
    {
      type: 'tf',
      question: '`set.size` and `array.length` are both read-only properties you access without parentheses.',
      answer: 1,
      explain:
        '`set.size` is a property: access is `set.size`. An ARRAY\'s `length` is also a property, but calling it requires no parentheses either — the misleading one would be `set.size()`.',
    },
  ],
}