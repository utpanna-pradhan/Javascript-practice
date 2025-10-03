//Write a function to reverse a string in JavaScript without using reverse(). 

function reversestrFunc(str){
    let revstr=""
    for(let i = str.length-1;i>=0;i--){
        revstr += str[i]
    }
return revstr
}
console.log(reversestrFunc("Hello"))