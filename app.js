$(document).ready(function() {
   $('select').material_select();
   $("#cities").on("change", findLocation)
   $("#day").on("change", findDay)

});

var city_name;
var day;

function findLocation(event){
  console.log('hello')
    city_name = event.target.value;
}

function findDay(event) {
  day = event.target.value
}

console.log(dataAsJSON.Boston.Tuesday);


function forecast(weather) {

  weather = type

  if (weather === 'snow') {
    $('.drinkImg').append("<a href='img/snow.png'>")
  }
  else if (weather === 'rain') {
    $('.drinkImg').append("<a href='img/rain.png'>")
  }
  else if (weather === 'sunny') {
    $('.drinkImg').append("<a href='img/sun-01.png'>")
  }
  else if (weather === 'hail') {
    $('.drinkImg').append("<a href='img/hail.png'>")
  }
  else "Guess you can't drink today"
}
