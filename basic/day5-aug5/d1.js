const urlParams = new URLSearchParams(window.location.search);

const product = urlParams.get('product'); // "laptop"
const category = urlParams.get('category'); // "electronics"
const price = urlParams.get('price'); // "1200"

console.log(`Product: ${product}, Category: ${category}, Price: ${price}`);