/* ==========================================
   NOMBRE DEL JUGADOR
========================================== */

let nombreJugador = "";


/* ==========================================
   PUNTUACIÓN
========================================== */

let puntosMision1 = 0;

let puntosMision2 = 0;

let puntosMision3 = 0;

let puntosMision4 = 0;


/* ==========================================
   CONTROL DE ERRORES
========================================== */

let erroresM1 = [];

let erroresM2 = [];

let erroresM3 = [];

let erroresM4 = [];


/* ==========================================
   NAVEGACIÓN
========================================== */

function mostrarPantalla(id) {

    const pantallas =
        document.querySelectorAll(".pantalla");


    pantallas.forEach(function(pantalla) {

        pantalla.classList.add("oculto");

    });


    const pantallaSeleccionada =
        document.getElementById(id);


    if (pantallaSeleccionada) {

        pantallaSeleccionada.classList.remove("oculto");
    }
}


/* ==========================================
   COMENZAR JUEGO
========================================== */

function comenzarJuego() {

    const campoNombre =
        document.getElementById("nombreJugador");


    const nombre =
        campoNombre.value.trim();


    if (nombre === "") {

        document.getElementById("mensajeNombre").innerHTML =
            "⚠️ Por favor, escribe tu nombre para comenzar.";

        campoNombre.focus();

        return;
    }


    nombreJugador = nombre;


    document.getElementById("mensajeNombre").innerHTML =
        "";


    mostrarMision1();
}


/* ==========================================
   MISIÓN 1
========================================== */

function mostrarMision1() {

    puntosMision1 = 0;

    erroresM1 = [];


    mostrarPantalla("mision1");
}


function iniciarReto1() {

    mostrarPantalla("reto1");
}


/* ==========================================
   MISIÓN 1 - RETO 1
========================================== */

function responderReto1(correcto) {

    if (correcto) {

        puntosMision1 += 2;


        document.getElementById("mensajeReto1").innerHTML =
            "✅ ¡Correcto! Separar los residuos ayuda a reciclar y cuidar el planeta.";


        document.getElementById("siguienteReto1")
            .classList.remove("oculto");


        bloquearPregunta("reto1");

    } else {

        aplicarError(
            1,
            erroresM1,
            "mensajeReto1"
        );
    }
}


/* ==========================================
   MISIÓN 1 - RETO 2
========================================== */

function mostrarReto2() {

    mostrarPantalla("reto2");
}


function responderReto2(correcto) {

    if (correcto) {

        puntosMision1 += 2;


        document.getElementById("mensajeReto2").innerHTML =
            "✅ ¡Correcto! Reutilizar permite aprovechar nuevamente los objetos.";


        document.getElementById("siguienteReto2")
            .classList.remove("oculto");


        bloquearPregunta("reto2");

    } else {

        aplicarError(
            2,
            erroresM1,
            "mensajeReto2"
        );
    }
}


/* ==========================================
   MISIÓN 1 - RETO 3
========================================== */

function mostrarReto3() {

    mostrarPantalla("reto3");
}


function responderReto3(correcto) {

    if (correcto) {

        puntosMision1 += 2;


        document.getElementById("mensajeReto3").innerHTML =
            "✅ ¡Correcto! El papel puede separarse para facilitar su reciclaje.";


        document.getElementById("siguienteReto3")
            .classList.remove("oculto");


        bloquearPregunta("reto3");

    } else {

        aplicarError(
            3,
            erroresM1,
            "mensajeReto3"
        );
    }
}


/* ==========================================
   MISIÓN 1 - RETO 4
========================================== */

function mostrarReto4() {

    mostrarPantalla("reto4");
}


function responderReto4(correcto) {

    if (correcto) {

        puntosMision1 += 2;


        document.getElementById("mensajeReto4").innerHTML =
            "✅ ¡Correcto! Reutilizar significa volver a utilizar un objeto.";


        document.getElementById("siguienteReto4")
            .classList.remove("oculto");


        bloquearPregunta("reto4");

    } else {

        aplicarError(
            4,
            erroresM1,
            "mensajeReto4"
        );
    }
}


/* ==========================================
   MISIÓN 1 - RETO 5
========================================== */

function mostrarReto5() {

    mostrarPantalla("reto5");
}


function responderReto5(correcto) {

    if (correcto) {

        puntosMision1 += 2;


        document.getElementById("mensajeReto5").innerHTML =
            "✅ ¡Correcto! Separar los residuos facilita su reciclaje y manejo.";


        document.getElementById("finalMision1")
            .classList.remove("oculto");


        bloquearPregunta("reto5");

    } else {

        aplicarError(
            5,
            erroresM1,
            "mensajeReto5"
        );
    }
}


/* ==========================================
   RESULTADO MISIÓN 1
========================================== */

function mostrarResultado1() {

    document.getElementById("puntosResultado1").innerHTML =
        "Puntos obtenidos: " +
        puntosMision1 +
        " / 10";


    mostrarPantalla("resultado1");
}


/* ==========================================
   MISIÓN 2
========================================== */

function mostrarMision2() {

    puntosMision2 = 0;

    erroresM2 = [];


    mostrarPantalla("mision2");
}


function iniciarMision2() {

    mostrarPantalla("retoM2_1");
}


/* ==========================================
   MISIÓN 2 - RETO 1
========================================== */

function responderM2Reto1(correcto) {

    if (correcto) {

        puntosMision2 += 2;


        document.getElementById("mensajeM2Reto1").innerHTML =
            "✅ ¡Correcto! Cerrar el grifo evita desperdiciar agua.";


        document.getElementById("siguienteM2Reto1")
            .classList.remove("oculto");


        bloquearPregunta("retoM2_1");

    } else {

        aplicarError(
            1,
            erroresM2,
            "mensajeM2Reto1"
        );
    }
}


/* ==========================================
   MISIÓN 2 - RETO 2
========================================== */

function mostrarM2Reto2() {

    mostrarPantalla("retoM2_2");
}


function responderM2Reto2(correcto) {

    if (correcto) {

        puntosMision2 += 2;


        document.getElementById("mensajeM2Reto2").innerHTML =
            "✅ ¡Correcto! Reparar las fugas ayuda a ahorrar agua.";


        document.getElementById("siguienteM2Reto2")
            .classList.remove("oculto");


        bloquearPregunta("retoM2_2");

    } else {

        aplicarError(
            2,
            erroresM2,
            "mensajeM2Reto2"
        );
    }
}


/* ==========================================
   MISIÓN 2 - RETO 3
========================================== */

function mostrarM2Reto3() {

    mostrarPantalla("retoM2_3");
}


function responderM2Reto3(correcto) {

    if (correcto) {

        puntosMision2 += 2;


        document.getElementById("mensajeM2Reto3").innerHTML =
            "✅ ¡Correcto! El agua es necesaria para los seres vivos.";


        document.getElementById("siguienteM2Reto3")
            .classList.remove("oculto");


        bloquearPregunta("retoM2_3");

    } else {

        aplicarError(
            3,
            erroresM2,
            "mensajeM2Reto3"
        );
    }
}


/* ==========================================
   MISIÓN 2 - RETO 4
========================================== */

function mostrarM2Reto4() {

    mostrarPantalla("retoM2_4");
}


function responderM2Reto4(correcto) {

    if (correcto) {

        puntosMision2 += 2;


        document.getElementById("mensajeM2Reto4").innerHTML =
            "✅ ¡Correcto! Informar sobre una fuga permite solucionarla.";


        document.getElementById("siguienteM2Reto4")
            .classList.remove("oculto");


        bloquearPregunta("retoM2_4");

    } else {

        aplicarError(
            4,
            erroresM2,
            "mensajeM2Reto4"
        );
    }
}


/* ==========================================
   MISIÓN 2 - RETO 5
========================================== */

function mostrarM2Reto5() {

    mostrarPantalla("retoM2_5");
}


function responderM2Reto5(correcto) {

    if (correcto) {

        puntosMision2 += 2;


        document.getElementById("mensajeM2Reto5").innerHTML =
            "✅ ¡Correcto! Usar el agua solamente cuando es necesaria ayuda a conservarla.";


        document.getElementById("finalMision2")
            .classList.remove("oculto");


        bloquearPregunta("retoM2_5");

    } else {

        aplicarError(
            5,
            erroresM2,
            "mensajeM2Reto5"
        );
    }
}


/* ==========================================
   RESULTADO MISIÓN 2
========================================== */

function mostrarResultado2() {

    document.getElementById("puntosResultado2").innerHTML =
        "Puntos obtenidos: " +
        puntosMision2 +
        " / 10";


    mostrarPantalla("resultado2");
}


/* ==========================================
   MISIÓN 3
========================================== */

function mostrarMision3() {

    puntosMision3 = 0;

    erroresM3 = [];


    mostrarPantalla("mision3");
}


function iniciarMision3() {

    mostrarPantalla("retoM3_1");
}


/* ==========================================
   MISIÓN 3 - RETO 1
========================================== */

function responderM3Reto1(correcto) {

    if (correcto) {

        puntosMision3 += 2;


        document.getElementById("mensajeM3Reto1").innerHTML =
            "✅ ¡Correcto! Apagar las luces que no necesitamos ayuda a ahorrar energía.";


        document.getElementById("siguienteM3Reto1")
            .classList.remove("oculto");


        bloquearPregunta("retoM3_1");

    } else {

        aplicarError(
            1,
            erroresM3,
            "mensajeM3Reto1"
        );
    }
}


/* ==========================================
   MISIÓN 3 - RETO 2
========================================== */

function mostrarM3Reto2() {

    mostrarPantalla("retoM3_2");
}


function responderM3Reto2(correcto) {

    if (correcto) {

        puntosMision3 += 2;


        document.getElementById("mensajeM3Reto2").innerHTML =
            "✅ ¡Correcto! Apagar los aparatos cuando no se utilizan ayuda a ahorrar electricidad.";


        document.getElementById("siguienteM3Reto2")
            .classList.remove("oculto");


        bloquearPregunta("retoM3_2");

    } else {

        aplicarError(
            2,
            erroresM3,
            "mensajeM3Reto2"
        );
    }
}


/* ==========================================
   MISIÓN 3 - RETO 3
========================================== */

function mostrarM3Reto3() {

    mostrarPantalla("retoM3_3");
}


function responderM3Reto3(correcto) {

    if (correcto) {

        puntosMision3 += 2;


        document.getElementById("mensajeM3Reto3").innerHTML =
            "✅ ¡Correcto! Aprovechar la luz natural reduce el uso de electricidad.";


        document.getElementById("siguienteM3Reto3")
            .classList.remove("oculto");


        bloquearPregunta("retoM3_3");

    } else {

        aplicarError(
            3,
            erroresM3,
            "mensajeM3Reto3"
        );
    }
}


/* ==========================================
   MISIÓN 3 - RETO 4
========================================== */

function mostrarM3Reto4() {

    mostrarPantalla("retoM3_4");
}


function responderM3Reto4(correcto) {

    if (correcto) {

        puntosMision3 += 2;


        document.getElementById("mensajeM3Reto4").innerHTML =
            "✅ ¡Correcto! Desconectar los cargadores cuando no son necesarios ayuda a evitar el consumo innecesario.";


        document.getElementById("siguienteM3Reto4")
            .classList.remove("oculto");


        bloquearPregunta("retoM3_4");

    } else {

        aplicarError(
            4,
            erroresM3,
            "mensajeM3Reto4"
        );
    }
}


/* ==========================================
   MISIÓN 3 - RETO 5
========================================== */

function mostrarM3Reto5() {

    mostrarPantalla("retoM3_5");
}


function responderM3Reto5(correcto) {

    if (correcto) {

        puntosMision3 += 2;


        document.getElementById("mensajeM3Reto5").innerHTML =
            "✅ ¡Correcto! Ahorrar energía permite utilizar los recursos de manera responsable.";


        document.getElementById("finalMision3")
            .classList.remove("oculto");


        bloquearPregunta("retoM3_5");

    } else {

        aplicarError(
            5,
            erroresM3,
            "mensajeM3Reto5"
        );
    }
}


/* ==========================================
   RESULTADO MISIÓN 3
========================================== */

function mostrarResultado3() {

    document.getElementById("puntosResultado3").innerHTML =
        "Puntos obtenidos: " +
        puntosMision3 +
        " / 10";


    mostrarPantalla("resultado3");
}


/* ==========================================
   MISIÓN 4
========================================== */

function mostrarMision4() {

    puntosMision4 = 0;

    erroresM4 = [];


    mostrarPantalla("mision4");
}


function iniciarMision4() {

    mostrarPantalla("retoM4_1");
}


/* ==========================================
   MISIÓN 4 - RETO 1
========================================== */

function responderM4Reto1(correcto) {

    if (correcto) {

        puntosMision4 += 4;


        document.getElementById("mensajeM4Reto1").innerHTML =
            "✅ ¡Correcto! Cuidar los árboles y las áreas verdes protege la naturaleza.";


        document.getElementById("siguienteM4Reto1")
            .classList.remove("oculto");


        bloquearPregunta("retoM4_1");

    } else {

        aplicarError(
            1,
            erroresM4,
            "mensajeM4Reto1"
        );
    }
}


/* ==========================================
   MISIÓN 4 - RETO 2
========================================== */

function mostrarM4Reto2() {

    mostrarPantalla("retoM4_2");
}


function responderM4Reto2(correcto) {

    if (correcto) {

        puntosMision4 += 4;


        document.getElementById("mensajeM4Reto2").innerHTML =
            "✅ ¡Correcto! Respetar las áreas naturales ayuda a conservarlas.";


        document.getElementById("siguienteM4Reto2")
            .classList.remove("oculto");


        bloquearPregunta("retoM4_2");

    } else {

        aplicarError(
            2,
            erroresM4,
            "mensajeM4Reto2"
        );
    }
}


/* ==========================================
   MISIÓN 4 - RETO 3
========================================== */

function mostrarM4Reto3() {

    mostrarPantalla("retoM4_3");
}


function responderM4Reto3(correcto) {

    if (correcto) {

        puntosMision4 += 4;


        document.getElementById("mensajeM4Reto3").innerHTML =
            "✅ ¡Correcto! Los animales forman parte importante de los ecosistemas.";


        document.getElementById("siguienteM4Reto3")
            .classList.remove("oculto");


        bloquearPregunta("retoM4_3");

    } else {

        aplicarError(
            3,
            erroresM4,
            "mensajeM4Reto3"
        );
    }
}


/* ==========================================
   MISIÓN 4 - RETO 4
========================================== */

function mostrarM4Reto4() {

    mostrarPantalla("retoM4_4");
}


function responderM4Reto4(correcto) {

    if (correcto) {

        puntosMision4 += 4;


        document.getElementById("mensajeM4Reto4").innerHTML =
            "✅ ¡Correcto! Cuidar los espacios naturales ayuda a proteger la biodiversidad.";


        document.getElementById("siguienteM4Reto4")
            .classList.remove("oculto");


        bloquearPregunta("retoM4_4");

    } else {

        aplicarError(
            4,
            erroresM4,
            "mensajeM4Reto4"
        );
    }
}


/* ==========================================
   MISIÓN 4 - RETO 5
========================================== */

function mostrarM4Reto5() {

    mostrarPantalla("retoM4_5");
}


function responderM4Reto5(correcto) {

    if (correcto) {

        puntosMision4 += 4;


        document.getElementById("mensajeM4Reto5").innerHTML =
            "✅ ¡Excelente! Esa es una actitud propia de un Guardián de la Tierra.";


        document.getElementById("finalJuego")
            .classList.remove("oculto");


        bloquearPregunta("retoM4_5");

    } else {

        aplicarError(
            5,
            erroresM4,
            "mensajeM4Reto5"
        );
    }
}


/* ==========================================
   FINAL DEL JUEGO
========================================== */

function finalizarJuego() {

    const total =
        puntosMision1 +
        puntosMision2 +
        puntosMision3 +
        puntosMision4;


    /* MOSTRAR NOMBRE */

    document.getElementById("nombreFinal").innerHTML =
        "🎉 ¡Felicidades, " +
        nombreJugador +
        "! 🎉";


    /* MOSTRAR PUNTAJE */

    document.getElementById("puntosFinales").innerHTML =
        "Puntaje final: " +
        total +
        " / 50";


    /* DETERMINAR RECOMPENSA */

    let recompensa = "";


    if (total >= 45) {

        recompensa =
            "🏆 Guardián Experto de la Tierra";

    } else if (total >= 35) {

        recompensa =
            "🌎 Guardián de la Tierra";

    } else if (total >= 25) {

        recompensa =
            "🌱 Aprendiz de Guardián";

    } else {

        recompensa =
            "🔎 Explorador del Planeta";
    }


    document.getElementById("recompensaFinal").innerHTML =
        recompensa;


    /* MOSTRAR RESULTADO */

    mostrarPantalla("resultadoFinal");


    /* LANZAR GLOBOS */

    lanzarGlobos();
}


/* ==========================================
   BLOQUEAR PREGUNTA
========================================== */

function bloquearPregunta(idReto) {

    const reto =
        document.getElementById(idReto);


    if (!reto) {

        return;
    }


    const botones =
        reto.querySelectorAll("button");


    botones.forEach(function(boton) {

        const funcion =
            boton.getAttribute("onclick");


        if (
            funcion &&
            funcion.includes("responder")
        ) {

            boton.disabled = true;
        }

    });
}


/* ==========================================
   CONTROL DE ERRORES
========================================== */

function aplicarError(
    numeroReto,
    listaErrores,
    idMensaje
) {

    /*
       Cada reto solamente recibe una penalización
       aunque el estudiante se equivoque varias veces.
    */


    if (!listaErrores.includes(numeroReto)) {

        listaErrores.push(numeroReto);


        if (listaErrores === erroresM1) {

            puntosMision1 -= 1;

        } else if (listaErrores === erroresM2) {

            puntosMision2 -= 1;

        } else if (listaErrores === erroresM3) {

            puntosMision3 -= 1;

        } else if (listaErrores === erroresM4) {

            puntosMision4 -= 1;
        }
    }


    document.getElementById(idMensaje).innerHTML =
        "❌ Esa no es la respuesta. Intenta nuevamente.";
}


/* ==========================================
   GLOBOS
========================================== */

function lanzarGlobos() {

    const contenedor =
        document.createElement("div");


    contenedor.className =
        "globos";


    document.body.appendChild(
        contenedor
    );


    const cantidadGlobos = 18;


    for (
        let i = 0;
        i < cantidadGlobos;
        i++
    ) {

        const globo =
            document.createElement("div");


        globo.className =
            "globo";


        /* POSICIÓN HORIZONTAL */

        globo.style.left =
            Math.random() * 100 + "%";


        /* TAMAÑO */

        const tamaño =
            35 + Math.random() * 25;


        globo.style.width =
            tamaño + "px";


        globo.style.height =
            tamaño * 1.2 + "px";


        /* VELOCIDAD */

        globo.style.animationDuration =
            (4 + Math.random() * 3) + "s";


        /* RETRASO */

        globo.style.animationDelay =
            (Math.random() * 1.5) + "s";


        contenedor.appendChild(
            globo
        );
    }


    /* ELIMINAR GLOBOS */

    setTimeout(function() {

        contenedor.remove();

    }, 8000);
}
