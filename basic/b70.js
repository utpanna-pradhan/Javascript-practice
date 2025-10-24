// Write a function to count the number of words in a given string.
// (Example input: “I love JavaScript” → Output: 3)
function countwords(str){
   const words=str.trim().split(' ')
   return words
}
console.log(countwords('I love JavaScript'));
