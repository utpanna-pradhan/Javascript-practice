// Reverse keys and values
const obj = {
  name: "jina",
  role: "Dev",
};
const entryArr = Object.entries(obj);
console.log(entryArr);
const revEntry = entryArr.map((entry) => entry.reverse());
const revObj = Object.fromEntries(revEntry);
console.log(revObj);
