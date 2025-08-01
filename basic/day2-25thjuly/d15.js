// Convert this object into an array of [key, value] pairs:
// const person = {
//   name: "Utpanna",
//   city: "Bhubaneswar",
//   age: 25
// };
// Use Object.entries().

const person={
    name:"Utpanna",
    city:"Bhubaneswar",
    age:25
};
const convertedarr= Object.entries(person);
console.log(convertedarr)