console.log([] + 1); //1 
console.log([1] + 1); //11
console.log([1,2] + [3,4]);//1,23,4
//here as we have used + it used type coercion which basically convert toString().in [1] it converts to '1' which adds with 1 gives string concatenation result 11,same for [1,2] ,[3,4] convert to "1,2" +"3,4" which concatenate string and give "1,23,4"