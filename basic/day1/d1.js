//Convert "I love coding in JS" to ["I", "Love", "Coding", "In", "Js"]
const str = "I love coding in Js";
const splitstr = str.split(" ");
//console.log(splitstr);
let convertCapitalize = splitstr.map(word=>word.charAt(0).toUpperCase() + word.slice(1));
let joinstr= convertCapitalize.join(" ")
console.log(joinstr)