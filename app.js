
findLocation();

function findLocation(){
  $.getJSON('',
    function(data, textStatus, jqXHR) {
        alert(data);
    }
)
  console.log(ans);
// $("#search").click(function(){
//   event.preventDefault();
//   var selected_city = $(#city).val();
    // var split_city = selected_city.split('');
    // var city1 = split_city[0];
    // var city2 = split_city[1];
    // console.log(selected_city);

}); //closes .click function
} //closes findLocation



// function function_select_hero() {
//   $("#city").change(function(event) {
//     event.preventDefault();
//     selected_city = $("#city").val();
//       var private_string = "c1e94b84d2102f0297e3956a992115601ede2399"
//       var public_string = "16ed091cdb99bc7b848bd4a3821fdc4d"
//       var today = new Date();
//       var time_stamp = today.toGMTString();
//       var encrypted_hash = CryptoJS.MD5(time_stamp + private_string + public_string);
//       var url = "https://gateway.marvel.com/v1/public/comics?ts=" + time_stamp + "&apikey=" + public_string + "&hash=" + encrypted_hash;
//
//
//       var my_hero = selected_hero
//       fetch("https://gateway.marvel.com/v1/public/characters?name="+my_hero+"&ts=Tue,%2013%20Dec%202016%2016:35:36%20GMT&apikey=16ed091cdb99bc7b848bd4a3821fdc4d&hash=9dbbfd2a874606c114b07bbb87c5665a")
//       .then(function(response) {
//         return response.json().then(function(json) {
//         var marvel_object = json;
//         var my_info = marvel_object.data.results;
//         var character_name = my_info[0].name;
//         var character_image = my_info[0].thumbnail.path;
//       for (var i=0; i<my_info.length; i++) {
//         var char_name = my_info[i].name;
//
//       }
//       localStorage.setItem("name", char_name);
//       pass_name_blackboard();
//
//       var image = character_image + "/portrait_uncanny.jpg";
//       $(".bi_image").html("<img src='" + image + "' " + "alt='this is an image of " + character_name + " from Marvel'>")
//
//   })
// });
// })
//
// }
