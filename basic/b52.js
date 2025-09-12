//Strict comparion for empty obj
const myobj={};
if(Object.keys(myobj).length === 0){
    //Object.keys(arrayname) will convert object into array then we can use array properties like length
    console.log("empty object")

}
else{
    console.log("Not an empty object")
}