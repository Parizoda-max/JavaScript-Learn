export const gettingStarted = {
  title: 'Getting Started',
  topics: [
    {
      id: 'introduction',
      title: 'Introduction',
      intro:
        'JavaScript is the programming language of the web. It turns static pages into interactive applications.',
      blocks: [
        {
          type: 'p',
          text: 'JavaScript runs in every modern browser without any installation. The same language also runs on servers through Node.js, and inside many other environments.',
        },
        {
          type: 'p',
          text: 'A JavaScript file is a list of instructions. When the browser loads a web page, it carries out those instructions line by line: reading input, changing what is on screen, and responding to clicks and keystrokes.',
        },
        { type: 'heading', text: 'What JavaScript can do' },
        {
          type: 'list',
          items: [
            'Update the content of a page while the user is looking at it',
            'Validate forms and react to user actions like clicks, typing, and scrolling',
            'Fetch data from servers and draw graphs, charts, and games',
            'Build complete applications, from small widgets to large web apps',
          ],
        },
        {
          type: 'p',
          text: "JavaScript is interpreted: the browser reads your source code directly, no separate compilation step is needed. That makes it a fast language to prototype in and an easy one to learn.",
        },
        {
          type: 'note',
          text: 'Throughout this course, "method" means a function that belongs to a value — for example `name.toUpperCase()` is a method of a string. You will meet dozens of them, and each has its own page here.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'Where does JavaScript run natively in a web browser?',
          options: [
            'Only on the web server',
            'Inside the browser itself',
            'Only through a special plugin',
            'Only in Node.js',
          ],
          answer: 1,
          explain:
            'JavaScript is built into every modern browser. It can also run on servers via Node.js, but no plugin or install is needed for the browser.',
        },
        {
          type: 'tf',
          question:
            'JavaScript source code needs to be compiled to machine code before the browser can run it.',
          answer: 1,
          explain:
            'JavaScript is interpreted (with modern just-in-time optimization under the hood). There is no manual compile step.',
        },
        {
          type: 'mc',
          question: 'A "method" in JavaScript is best described as:',
          options: [
            'A way to define a class',
            'A function that belongs to a value, like `name.toUpperCase()`',
            'A reserved keyword',
            'A type of loop',
          ],
          answer: 1,
          explain:
            'A method is a function attached to a value (object, string, array, and so on) and is called with dot notation.',
        },
      ],
    },
    {
      id: 'running-code',
      title: 'Running code in the browser',
      intro:
        'The browser console is the fastest place to experiment with JavaScript.',
      blocks: [
        {
          type: 'p',
          text: 'Every browser ships with developer tools. In Chrome and Edge, press `F12` or `Ctrl+Shift+I` (Cmd+Option+I on Mac) and open the "Console" tab. You can type JavaScript directly there and run it with Enter.',
        },
        {
          type: 'code',
          code: `console.log("Hello, world!");
console.log(2 + 2);`,
        },
        {
          type: 'p',
          text: '`console.log()` prints a value to the console. It is the simplest way to see what your program is doing, and you will use it constantly while learning.',
        },
        { type: 'heading', text: 'Adding code to a page' },
        {
          type: 'p',
          text: 'In a real project you write code in `.js` files and link them from an HTML page. Inside a web page you can also use a `<script>` tag in the HTML itself, though separating files is the professional approach.',
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
          text: 'When the page loads, the browser reads `app.js` line by line, from top to bottom, and executes every statement in order.',
        },
        {
          type: 'note',
          text: 'Comments are notes ignored by JavaScript. Everything after `//` on a line is ignored; `/* ... */` ignores a whole block. Use them to explain your reasoning.',
        },
        {
          type: 'code',
          code: `// This is a single-line comment.
let x = 5; // comments can sit at the end of a line.

/* This comment
   spans two lines. */`,
        },
      ],
      quiz: [
        {
          type: 'tf',
          question: 'The browser console can run JavaScript directly.',
          answer: 0,
          explain:
            'The console tab accepts JavaScript input. Typing expressions and pressing Enter runs them immediately.',
        },
        {
          type: 'code',
          question: 'What does the browser print for the last statement?',
          code: `console.log("one");
console.log("two");
console.log("three");`,
          options: ['one two three', 'three two one', 'three, then two, then one', 'one, then two, then three, in order'],
          answer: 3,
          explain:
            'Statements run (and are logged) in the order they appear, from top to bottom.',
        },
        {
          type: 'mc',
          question: 'Which of these is a comment in JavaScript?',
          options: ['`// this is a comment`', '`<!-- comment -->`', '`# comment`', '`REM comment`'],
          answer: 0,
          explain:
            '`//` marks a single-line comment in JavaScript. The other syntaxes belong to other languages.',
        },
      ],
    },
    {
      id: 'linking-javascript',
      title: 'Linking JavaScript to HTML',
      intro:
        'The only way the browser knows there is JavaScript to run is through HTML. This lesson shows every way to connect a script to a page.',
      blocks: [
        {
          type: 'p',
          text: 'There are three ways to add JavaScript to an HTML page: an inline `<script>` block, an external `.js` file via `src`, or a module script. Where you place the tag matters.',
        },
        { type: 'heading', text: '1. External file (recommended)' },
        {
          type: 'p',
          text: 'Keep code in its own `.js` file and link it with `<script src="...">`. This separates logic from structure and lets the browser cache the file.',
        },
        {
          type: 'code',
          code: `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My page</title>
  </head>
  <body>
    <h1>Hello</h1>

    <!-- link the script at the END of <body> -->
    <script src="app.js"></script>
  </body>
</html>`,
        },
        {
          type: 'p',
          text: 'Placing `<script>` at the end of `<body>` guarantees the HTML above it is already parsed when the script runs — so the script can find elements like the `<h1>`.',
        },
        { type: 'heading', text: '2. Inline <script> block' },
        {
          type: 'p',
          text: 'Code written directly between `<script>` and `</script>` runs immediately when the parser reaches it. Useful for tiny snippets, but it mixes logic with markup.',
        },
        {
          type: 'code',
          code: `<!doctype html>
<html>
  <body>
    <script>
      console.log("Hello from inline script");
      const x = 2 + 2;
      console.log(x); // 4
    </script>
  </body>
</html>`,
        },
        { type: 'heading', text: '3. Module scripts' },
        {
          type: 'p',
          text: 'The `type="module"` attribute enables `import`/`export` and deferred execution. Module scripts are always deferred, run after the document is parsed, and execute only once.',
        },
        {
          type: 'code',
          code: `<!-- main.js uses import/export -->
<script type="module" src="main.js"></script>

<!-- module scripts can also be inline -->
<script type="module">
  import { greet } from './utils.js';
  console.log(greet('world'));
</script>`,
        },
        { type: 'heading', text: 'defer and async' },
        {
          type: 'p',
          text: 'By default, a `<script src>` pauses parsing while it downloads and runs. Two attributes fix this:',
        },
        {
          type: 'list',
          items: [
            '`defer` — download in parallel, run AFTER the document is parsed, preserving order',
            '`async` — download in parallel, run as soon as it is ready, NOT preserving order',
          ],
        },
        {
          type: 'code',
          code: `<!-- runs after the page is parsed, in order -->
<script defer src="a.js"></script>
<script defer src="b.js"></script>

<!-- runs as soon as each download finishes -->
<script async src="widget.js"></script>`,
        },
        {
          type: 'note',
          text: 'Use `defer` for scripts that need the whole DOM. Use `async` for independent scripts like analytics. Plain `<script>` in `<head>` blocks rendering — avoid it when possible.',
        },
        {
          type: 'p',
          text: 'If a script fails to load or throws an error, the browser logs it in the console and keeps rendering the page. The console is always your first debugging tool.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'Which is the recommended way to load JavaScript on a real page?',
          options: [
            'An external file with `<script src="app.js">`',
            'Writing everything in a comment',
            'An inline `<script>` that repeats on every page',
            'A `<style>` tag',
          ],
          answer: 0,
          explain:
            'External files keep code separate, are cached by the browser, and only load once. Inline scripts are fine for tiny snippets.',
        },
        {
          type: 'mc',
          question: 'Why put `<script src>` at the end of `<body>`?',
          options: [
            'So the script runs before the HTML is parsed',
            'So the HTML above is already parsed when the script runs',
            'It does not matter where it goes',
            'To make the file download faster',
          ],
          answer: 1,
          explain:
            'By the time the end-of-body script runs, the DOM above it is parsed, so the script can access those elements. This avoids the classic "element not found" bug.',
        },
        {
          type: 'tf',
          question: 'An `async` script always runs after the whole page is parsed, preserving order.',
          answer: 1,
          explain:
            'That is the behavior of `defer`. `async` runs the moment a download finishes, in no particular order.',
        },
        {
          type: 'mc',
          question: 'What does `type="module"` enable?',
          options: [
            'Faster animations',
            '`import` and `export` statements',
            'Inline comments',
            'Internal CSS',
          ],
          answer: 1,
          explain:
            'Module scripts support ES module syntax (`import`/`export`), are always deferred, and run once.',
        },
      ],
    },
    {
      id: 'variables',
      title: 'Variables and constants',
      intro:
        'Variables are named boxes that hold values. The names `let`, `const`, and `var` create them.',
      blocks: [
        {
          type: 'p',
          text: 'Declare a variable with `let`, then assign it a value with `=`. You can change the value later.',
        },
        {
          type: 'code',
          code: `let greeting = "hello"; // declare and assign
console.log(greeting);

greeting = "goodbye"; // reassign
console.log(greeting);`,
        },
        {
          type: 'p',
          text: '`const` (short for constant) also declares a variable, but it cannot be reassigned after creation. Use `const` by default.',
        },
        {
          type: 'code',
          code: `const pi = 3.14159;
console.log(pi);   // 3.14159

pi = 3; // TypeError: assignment to constant variable`,
        },
        {
          type: 'p',
          text: '`var` is the old way to declare variables. It works, but its scoping rules cause bugs, so modern JavaScript prefers `let` and `const`.',
        },
        { type: 'heading', text: 'Naming rules' },
        {
          type: 'list',
          items: [
            'Names can contain letters, digits, `_`, and `$`, but cannot start with a digit',
            'Names are case-sensitive: `count` and `Count` are different variables',
            'Use camelCase for multi-word names: `totalPrice`, `userName`',
            'Avoid reserved words like `if`, `for`, or `class` as names',
          ],
        },
        {
          type: 'note',
          text: 'A variable you only need to read, and never reassign, should be `const`. A variable you reassign (like a counter in a loop) should be `let`. `var` should usually be avoided.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'Which variable can never be reassigned?',
          options: ['`let`', '`const`', '`var`', 'Both `const` and `let`'],
          answer: 1,
          explain:
            '`const` declares a binding that cannot be reassigned. `let` and `var` can both be reassigned.',
        },
        {
          type: 'tf',
          question: '`speed` and `Speed` are the same variable.',
          answer: 1,
          explain: 'JavaScript names are case-sensitive, so `speed` and `Speed` are two different variables.',
        },
        {
          type: 'mc',
          question: 'Which of these names is valid and idiomatic?',
          options: ['`total price`', '`2fast`', '`totalPrice`', '`if`'],
          answer: 2,
          explain:
            '`totalPrice` follows camelCase and the naming rules. Spaces and leading digits are invalid, and `if` is reserved.',
        },
      ],
    },
    {
      id: 'data-types',
      title: 'Data types',
      intro:
        'Every value in JavaScript has a type. Understanding the seven primitive types is the foundation for everything else.',
      blocks: [
        {
          type: 'p',
          text: 'JavaScript has seven primitive types, plus objects. A primitive is a value that is not an object and has no methods of its own.',
        },
        { type: 'heading', text: 'The primitive types' },
        {
          type: 'list',
          items: [
            '`string` — text: `"hi"`, `\'hi\'`, `` `hi` ``',
            '`number` — integers and decimals: `42`, `3.14`, `-7`',
            '`boolean` — `true` or `false`',
            '`undefined` — a value that has not been assigned',
            '`null` — an intentional empty value',
            '`bigint` — very large integers, ending in `n`: `123n`',
            '`symbol` — unique identifiers',
          ],
        },
        {
          type: 'code',
          code: `console.log(typeof "hello"); // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object" (a historical quirk)
console.log(typeof 42n);      // "bigint"
console.log(typeof {});       // "object"`,
        },
        {
          type: 'p',
          text: 'The `typeof` operator returns the type of a value as a string. Notice the quirk: `typeof null` returns `"object"`, a bug from the earliest days of the language that is preserved for compatibility.',
        },
        { type: 'heading', text: 'undefined vs null' },
        {
          type: 'p',
          text: '`undefined` means "no value yet" — a declared variable that was never assigned, or a missing property. `null` means "an intentionally empty value" that you set yourself.',
        },
        {
          type: 'code',
          code: `let nothing;              // undefined: never assigned
console.log(nothing);

const empty = null;       // null: deliberately empty
console.log(empty);`,
        },
        {
          type: 'note',
          text: '`==` and `===` behave differently: `==` compares loosely (types are converted), `===` compares strictly (types must match). You will learn them in the operators lesson.',
        },
      ],
      quiz: [
        {
          type: 'mc',
          question: 'How many primitive types does JavaScript have?',
          options: ['5', '6', '7', 'An unlimited number'],
          answer: 2,
          explain:
            'The seven primitives are string, number, boolean, undefined, null, bigint, and symbol.',
        },
        {
          type: 'code',
          question: 'What does `typeof null` print?',
          code: `console.log(typeof null);`,
          options: ['"null"', '"undefined"', '"object"', '"boolean"'],
          answer: 2,
          explain:
            'A historic quirk: `typeof null` returns "object" even though null is a primitive.',
        },
        {
          type: 'mc',
          question: 'When should you deliberately set a variable to `null`?',
          options: [
            'When the variable has never been used',
            'When you want to mark a value as intentionally empty',
            'When you want the letter "n" in front of a number',
            'Never, `null` does not exist in JavaScript',
          ],
          answer: 1,
          explain:
            '`null` is the explicit "I chose to store nothing here" value, whereas `undefined` is the automatic "nothing was ever assigned" value.',
        },
      ],
    },
    {
      id: 'operators',
      title: 'Operators',
      intro:
        'Operators combine values into new values. Arithmetic, comparison, logical, and assignment operators are used in nearly every line you write.',
      blocks: [
        { type: 'heading', text: 'Arithmetic' },
        {
          type: 'code',
          code: `console.log(5 + 2); // 7  addition
console.log(5 - 2); // 3  subtraction
console.log(5 * 2); // 10 multiplication
console.log(5 / 2); // 2.5 division
console.log(5 % 2); // 1  remainder (modulo)
console.log(2 ** 3); // 8 exponent`,
        },
        { type: 'heading', text: 'Comparison' },
        {
          type: 'code',
          code: `console.log(5 > 3);  // true
console.log(5 <= 5); // true
console.log(5 == "5");  // true  (loose: converts types)
console.log(5 === "5"); // false (strict: types must match)
console.log(5 !== "5"); // true  (strict not-equal)`,
        },
        {
          type: 'p',
          text: 'Always prefer `===` and `!==`. The loose `==` and `!=` convert types behind your back and create surprises like `0 == false` being true.',
        },
        { type: 'heading', text: 'Logical' },
        {
          type: 'code',
          code: `console.log(true && false); // false  AND: both sides
console.log(true || false); // true   OR: either side
console.log(!true);         // false  NOT: inverts`,
        },
        {
          type: 'p',
          text: 'Logical operators do not always return booleans. `a || b` returns `a` if it is truthy, otherwise `b`. `a && b` returns `a` if it is falsy, otherwise `b`. This is used to give defaults.',
        },
        {
          type: 'code',
          code: `const name = "" || "guest"; // "" is falsy, so name = "guest"
console.log(name);

const loggedIn = true && "welcome";
console.log(loggedIn); // "welcome"`,
        },
        { type: 'heading', text: 'Assignment and shorthand' },
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
          text: '`++` and `--` have a prefix and postfix form. `x++` returns the old value then increments; `++x` increments then returns the new value. It rarely matters, but it explains surprising expressions.',
        },
      ],
      quiz: [
        {
          type: 'code',
          question: 'What does this print?',
          code: `console.log(2 ** 3 + 1);`,
          options: ['9', '7', '11', '24'],
          answer: 0,
          explain:
            'Exponent (`2 ** 3`) is evaluated before addition, giving `8 + 1 = 9`.',
        },
        {
          type: 'mc',
          question: 'Why is `===` preferred over `==`?',
          options: [
            'It is faster in every browser',
            'It compares value and type, avoiding automatic type conversion',
            'It works with more data types',
            'It is the only operator that compares booleans',
          ],
          answer: 1,
          explain:
            '`===` requires identical value AND type, so `0 === false` is false, while `0 == false` is true.',
        },
        {
          type: 'code',
          question: 'What does this print?',
          code: `console.log(5 % 2);`,
          options: ['2.5', '0', '1', '2'],
          answer: 2,
          explain: '`%` is the remainder operator: 5 divided by 2 leaves remainder 1.',
        },
      ],
    },
  ],
}