51. What are JavaScript closures?
A closure is a function that has access to its outer function’s variables even after the outer function has returned.

js
Copy
Edit
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}
const counter = outer();
52. What is the difference between call(), apply(), and bind()?
call(): Calls a function with given this and arguments.

apply(): Same as call(), but takes arguments as an array.

bind(): Returns a new function with this bound to a given value.

53. What is the event loop?
It’s a mechanism that handles async operations in JavaScript, using a queue and call stack.

54. What are promises?
Promises represent the eventual completion (or failure) of an async operation.

js
Copy
Edit
new Promise((resolve, reject) => { ... });
55. What are the states of a Promise?
Pending

Fulfilled

Rejected

56. What is async/await?
Syntactic sugar over promises for cleaner async code.

js
Copy
Edit
async function fetchData() {
  const res = await fetch(url);
}
57. What is destructuring?
A way to unpack values from arrays or properties from objects.

js
Copy
Edit
const [a, b] = [1, 2];
const {name, age} = user;
58. What is the difference between deep copy and shallow copy?
Shallow copy: copies only the first layer

Deep copy: copies all nested objects/arrays

59. What is event bubbling and capturing?
Bubbling: event propagates from target element up

Capturing: event propagates from root to target

60. How to stop event propagation?
Use event.stopPropagation() or event.preventDefault()

61. What is the use of map()?
Returns a new array by transforming each element.

js
Copy
Edit
arr.map(item => item * 2);
62. What is filter() in JavaScript?
Returns a new array with elements that satisfy a condition.

63. What is reduce() in JavaScript?
Reduces the array to a single value.

js
Copy
Edit
arr.reduce((acc, val) => acc + val, 0);
64. What is currying?
Transforming a function with multiple arguments into a series of unary functions.

65. What is memoization?
Caching function results to improve performance.

66. Difference between undefined and not defined?
undefined: declared but no value assigned

Not defined: variable was never declared

67. What is the Temporal Dead Zone (TDZ)?
The phase between block start and variable declaration with let or const where access throws an error.

68. What is the spread operator with objects?
Copies all enumerable properties:

js
Copy
Edit
const newObj = {...oldObj};
69. What is optional chaining (?.) in JavaScript?
Safely accesses nested object properties:

js
Copy
Edit
user?.address?.city
70. What is nullish coalescing (??) operator?
Returns right-hand operand if the left is null or undefined.

71. What is the use of Object.keys(), Object.values() and Object.entries()?
Used to get keys, values, and key-value pairs from objects.

72. What are Immediately Invoked Function Expressions (IIFE)?
A function that runs immediately after its declaration.

js
Copy
Edit
(function() { ... })();
73. What is a constructor function?
A function used to create multiple similar objects.

js
Copy
Edit
function Person(name) {
  this.name = name;
}
74. What is prototype in JavaScript?
Every JS object has a prototype, which is a reference to another object from which it can inherit properties.

75. What is prototypal inheritance?
An object can inherit properties and methods from another object via prototype chain.

76. Difference between ==, ===, Object.is()?
==: loose equality

===: strict equality

Object.is(): like === but handles NaN and -0 correctly

77. What is typeof null? Why is it object?
It’s a historical bug in JavaScript. typeof null returns 'object'.

78. What is the arguments object?
An array-like object accessible inside functions representing passed arguments.

79. What is debouncing?
Delaying function execution until after a pause in calls.

80. What is throttling?
Limiting a function from executing more than once in a given time frame.

81. How does setTimeout() differ from setInterval()?
setTimeout(): runs once after delay

setInterval(): runs repeatedly at intervals

82. What are higher-order functions?
Functions that accept other functions as arguments or return them.

83. What is the difference between class and object?
Class: blueprint

Object: instance of a class

84. What is method chaining?
Calling multiple methods on the same object in a single line.

85. What is module in JavaScript?
Files that export and import functions, objects, or primitives:

js
Copy
Edit
export function greet() {}
import { greet } from './greet.js';
86. What are template strings used for?
For multiline strings and string interpolation.

87. What is the instanceof operator?
Checks whether an object is an instance of a constructor.

js
Copy
Edit
obj instanceof Array
88. What is the difference between mutable and immutable data types?
Mutable: can change (objects, arrays)

Immutable: cannot change (strings, numbers)

89. What is event delegation?
Attaching a single event listener to a parent element to handle events from its children.

90. How to clone an object?
Shallow: Object.assign({}, obj) or {...obj}

Deep: structuredClone(obj) or JSON.parse(JSON.stringify(obj))

91. What is a symbol?
A unique and immutable data type used as object keys.

92. What are tagged template literals?
Template literals processed by a function:

js
Copy
Edit
tag`Hello ${name}`
93. What is optional parameter in a function?
A parameter that may or may not be passed. Can assign default values.

94. What is the difference between synchronous and asynchronous code?
Synchronous: runs line-by-line

Asynchronous: does not block execution, uses callbacks/promises

95. What is the new keyword?
Used to create instances from constructor functions.

96. What is a generator function?
A function that can pause and resume:

js
Copy
Edit
function* gen() {
  yield 1;
  yield 2;
}
97. What is Symbol.iterator?
An interface that allows objects to be iterated with for...of.

98. What is the with statement and why is it discouraged?
Used to extend the scope chain but causes confusion and performance issues.

99. What is functional programming in JavaScript?
Programming paradigm based on pure functions, immutability, and higher-order functions.

100. What is eval() and why should it be avoided?
eval() executes a string as JS code. It's dangerous and can lead to security vulnerabilities.
