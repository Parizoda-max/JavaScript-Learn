export const numberMethods = {
  id: 'number-methods',
  title: 'Number methods',
  intro:
    'The Number object provides static methods that test and parse numbers, plus instance methods that format them. This page explains each one.',
  blocks: [
    {
      type: 'p',
      text: 'Most useful checks are STATIC: `Number.isInteger`, `Number.isFinite`, and `Number.isNaN`. Number instances get very few methods — mostly formatting like `toFixed`.',
    },
    {
      type: 'note',
      text: '`isNaN` (global) converts its argument first; `Number.isNaN` is stricter and only returns true for an actual NaN value. Prefer the `Number.` version.',
    },
  ],
  methods: [
    {
      name: 'Number.isFinite()',
      syntax: 'Number.isFinite(value)',
      desc: 'Returns true only if the value is a finite number (not Infinity, -Infinity, or NaN). Does not convert strings.',
      code: `console.log(Number.isFinite(42));       // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("42"));     // false (not converted)`,
    },
    {
      name: 'Number.isInteger()',
      syntax: 'Number.isInteger(value)',
      desc: 'Returns true if the value is a number with no fractional part.',
      code: `console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.0));  // true
console.log(Number.isInteger(5.5));  // false
console.log(Number.isInteger("5"));  // false`,
    },
    {
      name: 'Number.isNaN()',
      syntax: 'Number.isNaN(value)',
      desc: 'Returns true only for the actual NaN value. Prefer this over the global `isNaN`, which converts the argument first.',
      code: `console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN("hi"));   // false
console.log(isNaN("hi"));          // true  (global, converts!)`,
    },
    {
      name: 'Number.parseFloat()',
      syntax: 'Number.parseFloat(string)',
      desc: 'Parses a floating-point number from the START of a string, stopping at the first non-numeric character.',
      code: `console.log(Number.parseFloat("3.14 pies")); // 3.14
console.log(Number.parseFloat("-7.5"));          // -7.5
console.log(Number.parseFloat("abc"));           // NaN`,
    },
    {
      name: 'Number.parseInt()',
      syntax: 'Number.parseInt(string, radix?)',
      desc: 'Parses an integer from the start of a string. The optional radix is the base (10 for decimal — always pass it).',
      code: `console.log(Number.parseInt("42px"));  // 42
console.log(Number.parseInt("101", 2)); // 5  (binary input)
console.log(Number.parseInt("0x1F"));   // 31 (hex)`,
    },
    {
      name: 'Number.isSafeInteger()',
      syntax: 'Number.isSafeInteger(value)',
      desc: 'Returns true if the number is an integer that can be represented exactly (`Number.MAX_SAFE_INTEGER` is 9007199254740991).',
      code: `console.log(Number.isSafeInteger(42));                    // true
console.log(Number.isSafeInteger(2**53));               // false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true`,
    },
    {
      name: 'toFixed()',
      syntax: 'number.toFixed(digits?)',
      desc: 'Returns a STRING with the number rounded to the given number of decimal places. The default is 0 digits.',
      code: `const price = 3.14159;
console.log(price.toFixed(2)); // "3.14"
console.log(price.toFixed(0)); // "3"
console.log(price.toFixed());  // "3"`,
    },
    {
      name: 'toPrecision()',
      syntax: 'number.toPrecision(digits?)',
      desc: 'Returns a string with the given number of SIGNIFICANT digits, using exponential notation when the number is large or small.',
      code: `const n = 1234.5678;
console.log(n.toPrecision(3));  // "1.23e+3"
console.log(n.toPrecision(6));  // "1234.57"
console.log(n.toPrecision());   // "1234.5678"`,
    },
    {
      name: 'toExponential()',
      syntax: 'number.toExponential(digits?)',
      desc: 'Returns a string in exponential notation, optionally with the given number of decimal digits.',
      code: `const n = 12345;
console.log(n.toExponential(2)); // "1.23e+4"
console.log(n.toExponential());  // "1.2345e+4"`,
    },
    {
      name: 'toLocaleString()',
      syntax: 'number.toLocaleString(locale?, options?)',
      desc: 'Returns a locale-aware string, adding thousands separators by default. Options exist for currency, percent, and more.',
      code: `const n = 1234567.89;
console.log(n.toLocaleString());            // "1,234,567.89"
console.log(n.toLocaleString("de-DE"));     // "1.234.567,89"
console.log(n.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
})); // "$1,234,567.89"`,
    },
    {
      name: 'Math functions on the Number object',
      syntax: 'Number(value)',
      desc: 'Calling `Number(...)` as a function converts its argument to a number. It is also the constructor for Number objects.',
      code: `console.log(Number("42"));   // 42
console.log(Number(""));     // 0
console.log(Number(true));   // 1
console.log(Number(null));   // 0
console.log(Number(undefined)); // NaN`,
    },
  ],
  quiz: [
    {
      type: 'mc',
      question: 'Why prefer `Number.isNaN(x)` over the global `isNaN(x)`?',
      options: [
        'The global version converts strings first, giving false positives',
        'The global version is not supported in browsers',
        '`Number.isNaN` works on all types',
        'They behave identically',
      ],
      answer: 0,
      explain:
        'Global `isNaN("hi")` returns true because it converts "hi" to NaN first. `Number.isNaN("hi")` is false because the string is not an actual NaN value.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(Number.isInteger(3.0));`,
      options: ['true', 'false', 'NaN', 'An error'],
      answer: 0,
      explain: '3.0 has no fractional part, so it counts as an integer.',
    },
    {
      type: 'code',
      question: 'What does `(3.14159).toFixed(2)` return?',
      options: ['3.14', '"3.14"', '3.15', '"3.14" or error'],
      answer: 1,
      explain:
        '`toFixed` always returns a STRING. 3.14159 rounds to "3.14".',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(Number.isFinite(Infinity));`,
      options: ['true', 'false', 'Infinity', 'NaN'],
      answer: 1,
      explain: 'Infinity is not a finite number, so `Number.isFinite` returns false.',
    },
  ],
}

export const mathMethods = {
  id: 'math-methods',
  title: 'Math functions',
  intro:
    'Math is a static object full of constants and functions for rounding, algebra, trigonometry, and randomness. It is not a constructor — you never write `new Math()`.',
  blocks: [
    {
      type: 'p',
      text: 'Every member of `Math` is called directly: `Math.round(x)`, `Math.max(a, b)`, and so on. There are no instances.',
    },
    { type: 'heading', text: 'Common constants' },
    {
      type: 'code',
      code: `console.log(Math.PI);   // 3.141592653589793
console.log(Math.E);    // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951`,
    },
    { type: 'heading', text: 'Rounding' },
    {
      type: 'p',
      text: '`Math.round` rounds towards the nearest integer, `Math.floor` rounds down, `Math.ceil` rounds up, and `Math.trunc` just removes the fractional part.',
    },
  ],
  methods: [
    {
      name: 'Math.round()',
      syntax: 'Math.round(x)',
      desc: 'Rounds to the nearest integer. .5 rounds UP (towards positive infinity).',
      code: `console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(-4.5)); // -4`,
    },
    {
      name: 'Math.floor()',
      syntax: 'Math.floor(x)',
      desc: 'Rounds DOWN to the nearest integer. For negative numbers, "down" means towards negative infinity.',
      code: `console.log(Math.floor(4.7));  // 4
console.log(Math.floor(-4.2)); // -5`,
    },
    {
      name: 'Math.ceil()',
      syntax: 'Math.ceil(x)',
      desc: 'Rounds UP to the nearest integer.',
      code: `console.log(Math.ceil(4.2));  // 5
console.log(Math.ceil(-4.7)); // -4`,
    },
    {
      name: 'Math.trunc()',
      syntax: 'Math.trunc(x)',
      desc: 'Removes the fractional part, keeping the whole part. For positive numbers it matches floor; for negatives it matches ceil.',
      code: `console.log(Math.trunc(4.7));  // 4
console.log(Math.trunc(-4.7)); // -4`,
    },
    {
      name: 'Math.abs()',
      syntax: 'Math.abs(x)',
      desc: 'Returns the absolute value (distance from zero, always non-negative).',
      code: `console.log(Math.abs(-5)); // 5
console.log(Math.abs(5));  // 5`,
    },
    {
      name: 'Math.min()',
      syntax: 'Math.min(...values)',
      desc: 'Returns the smallest of the given numbers, or Infinity if called with no arguments.',
      code: `console.log(Math.min(8, 2, 5)); // 2
console.log(Math.min());        // Infinity`,
    },
    {
      name: 'Math.max()',
      syntax: 'Math.max(...values)',
      desc: 'Returns the largest of the given numbers, or -Infinity if called with no arguments.',
      code: `console.log(Math.max(8, 2, 5)); // 8
console.log(Math.max());        // -Infinity`,
    },
    {
      name: 'Math.pow()',
      syntax: 'Math.pow(base, exponent)',
      desc: 'Raises `base` to the power of `exponent`. The `**` operator is the modern shorthand.',
      code: `console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3);        // 8`,
    },
    {
      name: 'Math.sqrt()',
      syntax: 'Math.sqrt(x)',
      desc: 'Returns the square root of a non-negative number.',
      code: `console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(2));  // 1.4142135623730951`,
    },
    {
      name: 'Math.cbrt()',
      syntax: 'Math.cbrt(x)',
      desc: 'Returns the cube root of a number.',
      code: `console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(-8)); // -2`,
    },
    {
      name: 'Math.sign()',
      syntax: 'Math.sign(x)',
      desc: 'Returns 1 for positive numbers, -1 for negative numbers, 0 for zero, and NaN for NaN.',
      code: `console.log(Math.sign(-9)); // -1
console.log(Math.sign(0));  // 0
console.log(Math.sign(7));  // 1`,
    },
    {
      name: 'Math.hypot()',
      syntax: 'Math.hypot(...values)',
      desc: 'Returns the square root of the sum of squares of the arguments. Useful for distances, and avoids overflow.',
      code: `console.log(Math.hypot(3, 4)); // 5  (sqrt(9 + 16))`,
    },
    {
      name: 'Math.random()',
      syntax: 'Math.random()',
      desc: 'Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive). Great for games and tests — NOT for security. Use `crypto.getRandomValues` for anything secure.',
      code: `console.log(Math.random()); // e.g. 0.2134...

// Random integer between 0 and max (exclusive)
const max = 10;
const n = Math.floor(Math.random() * max);
console.log(n);`,
    },
    {
      name: 'Math.log()',
      syntax: 'Math.log(x)',
      desc: 'Returns the natural logarithm (base e) of x.',
      code: `console.log(Math.log(Math.E)); // 1`,
    },
    {
      name: 'Math.log2()',
      syntax: 'Math.log2(x)',
      desc: 'Returns the base-2 logarithm of x.',
      code: `console.log(Math.log2(8)); // 3`,
    },
    {
      name: 'Math.log10()',
      syntax: 'Math.log10(x)',
      desc: 'Returns the base-10 logarithm of x.',
      code: `console.log(Math.log10(1000)); // 3`,
    },
    {
      name: 'Math.exp()',
      syntax: 'Math.exp(x)',
      desc: 'Returns e raised to the power of x.',
      code: `console.log(Math.exp(1)); // 2.718281828459045`,
    },
    {
      name: 'Math.sin() / cos() / tan()',
      syntax: 'Math.sin(x)',
      desc: 'Trigonometric functions. Angles are in RADIANS, not degrees.',
      code: `const rad = (deg) => (deg * Math.PI) / 180;
console.log(Math.sin(rad(90)));  // 1
console.log(Math.cos(rad(0)));   // 1
console.log(Math.tan(rad(45)));  // 0.9999999999999999 (approx)`,
    },
    {
      name: 'Math.asin() / acos() / atan() / atan2()',
      syntax: 'Math.atan2(y, x)',
      desc: 'Inverse trigonometric functions. `atan2(y, x)` returns the angle between the positive x-axis and the point (x, y), in radians.',
      code: `console.log(Math.asin(1));       // 1.5707963267948966 (pi/2)
console.log(Math.acos(1));       // 0
console.log(Math.atan2(1, 1));   // 0.7853981633974483 (pi/4)`,
    },
    {
      name: 'Math.sinh() / cosh() / tanh()',
      syntax: 'Math.sinh(x)',
      desc: 'Hyperbolic functions, related to the exponential function and common in physics and geometry.',
      code: `console.log(Math.sinh(0)); // 0
console.log(Math.cosh(0)); // 1`,
    },
    {
      name: 'Math.imul()',
      syntax: 'Math.imul(a, b)',
      desc: 'Returns the result of C-like 32-bit integer multiplication. Used in low-level / game code dealing with 32-bit numbers.',
      code: `console.log(Math.imul(2, 3));      // 6
console.log(Math.imul(-1, 2));     // -2
console.log(Math.imul(0xffffffff, 2)); // -2 (wraps at 32 bits)`,
    },
    {
      name: 'Math.fround()',
      syntax: 'Math.fround(x)',
      desc: 'Rounds the number to the nearest 32-bit float representation.',
      code: `console.log(Math.fround(1.5)); // 1.5
console.log(Math.fround(1.1)); // 1.100000023841858
console.log(1.1);             // 1.1`,
    },
    {
      name: 'Math.clz32()',
      syntax: 'Math.clz32(x)',
      desc: 'Counts the number of leading zero bits in the 32-bit binary representation of the number.',
      code: `console.log(Math.clz32(1));   // 31  (000...001)
console.log(Math.clz32(255));  // 24`,
    },
  ],
  quiz: [
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(Math.floor(-2.5));`,
      options: ['-2', '-3', '-2.5', '3'],
      answer: 1,
      explain:
        '`floor` always rounds TOWARDS negative infinity, so -2.5 goes to -3. (`Math.trunc(-2.5)` would give -2.)',
    },
    {
      type: 'code',
      question: 'What is the result of `Math.max(...[3, 9, 1])`?',
      options: ['9', '3', '1', 'NaN'],
      answer: 0,
      explain: 'The spread operator passes each array element as an argument, and `max` returns 9.',
    },
    {
      type: 'mc',
      question: 'Which combination correctly produces a random integer from 0 to 9 (inclusive)?',
      options: [
        '`Math.ceil(Math.random() * 10)`',
        '`Math.floor(Math.random() * 10)`',
        '`Math.round(Math.random() * 10)`',
        '`Math.random() * 9`',
      ],
      answer: 1,
      explain:
        '`Math.floor(Math.random() * 10)` gives 0,1,...,9. `ceil` will never give 0, and `round` skews the edges.',
    },
    {
      type: 'tf',
      question: '`Math.min(1, 2, 3)` returns the longest-running of these methods.',
      answer: 1,
      explain: '`Math.min` returns the smallest value, which here is 1.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(Math.trunc(3.999));`,
      options: ['3', '4', '3.5', '0'],
      answer: 0,
      explain: '`trunc` simply cuts off the fractional part, leaving 3.',
    },
  ],
}