alert("Esto es un ejemplo");
var x = 10;
let z = 20;
const pi = 3.14;
var nombre = "Irene";
var apellido1 = "González";
var apellido2 = "Fernández";

x = 10 + 2;

//Por la consola de desarrollo
console.log("El resultado es " + x);

//Por la página
document.write("Document.write --> El resultado es " + x);

//Mediante una alerta
alert("El resultado es " + x);

//Mediante DOM
document.getElementById("p1").innerHTML = "Ya he hecho el cálculo: " + x;

document.getElementById("nombre").innerHTML = "Mi nombre es: " + nombre + " " +  apellido1 + " " + apellido2 + ".";