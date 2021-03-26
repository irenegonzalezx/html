function pintar() {
    return "Hola";
}

function sumar(a, b) {
    return a + b;
}

function procesar () {
    console.log("He conseguido pulsar el botón.");
    var dato = document.getElementById("nombreform").value
    document.getElementById("nombre1").innerHTML = dato;
}

var x = 10;
var z = 20;

var resultado = sumar(x , z);

document.getElementById("nombre1").innerHTML = pintar();
document.getElementById("apellido1").innerHTML = resultado
document.write(pintar());
document.write(resultado);