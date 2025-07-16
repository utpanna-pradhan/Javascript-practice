//Remove all falsy values from this array
const originalArray =  [0, 1, false, true, '', 'hello', null, undefined, NaN, 5];
const cleanedArray = originalArray.filter(Boolean);

console.log(cleanedArray); 