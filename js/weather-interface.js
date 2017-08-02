var apiKey = "778757951402b5ff34120149a5dc168a";

$(document).ready(function() {
  $("#location-entry").submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey, function(response) {
      $('.showWeather').text("The current humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
