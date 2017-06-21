$(document).ready(function () {
  $('select').material_select()
  $('.collapsible').collapsible()
  getLocation()
})

console.log('We are in js.js')

// var lat = "39.7616";
// var long = "-104.9622";

function getLocation () {
  console.log('We are in get Location')
  $('#button').click(function (event) {
    event.preventDefault()
    console.log('Here in maps')
    var city = $('#city').val()
    console.log('this is the city', city)
    fetch('https://galvanize-cors.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyBeVvUWaX8RnJtKf4EERvDSJX0NFpiW6po')
        .then(function (response) {
          return response.json().then(function (json) {
            var lat = json.results[0].geometry.location.lat
            var long = json.results[0].geometry.location.lng
            console.log(lat, long)
            getPrecip(lat, long)
          })
        })  // closes .then function response
  })  // this closes .click
} // this closes getLocation

function getPrecip (lat, long) {
  var key = '5567e4950b5b3b4ea9088c5ac3639c6b'
  var day = findDay()
  console.log('Day', day)
  fetch('https://galvanize-cors.herokuapp.com/https://api.darksky.net/forecast/' + key + '/' + lat + ',' + long + '')
  .then(function (response) {
    return response.json().then(function (json) {
      var typeOf = json.daily.data[day].precipType
      console.log('This is the precipType', typeOf)
      localStorage.setItem('type', typeOf)
      location.assign('drinks-text.html')
    })  // this closes json.then
  }) // this closes fetch.then
} // this closes getPrecip

function findDay () {
  var dayOf = $('#day').val()
  console.log('This is the DAY!!!!', dayOf)
  return dayOf
}  // this closes findDay

function forecast () {
  var typeOf = localStorage.getItem('type')
  if (typeOf === 'snow') {
    $('#drinkImg').attr('src', 'img/snow.png')
  } else if (typeOf === 'rain') {
    $('#drinkImg').attr('src', 'img/rain.png')
  } else if (typeOf === 'hail') {
    $('#drinkImg').attr('src', 'img/hail.png')
  // } else {
  //   $('#drinkImg').attr("src", "img/drink-beer.png")
  } else {
    $('#drinkImg').attr('src', 'img/sun-01.png')
  }
}
