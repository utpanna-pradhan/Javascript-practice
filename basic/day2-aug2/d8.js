let a = [1, 2, 3];
a.toString = () => '1';
console.log(a == 1); //1