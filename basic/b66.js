// Write a function that takes an array of numbers and returns a new array of only even numbers.
const orignalarr = [1,2,3,4,56,8,10,0,88];
function evennum(){
    const newarr = orignalarr.filter(num=> num%2==0);
    console.log(newarr);
    
}