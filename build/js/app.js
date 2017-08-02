(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Temperature(temp) {
  this.temp = temp;
};

Temperature.prototype.getFahrenheit = function() {
  this.temp = parseInt(1.8 * (this.temp - 273) + 32);
  return this.temp;
};

exports.tempModule = Temperature;

},{}],2:[function(require,module,exports){
var apiKey = "778757951402b5ff34120149a5dc168a";
var Temperature = require('./../js/weather.js').tempModule;

$(document).ready(function() {
  $("#location-entry").submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    var tempKelvin;
    var tempFahrenheit;
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
    .then(function(response) {
      tempKelvin = new Temperature(response.main.temp);
      tempFahrenheit = tempKelvin.getFahrenheit();
      $('.showWeather').html("The humidity in " + city + " is " + response.main.humidity + "%. <br> The temperature in your beloved city of " + city + " is " + tempFahrenheit + " degrees.");
    })
      .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

},{"./../js/weather.js":1}]},{},[2]);
