# 1. What is JavaScript?
- JavaScript is a lightweight, interpreted scripting language used to make web pages interactive.
- It runs in the browser.
- Used for both client and server side.
- Dynamically update content, controls multimedia, animate images and many more.

# 2. What are the data types supported by JavaScript?
- Primitive: String, Number, BigInt, Boolean, undefined, null, Symbol.
- Non-primitive: Object, Array, Function.

# 3. What is the difference between var, let, and const?
- var: function-scoped, can be redeclared.
- let: block-scoped, cannot be redeclared.
- const: block-scoped, cannot be reassigned.

# 4. What are primitive data types?
- Built-in data types provided by JavaScript.
- They store a single value and are immutable(The variable may be reassigned to a new value, but the existing value can not be changed).
- Examples: number,string, undefined,boolean,null,BigInt,symbol.
- let x = 250; //number
- let str = ‘Hello’; //string
- let x; //undefined
- let x = true; //boolean
- let x = null; //null
- let bigNum = 123422222222222222222222222222222222222n; //BigInt
- let sym = Symbol(“Hello”) //symbol

# 5. What is type coercion?
- Type coercion is automatic conversion of values from one data type to another.
- This happens because JavaScript is a weakly-typed language.
- eg: console.log(“5” + 5);
// Output: “55” (number 5 is coerced to string “5”)

# 6. Difference between == and ===?
- == (Loose Equality)compares values after type conversion.
- === (Strict Equality)compares value and type both .

# 7. What is a function?
A reusable block of code that performs a specific task.
It takes some input (called parameters) and return an output where there is some relationship between the input and the output.
A JavaScript function is executed when the function is called.
syntax:

function function-name(input) {
 // code to be executed
}

# 8. What are arrow functions?
Short syntax for functions.
Introduced in ECMAScript 2015 (ES6)

//Normal function:
const Add= function(a, b) {
 return a + b;
 };
// Arrow function:
const add = (a, b) =>{
a + b
};
or:
const add = (a, b) =>a+b; 
//if it has only one statement then we can remove the brackets{}
# 9. Function declaration vs expression?
Declaration: 
Starting with the function keyword, followed by the function name, parameters, and the function body.
Must have a function name.
eg:

function myFunc(name) {
 return "Hello, " + name;
 }
Function declaration is hoisted(during the compilation phase they are moved to the top of their scope that means we can use function before we create them).

Expression:
Used to define a function inside an expression.
We can declaration with or without the function name
eg:

const add= function calculate(a, b) {
 return a + b;
 };
We can create anonymous functions by omitting function name.
eg:

const welCome= function() {
 return "Hello";
 };
Function expressions are not hoisted(We can't use function expressions before we create them)

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
It is Known as Conditional Operator
A shorthand for simple if…else.
Write conditions in a shorter, simpler way.
It takes three operands.
condition ? trueExpression : falseExpression
condition that evaluates to true or false value.
trueExpression executes if the condition is true else falseExpression will executes.
eg:

let age=25;
let message = (age>18) ? "eligible to vote" : "not eligible to vote" ;
console.log(message); //eligible to vote
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
Global: 
Variable that declared outside of any function or block scope.
It is accessible everywhere.
eg

    let globalVar = "hello"; // global variable
    function myFunc() {
      console.log(globalVar); // Accessible here
    }
    showGlobal();
    console.log(globalVar);// Accessible here
Local: 
Local variables are defined within functions.
It is accessible within that function/block
eg:

    function showLocal() {
      let localVar = "Hello"; // local variable
      console.log(localVar); // Accessible here
    }
  showLocal();
  console.log(localVar); // error

# 47. What is the use of typeof?
It is used to determine the data type of a given operand.
eg:

console.log(typeof "hello"); // string
console.log(typeof 123);    // number
console.log(typeof true);   //boolean

# 48. What is the use of isNaN()?
Checks if a value is NaN (Not a Number).
It attempts to convert the value to a number before checking if it's NaN.
eg:

isNaN(value)
isNaN(123); //false
isNaN('Hello'); //true

# 49. What is the difference between alert(), prompt(), and confirm()?
alert()
shows a message
When an alert box pops up, the user will have to click "OK" to proceed.
Show informational message or warnings.

alert("Click ok o proceed");
prompt() 
takes user input.
When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
ok will return input value, cancel return null.
eg: 

let userName = prompt("Please enter your name:", "Demo");
if (userName !== null) {
 console.log("Hello, " + userName );
 }
confirm() 
asks for confirmation (OK/Cancel).
if you want the user to verify or accept something.
eg:

confirm("Are you sure you want to delete?");
# 50. What is the use of console.log()?
Used to print messages to the browser console .
It is useful for testing purposes.
It allows developers to inspect the values of variables and identify where errors might be occurring(debugging).
eg:

let userName = "Utpanna;
console.log("User Name:", userName); //Utpanna
