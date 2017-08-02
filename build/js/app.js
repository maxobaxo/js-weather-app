(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiKey = "778757951402b5ff34120149a5dc168a";

$(document).ready(function() {
  $("#location-entry").submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    var tempKelvin;
    var tempFahrenheit;
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
    .then(function(response) {
      tempKelvin = response.main.temp;
      tempFahrenheit = parseInt(1.8 * (tempKelvin - 273) + 32);
      $('.showWeather').html("The humidity in " + city + " is " + response.main.humidity + "%. <br> The temperature in your beloved city of " + city + " is " + tempFahrenheit + " degrees.");
    })
      .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

},{}]},{},[1]);
