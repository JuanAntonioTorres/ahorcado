"use strict";
var palabrasPosibles = ["polimorfismo", "recursividad", "indescifrable", "impresionante", "perfecto"];
var letras = ["abcdefghijklmnñopqrstuvwxyz"];
var palabraOculta = crearPalabraOculta(palabrasPosibles);
var palabraVisible = crearPalabraVisible(palabraOculta);
var numeroFallos = 0;
var numeroAciertos = 0;
var divPalabraVisible = document.getElementById("palabraVisible");
var divAhorcado = document.getElementById("divAhorcado");
var divMensaje = document.getElementById("mensaje");
var divImputLetra = document.getElementById("imputLetra");
/**
 * TESTEADO
 * genera una palabra aleatorio de un array de palabras
 * necesita crear random
 * @param palabrasPosibles array de posibles palabras de las que se retornara una aleatoria
 */
function crearPalabraOculta(palabrasPosibles) {
    return palabrasPosibles[crearRandom(0, palabrasPosibles.length - 1)];
}
;
function crearPalabraVisible(palabraOculta) {
    let palabraRetorno = "";
    for (let i = 0; i < palabraOculta.length; i++) {
        palabraRetorno = palabraRetorno.concat("_");
    }
    return palabraRetorno;
}
;
/**
 * TESTEADO
 * genera un numero aleatorio entre min y max estos incluidos
 * @param min valor minimo incluido el mismo
 * @param max valor maximo incluido el mismo
 */
function crearRandom(min, max) {
    return Math.floor(Math.random() * ((max - (min)) + 1) + (min));
}
;
function ponerImagen(numero) {
    let rutaimagen = "img/img" + numero + ".jpg";
    console.log(rutaimagen);
    if (divAhorcado != null)
        divAhorcado.style.backgroundImage = "Url(" + rutaimagen + ")";
}
;
function pedirLetra() {
    let pedirLetra = document.getElementById("pedirLetra");
    if (pedirLetra != null)
        pedirLetra.style.display = "block";
    if (divMensaje != null)
        mostrarMensaje("Introduce una letra");
}
;
function mostrarMensaje(mensaje) {
    let divMensaje = document.getElementById("mensaje");
    if (divMensaje != null) {
        divMensaje.textContent = mensaje;
    }
}
;
function recogerLetra() {
    if (divImputLetra != null) {
        return divImputLetra.value;
    }
    return null;
}
;
function ponerLetraEnPalabraVisible(letra) {
    let retoro = "";
    for (let i = 0; i < palabraOculta.length; i++) {
        if (palabraOculta.charAt(i) == letra)
            retoro = retoro.concat(letra);
        else
            retoro = retoro.concat(palabraVisible.charAt(i));
    }
    return String(retoro).valueOf();
}
;
function comprobarGanador() {
    if (palabraOculta == palabraVisible)
        return true;
    else
        return false;
}
;
function comprobarLetras(letra) {
    if (palabraOculta.indexOf(letra) != -1) {
        if (palabraVisible.indexOf(letra) == -1) {
            palabraVisible = ponerLetraEnPalabraVisible(letra);
            numeroAciertos++;
            if (divPalabraVisible != null)
                divPalabraVisible.textContent = palabraVisible;
            let numeroDeAciertos = document.getElementById("numeroAciertos");
            if (numeroDeAciertos != null)
                numeroDeAciertos.textContent = String(numeroAciertos);
            mostrarMensaje("");
        }
        else
            mostrarMensaje("esa letra ya la habias elegido");
    }
    else {
        mostrarMensaje("la letra elegida no esta");
        numeroFallos++;
        let numeroDeFallos = document.getElementById("numeroFallos");
        if (numeroDeFallos != null)
            numeroDeFallos.textContent = String(numeroFallos);
        ponerImagen(numeroFallos);
    }
}
;
function comprobarPerdedor() {
    if (numeroFallos >= 9)
        return true;
    else
        return false;
}
function analizarLetra() {
    var letra = recogerLetra();
    var divLetra = document.getElementById("letraElegida");
    if (divLetra != null) {
        divLetra.style.display = "block";
        divLetra.textContent = letra;
    }
    if (divImputLetra != null)
        divImputLetra.value = "";
    if (letra != null) {
        if (letras.indexOf(letra)) {
            comprobarLetras(letra);
        }
        else
            mostrarMensaje("eso no es una letra");
    }
    if (comprobarGanador())
        finalizarGanador();
    if (comprobarPerdedor())
        finalizarPerdedor();
}
;
function finalizarGanador() {
    let divPanelGanador = document.getElementById("panelGanador");
    if (divPanelGanador != null)
        divPanelGanador.style.display = "block";
    let divBotonReiniciar = document.getElementById("botonReiniciar");
    if (divBotonReiniciar != null)
        divBotonReiniciar.style.display = "block";
    if (divImputLetra != null)
        divImputLetra.style.display = "none";
}
//TODO y boton para reiniciar
function finalizarPerdedor() {
    let divPanelPerdedor = document.getElementById("panelPerdedor");
    if (divPanelPerdedor != null)
        divPanelPerdedor.style.display = "block";
    let divBotonReiniciar = document.getElementById("botonReiniciar");
    if (divBotonReiniciar != null)
        divBotonReiniciar.style.display = "block";
    if (divImputLetra != null)
        divImputLetra.style.display = "none";
}
//prueba crearPalabraOculta
var resultadoTest = true;
var cantidadDeTests = 50;
for (let i = 0; i < cantidadDeTests; i++) {
    if (palabrasPosibles.indexOf(crearPalabraOculta(palabrasPosibles)) == -1)
        resultadoTest = false;
}
console.log(resultadoTest);
//codigo
if (divPalabraVisible != null)
    divPalabraVisible.textContent = palabraVisible;
if (divImputLetra != null)
    divImputLetra.addEventListener("keyup", analizarLetra, false);
//# sourceMappingURL=index.js.map