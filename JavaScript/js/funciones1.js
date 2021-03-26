function sumar() {
    //Recupera el id de los valores introducidos en los input del formulario
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    //Convierte la cadena de los input en enteros
    var resultado = parseInt(num1) + parseInt(num2);

    //Pinta la variable resultado en el id dentro del html
    document.getElementById("resultado").innerHTML = resultado;
}

