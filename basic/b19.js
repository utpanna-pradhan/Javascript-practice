// Reverse a number
function reverseNum(num){
    let newstr=String(num);
    return newstr.split("").reverse().join('');
}
console.log(reverseNum(123456));