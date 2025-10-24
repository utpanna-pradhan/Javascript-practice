// Write a JavaScript function to find the second largest number in an array.
// Example:

// Input: [10, 5, 8, 20, 15]
// Output: 15
let a = [10, 5, 8, 20, 15];
let uniquearr = [...new Set(a)];
console.log(uniquearr);
uniquearr.sort((a, b) => b - a);
console.log(uniquearr);
console.log(`Second Largest element is ${uniquearr[1]}`);

    