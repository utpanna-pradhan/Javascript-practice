// You are given this array:

// const products = [
//   { name: "Shoes", price: 1200 },
//   { name: "T-shirt", price: 800 },
//   { name: "Cap", price: 300 }
// ];
// 👉 Return an array of product names in uppercase: ["SHOES", "T-SHIRT", "CAP"]
const products = [
  { name: "Shoes", price: 1200 },
  { name: "T-shirt", price: 800 },
  { name: "Cap", price: 300 }
];
const convertUpper = products.map(prd => prd.name.toUpperCase());
console.log(convertUpper)