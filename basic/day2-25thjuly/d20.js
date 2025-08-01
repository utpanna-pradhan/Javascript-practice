// const settings = {
//   theme: "dark",
//   language: "en"
// };
// Write a function that updates any key in the object dynamically:

// updateSetting("theme", "light")
// should update theme to "light".
const settings = {
    theme:"dark",
    language:"en"
};
function updateSetting(name,value){
   return settings[name] = value;
}
console.log(updateSetting("theme","light"));
console.log(settings)
