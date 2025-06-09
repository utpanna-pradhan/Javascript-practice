// Reverse a string
function reverseString(str){
    let newstr=str.split("").reverse().join('');
    return newstr;
}
console.log(reverseString("JINA NINI"))