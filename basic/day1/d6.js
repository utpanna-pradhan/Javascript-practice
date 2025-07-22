// Build a function that converts any sentence into a URL slug.
function convertSentence(str){
    const convertURL= "https://www." + str + ".com";
    return convertURL;
 }
 console.log(convertSentence("example"));