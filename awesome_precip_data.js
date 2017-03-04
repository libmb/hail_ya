

console.log("in awesome data");
const dataAsJSON = `{
  "Boston":
  {"Saturday": "sunny", "Sunday": "sunny", "Monday": "sunny", "Tuesday": "rain", "Wednesday": "rain", "Thursday": "rain", "Friday": "sunny"}
},
  "Phoenix":
  {"Sunday": "sunny", "Monday": "sunny", "Tuesday": "sunny", "Wednesday": "sunny", "Thursday": "sunny", "Friday": "sunny", "Saturday": "sunny"}
},
  "Oslo":
  {"Sunday": "hail", "Monday": "hail", "Tuesday": "hail", "Wednesday": "hail", "Thursday": "hail", "Friday": "hail", "Saturday": "hail"}
},
  "Seattle":
  {"Sunday": "rain", "Monday": "rain", "Tuesday": "rain", "Wednesday": "rain", "Thursday": "rain", "Friday": "rain", "Saturday": "rain"}
},
  "NewYork":
{"Sunday": "sunny", "Monday": "sunny", "Tuesday": "rain", "Wednesday": "rain", "Thursday": "rain", "Friday": "rain", "Saturday": "rain"}
},
  "Portland":
  {"Sunday": "rain", "Monday": "rain", "Tuesday": "rain", "Wednesday": "rain", "Thursday": "rain", "Friday": "rain", "Saturday": "rain"}
},
  "Boulder":
  {"Sunday": "sunny", "Monday": "snow", "Tuesday": "snow", "Wednesday": "sunny", "Thursday": "rain", "Friday": "rain", "Saturday": "snow"}
},
  "Portland":
  {"Sunday": "snow", "Monday": "snow", "Tuesday": "sunny", "Wednesday": "snow", "Thursday": "snow", "Friday": "snow", "Saturday": "snow"}
}
`

const data = JSON.parse(dataAsJSON);
console.log("This is JSON data ",data);
