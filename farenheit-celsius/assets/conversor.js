function convertirCelsius(fahrenheit) {
   var fahrenheit = document.getElementById('fahrenheit').value
   var resultado = (fahrenheit - 32) * 5/9;
   document.getElementById('celsius').value = resultado
}
function convertirFahernheit(celsius){
  var celsius = document.getElementById('celsius').value
  var resultado = (celsius * 1.8) + 32;
  document.getElementById('fahrenheit').value = resultado
}
