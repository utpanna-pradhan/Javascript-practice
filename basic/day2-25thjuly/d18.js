//  Create a function printSkills(obj) that accepts any object having a skills array and logs all skills using for...of.
const obj  = [
    {
        name:"jina",
        skills:"html"
    },
     {
        name:"nini",
        skills:"css"
    },
     {
        name:"sarabjeet",
        skills:"js"
    },
]
function printSkills(obj){
    if(obj.skills){
        for(const value of obj){
           return value;
        }
    }

}
console.log(printSkills(obj))