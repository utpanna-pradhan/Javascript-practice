//  Write a function isEligible(user) that takes the object and returns:
// "Yes" if isJobReady is true and knows React.

// "No" otherwise.

const user ={
    name:"Utpanna",
    age:25,
    skills:["HTML","CSS","JavaScript"],
    isJobReady:true,
};
function isEligible(user){
    if(user.isJobReady === true){
        return "Yes";
    }
    return "No";
}
console.log(isEligible(user));