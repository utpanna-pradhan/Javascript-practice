//Given a string const name = " utpanna " → return it trimmed + capitalized
const orignalstr=" utpanna";
const convertedstr= orignalstr.trim();
const struppercase= convertedstr.charAt(0).toUpperCase() + convertedstr.slice(1);
console.log(struppercase)