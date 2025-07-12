//Capitalize the first letter of every word in a sentence.

const orignalstr="hello react ninja";
const words=orignalstr.split(" ");
const capitalizedword=words.map(word=>word.charAt(0).toUpperCase() + word.slice(1));
const result=capitalizedword.join(" ");
console.log(result);