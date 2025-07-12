//From the sentence below, extract only words greater than 3 letters
const str = "I love to build UI with React";
const words= str.split(" ");
let newstr=[]
for(let i=0;i<words.length;i++){
    if(words[i].length > 3){
        newstr.push(words[i]);
       
    }
    
   
}
 console.log(newstr);