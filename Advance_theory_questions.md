101. What is the difference between stack and heap memory in JavaScript?
Stack: used for primitive values and function calls (LIFO order).

Heap: used for reference types like objects and arrays (non-linear).

102. Explain memory management in JavaScript.
JavaScript uses automatic Garbage Collection to reclaim memory. The most common algorithm is Mark-and-Sweep, which removes objects no longer referenced.

103. What is tail call optimization (TCO)?
TCO is an optimization where recursive calls are reused in memory, avoiding stack overflow. It's supported in strict mode in some engines.

104. How does JavaScript handle concurrency?
JavaScript is single-threaded but handles async tasks using event loop, Web APIs, and callback queues.

105. What is the call stack?
A stack that stores function invocation history. If it overflows, you get a “stack overflow” error.

106. What is the microtask queue?
Tasks like Promises are added to the microtask queue and executed before the next macrotask.

107. What is the difference between microtasks and macrotasks?
Microtasks: Promises, MutationObserver

Macrotasks: setTimeout, setInterval, UI events

108. What are Web Workers?
They allow JS to run in the background thread to perform CPU-intensive tasks without blocking the main thread.

109. What is the difference between Object.freeze() and Object.seal()?
freeze(): makes object immutable

seal(): prevents adding/removing properties but allows modification

110. What is a service worker?
A background script that enables features like push notifications, caching, and offline capabilities in PWAs.

111. What is an async generator?
A generator that yields promises and can be paused/resumed asynchronously.

js
Copy
Edit
async function* gen() { yield await fetch(url); }
112. Explain the module pattern.
A design pattern that encapsulates private and public members using closures.

113. What is a factory function?
A function that returns an object, often used instead of classes.

114. How to prevent object mutation?
Using Object.freeze(), deep clone + Object.freeze(), or using libraries like Immutable.js.

115. What is Referential Transparency?
A function is referentially transparent if calling it with the same inputs always returns the same output without side effects.

116. What are WeakMap and WeakSet?
Similar to Map and Set but keys are weakly referenced, so they don’t prevent garbage collection.

117. What is the purpose of Symbol?
Used to create unique object keys that are not enumerable.

118. What are Proxy and Reflect in JavaScript?
Proxy: Allows custom behavior for fundamental operations (e.g., get/set).

Reflect: Built-in methods to intercept operations used in Proxies.

119. What is de-structuring with default values?
js
Copy
Edit
const {a = 10, b = 20} = obj;
120. What is a transducer?
A composable and memory-efficient function for transforming data during reduction.

121. What is function composition?
Combining two or more functions into one.

js
Copy
Edit
const compose = (f, g) => x => f(g(x));
122. What is dynamic vs static typing?
Dynamic typing: Type determined at runtime (JavaScript).

Static typing: Type checked at compile time (e.g., TypeScript, Java).

123. What is duck typing?
"If it looks like a duck and quacks like a duck..." — used in JS to check behavior instead of type.

124. What is the difference between in operator and hasOwnProperty()?
in: checks if key exists in object or its prototype

hasOwnProperty(): only checks object's own properties

125. What are function decorators in JavaScript?
A function that wraps another to extend behavior.

126. What are tagged templates used for in libraries like styled-components?
Used to parse template literals with custom logic (e.g., CSS parsing).

127. Explain lazy loading in JS.
Postponing the loading of resources until they are needed (e.g., images, modules).

128. What is a memory leak in JavaScript?
When memory is not released due to lingering references.

129. What are Typed Arrays?
Arrays that store binary data with fixed-size types, like Int8Array, Float32Array.

130. How does the new.target keyword work?
It checks if a function is called as a constructor:

js
Copy
Edit
function A() {
  if (!new.target) throw "Must use new";
}
131. What is coercion vs casting?
Coercion: Implicit conversion ("5" + 1)

Casting: Explicit conversion (Number("5"))

132. How to implement private variables in JavaScript?
Using closures

Using # private fields in classes

133. What is an execution context?
It is the environment in which JavaScript code is evaluated and executed.

134. What is lexical scope?
Scope defined by the location of variables within the source code.

135. What are the different scopes in JavaScript?
Global

Function

Block (let/const)

136. What are import/export types in JS modules?
Named export/import

Default export/import

137. Difference between synchronous iterator and asynchronous iterator?
Sync: uses Symbol.iterator

Async: uses Symbol.asyncIterator and for await...of

138. What are mixins?
Objects that provide reusable functionalities to other classes without inheritance.

139. What is the difference between interface and type in TypeScript?
Though not JS directly, this is often asked.

interface: structure contracts

type: more flexible, supports unions

140. What is the Module Federation in Webpack?
A technique to load modules from another project at runtime (Micro-frontend architecture).

141. What is debounce and how to implement it?
js
Copy
Edit
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
142. What is throttle and how to implement it?
js
Copy
Edit
function throttle(fn, limit) {
  let flag = true;
  return function(...args) {
    if (flag) {
      fn(...args);
      flag = false;
      setTimeout(() => flag = true, limit);
    }
  };
}
143. How does import() dynamic import work?
Used to load modules on-demand:

js
Copy
Edit
import('./module.js').then(m => m.doSomething());
144. What are JS build tools (e.g., Babel, Webpack)?
Babel: transpiles modern JS to older versions

Webpack: module bundler

145. What is the Intl object used for?
Provides language-sensitive string comparison, number formatting, etc.

146. Explain Object.defineProperty()
Defines or modifies a property with specific descriptors:

js
Copy
Edit
Object.defineProperty(obj, 'x', {value: 10, writable: false});
147. What are property descriptors?
Attributes like writable, enumerable, and configurable used in objects.

148. What are template engines in JavaScript?
Libraries like Handlebars or EJS that generate HTML using templates and data.

149. How does JavaScript handle floating-point precision?
It follows IEEE 754 standard and can lead to issues like 0.1 + 0.2 !== 0.3.

150. What are some common JavaScript design patterns?
Module pattern

Factory pattern

Observer pattern

Singleton

Revealing module
