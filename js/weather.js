function Temperature(temp) {
  this.temp = temp;
};

Temperature.prototype.getFahrenheit = function() {
  this.temp = parseInt(1.8 * (this.temp - 273) + 32);
  return this.temp;
};

exports.tempModule = Temperature;
