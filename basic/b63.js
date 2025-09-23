const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task done");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

//without variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task2 done");
        resolve();
    },2000)
}).then(function(){
    console.log("Promisetwo consumed");
    
})


//pass data in resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task3 done");
        
    },3000);
    resolve({
        username:"Jina",
        gender:"female"
    });
})
promiseThree.then(function(user){
    console.log(user);
    
})

// pass reject
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
       let error = true;
       if(!error){
        console.log("Aync task 4 done");
       }
       else{
        console.log("ERROR:Something went wrong");
        
       }

    }, 4000);
    resolve({
        subject:"JavaScript",
        ytchannel:"chai aur code"
    });
})
promiseFour.then(function(user){
    console.log(user);
    
}).catch(function(error){
    console.log("ERR..",error);
    
})