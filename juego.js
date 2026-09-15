// ==========================================
// CONTROL GENERAL DE PANTALLAS
// ==========================================

function mostrarPantalla(id) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.add("oculto");
    });

    const pantallaMostrar = document.getElementById(id);

    if (pantallaMostrar) {
        pantallaMostrar.classList.remove("oculto");
    }
}


// ==========================================
// VARIABLES DE LAS MISIONES
// ==========================================

let puntosMision1 = 0;
let puntosMision2 = 0;
let puntosMision3 = 0;
let puntosMision4 = 0;


// ==========================================
// MISIÓN 1
// ==========================================

function mostrarMision1() {
    mostrarPantalla("mision1");
}


function iniciarMision1() {

    puntosMision1 = 0;

    mostrarPantalla("reto1");
}


function responderReto1(respuesta) {

    if (respuesta === 2) {

        puntosMision1 += 2;

        document.getElementById("mensaje1").innerHTML =
            "✅ ¡Correcto! Reciclar ayuda a reducir los residuos.";

        document.getElementById("siguiente1")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensaje1").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarReto2() {
    mostrarPantalla("reto2");
}


function responderReto2(respuesta) {

    if (respuesta === 1) {

        puntosMision1 += 2;

        document.getElementById("mensaje2").innerHTML =
            "✅ ¡Correcto! Muchas botellas de plástico pueden reciclarse.";

        document.getElementById("siguiente2")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensaje2").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarReto3() {
    mostrarPantalla("reto3");
}


function responderReto3(respuesta) {

    if (respuesta === 1) {

        puntosMision1 += 2;

        document.getElementById("mensaje3").innerHTML =
            "✅ ¡Correcto! Reducir los residuos ayuda a proteger el ambiente.";

        document.getElementById("siguiente3")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensaje3").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarReto4() {
    mostrarPantalla("reto4");
}


function responderReto4(respuesta) {

    if (respuesta === 1) {

        puntosMision1 += 2;

        document.getElementById("mensaje4").innerHTML =
            "✅ ¡Correcto! Reutilizar ayuda a producir menos residuos.";

        document.getElementById("siguiente4")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensaje4").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarReto5() {
    mostrarPantalla("reto5");
}


function responderReto5(respuesta) {

    if (respuesta === 1) {

        puntosMision1 += 2;

        document.getElementById("mensaje5").innerHTML =
            "✅ ¡Correcto! Reutilizar los objetos puede darles una nueva utilidad.";

        document.getElementById("finalizar1")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensaje5").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function finalizarMision1() {

    document.getElementById("puntosResultado1").innerHTML =
        "Puntos obtenidos: " + puntosMision1 + " / 10";

    mostrarPantalla("resultado1");
}


// ==========================================
// MISIÓN 2
// ==========================================

function mostrarMision2() {
    mostrarPantalla("mision2");
}


function iniciarMision2() {

    puntosMision2 = 0;

    mostrarPantalla("retoM2_1");
}


function responderM2Reto1(respuesta) {

    if (respuesta === 2) {

        puntosMision2 += 2;

        document.getElementById("mensajeM2_1").innerHTML =
            "✅ ¡Correcto! Cerrar el grifo evita desperdiciar agua.";

        document.getElementById("siguienteM2_1")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM2_1").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM2Reto2() {
    mostrarPantalla("retoM2_2");
}


function responderM2Reto2(respuesta) {

    if (respuesta === 3) {

        puntosMision2 += 2;

        document.getElementById("mensajeM2_2").innerHTML =
            "✅ ¡Correcto! Cerrar una llave que no se necesita evita desperdiciar agua.";

        document.getElementById("siguienteM2_2")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM2_2").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM2Reto3() {
    mostrarPantalla("retoM2_3");
}


function responderM2Reto3(respuesta) {

    if (respuesta === 1) {

        puntosMision2 += 2;

        document.getElementById("mensajeM2_3").innerHTML =
            "✅ ¡Correcto! Reparar las fugas ayuda a ahorrar agua.";

        document.getElementById("siguienteM2_3")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM2_3").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM2Reto4() {
    mostrarPantalla("retoM2_4");
}


function responderM2Reto4(respuesta) {

    if (respuesta === 1) {

        puntosMision2 += 2;

        document.getElementById("mensajeM2_4").innerHTML =
            "✅ ¡Correcto! El agua es necesaria para la vida.";

        document.getElementById("siguienteM2_4")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM2_4").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM2Reto5() {
    mostrarPantalla("retoM2_5");
}


function responderM2Reto5(respuesta) {

    if (respuesta === 1) {

        puntosMision2 += 2;

        document.getElementById("mensajeM2_5").innerHTML =
            "✅ ¡Correcto! Utilizar solamente el agua necesaria ayuda a cuidarla.";

        document.getElementById("finalizarM2")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM2_5").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function finalizarMision2() {

    document.getElementById("puntosResultado2").innerHTML =
        "Puntos obtenidos: " + puntosMision2 + " / 10";

    mostrarPantalla("resultado2");
}


// ==========================================
// MISIÓN 3
// ==========================================

function mostrarMision3() {
    mostrarPantalla("mision3");
}


function iniciarMision3() {

    puntosMision3 = 0;

    mostrarPantalla("retoM3_1");
}


function responderM3Reto1(respuesta) {

    if (respuesta === 2) {

        puntosMision3 += 2;

        document.getElementById("mensajeM3_1").innerHTML =
            "✅ ¡Correcto! Apagar las luces cuando no las necesitamos ayuda a ahorrar energía.";

        document.getElementById("siguienteM3_1")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM3_1").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM3Reto2() {
    mostrarPantalla("retoM3_2");
}


function responderM3Reto2(respuesta) {

    if (respuesta === 2) {

        puntosMision3 += 2;

        document.getElementById("mensajeM3_2").innerHTML =
            "✅ ¡Correcto! Apagar los aparatos que no utilizamos ayuda a ahorrar electricidad.";

        document.getElementById("siguienteM3_2")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM3_2").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM3Reto3() {
    mostrarPantalla("retoM3_3");
}


function responderM3Reto3(respuesta) {

    if (respuesta === 1) {

        puntosMision3 += 2;

        document.getElementById("mensajeM3_3").innerHTML =
            "✅ ¡Correcto! Aprovechar la luz natural permite reducir el uso de electricidad.";

        document.getElementById("siguienteM3_3")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM3_3").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM3Reto4() {
    mostrarPantalla("retoM3_4");
}


function responderM3Reto4(respuesta) {

    if (respuesta === 3) {

        puntosMision3 += 2;

        document.getElementById("mensajeM3_4").innerHTML =
            "✅ ¡Correcto! Desconectar los cargadores cuando no se necesitan es una buena práctica.";

        document.getElementById("siguienteM3_4")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM3_4").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function mostrarM3Reto5() {
    mostrarPantalla("retoM3_5");
}


function responderM3Reto5(respuesta) {

    if (respuesta === 1) {

        puntosMision3 += 2;

        document.getElementById("mensajeM3_5").innerHTML =
            "✅ ¡Correcto! Utilizar solamente la energía necesaria ayuda a cuidar el planeta.";

        document.getElementById("finalizarM3")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM3_5").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


function finalizarMision3() {

    document.getElementById("puntosResultado3").innerHTML =
        "Puntos obtenidos: " + puntosMision3 + " / 10";

    mostrarPantalla("resultado3");
}


// ==========================================
// MISIÓN 4
// ==========================================

function mostrarMision4() {
    mostrarPantalla("mision4");
}


function iniciarMision4() {

    puntosMision4 = 0;

    mostrarPantalla("retoM4_1");
}


// ==========================================
// RETO 1 MISIÓN 4
// ==========================================

function responderM4Reto1(respuesta) {

    if (respuesta === 1) {

        puntosMision4 += 4;

        document.getElementById("mensajeM4_1").innerHTML =
            "✅ ¡Correcto! Los árboles son importantes para los ecosistemas.";

        document.getElementById("siguienteM4_1")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM4_1").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


// ==========================================
// RETO 2 MISIÓN 4
// ==========================================

function mostrarM4Reto2() {
    mostrarPantalla("retoM4_2");
}


function responderM4Reto2(respuesta) {

    if (respuesta === 2) {

        puntosMision4 += 4;

        document.getElementById("mensajeM4_2").innerHTML =
            "✅ ¡Correcto! Cuidar los hábitats ayuda a proteger a los animales.";

        document.getElementById("siguienteM4_2")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM4_2").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


// ==========================================
// RETO 3 MISIÓN 4
// ==========================================

function mostrarM4Reto3() {
    mostrarPantalla("retoM4_3");
}


function responderM4Reto3(respuesta) {

    if (respuesta === 3) {

        puntosMision4 += 4;

        document.getElementById("mensajeM4_3").innerHTML =
            "✅ ¡Correcto! Proteger la naturaleza ayuda a conservar los ecosistemas.";

        document.getElementById("siguienteM4_3")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM4_3").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


// ==========================================
// RETO 4 MISIÓN 4
// ==========================================

function mostrarM4Reto4() {
    mostrarPantalla("retoM4_4");
}


function responderM4Reto4(respuesta) {

    if (respuesta === 2) {

        puntosMision4 += 4;

        document.getElementById("mensajeM4_4").innerHTML =
            "✅ ¡Correcto! Debemos cuidar los espacios naturales y no dejar residuos.";

        document.getElementById("siguienteM4_4")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM4_4").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


// ==========================================
// RETO 5 MISIÓN 4
// ==========================================

function mostrarM4Reto5() {
    mostrarPantalla("retoM4_5");
}


function responderM4Reto5(respuesta) {

    if (respuesta === 2) {

        puntosMision4 += 4;

        document.getElementById("mensajeM4_5").innerHTML =
            "✅ ¡Excelente! Un verdadero Guardián cuida el planeta y ayuda a otros a hacerlo.";

        document.getElementById("finalizarM4")
            .classList.remove("oculto");

    } else {

        document.getElementById("mensajeM4_5").innerHTML =
            "❌ Esa no es la respuesta. Intenta nuevamente.";
    }
}


// ==========================================
// RESULTADO FINAL
// ==========================================

function finalizarMision4() {

    let puntosTotales =
        puntosMision1 +
        puntosMision2 +
        puntosMision3 +
        puntosMision4;


    document.getElementById("puntosFinales").innerHTML =
        "Puntaje final: " + puntosTotales + " / 50";


    let recompensa = "";
    let mensaje = "";


    if (puntosTotales >= 45) {

        recompensa = "🏆 Guardián Experto de la Tierra";

        mensaje =
            "¡Excelente trabajo! Has demostrado un gran conocimiento " +
            "sobre el cuidado y protección de nuestro planeta.";

    }

    else if (puntosTotales >= 35) {

        recompensa = "🌎 Guardián de la Tierra";

        mensaje =
            "¡Muy bien! Has demostrado que puedes realizar acciones " +
            "responsables para cuidar nuestro planeta.";

    }

    else if (puntosTotales >= 25) {

        recompensa = "🌱 Aprendiz de Guardián";

        mensaje =
            "¡Buen trabajo! Has aprendido aspectos importantes " +
            "sobre el cuidado del planeta. Sigue practicando.";

    }

    else {

        recompensa = "🔎 Explorador del Planeta";

        mensaje =
            "Has comenzado tu aventura como Guardián de la Tierra. " +
            "Continúa aprendiendo y practicando acciones para cuidar el ambiente.";

    }


    document.getElementById("recompensaFinal").innerHTML =
        recompensa;


    document.getElementById("mensajeFinal").innerHTML =
        mensaje;


    mostrarPantalla("resultadoFinal");
}
