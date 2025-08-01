// What will be the output?
console.log(1 + "2" + "2");
//it executes from left to right first it adds 1 as a number then it adds both 2 which are a string's so the answer is 122
console.log(1 + +"2" + "2");
//here it's shows 32 as it adds first 1 as number and convert second two also as number due to + sign before the number and finally it adds last 2 as string
console.log(1 + -"1" + "2");
//this is same  as previous one.here also it convertes the above string 1 to number due to - sign previously.it will print 02
console.log(+"1" + "1" + "2");
//here the first 1 is a number but then both 1 and 2 are string so it will print 112
console.log("A" - "B" + "2");
//A-B can't execute as string cant susbstract so it will show NAN and then add 2 as string.NAN2
console.log("A" - "B" + 2);
//here we can't add NAN with 2 as the result will be NAN