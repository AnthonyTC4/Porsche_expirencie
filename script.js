let boton = document.getElementById("botonmenu");
let opciones = document.getElementById("opcionesMenu");

boton.addEventListener("click", function() {

    if (opciones.style.display == "block") {
        opciones.style.display = "none";
    }
    else {
        opciones.style.display = "block";
    }

});