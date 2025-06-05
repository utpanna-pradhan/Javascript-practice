// Print the multiplication table of a number
function multiplicationTable(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
multiplicationTable(10);
