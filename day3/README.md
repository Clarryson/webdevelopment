# Day 3: JavaScript Fundamentals & Notes Toolkit 🧠

Welcome to **Day 3** of my Web Development Learning Journey!

On Day 1, I learned HTML to build the structure of webpages. On Day 2, I learned CSS to style those webpages. Today, I am learning **JavaScript**, the programming language that makes websites interactive and dynamic.

My goal is not just to memorize JavaScript syntax. I want to understand how JavaScript works, how to solve problems with it, and how to write clean, reusable, and efficient code.

---

## 📚 Table of Contents

1. [What Is JavaScript?](#-1-what-is-javascript)
2. [How JavaScript Works](#-2-how-javascript-works)
3. [Connecting JavaScript to HTML](#-3-connecting-javascript-to-html)
4. [JavaScript Syntax and Comments](#-4-javascript-syntax-and-comments)
5. [Variables: let, const, and var](#-5-variables-let-const-and-var)
6. [JavaScript Data Types](#-6-javascript-data-types)
7. [Type Conversion and Coercion](#-7-type-conversion-and-coercion)
8. [Operators](#-8-operators)
9. [Conditional Statements](#-9-conditional-statements)
10. [Loops](#-10-loops)
11. [Functions](#-11-functions)
12. [Scope and Hoisting](#-12-scope-and-hoisting)
13. [Arrays](#-13-arrays)
14. [Array Methods](#-14-important-array-methods)
15. [Objects](#-15-objects)
16. [Destructuring, Spread, and Rest](#-16-destructuring-spread-and-rest)
17. [Strings and Template Literals](#-17-strings-and-template-literals)
18. [Useful JavaScript Methods](#-18-useful-javascript-methods)
19. [DOM Manipulation](#-19-dom-manipulation)
20. [JavaScript Events](#-20-javascript-events)
21. [Working with Forms](#-21-working-with-forms)
22. [Local Storage and Session Storage](#-22-local-storage-and-session-storage)
23. [JSON](#-23-json-javascript-object-notation)
24. [Error Handling and Debugging](#-24-error-handling-and-debugging)
25. [Asynchronous JavaScript](#-25-asynchronous-javascript)
26. [Working with APIs and Fetch](#-26-working-with-apis-and-fetch)
27. [JavaScript Modules](#-27-javascript-modules)
28. [Modern JavaScript Features](#-28-modern-javascript-features)
29. [Understanding the Notes Toolkit](#-29-understanding-the-notes-toolkit)
30. [JavaScript Best Practices](#-30-javascript-best-practices)
31. [Project Structure](#-31-project-structure)
32. [Running JavaScript in the Browser and Terminal](#-32-running-javascript-in-the-browser-and-terminal)
33. [Learning Resources](#-33-learning-resources)
34. [What I Learned](#-34-what-i-learned)

---

# 🧠 1. What Is JavaScript?

JavaScript is a high-level programming language used to create interactive and dynamic applications.

Think of building a website like building a human body:

- **HTML:** The skeleton. It provides the structure.
- **CSS:** The clothes and appearance. It controls how everything looks.
- **JavaScript:** The brain, nervous system, and muscles. It controls behaviour and interactions.

### What can JavaScript do?

JavaScript can:

- Respond when a user clicks a button.
- Validate registration and login forms.
- Display messages and notifications.
- Perform calculations.
- Search and filter information.
- Add, update, and delete data.
- Communicate with external APIs.
- Store information in a browser.
- Build interactive dashboards.
- Create games and web applications.

### Is JavaScript only for websites?

No. JavaScript can run in different environments.

| Environment | What JavaScript can do |
|---|---|
| Browser | Interactive websites and web applications |
| Node.js | Backend servers, scripts, and automation |
| Electron | Desktop applications |
| React Native | Mobile applications |
| Deno | Server-side applications and scripts |

**Important:** JavaScript is a programming language. Node.js is a runtime environment that allows JavaScript to run outside the browser.

---

# ⚙️ 2. How JavaScript Works

When a browser loads a webpage, it processes HTML, CSS, and JavaScript.

JavaScript is executed by a JavaScript engine.

Examples include:

- V8: Used by Google Chrome and Node.js.
- SpiderMonkey: Used by Firefox.
- JavaScriptCore: Used by Safari.

### Basic execution process

1. The browser loads the HTML.
2. The browser parses the HTML and builds the DOM.
3. CSS is loaded and applied.
4. JavaScript is loaded and executed.
5. JavaScript can interact with the webpage through the DOM.
6. The webpage responds to user actions.

### JavaScript is single-threaded by default

JavaScript normally executes one piece of code at a time on its main execution thread.

However, the browser and Node.js provide mechanisms for handling asynchronous tasks, such as timers, network requests, and file operations, without blocking the main execution flow.

I will learn more about this when studying asynchronous JavaScript.

---

# 🔌 3. Connecting JavaScript to HTML

JavaScript can be added to HTML in three main ways.

### 1. Inline JavaScript

JavaScript is written directly inside an HTML element.

```html
<button onclick="alert('Hello World!')">
    Click Me
</button>
```

This works, but it is not recommended for larger projects because it mixes HTML and JavaScript.

### 2. Internal JavaScript

JavaScript is written inside a `<script>` element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Example</title>
</head>
<body>

    <h1>Hello JavaScript</h1>

    <script>
        console.log("Hello from JavaScript!");
    </script>

</body>
</html>
```

### 3. External JavaScript (Recommended)

JavaScript is written in a separate `.js` file.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>JavaScript Project</title>

    <!-- Connect external JavaScript -->
    <script src="script.js" defer></script>
</head>

<body>

    <h1>My First JavaScript Project</h1>

    <button id="myButton">Click Me</button>

</body>
</html>
```

**script.js**

```javascript
// Find the button in the HTML document
const button = document.querySelector("#myButton");

// Listen for a click
button.addEventListener("click", function () {
    alert("Hello! JavaScript is working.");
});
```

### What does `defer` mean?

```html
<script src="script.js" defer></script>
```

`defer` tells the browser to download the JavaScript file while parsing HTML, but execute it after the HTML has been parsed.

This helps ensure that HTML elements are available when JavaScript tries to access them.

---

# 📝 4. JavaScript Syntax and Comments

JavaScript syntax refers to the rules used to write valid JavaScript code.

### Example

```javascript
const name = "Clarryson";
console.log(name);
```

### Important syntax rules

- JavaScript is case-sensitive.
- Statements are instructions executed by JavaScript.
- Curly braces `{}` define code blocks and object literals.
- Parentheses `()` are used for function calls and conditions.
- Square brackets `[]` are used for arrays and indexed access.
- Semicolons are optional in many cases, but consistent semicolon usage is a useful convention.
- Strings can use single quotes, double quotes, or backticks.

### Comments

Comments explain code and are ignored during normal execution.

**Single-line comment**

```javascript
// This is a single-line comment
const age = 20;
```

**Multi-line comment**

```javascript
/*
    This is a multi-line comment.

    It can explain what a function does
    or describe a complicated section of code.
*/
const username = "Clarryson";
```

---

# 📦 5. Variables: let, const, and var

A variable is a named container used to store information.

Think of a variable as a labelled storage box.

JavaScript provides three common variable declaration keywords.

### 1. let

Use `let` when you expect the variable's value to change.

```javascript
let age = 20;

age = 21;

console.log(age); // 21
```

### 2. const

Use `const` when you do not intend to reassign the variable.

```javascript
const country = "Kenya";

console.log(country);
```

You cannot reassign it:

```javascript
const country = "Kenya";

// This causes an error:
// country = "Uganda";
```

However, when a `const` variable contains an array or object, its contents can still be changed.

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);
```

This works because the array itself has not been reassigned.

### 3. var

`var` is the older way of declaring variables.

```javascript
var username = "Clarryson";
```

It is generally better to use `let` and `const` in modern JavaScript because they have clearer block-scoping rules.

### Comparison

| Keyword | Can reassign? | Scope | Recommended? |
|---|---|---|---|
| `let` | Yes | Block | Yes |
| `const` | No | Block | Yes, by default |
| `var` | Yes | Function | Usually avoid |

**My rule:** Start with `const`. If you later need to reassign the variable, use `let`.

---

# 🔢 6. JavaScript Data Types

A data type tells JavaScript what kind of value is being stored.

JavaScript has primitive and non-primitive data types.

## 6.1 Primitive data types

### String

Used to store text.

```javascript
const name = "Clarryson";
const course = 'Computer Science';
const message = `Welcome to JavaScript`;
```

### Number

Used for integers and decimal numbers.

```javascript
const age = 20;
const price = 99.99;
const temperature = -5;
```

### Boolean

Represents either `true` or `false`.

```javascript
const isStudent = true;
const isLoggedIn = false;
```

### Undefined

A variable declared without a value has the value `undefined`.

```javascript
let username;

console.log(username); // undefined
```

### Null

Represents an intentional absence of a value.

```javascript
const selectedUser = null;
```

### BigInt

Used for integers larger than the normal safe integer range.

```javascript
const largeNumber = 12345678901234567890n;
```

### Symbol

Creates unique identifiers.

```javascript
const id = Symbol("userId");
```

## 6.2 Non-primitive data types

These include objects, arrays, and functions.

```javascript
const student = {
    name: "Clarryson",
    course: "Computer Science"
};

const subjects = ["Networking", "Programming", "Mathematics"];

function greet() {
    console.log("Hello!");
}
```

### Checking data types with typeof

```javascript
console.log(typeof "Hello");       // string
console.log(typeof 25);            // number
console.log(typeof true);          // boolean
console.log(typeof undefined);    // undefined
console.log(typeof 100n);          // bigint
console.log(typeof Symbol());      // symbol
console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof null);          // object (historical JavaScript behaviour)
console.log(typeof function () {}); // function
```

To check whether a value is an array:

```javascript
const fruits = ["Apple", "Banana"];

console.log(Array.isArray(fruits)); // true
```

---

# 🔄 7. Type Conversion and Coercion

Sometimes JavaScript needs to convert one data type into another.

### Explicit conversion

You manually convert a value.

```javascript
const age = "20";

const convertedAge = Number(age);

console.log(convertedAge);       // 20
console.log(typeof convertedAge); // number
```

Other common conversion methods:

```javascript
Number("100");       // 100
String(100);         // "100"
Boolean(1);          // true
parseInt("25px");    // 25
parseFloat("12.5");  // 12.5
```

### Implicit conversion (type coercion)

JavaScript sometimes converts values automatically.

```javascript
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
```

Why?

- `+` can combine strings, so `"5" + 2` becomes `"52"`.
- Other arithmetic operators convert numeric strings into numbers.

**Best practice:** Convert values intentionally instead of relying on automatic conversion, especially when handling user input.

---

# ➕ 8. Operators

Operators perform operations on values and variables.

## 8.1 Arithmetic operators

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `5 + 2` |
| `-` | Subtraction | `5 - 2` |
| `*` | Multiplication | `5 * 2` |
| `/` | Division | `10 / 2` |
| `%` | Remainder | `10 % 3` |
| `**` | Exponentiation | `2 ** 3` |
| `++` | Increment | `age++` |
| `--` | Decrement | `age--` |

Example:

```javascript
const firstNumber = 10;
const secondNumber = 5;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
```

## 8.2 Assignment operators

```javascript
let score = 10;

score += 5; // score = score + 5
score -= 2; // score = score - 2
score *= 2; // score = score * 2
score /= 2; // score = score / 2
```

## 8.3 Comparison operators

Comparison operators return Boolean values.

| Operator | Meaning |
|---|---|
| `==` | Equal after possible type conversion |
| `===` | Strict equality |
| `!=` | Not equal after possible conversion |
| `!==` | Strict inequality |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

Example:

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

**Important:** Prefer `===` and `!==` because they compare both value and type.

## 8.4 Logical operators

| Operator | Meaning |
|---|---|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

Example:

```javascript
const age = 22;
const hasID = true;

console.log(age >= 18 && hasID); // true
```

## 8.5 Ternary operator

A shorter way to write a simple conditional expression.

```javascript
const age = 20;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

The format is:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

## 8.6 Nullish coalescing operator

The `??` operator provides a fallback only when a value is `null` or `undefined`.

```javascript
const username = null;

const displayName = username ?? "Guest";

console.log(displayName); // Guest
```

Unlike `||`, it does not treat `0`, `false`, or an empty string as missing.

## 8.7 Optional chaining

The `?.` operator safely accesses nested properties.

```javascript
const user = {
    name: "Clarryson",
    address: {
        city: "Embu"
    }
};

console.log(user.address?.city); // Embu
console.log(user.contact?.phone); // undefined
```

It prevents an error when the property before `?.` is `null` or `undefined`.

---

# 🚦 9. Conditional Statements

Conditional statements allow JavaScript to make decisions.

## 9.1 if statement

```javascript
const age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}
```

## 9.2 if...else

```javascript
const age = 16;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are not old enough.");
}
```

## 9.3 if...else if...else

```javascript
const marks = 75;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Below average");
}
```

## 9.4 switch statement

Useful when comparing one value against several possible cases.

```javascript
const category = "study";

switch (category) {
    case "personal":
        console.log("Personal note");
        break;

    case "work":
        console.log("Work note");
        break;

    case "study":
        console.log("Study note");
        break;

    default:
        console.log("Unknown category");
}
```

The `break` statement prevents execution from continuing into the next case.

---

# 🔁 10. Loops

Loops repeat code until a condition is met.

## 10.1 for loop

Useful when you know how many times you want to repeat something.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
```

## 10.2 while loop

Runs while a condition remains true.

```javascript
let count = 0;

while (count < 5) {
    console.log(count);

    count++;
}
```

## 10.3 do...while loop

Runs the code at least once before checking the condition.

```javascript
let number = 0;

do {
    console.log(number);

    number++;
} while (number < 3);
```

## 10.4 for...of loop

Used to iterate over values in arrays and other iterable objects.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

## 10.5 for...in loop

Used to iterate over enumerable property keys of an object.

```javascript
const student = {
    name: "Clarryson",
    course: "Computer Science",
    year: 2
};

for (const key in student) {
    console.log(key, student[key]);
}
```

For arrays, prefer `for...of` or array methods such as `map()` and `filter()`.

## 10.6 break and continue

`break` stops a loop.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

`continue` skips the current iteration.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}
```

---

# 🛠️ 11. Functions

A function is a reusable block of code that performs a particular task.

Think of a function like a machine:

1. You provide input.
2. The function processes the input.
3. It produces an output.

## 11.1 Function declaration

```javascript
function greet() {
    console.log("Hello, welcome!");
}

greet();
```

## 11.2 Parameters and arguments

Parameters are the names used in a function definition.

Arguments are the actual values passed when calling the function.

```javascript
function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Clarryson");
```

Here:

- `name` is the parameter.
- `"Clarryson"` is the argument.

## 11.3 Return statement

The `return` keyword sends a result back to the caller.

```javascript
function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(10, 5);

console.log(result); // 15
```

A function that returns a value can be reused in calculations and other functions.

## 11.4 Function expression

A function can be stored inside a variable.

```javascript
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5));
```

## 11.5 Arrow functions

Arrow functions provide a shorter syntax.

```javascript
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 3));
```

For a single expression, you can omit the curly braces and `return`.

```javascript
const square = number => number * number;

console.log(square(5)); // 25
```

## 11.6 Default parameters

Default parameters provide fallback values when an argument is missing or `undefined`.

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greet());
console.log(greet("Clarryson"));
```

## 11.7 Callback functions

A callback is a function passed into another function to be executed later.

```javascript
function processUser(name, callback) {
    console.log(`Processing ${name}`);

    callback();
}

processUser("Clarryson", function () {
    console.log("User processed successfully.");
});
```

Callbacks are common in event handling, array methods, and asynchronous programming.

---

# 🔒 12. Scope and Hoisting

Scope determines where a variable can be accessed.

## 12.1 Global scope

A variable declared outside functions and blocks may be available throughout the relevant script or module.

```javascript
const appName = "Notes Toolkit";

function showAppName() {
    console.log(appName);
}
```

## 12.2 Function scope

Variables declared inside a function are generally accessible only inside that function.

```javascript
function showMessage() {
    const message = "Hello!";

    console.log(message);
}

// console.log(message); // ReferenceError
```

## 12.3 Block scope

Variables declared with `let` and `const` inside a block stay within that block.

```javascript
if (true) {
    const message = "Inside block";

    console.log(message);
}

// message is not available here
```

## 12.4 Hoisting

Hoisting describes how JavaScript processes declarations before executing code.

Function declarations can be called before their definition:

```javascript
greet();

function greet() {
    console.log("Hello!");
}
```

`let` and `const` are also processed before execution, but they cannot be accessed before their declaration because of the temporal dead zone.

```javascript
// This causes a ReferenceError:
// console.log(age);

const age = 20;
```

**Best practice:** Declare variables before using them. This makes your code easier to understand and prevents unexpected errors.

---

# 📚 13. Arrays

An array is an ordered collection of values stored in one variable.

Think of an array like a shopping list.

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

### Accessing array elements

Array indexes start from zero.

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange
```

### Array length

```javascript
console.log(fruits.length); // 3
```

### Changing an element

```javascript
fruits[1] = "Mango";

console.log(fruits);
```

### Adding elements

```javascript
fruits.push("Pineapple"); // Add to the end

fruits.unshift("Grapes"); // Add to the beginning
```

### Removing elements

```javascript
fruits.pop();   // Remove from the end

fruits.shift(); // Remove from the beginning
```

### Checking whether an item exists

```javascript
console.log(fruits.includes("Apple"));
```

### Finding an item's index

```javascript
console.log(fruits.indexOf("Apple"));
```

---

# 🧰 14. Important Array Methods

Array methods make it easier to work with collections of data.

These methods are especially important when building applications such as note managers, dashboards, shopping carts, and user management systems.

## 14.1 forEach()

Runs a function for each array element.

```javascript
const numbers = [1, 2, 3];

numbers.forEach(number => {
    console.log(number);
});
```

Use `forEach()` when you want to perform an action for every item.

It does not create a new transformed array.

## 14.2 map()

Creates a new array by transforming every element.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6]
```

## 14.3 filter()

Creates a new array containing elements that pass a condition.

```javascript
const ages = [12, 18, 25, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]
```

Think of `filter()` like a kitchen strainer: only matching items pass through.

## 14.4 find()

Returns the first element that matches a condition.

```javascript
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "David" }
];

const user = users.find(user => user.id === 2);

console.log(user);
```

## 14.5 findIndex()

Returns the index of the first matching element.

```javascript
const numbers = [10, 20, 30];

const index = numbers.findIndex(number => number === 20);

console.log(index); // 1
```

## 14.6 reduce()

Reduces an array to one accumulated value.

```javascript
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total); // 60
```

Think of `reduce()` as adding all the items in a shopping basket to calculate the total price.

## 14.7 some()

Checks whether at least one item passes a condition.

```javascript
const ages = [12, 15, 20];

const hasAdult = ages.some(age => age >= 18);

console.log(hasAdult); // true
```

## 14.8 every()

Checks whether every item passes a condition.

```javascript
const ages = [20, 25, 30];

const allAdults = ages.every(age => age >= 18);

console.log(allAdults); // true
```

## 14.9 sort()

Sorts array elements.

```javascript
const numbers = [40, 10, 100, 5];

numbers.sort((a, b) => a - b);

console.log(numbers); // [5, 10, 40, 100]
```

For descending order:

```javascript
numbers.sort((a, b) => b - a);
```

Remember: `sort()` changes the original array. For a copied sorted array, use `toSorted()` where supported.

## 14.10 slice()

Returns a portion of an array without changing the original.

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const selected = fruits.slice(1, 3);

console.log(selected); // ["Banana", "Orange"]
```

## 14.11 splice()

Adds, removes, or replaces elements in the original array.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits); // ["Apple", "Orange"]
```

### Array methods summary

| Method | Purpose |
|---|---|
| `forEach()` | Performs an action for every element |
| `map()` | Transforms elements into a new array |
| `filter()` | Selects matching elements |
| `find()` | Finds the first matching element |
| `findIndex()` | Finds the index of a matching element |
| `reduce()` | Combines values into one result |
| `some()` | Checks whether at least one matches |
| `every()` | Checks whether all match |
| `sort()` | Sorts an array |
| `slice()` | Copies a portion of an array |
| `splice()` | Changes the original array |
| `includes()` | Checks whether a value exists |
| `join()` | Combines array values into a string |
| `flat()` | Flattens nested arrays |

---

# 🪪 15. Objects

An object stores related information using key-value pairs.

Think of an object like an identification card containing someone's details.

```javascript
const student = {
    name: "Clarryson",
    age: 20,
    course: "Computer Science",
    year: 2
};
```

### Accessing object properties

**Dot notation**

```javascript
console.log(student.name);
```

**Bracket notation**

```javascript
console.log(student["course"]);
```

### Updating properties

```javascript
student.age = 21;
```

### Adding properties

```javascript
student.university = "University of Embu";
```

### Removing properties

```javascript
delete student.year;
```

### Checking whether a property exists

```javascript
console.log("name" in student);
```

### Object methods

An object can contain functions.

```javascript
const user = {
    name: "Clarryson",

    greet() {
        return `Hello, ${this.name}`;
    }
};

console.log(user.greet());
```

Here, `this.name` refers to the `name` property of the object when the method is called this way.

### Nested objects

Objects can contain other objects.

```javascript
const student = {
    name: "Clarryson",

    address: {
        town: "Embu",
        country: "Kenya"
    }
};

console.log(student.address.town);
```

### Useful object methods

```javascript
const student = {
    name: "Clarryson",
    course: "Computer Science"
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
```

---

# 📦 16. Destructuring, Spread, and Rest

These features make modern JavaScript easier to write.

## 16.1 Array destructuring

Extract values from arrays into variables.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
```

## 16.2 Object destructuring

Extract properties from objects.

```javascript
const student = {
    name: "Clarryson",
    course: "Computer Science"
};

const { name, course } = student;

console.log(name);
console.log(course);
```

## 16.3 Spread operator

The spread operator (`...`) expands elements from an array or properties from an object.

```javascript
const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];

const allNumbers = [...firstNumbers, ...secondNumbers];

console.log(allNumbers);
```

With objects:

```javascript
const student = {
    name: "Clarryson",
    course: "Computer Science"
};

const updatedStudent = {
    ...student,
    year: 2
};

console.log(updatedStudent);
```

## 16.4 Rest parameters

Rest parameters collect multiple arguments into an array.

```javascript
function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(calculateTotal(10, 20, 30));
```

**Important:** Spread expands values; rest collects values.

---

# 🔤 17. Strings and Template Literals

Strings represent text.

```javascript
const name = "Clarryson";
```

### Useful string methods

```javascript
const message = "  Welcome to JavaScript  ";

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.includes("JavaScript"));
console.log(message.startsWith("Welcome"));
console.log(message.endsWith("JavaScript"));
console.log(message.replace("JavaScript", "HTML"));
console.log(message.slice(2, 9));
```

### Template literals

Template literals use backticks and allow variables to be inserted into strings.

```javascript
const name = "Clarryson";
const course = "Computer Science";

const message = `My name is ${name} and I study ${course}.`;

console.log(message);
```

This is generally easier to read than joining many strings with `+`.

---

# 🧰 18. Useful JavaScript Methods

These built-in tools are useful in everyday programming.

### Math methods

```javascript
Math.round(4.6);  // 5
Math.floor(4.9);  // 4
Math.ceil(4.1);   // 5
Math.max(10, 20); // 20
Math.min(10, 20); // 10
Math.random();    // Random decimal from 0 up to, but not including, 1
Math.abs(-10);    // 10
Math.sqrt(25);    // 5
```

### Number methods

```javascript
Number("25");        // 25
Number.isInteger(5); // true
Number.isNaN(NaN);   // true

const price = 12.3456;

console.log(price.toFixed(2)); // "12.35"
```

### Date and time

```javascript
const today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); // January = 0
console.log(today.getDate());
console.log(today.getDay()); // Sunday = 0
```

### Generating unique identifiers

```javascript
const id = crypto.randomUUID();

console.log(id);
```

`crypto.randomUUID()` is useful for generating unique IDs in supported secure contexts and modern environments. It is not a replacement for database-generated identifiers in every application.

---

# 🌐 19. DOM Manipulation

DOM stands for **Document Object Model**.

The DOM is a programming representation of an HTML document. JavaScript can use it to read and change webpage content.

Think of the DOM as a map of all the HTML elements on a webpage.

### Example HTML

```html
<h1 id="title">Welcome</h1>

<p class="description">Learning JavaScript.</p>

<button id="changeButton">Change Heading</button>
```

### Selecting HTML elements

**1. getElementById()**

```javascript
const title = document.getElementById("title");
```

**2. querySelector()**

Selects the first matching element.

```javascript
const title = document.querySelector("#title");
const paragraph = document.querySelector(".description");
```

**3. querySelectorAll()**

Selects all matching elements and returns a NodeList.

```javascript
const paragraphs = document.querySelectorAll("p");
```

**4. getElementsByClassName()**

```javascript
const descriptions = document.getElementsByClassName("description");
```

### Changing text

```javascript
const title = document.querySelector("#title");

title.textContent = "JavaScript Is Working!";
```

### Changing HTML

```javascript
const container = document.querySelector("#container");

container.innerHTML = "<h2>Hello World</h2>";
```

Be careful with `innerHTML`. Do not insert untrusted user input directly into it because this can create cross-site scripting (XSS) vulnerabilities.

For plain text, prefer `textContent`.

### Changing CSS styles

```javascript
const title = document.querySelector("#title");

title.style.color = "blue";
title.style.fontSize = "30px";
```

For larger style changes, use CSS classes.

```javascript
title.classList.add("active");
title.classList.remove("active");
title.classList.toggle("active");
title.classList.contains("active");
```

### Creating new HTML elements

```javascript
const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created with JavaScript.";

document.body.appendChild(newParagraph);
```

### Removing elements

```javascript
const paragraph = document.querySelector("p");

paragraph.remove();
```

### DOM methods summary

| Method | Purpose |
|---|---|
| `getElementById()` | Selects an element by ID |
| `querySelector()` | Selects the first matching element |
| `querySelectorAll()` | Selects all matching elements |
| `createElement()` | Creates a new element |
| `appendChild()` | Adds a child element |
| `remove()` | Removes an element |
| `classList.add()` | Adds a CSS class |
| `classList.remove()` | Removes a CSS class |
| `classList.toggle()` | Adds or removes a class |
| `textContent` | Reads or changes text |
| `innerHTML` | Reads or changes HTML markup |

---

# 🖱️ 20. JavaScript Events

An event is an action or occurrence that JavaScript can respond to.

Examples:

- Clicking a button.
- Typing into an input.
- Submitting a form.
- Moving the mouse.
- Loading a webpage.
- Pressing a keyboard key.

### Using addEventListener()

```html
<button id="myButton">Click Me</button>
```

```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
    console.log("Button clicked!");
});
```

### Common JavaScript events

| Event | When it happens |
|---|---|
| `click` | User clicks an element |
| `dblclick` | User double-clicks |
| `mouseover` | Pointer moves over an element |
| `mouseout` | Pointer leaves an element |
| `keydown` | Keyboard key is pressed |
| `keyup` | Keyboard key is released |
| `input` | Input value changes |
| `change` | A value is committed or changed |
| `submit` | A form is submitted |
| `focus` | An element receives focus |
| `blur` | An element loses focus |
| `DOMContentLoaded` | HTML document has been parsed |

### Understanding the event object

JavaScript can provide information about the event.

```javascript
button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
});
```

### Event bubbling

Events often travel from the element where they happened up through its parent elements.

This behaviour is called event bubbling.

### Event delegation

Instead of adding an event listener to every child, you can listen on a parent and identify which child was clicked.

```html
<ul id="fruitList">
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>
```

```javascript
const fruitList = document.querySelector("#fruitList");

fruitList.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        console.log("You selected:", event.target.textContent);
    }
});
```

Event delegation is useful when elements are added dynamically.

---

# 📝 21. Working with Forms

JavaScript can read form values, validate information, and respond when a form is submitted.

### Example HTML

```html
<form id="registrationForm">

    <label for="username">Username:</label>
    <input type="text" id="username" required>

    <label for="email">Email:</label>
    <input type="email" id="email" required>

    <button type="submit">Register</button>

</form>

<p id="result"></p>
```

### JavaScript

```javascript
const form = document.querySelector("#registrationForm");

const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {

    // Stop the browser's default form submission
    event.preventDefault();

    // Read input values
    const username = document.querySelector("#username").value.trim();

    const email = document.querySelector("#email").value.trim();

    // Validate input
    if (username === "" || email === "") {
        result.textContent = "Please fill in all fields.";
        return;
    }

    // Display success message
    result.textContent = `Welcome, ${username}!`;

    // Clear the form
    form.reset();

});
```

### Important form properties and methods

- `.value`: Reads or changes an input value.
- `.checked`: Checks whether a checkbox or radio button is selected.
- `.disabled`: Enables or disables a control.
- `.reset()`: Resets form controls.
- `.preventDefault()`: Prevents the browser's default action.

**Security note:** Browser-side validation improves user experience, but a real application must validate data again on the server. Never trust user input simply because it passed JavaScript validation.

---

# 💾 22. Local Storage and Session Storage

Web browsers provide storage mechanisms that allow websites to save information.

### 1. localStorage

Stores information in the browser until it is removed.

```javascript
localStorage.setItem("username", "Clarryson");

const username = localStorage.getItem("username");

console.log(username);
```

Removing information:

```javascript
localStorage.removeItem("username");
```

Clearing all local storage for the current origin:

```javascript
localStorage.clear();
```

### 2. sessionStorage

Stores information for the current browser tab's page session.

```javascript
sessionStorage.setItem("theme", "dark");

const theme = sessionStorage.getItem("theme");

console.log(theme);
```

### Comparison

| localStorage | sessionStorage |
|---|---|
| Persists after closing the browser | Usually ends when the tab's page session ends |
| Shared by same-origin tabs | Separate per tab |
| Suitable for simple persistent preferences | Suitable for temporary tab-specific state |

### Important limitation

Browser storage stores strings. To save arrays or objects, convert them to JSON first.

Do not store passwords, secret API keys, or sensitive authentication tokens in local storage.

---

# 📄 23. JSON (JavaScript Object Notation)

JSON is a lightweight data format used to exchange information between applications.

It is commonly used when communicating with APIs and servers.

### JavaScript object

```javascript
const student = {
    name: "Clarryson",
    course: "Computer Science",
    year: 2
};
```

### Convert object into JSON

```javascript
const jsonData = JSON.stringify(student);

console.log(jsonData);
```

### Convert JSON into a JavaScript object

```javascript
const parsedData = JSON.parse(jsonData);

console.log(parsedData.name);
```

### Saving an array in localStorage

```javascript
const notes = [
    { id: 1, text: "Study JavaScript" },
    { id: 2, text: "Practise arrays" }
];

localStorage.setItem("notes", JSON.stringify(notes));
```

### Retrieving the array

```javascript
const savedNotes = JSON.parse(
    localStorage.getItem("notes") || "[]"
);

console.log(savedNotes);
```

**Remember:**

- `JSON.stringify()` converts JavaScript data into a JSON string.
- `JSON.parse()` converts valid JSON text into JavaScript data.

---

# 🚨 24. Error Handling and Debugging

Errors are a normal part of programming.

Learning how to understand and fix them is one of the most important developer skills.

### Common JavaScript errors

| Error | Meaning |
|---|---|
| SyntaxError | Code does not follow JavaScript syntax |
| ReferenceError | A variable or function cannot be found |
| TypeError | An operation is performed on an incompatible value |
| RangeError | A value is outside an allowed range |

### Example of a ReferenceError

```javascript
console.log(username);
```

If `username` has not been declared, JavaScript reports an error.

### try...catch

Use `try...catch` to handle errors that may occur while code is running.

```javascript
try {

    const data = JSON.parse("{invalid json}");

    console.log(data);

} catch (error) {

    console.error("Something went wrong:", error.message);

}
```

### finally

The `finally` block runs whether an error occurs or not.

```javascript
try {
    console.log("Processing...");
} catch (error) {
    console.error(error);
} finally {
    console.log("Operation finished.");
}
```

### Throwing your own errors

```javascript
function withdrawMoney(balance, amount) {

    if (amount <= 0) {
        throw new Error("Amount must be greater than zero.");
    }

    if (amount > balance) {
        throw new Error("Insufficient balance.");
    }

    return balance - amount;
}

try {
    console.log(withdrawMoney(1000, 500));
} catch (error) {
    console.error(error.message);
}
```

### Console debugging methods

```javascript
console.log("General information");

console.warn("This is a warning");

console.error("This is an error");

console.table([
    { name: "John", age: 20 },
    { name: "Mary", age: 22 }
]);

console.group("User Information");
console.log("Name: Clarryson");
console.log("Course: Computer Science");
console.groupEnd();

console.time("Calculation");

for (let i = 0; i < 100000; i++) {
    // Example operation
}

console.timeEnd("Calculation");
```

### Debugging with breakpoints

You can pause JavaScript execution using the browser Developer Tools.

1. Open Developer Tools.
2. Select the Sources tab.
3. Find your JavaScript file.
4. Click a line number to create a breakpoint.
5. Reload the page or trigger the function.
6. Inspect variables and follow execution step by step.

You can also use:

```javascript
debugger;
```

The browser pauses at that statement when developer tools are open.

---

# ⏳ 25. Asynchronous JavaScript

Some tasks take time to complete.

Examples include:

- Fetching information from a server.
- Loading files.
- Waiting for a timer.
- Communicating with an external API.

Asynchronous JavaScript allows your application to handle these operations without waiting for every task to finish before doing anything else.

## 25.1 setTimeout()

Runs a function after a specified delay.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("This appears after 2 seconds.");
}, 2000);

console.log("End");
```

The output order is:

```text
Start
End
This appears after 2 seconds.
```

## 25.2 setInterval()

Runs a function repeatedly at a specified interval.

```javascript
let count = 0;

const timer = setInterval(() => {

    count++;

    console.log(count);

    if (count === 5) {
        clearInterval(timer);
    }

}, 1000);
```

## 25.3 Promises

A Promise represents the eventual result of an asynchronous operation.

A Promise has three states:

- Pending: Still working.
- Fulfilled: Completed successfully.
- Rejected: Failed.

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject(new Error("Operation failed."));
    }

});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });
```

## 25.4 async and await

`async` and `await` make asynchronous code easier to read.

```javascript
function waitTwoSeconds() {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Finished waiting!");
        }, 2000);
    });

}

async function runTask() {

    console.log("Starting...");

    const result = await waitTwoSeconds();

    console.log(result);

}

runTask();
```

### Important rules

- An `async` function always returns a Promise.
- `await` pauses execution inside the async function until the Promise settles.
- Use `try...catch` to handle rejected Promises.

---

# 🌍 26. Working with APIs and Fetch

An API allows different software applications to communicate.

For example, a weather application can request weather information from an external service.

JavaScript provides the `fetch()` function for making HTTP requests.

### Example: Fetching information

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.error("Failed to fetch users:", error.message);

    }

}

getUsers();
```

### Understanding the code

1. `fetch()` sends a network request.
2. `await` waits for the response.
3. `response.ok` checks whether the HTTP status is successful.
4. `response.json()` reads and parses the response body as JSON.
5. `try...catch` handles network and parsing errors.

**Important:** A failed HTTP status such as 404 does not automatically reject the Fetch Promise. That is why checking `response.ok` is important.

### HTTP methods

| Method | Purpose |
|---|---|
| GET | Retrieve information |
| POST | Create or submit information |
| PUT | Replace a resource |
| PATCH | Partially update a resource |
| DELETE | Remove a resource |

### Example: Sending information

```javascript
async function createUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Clarryson",
                    email: "clarryson@example.com"
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error(error.message);

    }

}

createUser();
```

This example uses JSONPlaceholder, a testing API. It does not create a permanent real user account.

---

# 📦 27. JavaScript Modules

Modules allow you to split JavaScript code into separate files.

This makes larger projects easier to organize and maintain.

### Example project structure

```text
project/
│
├── index.html
│
├── script.js
│
├── math.js
│
└── user.js
```

### Exporting a function

**math.js**

```javascript
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

### Importing functions

**script.js**

```javascript
import { add, subtract } from "./math.js";

console.log(add(10, 5));

console.log(subtract(10, 5));
```

### Default export

**user.js**

```javascript
export default function getUser() {
    return {
        name: "Clarryson",
        course: "Computer Science"
    };
}
```

Import it:

```javascript
import getUser from "./user.js";

console.log(getUser());
```

### Connecting modules to HTML

```html
<script type="module" src="script.js"></script>
```

Modules help separate responsibilities instead of placing every function in one large file.

---

# ✨ 28. Modern JavaScript Features

Modern JavaScript includes features that help developers write shorter, clearer, and more maintainable code.

### 1. Default parameters

```javascript
function greet(name = "Guest") {
    return `Hello ${name}`;
}
```

### 2. Optional chaining

```javascript
const user = {};

console.log(user.profile?.email);
```

### 3. Nullish coalescing

```javascript
const username = null;

console.log(username ?? "Guest");
```

### 4. Destructuring

```javascript
const user = {
    name: "Clarryson",
    age: 20
};

const { name, age } = user;
```

### 5. Spread syntax

```javascript
const original = [1, 2, 3];

const copied = [...original];
```

### 6. Object shorthand

```javascript
const name = "Clarryson";
const age = 20;

const user = {
    name,
    age
};
```

This is equivalent to:

```javascript
const user = {
    name: name,
    age: age
};
```

### 7. Dynamic property names

```javascript
const property = "course";

const student = {
    [property]: "Computer Science"
};

console.log(student.course);
```

### 8. Array and object immutability

You will often need to create updated copies rather than changing existing data.

```javascript
const numbers = [1, 2, 3];

const updatedNumbers = [...numbers, 4];

console.log(updatedNumbers);
```

For objects:

```javascript
const user = {
    name: "Clarryson",
    age: 20
};

const updatedUser = {
    ...user,
    age: 21
};
```

**Important:** Spread creates a shallow copy. Nested objects and arrays may still be shared between the original and copied structure.

---

# 🗒️ 29. Understanding the Notes Toolkit

Today, I built a JavaScript data toolkit that manages notes using arrays, objects, functions, loops, and array methods.

This project helps me practise applying JavaScript concepts to a real problem.

### Understanding the note structure

Each note is stored as an object.

```javascript
const singleNote = {
    id: 1,
    text: "Buy milk and bread",
    category: "personal"
};
```

The notes are stored inside an array.

```javascript
const notes = [
    {
        id: 1,
        text: "Buy milk and bread",
        category: "personal"
    },

    {
        id: 2,
        text: "Complete JavaScript exercises",
        category: "study"
    },

    {
        id: 3,
        text: "Prepare project presentation",
        category: "work"
    }
];
```

Think of the array as a filing cabinet and each object as an individual file containing information about one note.

## The six toolkit functions

### 1. `searchNotes(word)`

**Purpose:** Searches through notes and returns only the notes containing the search word.

Everyday analogy: Like searching for a message in your phone.

Concepts used:

- Functions.
- Parameters.
- Arrays.
- `filter()`.
- `includes()`.
- `toLowerCase()`.

Example logic:

```javascript
function searchNotes(word) {

    const searchTerm = word.trim().toLowerCase();

    return notes.filter(note =>
        note.text.toLowerCase().includes(searchTerm)
    );

}
```

Why use `.toLowerCase()`?

It makes searching case-insensitive.

Searching for `"BREAD"` can find `"Buy milk and bread"`.

### 2. `longestNote()`

**Purpose:** Finds the note with the longest text.

Everyday analogy: Comparing pencils to find the longest one.

Concepts used:

- Conditional statements.
- Loops.
- Arrays.
- `.length`.
- `return`.

Example:

```javascript
function longestNote() {

    if (notes.length === 0) {
        return null;
    }

    let longest = notes[0];

    for (const note of notes) {

        if (note.text.length > longest.text.length) {
            longest = note;
        }

    }

    return longest;

}
```

Step-by-step:

1. Check whether the notes array is empty.
2. If empty, return `null`.
3. Assume the first note is the longest.
4. Compare every note against the current longest note.
5. Replace the current longest note whenever a longer one is found.
6. Return the longest note.

### 3. `countByCategory()`

**Purpose:** Counts how many notes belong to each category.

Example output:

```javascript
{
    personal: 2,
    study: 2,
    work: 1
}
```

Everyday analogy: Sorting coins into different groups and counting them.

Concepts used:

- Objects.
- Loops.
- Conditional statements.
- Object properties.

Example:

```javascript
function countByCategory() {

    const counts = {};

    for (const note of notes) {

        const category = note.category;

        if (!counts[category]) {
            counts[category] = 1;
        } else {
            counts[category]++;
        }

    }

    return counts;

}
```

### 4. `getSummary()`

**Purpose:** Generates a readable summary of all notes.

Example output:

```text
5 notes: 2 personal, 2 study, 1 work.
```

Concepts used:

- Functions.
- Array methods.
- Objects.
- Template literals.
- Conditional statements.
- String formatting.

Example:

```javascript
function getSummary() {

    const counts = countByCategory();

    const total = notes.length;

    const categorySummary = Object.entries(counts)
        .map(([category, count]) => `${count} ${category}`)
        .join(", ");

    const noteWord = total === 1 ? "note" : "notes";

    return `${total} ${noteWord}: ${categorySummary}.`;

}
```

### 5. `isDuplicate(text)`

**Purpose:** Prevents the same note from being added more than once.

Everyday analogy: A security guard checking whether someone has already entered.

Concepts used:

- Functions.
- Parameters.
- `filter()` or `some()`.
- `trim()`.
- `toLowerCase()`.
- Boolean values.

Example:

```javascript
function isDuplicate(text) {

    const normalizedText = text.trim().toLowerCase();

    return notes.some(note =>
        note.text.trim().toLowerCase() === normalizedText
    );

}
```

This handles differences in uppercase and lowercase letters and removes leading or trailing spaces.

### 6. `addNote(text, category)`

**Purpose:** Adds a new note after checking whether it meets the required conditions.

Three validation rules:

1. Text must contain between 1 and 200 characters after trimming.
2. Category must be `personal`, `work`, or `study`.
3. The note must not already exist.

Concepts used:

- Functions.
- Arrays.
- Objects.
- `push()`.
- `trim()`.
- `includes()`.
- Conditional statements.
- `Math.max()`.
- `return`.

Example:

```javascript
function addNote(text, category) {

    const cleanText = text.trim();

    const validCategories = [
        "personal",
        "work",
        "study"
    ];

    // Check text length
    if (cleanText.length < 1 || cleanText.length > 200) {
        return {
            success: false,
            message: "Note must be between 1 and 200 characters."
        };
    }

    // Check category
    if (!validCategories.includes(category)) {
        return {
            success: false,
            message: "Invalid note category."
        };
    }

    // Check for duplicates
    if (isDuplicate(cleanText)) {
        return {
            success: false,
            message: "This note already exists."
        };
    }

    // Generate the next ID
    const highestId = notes.reduce(
        (maximum, note) => Math.max(maximum, note.id),
        0
    );

    // Create the new note
    const newNote = {
        id: highestId + 1,
        text: cleanText,
        category: category
    };

    // Add the note to the array
    notes.push(newNote);

    return {
        success: true,
        message: "Note added successfully.",
        note: newNote
    };

}
```

**Important:** This is an in-memory toolkit. The notes disappear when the JavaScript program restarts unless they are saved to persistent storage such as localStorage or a database.

### Testing the toolkit

```javascript
console.log("Search:", searchNotes("milk"));

console.log("Longest note:", longestNote());

console.log("Category counts:", countByCategory());

console.log("Summary:", getSummary());

console.log("Duplicate check:", isDuplicate("Buy milk and bread"));

console.log("Add note:", addNote("Study CSS", "study"));
```

### What JavaScript concepts did this toolkit use?

| Toolkit function | JavaScript concepts |
|---|---|
| `searchNotes()` | Functions, filter, strings |
| `longestNote()` | Loops, conditions, arrays |
| `countByCategory()` | Objects, loops, properties |
| `getSummary()` | Object methods, map, join, template literals |
| `isDuplicate()` | Boolean logic, some, string methods |
| `addNote()` | Validation, objects, arrays, reduce, push |

---

# 🧠 30. JavaScript Best Practices

Writing JavaScript is not just about making code work. It is also about making it understandable, reusable, and easy to maintain.

### 1. Use const by default

```javascript
const username = "Clarryson";
```

Use `let` when reassignment is necessary.

### 2. Use meaningful variable names

Poor:

```javascript
const x = 20;
const y = "John";
```

Better:

```javascript
const studentAge = 20;
const studentName = "John";
```

### 3. Keep functions small

A function should ideally perform one clear task.

Poor:

```javascript
function handleEverything() {
    // Hundreds of lines doing unrelated tasks
}
```

Better:

```javascript
function validateEmail() {}

function saveUser() {}

function displayMessage() {}
```

### 4. Avoid unnecessary global variables

Keep variables inside functions or modules where possible.

### 5. Avoid repeating code

Use reusable functions instead of copying the same logic everywhere.

### 6. Use strict equality

Prefer:

```javascript
if (age === 20) {
    console.log("Correct age");
}
```

Instead of:

```javascript
if (age == 20) {
    console.log("Correct age");
}
```

### 7. Handle errors

Use `try...catch` for operations that may fail.

### 8. Avoid unsafe HTML insertion

Use:

```javascript
element.textContent = userInput;
```

Avoid directly inserting untrusted user input with:

```javascript
element.innerHTML = userInput;
```

### 9. Use array methods where appropriate

```javascript
const adults = users.filter(user => user.age >= 18);
```

This is often easier to read than manually building the result with a loop.

### 10. Keep code organized

Separate HTML, CSS, and JavaScript into different files.

### 11. Use consistent formatting

Use consistent indentation, spacing, and naming conventions.

### 12. Learn to read error messages

Do not just copy an error into an AI tool. First identify:

- What type of error occurred?
- Which file caused it?
- Which line caused it?
- What value or operation caused the problem?
- How can it be fixed?

---

# 📁 31. Project Structure

My Day 3 project is organized as follows:

```text
day-03-javascript-fundamentals/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── data/
│   └── notes.js
│
├── README.md
│
└── assets/
    └── images/
```

### File explanations

| File | Responsibility |
|---|---|
| `index.html` | Provides webpage structure |
| `style.css` | Controls visual appearance |
| `script.js` | Contains JavaScript logic |
| `data/notes.js` | Can contain separate note data or related functions |
| `README.md` | Documents the project |
| `assets/images/` | Stores image resources |

As the project grows, I can separate JavaScript into modules such as:

```text
src/
│
├── main.js
├── notes.js
├── storage.js
├── validation.js
└── ui.js
```

This makes it easier to maintain and test different parts of the application.

---

# 🚀 32. Running JavaScript in the Browser and Terminal

There are two ways I can run my JavaScript project.

## Option A: Browser with VS Code Live Server

1. Open Visual Studio Code.
2. Open the `day-03-javascript-fundamentals` folder.
3. Open `index.html`.
4. Right-click and select **Open with Live Server**.
5. Open the webpage in Chrome or Firefox.
6. Press `F12` to open Developer Tools.
7. Select the Console tab.
8. View the JavaScript output and errors.

The browser is useful when working with:

- DOM manipulation.
- Buttons and events.
- HTML forms.
- CSS interactions.
- Browser storage.
- Fetch requests.

## Option B: Node.js in the Terminal

Node.js allows JavaScript to run outside the browser.

Check whether Node.js is installed:

```bash
node --version
```

Check npm:

```bash
npm --version
```

Run the JavaScript file:

```bash
node script.js
```

For my project:

```bash
node /home/clarryson/domcss/webdevelopment/day3/script.js
```

Node.js is useful for:

- Running JavaScript scripts.
- Practising functions and data structures.
- Backend development.
- Automation.
- Working with Node.js packages.

**Important:** Browser-specific objects such as `document`, `window`, and `localStorage` are not automatically available in ordinary Node.js scripts.

---

# 🧪 33. Practical Exercises

To make sure I understand JavaScript rather than just memorize it, I will practise the following exercises.

### Beginner level

- [ ] Create variables using `let` and `const`.
- [ ] Store my name, age, and course in variables.
- [ ] Write a function that adds two numbers.
- [ ] Write a function that checks whether a number is even or odd.
- [ ] Create an array of five fruits.
- [ ] Print every fruit using a loop.
- [ ] Create an object representing a student.
- [ ] Use an `if...else` statement to check a student's grade.

### Intermediate level

- [ ] Filter an array of students by age.
- [ ] Use `map()` to transform an array.
- [ ] Use `reduce()` to calculate the total price of products.
- [ ] Create a function that searches for a user by name.
- [ ] Build a simple calculator.
- [ ] Create a button that changes webpage text.
- [ ] Create a form that validates user input.
- [ ] Save and retrieve information using localStorage.

### Practical project level

- [ ] Build a Notes Manager.
- [ ] Add new notes.
- [ ] Search for notes.
- [ ] Filter notes by category.
- [ ] Edit existing notes.
- [ ] Delete notes.
- [ ] Prevent duplicate notes.
- [ ] Save notes using localStorage.
- [ ] Display the number of notes.
- [ ] Build a responsive interface using HTML and CSS.

---

# 📚 34. Learning Resources

These are the resources I will use to strengthen my JavaScript knowledge.

### 1. W3Schools JavaScript

https://www.w3schools.com/js/

Beginner-friendly explanations and practical examples covering JavaScript syntax, functions, arrays, objects, and DOM manipulation.

### 2. MDN JavaScript Guide

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

Detailed documentation covering the JavaScript language and its features.

### 3. JavaScript.info

https://javascript.info/

A comprehensive guide covering JavaScript fundamentals, objects, the DOM, asynchronous programming, and more.

### 4. freeCodeCamp

https://www.freecodecamp.org/learn/

Interactive exercises and practical programming challenges.

### 5. Eloquent JavaScript

https://eloquentjavascript.net/

A free online book that explains programming concepts and JavaScript in depth.

### 6. Node.js Documentation

https://nodejs.org/docs/latest/api/

Official documentation for learning how to run JavaScript outside the browser.

---

# 🎯 35. What I Learned Today

By the end of Day 3, I should be able to:

- Explain what JavaScript is and where it runs.
- Connect JavaScript to HTML using external files.
- Understand JavaScript syntax and comments.
- Declare variables using `let` and `const`.
- Identify JavaScript data types.
- Convert values between different data types.
- Use arithmetic, comparison, logical, and assignment operators.
- Write conditional statements.
- Use different types of loops.
- Create reusable functions.
- Understand function parameters, arguments, and return values.
- Understand scope and hoisting.
- Create and manipulate arrays.
- Use important array methods such as `map()`, `filter()`, `find()`, and `reduce()`.
- Create and manipulate objects.
- Use destructuring, spread, and rest syntax.
- Work with strings and template literals.
- Manipulate HTML using the DOM.
- Respond to user actions using events.
- Validate form input.
- Store information in browser storage.
- Convert JavaScript objects to and from JSON.
- Handle errors and debug code.
- Understand Promises, async, and await.
- Fetch data from APIs.
- Organize code using JavaScript modules.
- Write cleaner and more maintainable JavaScript.

---

# 💭 Day 3 Reflection

Today, I learned that JavaScript is what makes webpages interactive and dynamic.

The most important thing I learned is that JavaScript is not just about writing commands. It is about understanding problems, breaking them into smaller steps, and creating reusable solutions.

Building the Notes Toolkit helped me understand how different JavaScript concepts work together.

For example:

- Arrays store multiple notes.
- Objects describe individual notes.
- Functions perform reusable operations.
- Loops process information.
- Array methods search and filter information.
- Conditions validate data.
- Return statements provide results.

I also learned that debugging is part of programming. Errors are not necessarily failures; they are opportunities to understand how the code works and improve it.

**My next goal:** Practise JavaScript by building interactive applications before moving into more advanced web development concepts.

---

## 🚀 My Web Development Learning Path

| Day | Topic | Main Focus |
|---|---|---|
| Day 1 | HTML Fundamentals | Structure and semantic HTML |
| Day 2 | CSS Fundamentals | Styling and responsive layouts |
| Day 3 | JavaScript Fundamentals | Programming logic and interactivity |
| Day 4 | DOM Manipulation | Building interactive webpages |
| Day 5 | JavaScript Projects | Practical application development |
| Day 6 | Git and GitHub | Version control and collaboration |
| Day 7 | Responsive Web Design | Mobile-first development |
| Day 8+ | APIs and Advanced JavaScript | Real-world application development |

**Learning Journey:** HTML → CSS → JavaScript → DOM → APIs → Git & GitHub → Real-World Projects

**Day 3 Status:** JavaScript Fundamentals & Notes Toolkit 🚀
