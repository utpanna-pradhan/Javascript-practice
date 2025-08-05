let a = { name: "utpanna" };
let b = { name: "utpanna" };
console.log(a == b);//false as it compares 2 object and both reference to different point so it is false even if both has exact object
console.log(JSON.stringify(a) == JSON.stringify(b)); //here it converts a,b object to json string then it compare the value which are same so it give true