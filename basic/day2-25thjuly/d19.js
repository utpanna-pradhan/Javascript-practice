// Write a function convertToObj(keys, values) that takes:
// keys = ["name", "age"];
// values = ["Utpanna", 25];
// and returns:

// { name: "Utpanna", age: 25 }
const keys = ["name", "age"];
const values = ["Utpanna", 25];
function convertToObj(key,value){
    return Object.fromEntries(key,value)
}
console.log(convertToObj())