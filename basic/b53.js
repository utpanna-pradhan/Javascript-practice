//Nullish coalescing operation
let val1;
val1 = null ?? 10 ?? 20;
//?? will ignore null or undefined  value and will take the first value
console.log(val1)