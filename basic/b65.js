// Write a function to count the number of vowels in a string.
function countVowels(str){
   const vowels  = ['a','e','i','o','u']
   let count = 0;
   for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
        count++
    }
   
   }
    return count    
     
}
console.log(countVowels('Hello Utpanna'));