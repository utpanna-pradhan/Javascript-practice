// Write a function to remove duplicates from an array.
function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,2,34,1,2,3,5]));
