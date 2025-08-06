# 1. What is JavaScript?

- JavaScript is a lightweight, interpreted scripting language used to make web pages interactive.
- It is a browser-based language, but it can also run on the server using tools like Node.js.
- Used for both client and server side.
- Dynamically update content, controls multimedia, animate images and many more.

# 2. What are the data types supported by JavaScript?

# Primitive:

- String → "Hello"
- Number → 42
- BigInt → 12345678901234567890n
- Boolean → true / false
- undefined → a variable declared but not assigned
- null → intentional absence of value
- Symbol → Symbol("id")

# Non-primitive:

- Object → { name: "Utpanna", age: 25 }
- Array → [1, 2, 3]
- Function → function greet() {}

# 3. What is the difference between var, let, and const?

- var: function-scoped, can be redeclared.
- let: block-scoped, cannot be redeclared.
- const: block-scoped, cannot be reassigned.

# 4. What are primitive data types?

- Built-in data types provided by JavaScript.
- They store a single value and are immutable. (You can reassign a new value to the variable, but you can't change the actual value itself — like strings and numbers.)
- Examples: number,string, undefined,boolean,null,BigInt,symbol.
- let x = 250; //number
- let str = "Hello"; //string
- let x; //undefined
- let x = true; //boolean
- let x = null; //null
- let bigNum = 123422222222222222222222222222222222222n; //BigInt
- let sym = Symbol(“Hello”) //symbol

# 5. What is type coercion?

- Type coercion is automatic conversion of values from one data type to another.
- This happens because JavaScript is a weakly-typed language.
- eg:
  console.log(“5” + 5);
  // Output: “55” (number 5 is coerced to string “5”)
- eg:
  onsole.log("10" - 5);
  // Output: 5 (string "10" is coerced to number 10)

# 6. Difference between == and ===?

- == (Loose Equality)compares values after type conversion.
- eg: "5" == 5 → true (check Value only)
- === (Strict Equality)compares value and type both .
- eg: "5" === 5 → false ( check Value + Type )

# 7. What is a function?

- A reusable block of code that performs a specific task.
  It takes some input (called parameters) and return an output where there is some relationship between the input and the output.
  A JavaScript function is executed when the function is called.
- We create a function once, and then we can call it whenever we need it.
  syntax:

      function functionName(parameter1, parameter2) {
        // code to be executed
        return result;
      }

- eg:
  function greet() {
  return console.log("Hello, welcome!");
  }

  greet(); // Calling the function

# 8. What are arrow functions?

- Short syntax for functions.
- Introduced in ECMAScript 2015 (ES6).
- They do not have their own this, arguments, or super.

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

# Declaration: 
- Starting with the function keyword, followed by the function name, parameters, and the function body.
- Must have a function name.
- Also called named function or function statement.
- - eg:
  function myFunc(name) {
   return "Hello, " + name;
   }
- Can be used before it's written in code because it's hoisted(Hoisting means JavaScript moves function declarations to the top of their scope during the compilation phase, so you can use them even before they appear in code.)
- eg:
    sayHi(); //Works fine

    function sayHi() {
      console.log("Hi there");
    }

# Expression:

- Used to define a function inside an expression.
- A function defined as part of an expression, like assigning it to a variable.
- eg :
    const add = function (a, b) {
    return a + b;
    };
- Can be named or anonymous.
  const welCome= function() {
   return "Hello";
   };
- Assigned to a variable.
- NOT hoisted – you must define it before using it.
- eg:
    multiply(2, 3); //Cannot access 'multiply' before initialization
    const multiply = function (a, b) {
      return a * b;
    };

# 10. What is hoisting?

- Variables and function declarations are moved to the top of their scope during compile phase.
- eg:
  sayHi(); // Output: Hello
  function sayHi() {
  console.log("Hello");
  }

# 11. What is null?

- It represents an intentional absence of any value.
- It means "nothing" or "empty".
- We can assign null to a variable to clear or reset its value.
- eg:
  let x = null;
  console.log(x); // Output: null

# 12. What is undefined?

- A variable that has been declared but not assigned a value.
- It is the default value for uninitialized variables.
- eg:
  let y;
  console.log(y); // Output: undefined

# 13. What is NaN?

- Not a Number
- It is the result of a mathematical operation that doesn't make sense.
- eg:
  let result = "hello" / 5;
  console.log(result); // Output: NaN

# 14. How to check the type of a variable?

- Use typeof operator.
- syntax :
  typeof variableName;
- eg:
  let name = "Utpanna";
  console.log(typeof name); // Output: string

# 15. What are template literals?

- Template literals are a way to create strings using backticks (`).
- They allow you to insert variables inside a string using ${}.
- eg:
  let name = "Utpanna";
  let greeting = `Hello, ${name}`;
  console.log(greeting); //Hello, Utpanna

# 16. What are arrays in JavaScript?

- An array is used to store multiple values inside a single variable.
- Array starts from 0 index.
- eg:
  let fruits = ["Apple", "Banana", "Mango"];
  console.log(fruits[0]); // Apple

# 17. What is an object?

- An object is a collection of key-value pairs.
- Each key is also called a property.
- Objects are useful when you want to group multiple values or behaviors together under one name.
- eg:
  let person = {
  name: "Jina",
  age: 25,
  isStudent: false
  };
  console.log(person.name);//Jina

# 18. How to create an object?

- Ways to Create Objects in JavaScript
- Using Object Literals (Most Common):
  //Simplest and most readable way
  const person = {
  name: "abc",
  age: 20,
  isDeveloper: true
  };
  console.log(person.name); //abc

- Using new Object() Constructor:
  //Useful when you need to create an object dynamically.
  const person = new Object();
  person.name = "abc";
  person.age = 20;
  console.log(person); // { name: 'abc', age: 20 }

- Using a Constructor Function:
  //new keyword is used to create an instance.
  function Person(name, age) {
  this.name = name;
  this.age = age;
  }
  const user1 = new Person("abc", 20);
  console.log(user1); // Person { name: 'abc', age: 20 }

- Using Object.create():
  //Creates a new object from an existing object as its prototype.
  const animal = {
  eats: true
  };
  const dog = Object.create(animal);
  console.log(dog.eats); // true (inherited)

- Using ES6 Classes:
  // class-based syntax
  class Person {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }
  greet() {
  console.log("Hi, I'm " + this.name);
  }
  }
  const user = new Person("abc", 20);
  user.greet(); // Hi, I'm abc

- Object.fromEntries():
  const entries = [
  ["name", "abc"],
  ["role", "Developer"]
  ];
  const user = Object.fromEntries(entries);
  console.log(user); 
  // Output: { name: "abc", role: "Developer" }
# 19. What is a loop?

- A loop is used to run a block of code repeatedly until a condition is true.
- for, while, do...while, for...in, for...of

# 20. What is the difference between for...in and for...of?

# for...in:

- Used to iterate over the enumerable string keys (property names) of an object.
- Commonly used for objects.
- syntax:
  for (let key in object) {
      // key = property name
      // object[key] = property value
  }
- eg:
  let person = {
  name: "abc",
  age: 25
  };
  for (let key in person) {
  console.log(key + ":", person[key]);
  //name: abc  
   //age: 22
  }

# for...of:
- Used to iterate over iterable values like arrays, strings, maps, sets, etc.
- Gives you the value directly.
- syntax
    for (let value of iterable) {
    // value = each item in iterable
    }
- eg:
 let arr = ["a", "b", "c"];
  for (let val of arr) {
    console.log(val);
  }
  // Output: a b c
- eg:
 let str = "Hi";
  for (let char of str) {
    console.log(char);
  }
  // Output: H i
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

# Truthy:

- Any value that evaluates to true in a boolean context.
- eg : (everything else which is not falsy)
  "hello", 123, [], {}, true, "false", Infinity

# Falsy:

- Any value that evaluates to false in a boolean context.
- eg: false, 0 , "" or ''(Empty string), null, undefined, NaN

# 30. What are logical operators?

- JavaScript supports three logical operators:

# && (AND)

-     Returns true if both conditions are true.

# || (OR)

-     Returns true if any conditions is true.

# ! (NOT)

- Reverse the value

- eg:
  console.log(true && false); // false
  console.log(true || false); // true
  console.log(!true); // false

# 31. What is the difference between splice() and slice()?

splice():

- modifies original array.
- Adds/removes elements in an array.
- eg:
  let fruits = ["apple", "banana", "cherry"];
  fruits.splice(1, 1); // removes 1 element at index 1
  console.log(fruits); // ["apple", "cherry"]

slice():

- returns a shallow copy.
- Returns a part of the array.
- eg :
  let fruits = ["apple", "banana", "cherry"];
  let newFruits = fruits.slice(0, 2);
  console.log(newFruits); // ["apple", "banana"]
  console.log(fruits); // Original remains unchanged

# 32. What is the spread operator?

- The spread operator (...) is used to “spread out” the elements of an array / properties of an object / string / Sets /Maps.
- eg:
  const box1 = ["shirt", "jeans"];
  const box2 = ["jacket", "cap"];
  const wardrobe = [...box1, ...box2];
  console.log(wardrobe); // ["shirt", "jeans", "jacket", "cap"]
- eg :
  const str = "Hello";
  const chars = [...str];
  console.log(chars); // ["H", "e", "l", "l", "o"]

# 33. What is rest parameter?

- The rest parameter in JavaScript allows a function to accept an indefinite number of arguments and collect them into a single array.
- eg:
  You're hosting a party but don’t know how many guests will come. The rest parameter lets you collect any number of guests.(When number of arguments is unknown we can use rest parameter)
- It is denoted by three dots (...) followed by the parameter name, and it must be the last parameter
  syntax :
  function myFunction(arg1, arg2, ...restArgs) { ... }
- eg:
  function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
  total += num;
  }
  return total;
  }

  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(5, 10, 15, 20)); // Output: 50

# 34. What is a callback function?

- A callback function in JavaScript is simply a function that is passed as an argument to another function. The key idea is that this "passed-in" function is then executed inside the outer function, typically after some operation or task is completed.
- JavaScript executes code line by line (synchronously), but sometimes we need to delay execution or wait for a task to complete before running the next function. Callbacks help achieve this by passing a function that is executed later.
- It is useful in JavaScript for handling asynchronous operations (like fetching data from a server or waiting for user input)
- eg :
  console.log("Start");

  setTimeout(function () {
  console.log("Inside setTimeout");
  }, 2000);

  console.log("End");

# 35. What is setTimeout()?

- Execute a function after a delay(measured in milliseconds)/
- eg: A microwave timer - you set it for 2 minutes, and it beeps once when time’s up.
- syntax :
  setTimeout(function, delay);
- eg:
  setTimeout(() => {
  console.log("Your cake is ready!");
  }, 2000); // Waits 2 seconds (2000ms), then runs

# 36. What is setInterval()?

- Run a function repeatedly, with a fixed time gap .
- eg: clock ticking every 1 second. It keeps ticking forever, until you stop it.
- syntax :
  setInterval(function, interval);
- eg:
  setInterval(() => {
  console.log("Hello");
  }, 1000); // Runs every 1 second

# 37. How to clear setTimeout or setInterval?

- Sometimes you may want to cancel a timer or interval before it runs or continues.
- eg:
  You set a timer, but change your mind and cancel it before it beeps.
  You set an alarm to ring every 5 minutes, but want to stop it after some time.

# 38. What is Math object?

- Allows you to perform mathematical tasks.
- eg:
  Math.floor(3.7); // 3 (rounds down)
  Math.ceil(3.2); // 4 (rounds up)
  Math.round(3.5); // 4 (nearest)
  Math.max(5, 9, 2); // 9
  Math.min(5, 9, 2); // 2
  Math.random(); // 0 to 1 (not including 1)

# 39. How to generate a random number?

- Use Math.random() to generate a floating-point number between 0 and 1 (excluding 1).
- syntax = Math.random();
- eg:
  let randomNumber = Math.random();
  console.log(randomNumber); //returns a random number between 0 (inclusive) and 1 (exclusive)
- eg:
  let randomNumber = Math.random() \* 10;
  console.log(randomNumber); // Return a random number between 0 (inclusive) and 10 (exclusive):

# 40. What is a ternary operator?

- It is Known as Conditional Operator
- A shorthand for simple if…else.
- Write conditions in a shorter, simpler way.
- It takes three operands.
- condition ? trueExpression : falseExpression
- condition that evaluates to true or false value.
- trueExpression executes if the condition is true else falseExpression will executes.
- eg:

  let age=25;
  let message = (age>18) ? "eligible to vote" : "not eligible to vote" ;
  console.log(message); //eligible to vote

# 41. What is JSON?

- JSON stands for JavaScript Object Notation.
- It is a text format used to store and exchange data.
- Based on JavaScript syntax.
- Commonly used for API data exchange between browser and server.
- eg:
  '{ "name": "Utpanna", "age": 22 }'

# 42. How to convert object to JSON?

- Used to convert a JavaScript object into a JSON string.
- JSON.stringify(obj);
- eg:
  let user = {
  name: "Utpanna",
  age: 22
  };
  let jsonString = JSON.stringify(user);
  console.log(jsonString); //{"name":"Utpanna","age":22}

# 43. How to convert JSON to object?

- When you get data from an API usually it comes as a JSON string but in JavaScript we can’t use this data until we convert it into an object.
- JSON.parse()
- eg:
  let jsonData = '{ "name": "Utpanna", "age": 22 }';
  let userObject = JSON.parse(jsonData); //convert JSON to object
  console.log(userObject.name); //Utpanna

# 44. What is the purpose of return in functions?

- The return keyword is used inside a function to send back a value to the place where the function was called.
- Get a result from a function (like a calculation)
- Store that result in a variable
- Use that result in other parts of our program
- Stop the function from running further.
- eg:
  function addNumbers(a, b) {
  let sum = a + b;
  return sum;
  }

  let result = addNumbers(4, 6);
  console.log(result); // Output: 10

- eg:
  function sayHi() {
  console.log("Hi there!");
  return;
  console.log("This line will not run.");
  }

  sayHi();//prints Hi there!,second console.log never runs as return with no value will stop the Function

# 45. Can we return multiple values from a function?

- functions can return multiple values, though technically they often return a single value.
- To return multiple values, we wrap them inside a single object or array.
- A JavaScript function can only return one value at a time:
  function sayHello() {
  return "Hello!";
  }
  console.log(sayHello());

# Using Array:

function getCoordinates() {
let x = 10;
let y = 20;
return [x, y]; // return as array
}

const [xValue, yValue] = getCoordinates(); // destructuring
console.log("X:", xValue); // Output: X: 10
console.log("Y:", yValue); // Output: Y: 20

# Using Object:

function getUserDetails() {
let name = "Utpanna";
let age = 25;
return {
name: name,
age: age
};
}

const { name, age } = getUserDetails(); // destructuring
console.log("Name:", name); // Output: Name: Utpanna
console.log("Age:", age); // Output: Age: 25

# 46. What are global and local variables?

# Global: 

- Variable that declared outside of any function or block scope.
- It is accessible everywhere.
- eg

  let globalVar = "hello"; // global variable
  function myFunc() {
  console.log(globalVar); // Accessible here
  }
  showGlobal();
  console.log(globalVar);// Accessible here

# Local: 

- Local variables are defined within functions.
- It is accessible within that function/block
- eg:

      function showLocal() {
        let localVar = "Hello"; // local variable
        console.log(localVar); // Accessible here
      }

  showLocal();
  console.log(localVar); // error

# 47. What is the use of typeof?

- It is used to determine the data type of a given operand.
- eg:

  console.log(typeof "hello"); // string
  console.log(typeof 123); // number
  console.log(typeof true); //boolean

# 48. What is the use of isNaN()?

- Checks if a value is NaN (Not a Number).
- It attempts to convert the value to a number before checking if it's NaN.
- eg:

  isNaN(value)
  isNaN(123); //false
  isNaN('Hello'); //true

# 49. What is the difference between alert(), prompt(), and confirm()?

# alert()

- shows a message
- When an alert box pops up, the user will have to click "OK" to proceed.
- Show informational message or warnings.
- alert("Click ok o proceed");

# prompt() 

- takes user input.
- When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
  ok will return input value, cancel return null.
- eg:

  let userName = prompt("Please enter your name:", "Demo");
  if (userName !== null) {
  console.log("Hello, " + userName );
  }

# confirm() 

- asks for confirmation (OK/Cancel).
- if you want the user to verify or accept something.
- eg:

  confirm("Are you sure you want to delete?");

# 50. What is the use of console.log()?

- Used to print messages to the browser console .
- It is useful for testing purposes.
- It allows developers to inspect the values of variables and identify where errors might be occurring(debugging).
- eg:

  let userName = "Utpanna;
  console.log("User Name:", userName); //Utpanna
