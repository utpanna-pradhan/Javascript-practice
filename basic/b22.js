// Count vowels in a string
function countVowels(str){
    const newstr=str.match(/[aeiou]/gi).length;
    return newstr;
}
console.log(countVowels("Utpanna pradhan"))