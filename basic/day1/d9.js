// Create a JS function that accepts a string and returns number of vowels.
function acceptstr(str) {
  let count = 0;
  const arrofvowels = ["a", "e", "i", "o", "u"];
  const splitstr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (arrofvowels.includes(splitstr[i])) {
      count = count + 1;
    }
   
  }
   return count;
}
console.log(acceptstr("jina"));
