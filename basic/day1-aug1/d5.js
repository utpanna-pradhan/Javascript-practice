// Input: any value
// Output: "Truthy" or "Falsy"
// Examples:


function checkTruthyFalsy(value) {
  // Your code
  if(value ){
     console.log("Truthy")
    
    
  }
  else{
  console.log("Falsy") ;
  }
}
checkTruthyFalsy("");       // Falsy
checkTruthyFalsy("hi");     // Truthy
checkTruthyFalsy(0);        // Falsy
checkTruthyFalsy(NaN);      // Falsy
checkTruthyFalsy([]);       // Truthy