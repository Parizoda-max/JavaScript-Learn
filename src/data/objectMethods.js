export const objectMethods = {
  id: 'object-methods',
  title: 'Object methods',
  intro:
    'The Object constructor provides static methods that inspect, copy, and control objects. This page explains the ones you will actually use.',
  blocks: [
    {
      type: 'p',
      text: 'Most Object methods are STATIC — you call them as `Object.method(...)`, not on an instance. A few instance methods still exist on every object via its prototype.',
    },
    { type: 'heading', text: 'Reading an object' },
    {
      type: 'p',
      text: '`keys`, `values`, and `entries` give you the property names, values, and pairs of an object. They are the standard way to iterate an object.',
    },
    { type: 'heading', text: 'Copying and merging' },
    {
      type: 'p',
      text: '`assign` merges properties from source objects into a target. The spread operator `{...obj}` does the same for one object and is often preferred.',
    },
    {
      type: 'note',
      text: '`assign` and spread both do SHALLOW copies: nested objects are shared, not cloned.',
    },
  ],
  methods: [
    {
      name: 'Object.keys()',
      syntax: 'Object.keys(obj)',
      desc: 'Returns an array of the object\'s own enumerable property names (keys).',
      code: `const user = { name: "Ada", age: 36 };
console.log(Object.keys(user)); // ["name", "age"]`,
    },
    {
      name: 'Object.values()',
      syntax: 'Object.values(obj)',
      desc: 'Returns an array of the object\'s own enumerable property values.',
      code: `const user = { name: "Ada", age: 36 };
console.log(Object.values(user)); // ["Ada", 36]`,
    },
    {
      name: 'Object.entries()',
      syntax: 'Object.entries(obj)',
      desc: 'Returns an array of [key, value] pairs. The standard input to, and output from, the `Object.fromEntries` round-trip.',
      code: `const user = { name: "Ada", age: 36 };
console.log(Object.entries(user));
// [["name", "Ada"], ["age", 36]]

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}`,
    },
    {
      name: 'Object.assign()',
      syntax: 'Object.assign(target, ...sources)',
      desc: 'Copies enumerable own properties from the source objects into the target, mutating the target, then returns it. Later sources override earlier ones.',
      code: `const target = { a: 1 };
const result = Object.assign(target, { b: 2 }, { c: 3 });
console.log(result); // { a: 1, b: 2, c: 3 }

const copy = Object.assign({}, target);
console.log(copy); // { a: 1, b: 2, c: 3 }`,
    },
    {
      name: 'Object.fromEntries()',
      syntax: 'Object.fromEntries(entries)',
      desc: 'Inverse of `Object.entries`: builds an object from an array of [key, value] pairs.',
      code: `const pairs = [["name", "Ada"], ["age", 36]];
console.log(Object.fromEntries(pairs)); // { name: "Ada", age: 36 }

const query = new URLSearchParams("?tab=news&page=2");
console.log(Object.fromEntries(query)); // { tab: "news", page: "2" }`,
    },
    {
      name: 'Object.hasOwn()',
      syntax: 'Object.hasOwn(obj, prop)',
      desc: 'Returns true if the object has the property as its OWN property (not inherited from its prototype). Preferred over `hasOwnProperty`.',
      code: `const user = { name: "Ada" };
console.log(Object.hasOwn(user, "name"));  // true
console.log(Object.hasOwn(user, "toString")); // false (inherited)`,
    },
    {
      name: 'Object.prototype.hasOwnProperty()',
      syntax: 'obj.hasOwnProperty(prop)',
      desc: 'The older instance method form of `Object.hasOwn`. Works on instances, but can fail if the object shadows the method.',
      code: `const user = { name: "Ada" };
console.log(user.hasOwnProperty("name")); // true`,
    },
    {
      name: 'Object.is()',
      syntax: 'Object.is(value1, value2)',
      desc: 'Compares two values with much stricter rules than `===` for edge cases: it treats `NaN` as equal to itself and distinguishes `+0` from `-0`.',
      code: `console.log(Object.is(NaN, NaN));  // true  (=== says false)
console.log(Object.is(-0, 0));    // false (=== says true)
console.log(Object.is({}, {}));   // false: still reference equality`,
    },
    {
      name: 'Object.freeze()',
      syntax: 'Object.freeze(obj)',
      desc: 'Makes the object immutable: its properties cannot be added, removed, or reassigned. Returns the same object. Freezing is SHALLOW.',
      code: `const config = Object.freeze({ retries: 3 });
config.retries = 9;          // silently ignored (or errors in strict mode)
console.log(config.retries); // 3`,
    },
    {
      name: 'Object.isFrozen()',
      syntax: 'Object.isFrozen(obj)',
      desc: 'Returns true if the object is frozen.',
      code: `const a = Object.freeze({ x: 1 });
console.log(Object.isFrozen(a)); // true
console.log(Object.isFrozen({})); // false`,
    },
    {
      name: 'Object.seal()',
      syntax: 'Object.seal(obj)',
      desc: 'Prevents adding or removing properties, but existing properties can still be rewritten.',
      code: `const a = Object.seal({ x: 1 });
a.x = 2;          // allowed
a.y = 3;          // ignored: cannot add
delete a.x;       // ignored: cannot delete
console.log(a);   // { x: 2 }`,
    },
    {
      name: 'Object.create()',
      syntax: 'Object.create(proto, properties?)',
      desc: 'Creates a new object with the given prototype. Mostly used for manual prototype-style inheritance and for object literals with set prototypes.',
      code: `const animal = { speak() { return "?"; } };
const dog = Object.create(animal);
dog.speak = () => "woof";
console.log(dog.speak()); // "woof"`,
    },
    {
      name: 'Object.getPrototypeOf()',
      syntax: 'Object.getPrototypeOf(obj)',
      desc: 'Returns the prototype (the internal proto link) of an object.',
      code: `console.log(Object.getPrototypeOf([]) === Array.prototype); // true`,
    },
    {
      name: 'Object.setPrototypeOf()',
      syntax: 'Object.setPrototypeOf(obj, proto)',
      desc: 'Sets the prototype of an object. Works, but changing prototypes at runtime is slow; prefer class inheritance or `Object.create`.',
      code: `const base = { greet() { return "hi"; } };
const obj = Object.setPrototypeOf({}, base);
console.log(obj.greet()); // "hi"`,
    },
    {
      name: 'Object.getOwnPropertyNames()',
      syntax: 'Object.getOwnPropertyNames(obj)',
      desc: 'Returns ALL own property names, including non-enumerable ones like `length` on an array (but not symbol keys).',
      code: `const a = [1, 2];
console.log(Object.getOwnPropertyNames(a));
// ["0", "1", "length"]`,
    },
    {
      name: 'Object.getOwnPropertySymbols()',
      syntax: 'Object.getOwnPropertySymbols(obj)',
      desc: 'Returns an array of the object\'s own symbol-keyed properties.',
      code: `const s = Symbol("id");
const obj = { [s]: 42 };
console.log(Object.getOwnPropertySymbols(obj)[0] === s); // true`,
    },
    {
      name: 'Object.getOwnPropertyDescriptor()',
      syntax: 'Object.getOwnPropertyDescriptor(obj, prop)',
      desc: 'Returns the descriptor object for one property, showing its value, and whether it is writable, enumerable, and configurable. Returns undefined if the property does not exist.',
      code: `const user = { name: "Ada" };
console.log(Object.getOwnPropertyDescriptor(user, "name"));
// { value: "Ada", writable: true, enumerable: true, configurable: true }`,
    },
    {
      name: 'Object.defineProperty()',
      syntax: 'Object.defineProperty(obj, prop, descriptor)',
      desc: 'Adds or modifies a property with full control over its descriptor flags (writable, enumerable, configurable). Returns the object.',
      code: `const obj = {};
Object.defineProperty(obj, "hidden", {
  value: 42,
  enumerable: false,
  writable: false,
});
console.log(obj.hidden);                // 42
console.log(Object.keys(obj));          // []  not enumerable
obj.hidden = 99;
console.log(obj.hidden);                // 42  not writable`,
    },
    {
      name: 'Object.defineProperties()',
      syntax: 'Object.defineProperties(obj, props)',
      desc: 'Defines MULTIPLE properties at once, each with its own descriptor.',
      code: `const obj = Object.defineProperties({}, {
  a: { value: 1, enumerable: true },
  b: { value: 2, enumerable: true },
});
console.log(obj); // { a: 1, b: 2 }`,
    },
    {
      name: 'Object.preventExtensions()',
      syntax: 'Object.preventExtensions(obj)',
      desc: 'Prevents adding NEW properties to the object. Existing properties can still be modified or deleted. The object is no longer "extensible".',
      code: `const a = Object.preventExtensions({ x: 1 });
a.y = 2;       // ignored in sloppy mode (error in strict)
console.log(a); // { x: 1 }`,
    },
    {
      name: 'Object.isExtensible()',
      syntax: 'Object.isExtensible(obj)',
      desc: 'Returns true if new properties can still be added to the object.',
      code: `console.log(Object.isExtensible({})); // true
console.log(Object.isExtensible(Object.preventExtensions({}))); // false`,
    },
    {
      name: 'Object.isSealed()',
      syntax: 'Object.isSealed(obj)',
      desc: 'Returns true if the object is sealed (non-extensible and all properties non-configurable).',
      code: `console.log(Object.isSealed(Object.seal({}))); // true
console.log(Object.isSealed({}));              // false`,
    },
    {
      name: 'Object.prototype.toString()',
      syntax: 'obj.toString()',
      desc: 'Returns a string representation of the object. Custom classes override it to return something useful.',
      code: `const user = { name: "Ada" };
console.log(user.toString()); // "[object Object]"

class Point {
  constructor(x, y) { this.x = x; this.y = y; }
  toString() { return "(" + this.x + ", " + this.y + ")"; }
}
console.log(new Point(1, 2).toString()); // "(1, 2)"`,
    },
    {
      name: 'Object.prototype.valueOf()',
      syntax: 'obj.valueOf()',
      desc: 'Returns the primitive value of the object. For plain objects it just returns the object itself.',
      code: `const user = { name: "Ada" };
console.log(user.valueOf() === user); // true`,
    },
    {
      name: 'Object.prototype.isPrototypeOf()',
      syntax: 'obj.isPrototypeOf(target)',
      desc: 'Returns true if `obj` appears in the prototype chain of `target`.',
      code: `console.log(Array.prototype.isPrototypeOf([]));   // true
console.log(Object.prototype.isPrototypeOf([]));  // true`,
    },
    {
      name: 'Object.prototype.propertyIsEnumerable()',
      syntax: 'obj.propertyIsEnumerable(prop)',
      desc: 'Returns true if the property is enumerable in `for...in` style iteration.',
      code: `const a = [1];
console.log(a.propertyIsEnumerable(0));     // true (indexes are enumerable)
console.log(a.propertyIsEnumerable("length")); // false`,
    },
    {
      name: 'Object.groupBy()',
      syntax: 'Object.groupBy(items, callbackFn)',
      desc: 'Groups an iterable of items into an object, keyed by whatever the callback returns. Keys become strings.',
      code: `const nums = [1, 2, 3, 4, 5];
const grouped = Object.groupBy(nums, (n) => (n % 2 ? "odd" : "even"));
console.log(grouped);
// { odd: [1, 3, 5], even: [2, 4] }`,
    },
  ],
  quiz: [
    {
      type: 'code',
      question: 'What does this print?',
      code: `const user = { name: "Ada", age: 36 };
console.log(Object.keys(user).length);`,
      options: ['1', '2', '3', 'undefined'],
      answer: 1,
      explain: '`Object.keys(user)` is ["name", "age"], which has length 2.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const a = Object.freeze({ x: 1 });
a.x = 99;
console.log(a.x);`,
      options: ['99', '1', 'undefined', 'It throws an error'],
      answer: 1,
      explain:
        'Frozen objects ignore assignments to existing properties, so `a.x` stays 1. (In strict mode this would throw.)',
    },
    {
      type: 'mc',
      question: 'Which method turns `[["a", 1]]` into `{ a: 1 }`?',
      options: ['`Object.entries`', '`Object.fromEntries`', '`Object.assign`', '`Object.keys`'],
      answer: 1,
      explain:
        '`Object.fromEntries` builds an object from an array of [key, value] pairs; `entries` is its inverse.',
    },
    {
      type: 'tf',
      question: 'Using the spread operator `{...obj}` creates a deep clone of `obj`.',
      answer: 1,
      explain:
        'Spread performs a SHALLOW copy. Nested objects are still shared between the original and the copy.',
    },
    {
      type: 'mc',
      question: 'Why is `Object.hasOwn(obj, "x")` preferred over `obj.hasOwnProperty("x")`?',
      options: [
        '`hasOwnProperty` is deprecated',
        '`Object.hasOwn` works even if the object shadows `hasOwnProperty`',
        '`Object.hasOwn` ignores prototypes entirely',
        'It is the only one that checks inherited properties',
      ],
      answer: 1,
      explain:
        'If an object defines its own `hasOwnProperty` property (e.g. `{ hasOwnProperty: null }`), the instance call breaks. `Object.hasOwn` cannot be shadowed.',
    },
  ],
}