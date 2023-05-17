const CANT_USUARIO = document.querySelector("input");
const SALUDO = document.querySelector("div");

function cantidadSaludo() {
    let saludoUsuario = CANT_USUARIO.value
    SALUDO.innerHTML = ""

    for (let i = 0; i < saludoUsuario; i++) {
        SALUDO.innerHTML += "<p> Hola Mundo </p>"
           }
}