

console.log("in awesome data");
const dataAsJSON = `{
  "Boston":
  {"Saturday": "rain", "Tuesday": "rain", "Wednesday": "rain", "Thursday": "rain"}
},
  "Phoenix":

`

const data = JSON.parse(dataAsJSON);
console.log("This is JSON data ",data);
