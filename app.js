$(document).ready(function() {
   $('select').material_select();
 });

findLocation();
console.log("app.js is loaded ", dataAsJSON)
function findLocation(){
<<<<<<< HEAD
  $('#btn').click(function() {
    // console.log(data.Boston.Tuesday);
    var city_name = $('#cities').innerText()
    console.log("WTF")
=======
  // $('#btn').click(function() {
    console.log(dataAsJSON.Boston.Tuesday);
>>>>>>> 1dbed04fff5ee439c81e80daf7f0be13d3368ad5

    var type;

// $("#search").click(function(){
//   event.preventDefault();
//   var selected_city = $(#city).val();
    // var split_city = selected_city.split('');
    // var city1 = split_city[0];
    // var city2 = split_city[1];
    // console.log(selected_city);

 // })// closes .click function
 })
} //closes findLocation

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
