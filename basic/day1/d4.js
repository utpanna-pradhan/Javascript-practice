//  Create a function formatPrice that takes a number and returns:
// ₹1,200.00 (with Indian currency + 2 decimals)

function formatPrice(price) {
  const result = price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigit: 2,
  });
  return result;
}
console.log(formatPrice(1200));
