$(document).ready(function() {
   $('select').material_select();
 });

findLocation();
console.log("app.js is loaded")
function findLocation(){
  // $('#btn').click(function() {
    console.log("onclick hit");
    var name = localStorage.getItem('city');
    console.log(data.Tuesday);
  // }) //close .click

// $("#search").click(function(){
//   event.preventDefault();
//   var selected_city = $(#city).val();
    // var split_city = selected_city.split('');
    // var city1 = split_city[0];
    // var city2 = split_city[1];
    // console.log(selected_city);

 //closes .click function
} //closes findLocation
