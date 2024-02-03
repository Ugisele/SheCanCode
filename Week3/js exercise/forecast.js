// the forecast for today in kelvin
const kelvin = 0;
// console.log(typeof kelvin)
// the forecast for today in celsius
let celsius 
celsius = kelvin - 273;
 
console.log(celsius)
// the forecast for today in fahrenheit

let fahrenheit = celsius * (9/5) + 32
// the forecast for today in fahrenheit with the float rounding
fahrenheit = Math.floor(fahrenheit)

console.log(`the temperature is TEMPERATURE degrees Fahrenheit ${fahrenheit}`)