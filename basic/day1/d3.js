// You are given this array:

// const products = [
//   { name: "Shoes", price: 1200 },
//   { name: "T-shirt", price: 800 },
//   { name: "Cap", price: 300 }
// ];
// 👉 Return an array of product names in uppercase: ["SHOES", "T-SHIRT", "CAP"]
//  From the same products array, return only the products above ₹500.
const products = [
  { name: "Shoes", price: 1200 },
  { name: "T-shirt", price: 800 },
  { name: "Cap", price: 300 }
]; 
const filteramt = products.filter(prd => prd.price>500);
console.log(filteramt)