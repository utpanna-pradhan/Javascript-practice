// Find the sum of digits of a number
function sumofdigit(num){
    let sum=0;
    const newstr=num.toString();
    for(let i=0;i<newstr.length;i++){
        sum+=parseInt(newstr[i]);
       
    }
     return sum;
}
console.log(sumofdigit(1234));