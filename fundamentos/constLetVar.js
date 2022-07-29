// Crea variable en un ambito global
var nombre = "Alan";

if (true) {
  var nombre = "Magneto";
}
console.log(nombre);

// Crea variable reasignambles
let nombre_2 = "Alan";

if (true) {
  nombre_2 = "Magneto";
  let nombre_let = "Hola";
  console.log(nombre_let);
}
console.log(nombre_2);

//const variables mas ligeras no se pueden reasignar 

