//Convert Array to Object
const arr = ["name", "email"];
const coverttoObject = arr.reduce((acc, index) => {
  acc[index] = "";
  return acc;
}, {});
console.log(coverttoObject);
