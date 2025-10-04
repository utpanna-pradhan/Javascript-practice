// Write a function to check if a string is a palindrome.
function checkpal(str){
    let tempstr = "";
    for (let i=str.length-1;i>=0;i--){
        tempstr += str[i]
       }
      if(tempstr === str){
           return true;
           
        }
        return false;
   
}
console.log(checkpal("racecar"));
