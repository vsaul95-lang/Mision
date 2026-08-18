let puntosMision1 = 0;


/* MOSTRAR MISIÓN 1 */

function mostrarMision1() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("mision1").style.display = "block";

}


/* INICIAR MISIÓN */

function iniciarMision1() {

    puntosMision1 = 0;

    document.getElementById("mision1").style.display = "none";

    document.getElementById("reto1").style.display = "block";

}


/* RETO 1 */

function responderReto(valor) {

    const mensaje =
        document.getElementById("mensaje");

    if (valor === 1) {

        puntosMision1 += 2;

        mensaje.innerHTML =
            "🎉 ¡Correcto!<br><br>" +
            "Separar correctamente los residuos " +
            "ayuda a cuidar nuestro planeta.";

        mensaje.style.color = "#2E7D32";

        document.getElementById("puntos").textContent =
            puntosMision1;

        document.getElementById("siguiente").style.display =
            "inline-block";

    } else {

        mensaje.innerHTML =
            "❌ No es correcto.<br><br>" +
            "Intenta nuevamente.";

        mensaje.style.color = "#C62828";

    }

}


/* RETO 2 */

function mostrarReto2() {

    document.getElementById("reto1").style.display = "none";

    document.getElementById("reto2").style.display = "block";

    document.getElementById("puntos2").textContent =
        puntosMision1;

}


function responderReto2(valor) {

    const mensaje =
        document.getElementById("mensaje2");

    if (valor === 1) {

        puntosMision1 += 2;

        mensaje.innerHTML =
            "🎉 ¡Muy bien!<br><br>" +
            "Utilizar productos reutilizables " +
            "ayuda a reducir los residuos.";

        mensaje.style.color = "#2E7D32";

        document.getElementById("siguiente2").style.display =
            "inline-block";

    } else {

        mensaje.innerHTML =
            "❌ No es correcto.<br><br>" +
            "Piensa en una acción que permita " +
            "producir menos residuos.";

        mensaje.style.color = "#C62828";

    }

    document.getElementById("puntos2").textContent =
        puntosMision1;

}


/* RETO 3 */

function mostrarReto3() {

    document.getElementById("reto2").style.display = "none";

    document.getElementById("reto3").style.display = "block";

    document.getElementById("puntos3").textContent =
        puntosMision1;

}


function responderReto3(valor) {

    const mensaje =
        document.getElementById("mensaje3");

    if (valor === 1) {

        puntosMision1 += 2;

        mensaje.innerHTML =
            "🎉 ¡Correcto!<br><br>" +
            "Los residuos deben colocarse " +
            "en recipientes adecuados.";

        mensaje.style.color = "#2E7D32";

        document.getElementById("siguiente3").style.display =
            "inline-block";

    } else {

        mensaje.innerHTML =
            "❌ No es correcto.<br><br>" +
            "Los residuos deben colocarse " +
            "en recipientes adecuados.";

        mensaje.style.color = "#C62828";

    }

    document.getElementById("puntos3").textContent =
        puntosMision1;

}


/* RETO 4 */

function mostrarReto4() {

    document.getElementById("reto3").style.display = "none";

    document.getElementById("reto4").style.display = "block";

    document.getElementById("puntos4").textContent =
        puntosMision1;

}


function responderReto4(valor) {

    const mensaje =
        document.getElementById("mensaje4");

    if (valor === 1) {

        puntosMision1 += 2;

        mensaje.innerHTML =
            "🎉 ¡Excelente!<br><br>" +
            "Reutilizar y reciclar son acciones " +
            "responsables con el ambiente.";

        mensaje.style.color = "#2E7D32";

        document.getElementById("siguiente4").style.display =
            "inline-block";

    } else {

        mensaje.innerHTML =
            "❌ No es correcto.<br><br>" +
            "Busca una forma responsable de " +
            "manejar los materiales.";

        mensaje.style.color = "#C62828";

    }

    document.getElementById("puntos4").textContent =
        puntosMision1;

}


/* RETO 5 */

function mostrarReto5() {

    document.getElementById("reto4").style.display = "none";

    document.getElementById("reto5").style.display = "block";

    document.getElementById("puntos5").textContent =
        puntosMision1;

}


function responderReto5(valor) {

    const mensaje =
        document.getElementById("mensaje5");

    if (valor === 1) {

        puntosMision1 += 2;

        mensaje.innerHTML =
            "🎉 ¡Excelente trabajo, Guardián!";

        mensaje.style.color = "#2E7D32";

        document.getElementById("finalizarMision").style.display =
            "inline-block";

    } else {

        mensaje.innerHTML =
            "❌ No es correcto.<br><br>" +
            "Recuerda que reducir, reutilizar " +
            "y reciclar ayuda a proteger el planeta.";

        mensaje.style.color = "#C62828";

    }

    document.getElementById("puntos5").textContent =
        puntosMision1;

}


/* FINALIZAR MISIÓN */

function finalizarMision1() {

    document.getElementById("reto5").style.display = "none";

    document.getElementById("resultado1").style.display = "block";

    document.getElementById("resultadoPuntos").textContent =
        puntosMision1;

}