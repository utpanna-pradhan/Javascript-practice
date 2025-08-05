var a = 1;
function outer() {
  var b = 2;
  function inner() {
    console.log(a + b);
  }
  inner();
}
outer();