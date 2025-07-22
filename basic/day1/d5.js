//  Use reduce() to get the total price from products.
const products = [
  { name: "Shoes", price: 1200 },
  { name: "T-shirt", price: 800 },
  { name: "Cap", price: 300 }
]; 
const sum = products.reduce((accumulator,currentValue) =>{
    return accumulator + currentValue.price;
},0)
console.log(sum)