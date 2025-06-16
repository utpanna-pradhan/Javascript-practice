# 1. What is JavaScript?
JavaScript is a lightweight, interpreted scripting language used to make web pages interactive. It runs in the browser.

# 2. What are the data types supported by JavaScript?
Primitive: String, Number, BigInt, Boolean, undefined, null, Symbol

Non-primitive: Object, Array, Function

# 3. What is the difference between var, let, and const?
var: function-scoped, can be redeclared

let: block-scoped, cannot be redeclared

const: block-scoped, cannot be reassigned

# 4. What are primitive data types?
They store a single value and are immutable. Examples: string, number, boolean.

# 5. What is type coercion?
Type coercion is automatic conversion of values from one data type to another (e.g., "5" + 1 becomes "51").

# 6. Difference between == and ===?
== compares values after type conversion.

=== compares value and type both (strict equality).

# 7. What is a function?
A reusable block of code that performs a specific task.

# 8. What are arrow functions?
Short syntax for functions:

js
Copy
Edit
const add = (a, b) => a + b;
# 9. Function declaration vs expression?
Declaration: function greet() {}

Expression: const greet = function() {};

# 10. What is hoisting?
Variables and function declarations are moved to the top of their scope during compile phase.

# 11. What is null?
It represents an intentional absence of any value.

# 12. What is undefined?
A variable that has been declared but not assigned a value.

# 13. What is NaN?
Not a Number – result of an invalid mathematical operation.

# 14. How to check the type of a variable?
Using typeof operator.

# 15. What are template literals?
String literals allowing embedded expressions:

js
Copy
Edit
`Hello ${name}`
# 16. What are arrays in JavaScript?
A collection of values stored in a single variable:

js
Copy
Edit
let arr = [1, 2, 3];
# 17. What is an object?
A collection of key-value pairs:

js
Copy
Edit
let person = { name: "John", age: 30 };
# 18. How to create an object?
Using object literals {} or new Object().

# 19. What is a loop?
A loop executes a block of code repeatedly:

for, while, do...while, for...in, for...of

# 20. What is the difference between for...in and for...of?
for...in: iterates over object keys

for...of: iterates over iterable values (arrays, strings)

# 21. What is an event in JavaScript?
An action that can be handled with code, like click, mouseover.

# 22. What is DOM?
Document Object Model – structure of HTML elements as objects in JavaScript.

# 23. How to select DOM elements?
Using methods like:

getElementById

querySelector

getElementsByClassName

# 24. How to add an event listener?
js
Copy
Edit
element.addEventListener('click', function() {});
# 25. What is the use of this keyword?
Refers to the current object in context.

# 26. What is the default value of uninitialized variables?
undefined

# 27. How to convert string to number?
Using Number(), parseInt(), parseFloat()

# 28. How to convert number to string?
Using String() or .toString()

# 29. What is truthy and falsy in JavaScript?
Truthy: evaluates to true in boolean context (e.g., 1, "abc")

Falsy: 0, "", null, undefined, false, NaN

# 30. What are logical operators?
&& (AND)

|| (OR)

! (NOT)

# 31. What is the difference between splice() and slice()?
splice(): modifies original array

slice(): returns a shallow copy

# 32. What is the spread operator?
Expands elements of an array or object:


const newArr = [...arr1, ...arr2];
33. What is rest parameter?
Used to represent an indefinite number of arguments:


function sum(...args) {}
34. What is a callback function?
A function passed as an argument to another function.

# 35. What is setTimeout()?
Executes a function after a delay.

# 36. What is setInterval()?
Repeats execution of a function after fixed time intervals.

# 37. How to clear setTimeout or setInterval?
Using clearTimeout(id) or clearInterval(id)

# 38. What is Math object?
Provides methods like Math.floor(), Math.random(), Math.max()

# 39. How to generate a random number?
js
Copy
Edit
Math.random(); // between 0 and 1
40. What is a ternary operator?
A shorthand for if...else:

js
Copy
Edit
condition ? trueValue : falseValue;
# 41. What is JSON?
JavaScript Object Notation – format to store and exchange data.

# 42. How to convert object to JSON?
js
Copy
Edit
JSON.stringify(obj);
# 43. How to convert JSON to object?
js
Copy
Edit
JSON.parse(jsonString);
# 44. What is the purpose of return in functions?
It returns a value and ends function execution.

# 45. Can we return multiple values from a function?
Yes, using arrays or objects.

# 46. What are global and local variables?
Global: accessible everywhere

Local: accessible within function/block

# 47. What is the use of typeof?
Checks the type of a variable.

# 48. What is the use of isNaN()?
Checks if a value is NaN (Not a Number).

# 49. What is the difference between alert(), prompt(), and confirm()?
alert() shows a message

prompt() takes user input

confirm() asks for confirmation (OK/Cancel)

# 50. What is the use of console.log()?
Used to print messages to the browser console for debugging.
