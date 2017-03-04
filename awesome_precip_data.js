

console.log("in awesome data");
const dataAsJSON = '{"Next Saturday": "rain", "Tuesday": "rain", "Wednesday": "rain", "Thursday": "rain"}'

const data = JSON.parse(dataAsJSON);
console.log("This is JSON data ",data);


localStorage.setItem("city", data);
