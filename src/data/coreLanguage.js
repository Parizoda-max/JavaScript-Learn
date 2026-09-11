export const coreLanguage = {
  title: 'Core Language',
  topics: [
    {
      id: 'control-flow',
      title: 'Control flow',
      intro:
        'Programs make decisions. `if`, `else if`, `else`, and the ternary operator pick which statements run based on conditions.',
      blocks: [
        {
          type: 'p',
          text: 'A condition is an expression that JavaScript evaluates as truthy or falsy. Values like `0`, `""`, `null`, `undefined`, `NaN`, and `false` are falsy; almost everything else is truthy.',
        },
        {
          type: 'code',
          code: `const temperature = 38;

if (temperature > 30) {
  console.log("It is hot");
} else if (temperature > 20) {
  console.log("It is warm");
} else {
  console.log("It is cool");
}`,
        },
        { type: 'heading', text: 'The ternary operator' },
        {
          type: 'p',
          text: 'The ternary `condition ? a : b` returns `a` when the condition is truthy and `b` when it is falsy. It is a compact way to choose one of two values.',
        },
        {
          type: 'code',
          code: `const age = 20;
const label = age >= 18 ? "adult" : "minor";
console.log(label); // "adult"`,
        },
        { type: 'heading', text: 'switch' },
        {
          type: 'p',
          text: '`switch` compares one value against a list of cases. Each case must end with `break`, otherwise execution "falls through" to the next case.',
        },
        {
          type: 'code',
          code: `const color = "green";

switch (color) {
  case "red":
    console.log("stop");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("unknown color");
}`,
        },
        {
          type: 'note',
          text: 'Truthiness matters everywhere: `0`, `""`, `null`, `undefined`, `NaN`, and `false` are all falsy. Always double-check conditions that involve the number `0`.',
        },
      ],
      quiz: [
        {
          type: 'tf',
          question: 'The string `"0"` is falsy.',
          answer: 1,
          explain:
            '`"0"` is a non-empty string, and any non-empty string is truthy. Only the number `0` is falsy.',
        },
        {
          type: 'mc',
          question: 'Which value is falsy in JavaScript?',
          options: ['`" "` (a space)', '`[]` (empty array)', '`0`', '`-1`'],
          answer: 2,
          explain:
            '`0` is falsy. Empty arrays, strings with a space, and negative numbers are all truthy.',
        },
        {
          type: 'code',
          question: 'What does this print?',
          code: `console.log(5 > 3 ? "big" : "small");`,
          options: ['"big"', '"small"', 'true', 'undefined'],
          answer: 0,
          explain: 'The condition `5 > 3` is true, so the ternary returns the first value, "big".',
        },
      ],
    },
    {
      id: 'loops',
      title: 'Loops',
      intro:
        'Loops repeat work. `for`, `while`, and `do...while` run a block any number of times.',
      blocks: [
        { type: 'heading', text: 'for' },
        {
          type: 'p',
          text: 'A `for` loop has three parts: the initializer, the condition checked before each pass, and the update run after each pass.',
        },
        {
          type: 'code',
          code: `for (let i = 0; i < 3; i++) {
  console.log(i);
}
// prints 0, 1, 2`,
        },
        { type: 'heading', text: 'while and do...while' },
        {
          type: 'p',
          text: '`while` checks the condition before running the body. `do...while` always runs the body once, then checks.',
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
console.log(x); // 11, because the body always runs once`,
        },
        { type: 'heading', text: 'break and continue' },
        {
          type: 'list',
          items: [
            '`break` exits the loop immediately',
            '`continue` skips to the next iteration, re-checking the condition',
          ],
        },
        {
          type: 'code',
          code: `for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log(i);
}
// prints 0, 1, 2, 4`,
        },
        {
          type: 'note',
          text: 'An infinite loop — one whose condition never becomes false — will freeze your page or hang the browser. If a page stops responding, check your loop conditions first.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'How many times does this loop print?',
          code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
          options: ['4', '5', '6', 'Infinity'],
          answer: 1,
          explain:
            'The loop runs while `i < 5`, so i takes the values 0,1,2,3,4 — five iterations total.',
        },
        {
          type: 'mc',
          question: 'What does `continue` do in a loop?',
          options: [
            'Exits the loop immediately',
            'Restarts the loop from the beginning',
            'Skips to the next iteration',
            'Throws an error',
          ],
          answer: 2,
          explain: '`continue` jumps to the next iteration; `break` is the one that exits.',
        },
        {
          type: 'code',
          question: 'What is the printed value of `n`?',
          code: `let n = 0;
while (n > 0) {
  n++;
}
console.log(n);`,
          options: ['1', '0', '-1', 'This is an infinite loop'],
          answer: 1,
          explain:
            'The condition `n > 0` is false from the start (n is 0), so the body never runs and n stays 0.',
        },
      ],
    },
    {
      id: 'functions',
      title: 'Functions',
      intro:
        'A function is a reusable block of code. You call it by name, optionally passing inputs and getting back a result.',
      blocks: [
        { type: 'heading', text: 'Function declarations' },
        {
          type: 'code',
          code: `function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5`,
        },
        {
          type: 'p',
          text: '`return` sends a value back to the caller. Without `return`, a function returns `undefined`.',
        },
        { type: 'heading', text: 'Function expressions and arrows' },
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
          text: 'Arrow functions (`=>`) are a shorter syntax. When the body is a single expression, the `return` is implicit.',
        },
        { type: 'heading', text: 'Parameters and defaults' },
        {
          type: 'p',
          text: 'A missing argument becomes `undefined`, which often causes trouble. Default parameters fill in a value when an argument is omitted.',
        },
        {
          type: 'code',
          code: `function greet(name = "friend") {
  return "Hello, " + name;
}

console.log(greet());           // "Hello, friend"
console.log(greet("Ada"));      // "Hello, Ada"`,
        },
        {
          type: 'p',
          text: 'The `...rest` syntax collects extra arguments into an array.',
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
          text: 'Function declarations can be called before they appear in the file (hoisting). Function expressions and arrows must be defined before you call them.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'What does this function call print?',
          code: `function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,
          options: ['"2, 3"', '5', 'undefined', 'NaN'],
          answer: 1,
          explain: '`add(2, 3)` returns `2 + 3`, which is `5`.',
        },
        {
          type: 'mc',
          question: 'What does a function return if it has no `return` statement?',
          options: ['`null`', '`0`', '`undefined`', 'An empty string'],
          answer: 2,
          explain: 'Every function returns a value; without `return`, that value is `undefined`.',
        },
        {
          type: 'code',
          question: 'What does this print?',
          code: `const double = (x) => x * 2;
console.log(double(21));`,
          options: ['21', '42', '"21, 21"', 'undefined'],
          answer: 1,
          explain:
            'An arrow function with a single expression returns it implicitly, so `21 * 2 = 42`.',
        },
      ],
    },
    {
      id: 'arrays',
      title: 'Arrays',
      intro:
        'An array is an ordered list of values. Arrays are the workhorse data structure of JavaScript, and they come with a large set of methods.',
      blocks: [
        {
          type: 'p',
          text: 'Create an array with square brackets. Elements are indexed starting at `0`.',
        },
        {
          type: 'code',
          code: `const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);   // "apple"
console.log(fruits[2]);   // "cherry"
console.log(fruits.length); // 3`,
        },
        { type: 'heading', text: 'Adding and removing' },
        {
          type: 'code',
          code: `const nums = [1, 2, 3];
nums.push(4);         // add to the end
console.log(nums);    // [1, 2, 3, 4]

nums.pop();           // remove from the end
console.log(nums);    // [1, 2, 3]

nums.unshift(0);      // add to the front
nums.shift();         // remove from the front
console.log(nums);    // [1, 2, 3]`,
        },
        {
          type: 'p',
          text: '`push`/`pop`/`shift`/`unshift` modify the array in place. The dedicated array methods page explores dozens more, including `map`, `filter`, and `reduce`.',
        },
        { type: 'heading', text: 'Arrays are objects' },
        {
          type: 'p',
          text: 'Arrays are a special kind of object. They hold ordered values, but they are objects under the hood — which is why `typeof []` is `"object"`.',
        },
        {
          type: 'code',
          code: `console.log(typeof []); // "object"
console.log(Array.isArray([])); // true`,
        },
        {
          type: 'note',
          text: 'Arrays are passed by reference, not by value. If you copy an array with `arr2 = arr1`, both names point at the same array — mutating one affects the other. Use `[...arr1]` or `arr1.slice()` for a copy.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'What is the index of `"cherry"` in this array?',
          code: `const fruits = ["apple", "banana", "cherry"];`,
          options: ['1', '2', '3', '"cherry"'],
          answer: 1,
          explain: 'Array indexes start at 0: apple=0, banana=1, cherry=2.',
        },
        {
          type: 'mc',
          question: 'Which pair correctly describes `push` and `pop`?',
          options: [
            '`push` adds to front, `pop` removes from front',
            '`push` adds to end, `pop` removes from end',
            'Both only return the new length',
            'They work only on strings',
          ],
          answer: 1,
          explain: '`push` appends to the end; `pop` removes and returns the last element.',
        },
        {
          type: 'tf',
          question: 'Copying with `const b = a` gives you an independent copy of array `a`.',
          answer: 1,
          explain:
            '`b = a` makes both names reference the SAME array. Use the spread operator (`[...a]`) for a real copy.',
        },
      ],
    },
    {
      id: 'objects',
      title: 'Objects',
      intro:
        'Objects store data in key/value pairs. They are how JavaScript models almost everything: users, products, settings, and more.',
      blocks: [
        { type: 'heading', text: 'Object literals' },
        {
          type: 'code',
          code: `const user = {
  name: "Ada",
  age: 36,
  admin: true,
};

console.log(user.name);    // "Ada"   dot notation
console.log(user["age"]);  // 36      bracket notation
console.log(user.city);    // undefined: missing key`,
        },
        {
          type: 'p',
          text: 'Dot notation is clean, but bracket notation allows dynamic keys — the key can be any expression evaluating to a string.',
        },
        { type: 'heading', text: 'Nesting' },
        {
          type: 'p',
          text: 'Object values can be other objects or arrays, letting you build rich structures.',
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
        { type: 'heading', text: 'Methods and computed keys' },
        {
          type: 'code',
          code: `const greeting = "salute";

const person = {
  name: "Grace",
  [greeting]: () => "Hello!",
  greet() {
    return "Hello, " + this.name;
  },
};

console.log(person.salute()); // "Hello!"
console.log(person.greet());  // "Hello, Grace"`,
        },
        {
          type: 'p',
          text: 'The shorthand `greet() {}` is a method. Inside it, `this` refers to the object the method was called on. `this` is covered properly in the classes topic.',
        },
        { type: 'heading', text: 'Object shorthand' },
        {
          type: 'code',
          code: `const name = "Lin";
const age = 28;

const person = { name, age }; // same as { name: name, age: age }
console.log(person);          // { name: "Lin", age: 28 }`,
        },
        {
          type: 'note',
          text: 'Objects are compared by reference. Two objects with identical contents are still different objects: `{a:1} === {a:1}` is `false`.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'How do you read the `city` property of an object stored in a variable named `user`?',
          options: [
            '`user.city`',
            '`user->city`',
            '`user[city]`',
            '`city.user`',
          ],
          answer: 0,
          explain: 'Dot notation uses `object.property`: `user.city`. Bracket notation needs quotes: `user["city"]`.',
        },
        {
          type: 'tf',
          question: 'Two objects with identical contents are equal under `===`.',
          answer: 1,
          explain:
            'Objects compare by reference (identity), not by content. `{a:1} === {a:1}` is false.',
        },
        {
          type: 'code',
          question: 'What does this print?',
          code: `const user = { name: "Ada", "age": 36 };
console.log(user["name"]);`,
          options: ['"Ada"', '36', 'undefined', 'An error'],
          answer: 0,
          explain:
            'Bracket notation with the key string `"name"` reads the same property as `user.name`.',
        },
      ],
    },
    {
      id: 'strings',
      title: 'Working with strings',
      intro:
        'Strings are text. This page covers the essentials; every string method gets a full explanation on its own reference page later.',
      blocks: [
        { type: 'heading', text: 'Creating strings' },
        {
          type: 'code',
          code: `const single = 'single quotes';
const double = "double quotes";
const template = \`template literals \${2 + 3}\`;
console.log(template); // "template literals 5"`,
        },
        {
          type: 'p',
          text: 'Template literals (backticks) allow expression interpolation with `${...}` and multi-line text.',
        },
        { type: 'heading', text: 'Properties and basic methods' },
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
        { type: 'heading', text: 'Strings are immutable' },
        {
          type: 'p',
          text: 'Strings cannot be changed in place. Methods like `toUpperCase()` return a NEW string; the original is untouched.',
        },
        {
          type: 'code',
          code: `let word = "hello";
word.toUpperCase();
console.log(word); // "hello", unchanged!

word = word.toUpperCase();
console.log(word); // "HELLO"`,
        },
        {
          type: 'note',
          text: 'Strings compare with `===` by value, unlike objects. `"abc" === "abc"` is `true`.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'What does this print?',
          code: `console.log("Hello".length);`,
          options: ['4', '5', '6', '"5"'],
          answer: 1,
          explain: 'H-e-l-l-o is 5 characters, so `.length` is 5.',
        },
        {
          type: 'tf',
          question: '`word.toUpperCase()` permanently changes the string stored in `word`.',
          answer: 1,
          explain:
            'Strings are immutable. `toUpperCase()` returns a new string; you must reassign it to keep the change.',
        },
        {
          type: 'mc',
          question: 'Which symbol starts a template literal?',
          options: ['The backtick `` ` ``', 'Single quotes', 'Double quotes', 'The dollar sign `$`'],
          answer: 0,
          explain:
            'Template literals are wrapped in backticks and can interpolate with `${...}`.',
        },
      ],
    },
    {
      id: 'numbers',
      title: 'Numbers and maths',
      intro:
        'Numbers behave differently from integers in other languages. Learn the quirks — floating-point precision, `NaN`, and infinity.',
      blocks: [
        { type: 'heading', text: 'Number basics' },
        {
          type: 'code',
          code: `console.log(0.1 + 0.2); // 0.30000000000000004 ?!
console.log(10 / 4);      // 2.5
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log("abc" * 2);   // NaN (Not a Number)`,
        },
        {
          type: 'p',
          text: 'Numbers are stored as double-precision floating point, so some decimals cannot be represented exactly. That is why `0.1 + 0.2` is not exactly `0.3`.',
        },
        { type: 'heading', text: 'NaN' },
        {
          type: 'p',
          text: '`NaN` appears when a numeric operation produces something that is not a number. It is the only value in JavaScript that is not equal to itself.',
        },
        {
          type: 'code',
          code: `console.log(NaN === NaN);      // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("hi"));       // true (loose, converts first)
console.log(Number.isNaN("hi"));// false (strict)`,
        },
        { type: 'heading', text: 'Parsing' },
        {
          type: 'code',
          code: `console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14"));  // 3.14
console.log(Number("42"));        // 42
console.log(Number("42px"));      // NaN`,
        },
        {
          type: 'p',
          text: '`parseInt`/`parseFloat` read from the start of a string until they hit something that is not a digit. `Number()` converts the whole string or fails.',
        },
        { type: 'heading', text: 'Math utilities' },
        {
          type: 'code',
          code: `console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.7));   // 4
console.log(Math.ceil(4.2));    // 5
console.log(Math.max(1, 8, 3)); // 8
console.log(Math.min(1, 8, 3)); // 1
console.log(Math.abs(-5));      // 5
console.log(Math.random());     // between 0 and 1`,
        },
        {
          type: 'note',
          text: 'The full set of Numeric methods and Math functions have their own pages in the Methods Reference section.',
        },
      ],
      quiz: [
        {
          type: 'tf',
          question: '`0.1 + 0.2` equals exactly `0.3` in JavaScript.',
          answer: 1,
          explain:
            'Floating-point storage makes the result `0.30000000000000004`. Compare with an epsilon, or round when needed.',
        },
        {
          type: 'code',
          question: 'What does `parseInt("42px")` return?',
          options: ['42', 'NaN', '0', '"42px"'],
          answer: 0,
          explain: '`parseInt` reads digits from the start and stops at "px", returning 42.',
        },
        {
          type: 'mc',
          question: 'What is the result of `1 / 0`?',
          options: ['Nothing (it is undefined)', '`Infinity`', '`NaN`', 'It throws an error'],
          answer: 1,
          explain: 'Division by zero yields `Infinity` in JavaScript rather than throwing an error.',
        },
      ],
    },
  ],
}