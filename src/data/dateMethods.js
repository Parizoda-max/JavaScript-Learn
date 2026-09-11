export const dateMethods = {
  id: 'date-methods',
  title: 'Date methods',
  intro:
    'Dates are stored as a number of milliseconds since January 1, 1970 (UTC). The Date object wraps that number and provides getters, setters, and formatting methods.',
  blocks: [
    { type: 'heading', text: 'Creating dates' },
    {
      type: 'code',
      code: `const now = new Date();            // current moment
const specific = new Date(2024, 0, 15); // Jan 15 2024, local time
const fromString = new Date("2024-01-15");
const fromMs = new Date(1705248000000);

console.log(now.getFullYear());`,
    },
    {
      type: 'note',
      text: 'Months are ZERO-INDEXED: January is `0`, December is `11`. This is the most common source of Date bugs. If you pass `(2024, 1, 15)`, you get Feb 15 — not Jan 15.',
    },
    { type: 'heading', text: 'UTC vs local time' },
    {
      type: 'p',
      text: '`getMonth()`, `getHours()`, etc. return values in the machine\'s local time zone. The `getUTC...` variants return the same parts in UTC. Use the UTC forms when dates must be unambiguous, e.g. for timestamps sent to a server.',
    },
  ],
  methods: [
    {
      name: 'Date.now()',
      syntax: 'Date.now()',
      desc: 'Static method. Returns the current time as milliseconds since the Unix epoch (Jan 1, 1970 UTC). No Date object needed.',
      code: `console.log(Date.now()); // e.g. 1705248000000
const start = Date.now();
// ... some work ...
console.log("Elapsed ms:", Date.now() - start);`,
    },
    {
      name: 'Date.parse()',
      syntax: 'Date.parse(dateString)',
      desc: 'Static method. Parses a date string into milliseconds since the epoch, or NaN if it cannot be parsed. Support for non-ISO formats varies by browser.',
      code: `console.log(Date.parse("2024-01-15")); // 1705276800000 (UTC)
console.log(Date.parse("not a date"));    // NaN`,
    },
    {
      name: 'Date.UTC()',
      syntax: 'Date.UTC(year, month, day?, hour?, minute?, second?, ms?)',
      desc: 'Static method. Like the constructor, but builds the date in UTC instead of local time. Returns milliseconds.',
      code: `const ms = Date.UTC(2024, 0, 15);
console.log(new Date(ms).toISOString().slice(0, 10)); // "2024-01-15"`,
    },
    {
      name: 'getTime()',
      syntax: 'date.getTime()',
      desc: 'Returns the millisecond timestamp value of the date. The canonical way to compare or store dates.',
      code: `const a = new Date(2024, 0, 1);
const b = new Date(2024, 0, 2);
console.log(a.getTime() < b.getTime()); // true  (earlier)`,
    },
    {
      name: 'getFullYear()',
      syntax: 'date.getFullYear()',
      desc: 'Returns the four-digit year in local time.',
      code: `const d = new Date(2024, 5, 1);
console.log(d.getFullYear()); // 2024`,
    },
    {
      name: 'getMonth()',
      syntax: 'date.getMonth()',
      desc: 'Returns the month as a number from 0 (January) to 11 (December), in local time.',
      code: `const d = new Date(2024, 5, 15);
console.log(d.getMonth()); // 5  (June!)`,
    },
    {
      name: 'getDate()',
      syntax: 'date.getDate()',
      desc: 'Returns the day of the month (1-31) in local time. Confusingly, this is the DAY, not the full date.',
      code: `const d = new Date(2024, 0, 15);
console.log(d.getDate()); // 15`,
    },
    {
      name: 'getDay()',
      syntax: 'date.getDay()',
      desc: 'Returns the day of the WEEK, where 0 = Sunday and 6 = Saturday.',
      code: `const d = new Date(2024, 0, 15); // a Monday
console.log(d.getDay()); // 1`,
    },
    {
      name: 'getHours()',
      syntax: 'date.getHours()',
      desc: 'Returns the hour (0-23) in local time.',
      code: `const d = new Date(2024, 0, 15, 14, 30);
console.log(d.getHours()); // 14`,
    },
    {
      name: 'getMinutes()',
      syntax: 'date.getMinutes()',
      desc: 'Returns the minutes (0-59) in local time.',
      code: `const d = new Date(2024, 0, 15, 14, 30);
console.log(d.getMinutes()); // 30`,
    },
    {
      name: 'getSeconds()',
      syntax: 'date.getSeconds()',
      desc: 'Returns the seconds (0-59) in local time.',
      code: `const d = new Date(2024, 0, 15, 14, 30, 45);
console.log(d.getSeconds()); // 45`,
    },
    {
      name: 'getMilliseconds()',
      syntax: 'date.getMilliseconds()',
      desc: 'Returns the milliseconds (0-999) in local time.',
      code: `const d = new Date(2024, 0, 15, 0, 0, 0, 123);
console.log(d.getMilliseconds()); // 123`,
    },
    {
      name: 'getTimezoneOffset()',
      syntax: 'date.getTimezoneOffset()',
      desc: 'Returns the difference, in MINUTES, between local time and UTC. Positive values mean local time is BEHIND UTC.',
      code: `const d = new Date();
console.log(d.getTimezoneOffset());
// e.g. -60 for Central European Time (UTC+1)`,
    },
    {
      name: 'getUTCFullYear / getUTCMonth / ...',
      syntax: 'date.getUTCFullYear()',
      desc: 'The UTC versions of every getter. They return the same calendar parts but in UTC instead of local time.',
      code: `const d = new Date("2024-01-15T00:00:00Z");
console.log(d.getUTCFullYear()); // 2024
console.log(d.getUTCHours());    // 0
console.log(d.getHours());       // local time, may differ`,
    },
    {
      name: 'setFullYear()',
      syntax: 'date.setFullYear(year, month?, day?)',
      desc: 'Sets the year (and optionally month and day) in local time. Mutates the date and returns its new timestamp.',
      code: `const d = new Date(2024, 0, 15);
d.setFullYear(2025);
console.log(d.getFullYear()); // 2025`,
    },
    {
      name: 'setMonth()',
      syntax: 'date.setMonth(month, day?)',
      desc: 'Sets the month (0-11) in local time. Also a day value; values outside the range roll over.',
      code: `const d = new Date(2024, 0, 15);
d.setMonth(11);
console.log(d.getMonth()); // 11 (December)`,
    },
    {
      name: 'setDate()',
      syntax: 'date.setDate(day)',
      desc: 'Sets the day of the month. Values beyond the month length roll into the next month.',
      code: `const d = new Date(2024, 0, 15); // Jan 15
d.setDate(45);
console.log(d.getMonth(), d.getDate()); // 1 (Feb), 14 -- rolls over`,
    },
    {
      name: 'setHours() / setMinutes() / setSeconds()',
      syntax: 'date.setHours(hour, minute?, second?, ms?)',
      desc: 'Sets the time part in local time. Out-of-range values roll over to the next unit.',
      code: `const d = new Date(2024, 0, 15, 10, 0);
d.setHours(23, 30);
console.log(d.getHours());   // 23
console.log(d.getMinutes()); // 30`,
    },
    {
      name: 'setTime()',
      syntax: 'date.setTime(milliseconds)',
      desc: 'Sets the date from a raw millisecond timestamp since the epoch.',
      code: `const d = new Date();
d.setTime(0); // the epoch: Jan 1 1970 00:00:00 UTC
console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"`,
    },
    {
      name: 'toISOString()',
      syntax: 'date.toISOString()',
      desc: 'Returns the date as an ISO 8601 string in UTC, with the trailing Z. The standard format for APIs and JSON.',
      code: `const d = new Date(2024, 0, 15, 12, 0);
console.log(d.toISOString());
// "2024-01-15T11:00:00.000Z" (adjusted to UTC)`,
    },
    {
      name: 'toJSON()',
      syntax: 'date.toJSON()',
      desc: 'Used automatically by `JSON.stringify`. Returns the same ISO string as `toISOString`.',
      code: `const d = new Date(2024, 0, 15);
console.log(JSON.stringify({ at: d }));
// {"at":"2024-01-15T00:00:00.000Z"}`,
    },
    {
      name: 'toDateString()',
      syntax: 'date.toDateString()',
      desc: 'Returns a human-readable date string WITHOUT the time.',
      code: `const d = new Date(2024, 0, 15);
console.log(d.toDateString()); // "Mon Jan 15 2024"`,
    },
    {
      name: 'toTimeString()',
      syntax: 'date.toTimeString()',
      desc: 'Returns a human-readable time string WITHOUT the date.',
      code: `const d = new Date(2024, 0, 15, 14, 30);
console.log(d.toTimeString()); // "14:30:00 GMT+0100 (...)"`,
    },
    {
      name: 'toLocaleDateString()',
      syntax: 'date.toLocaleDateString(locale?, options?)',
      desc: 'Returns the date part formatted for a locale. Options control month/day/year styles.',
      code: `const d = new Date(2024, 0, 15);
console.log(d.toLocaleDateString("en-US"));
console.log(d.toLocaleDateString("de-DE"));
console.log(d.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
// "Monday, January 15, 2024"`,
    },
    {
      name: 'toLocaleString()',
      syntax: 'date.toLocaleString(locale?, options?)',
      desc: 'Returns both date and time formatted for a locale, with optional style options.',
      code: `const d = new Date(2024, 0, 15, 14, 30);
console.log(d.toLocaleString("en-US"));
// "1/15/2024, 2:30:00 PM"`,
    },
    {
      name: 'toLocaleTimeString()',
      syntax: 'date.toLocaleTimeString(locale?, options?)',
      desc: 'Returns only the time part, formatted for a locale.',
      code: `const d = new Date(2024, 0, 15, 14, 30);
console.log(d.toLocaleTimeString("en-US"));
// "2:30:00 PM"`,
    },
    {
      name: 'toUTCString()',
      syntax: 'date.toUTCString()',
      desc: 'Returns the date in UTC as a readable string (obsolete HTTP date format).',
      code: `const d = new Date("2024-01-15T00:00:00Z");
console.log(d.toUTCString());
// "Mon, 15 Jan 2024 00:00:00 GMT"`,
    },
    {
      name: 'toString()',
      syntax: 'date.toString()',
      desc: 'Returns the date as a readable string in LOCAL time.',
      code: `const d = new Date(2024, 0, 15);
console.log(d.toString());
// "Mon Jan 15 2024 00:00:00 GMT+0100 (Central European Time)"`,
    },
    {
      name: 'valueOf()',
      syntax: 'date.valueOf()',
      desc: 'Returns the same millisecond timestamp as `getTime()`. Called automatically when dates are compared with `<` and `>`.',
      code: `const d = new Date(2024, 0, 1);
console.log(d.valueOf() === d.getTime()); // true
console.log(new Date(2024,0,1) < new Date(2024,0,2)); // true`,
    },
  ],
  quiz: [
    {
      type: 'mc',
      question: 'In `new Date(2024, 1, 15)`, February is represented by which month number?',
      options: ['1', '2', '"Feb"', '0'],
      answer: 0,
      explain: 'Months are zero-indexed: 0 = January, 1 = February, ..., 11 = December.',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `const d = new Date(2024, 0, 15);
console.log(d.getDate());`,
      options: ['15', '0', '2024', '"Mon Jan 15 2024"'],
      answer: 0,
      explain: '`getDate()` returns the day of the month, which is 15. (`getDay()` would return the weekday.)',
    },
    {
      type: 'code',
      question: 'What does this print?',
      code: `console.log(Date.now() > 0);`,
      options: ['true', 'false', 'The current year', 'undefined'],
      answer: 0,
      explain:
        '`Date.now()` returns milliseconds since the epoch, always a large positive number now.',
    },
    {
      type: 'mc',
      question: 'Which method returns the date as a UTC ISO string like "2024-01-15T00:00:00.000Z"?',
      options: ['`toDateString()`', '`toISOString()`', '`toString()`', '`getTime()`'],
      answer: 1,
      explain: '`toISOString` produces the ISO 8601 UTC format with the Z suffix.',
    },
    {
      type: 'tf',
      question: '`getUTCHours()` and `getHours()` always return the same value.',
      answer: 1,
      explain:
        'They differ whenever the machine\'s timezone is not UTC. `getHours()` is local time; `getUTCHours()` is UTC.',
    },
  ],
}