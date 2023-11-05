const convertToCelsius = function(temperature) {
  let tempCelsius = ((temperature - 32)/ 1.8)
  tempCelsius = Math.round(tempCelsius * 10)/10
  return tempCelsius
};

const convertToFahrenheit = function(temperature) {
  let tempFahrenheit = ((temperature * 1.8) + 32).toFixed(1)
  tempFahrenheit = Math.round(tempFahrenheit * 10)/10
  
  return tempFahrenheit
};

console.log(convertToCelsius(100))
console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
