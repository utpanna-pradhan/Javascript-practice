// Convert "background-color" → "backgroundColor"
const camelCase = (str) =>{
    return str.replace(/-([a-z])/g, (match,char) => char.toUpperCase())
}
console.log(camelCase("background-color"))