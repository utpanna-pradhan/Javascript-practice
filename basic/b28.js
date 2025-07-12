// /Convert "background-color" to "backgroundColor"
// const orignalstr="background-color";
// const covertedstr=orignalstr.replace("-c","C");
// console.log(covertedstr)

const tocamelcase = (str)=>{
   return str.replace(/-([a-z])/g, (match, char) => char.toUpperCase());
}
console.log(tocamelcase("background-color"));