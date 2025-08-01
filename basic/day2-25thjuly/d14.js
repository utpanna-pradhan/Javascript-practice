//  Loop over all properties of the user object using for...in and print key-value pairs.
const user ={
    name:"Utpanna",
    age:25,
    skills:["HTML","CSS","JavaScript"],
    isJobReady:true,
};
for(value in user){
    console.log(`${value}-${user[value]}`)
}