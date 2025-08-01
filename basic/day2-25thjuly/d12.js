// Add a new skill "React" to skills array in the user object (without modifying original declaration).
const user ={
    name:"Utpanna",
    age:25,
    skills:["HTML","CSS","JavaScript"],
    isJobReady:true,
};

console.log(user.skills.concat("react"))