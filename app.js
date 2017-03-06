$(document).ready(function() {
  $('select').material_select();
  $('.collapsible').collapsible();

});

console.log("We are in js.js");

getLocation();

var lat = "39.7616";
var long = "-104.9622";


function getLocation() {
  console.log('We are in get Location');
  $("#button").click(function(){
    console.log("Here in maps")
      var city = $('#city').val();
      console.log('this is the city', city);
      var geocoder =  new google.maps.Geocoder();
      geocoder.geocode( { 'address': city}, function(results, status) {
        console.log("These are the results of geocode", results);
            if (status == google.maps.GeocoderStatus.OK) {
              lat = results[0].geometry.location.lat();
              long = results[0].geometry.location.lng();
              console.log("longitude", long);
              console.log("latitude", lat);
              var key = '5567e4950b5b3b4ea9088c5ac3639c6b';

              getPrecip(key, lat, long);
            } else {
              alert("Something got wrong " + status);
            }  //this closes else
          });  //this closes geocoder.geocode function
  });  //this closes .click
}  //this closes getLocation

function getPrecip(key, lat, long) {
  var key = '5567e4950b5b3b4ea9088c5ac3639c6b';
  var day = findDay();
  console.log("Day", day);
  fetch("https://api.darksky.net/forecast/"+key+"/"+lat+","+long+"")
  .then(function(response) {
    return response.json().then(function(json) {
      var typeOf = json.daily.data[day].precipType;
      console.log("This is the precipType", typeOf);
      forecast(typeOf);

    });  //this closes json.then
  }) //this closes fetch.then

} //this closes getPrecip


function findDay() {

  var dayOf = $("#day").val();
  console.log("This is the DAY!!!!", dayOf);
  return dayOf;
}






function forecast(type) {



  if (type === 'snow') {
    $('.drinkImg').append("<a href='img/snow.png'>")
  }
  else if (type === 'rain') {
    $('.drinkImg').append("<a href='img/rain.png'>")
  }
  else if (type === 'sunny') {
    $('.drinkImg').append("<a href='img/sun-01.png'>")
  }
  else if (type === 'hail') {
    $('.drinkImg').append("<a href='img/hail.png'>")
  }
  else "Guess you can't drink today"
}
