// Check if a number is prime
function isPrime(num){
    if(num<=1){
        console.log("not prime");
          return;
        
    }
    else {
        for(let i =2;i<num;i++){
            if(num%i==0){
                console.log("not prime");
                return;
            }
           
        }
         console.log("prime");
    }
}
isPrime(5);