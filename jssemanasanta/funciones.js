function crear_boton() {
    var boton = document.createElement("input")
    boton.type = "button"
    boton.value = "Botón nuevo"
    document.getElementById("span1").appendChild(boton)
}

function crear_texto() {
    var h1 = document.createElement("h1")
    var texto = document.createTextNode("Texto gordo")
    h1.appendChild(texto)
    document.getElementById("div1").appendChild(h1)
}