//  Q6. Given this nested object:

// const dev = {
//   name: "Utpanna",
//   tech: {
//     frontend: ["HTML", "CSS", "JS"],
//     backend: ["Node", "Express"]
//   }
// }
// Write code to access "Express" and add "React" to the frontend stack.
const dev = {
    name:"Utpanna",
    tech:{
        frontend:["HTML","CSS","JS"],
        backend:["Node","Express"],
    }
};
console.log(dev["tech"]["backend"]["1"]);
console.log(dev["tech"]["frontend"].concat("react"))