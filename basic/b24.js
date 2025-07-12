// Create a function truncate(str, limit)
function truncate(str,limit){
    if(str.length > limit){
        return str.slice(0,limit) + "..."
    }
    return str;
}
console.log(truncate("Welcome to React", 7))