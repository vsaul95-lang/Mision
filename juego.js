
/* ==========================================
   MISIÓN PLANETA: GUARDIANES DE LA TIERRA
   Programación completa del juego
========================================== */


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
   SEGUIMIENTO DEL PROGRESO
========================================== */

let misionesCompletadas = [false, false, false, false];
let misionActual = 0;


/* ==========================================
   CONFIGURACIÓN DE LAS MISIONES
========================================== */

const configuracionMisiones = {
    1: {
        nombre: "Guardianes de los residuos",
        logro: "♻️ Reciclador responsable",
        puntosMaximos: 10,
        puntosCorrectos: 2
    },
    2: {
        nombre: "Guardianes del agua",
        logro: "💧 Guardián del agua",
        puntosMaximos: 10,
        puntosCorrectos: 2
    },
    3: {
        nombre: "Guardianes de la energía",
        logro: "⚡ Ahorrador de energía",
        puntosMaximos: 10,
        puntosCorrectos: 2
    },
    4: {
        nombre: "Guardianes de la naturaleza",
        logro: "🌱 Protector de la naturaleza",
        puntosMaximos: 20,
        puntosCorrectos: 4
    }
};


/* ==========================================
   FUNCIONES AUXILIARES
========================================== */

function obtenerElemento(id) {
    return document.getElementById(id);
}


function establecerTexto(id, texto) {
    const elemento = obtenerElemento(id);

    if (elemento) {
        elemento.textContent = texto;
    }
}


function mostrarElemento(id) {
    const elemento = obtenerElemento(id);

    if (elemento) {
        elemento.classList.remove("oculto");
    }
}


function ocultarElemento(id) {
    const elemento = obtenerElemento(id);

    if (elemento) {
        elemento.classList.add("oculto");
    }
}


function obtenerPuntuacionTotal() {
    return puntosMision1 +
        puntosMision2 +
        puntosMision3 +
        puntosMision4;
}


function obtenerPuntuacionMision(numero) {
    switch (numero) {
        case 1: return puntosMision1;
        case 2: return puntosMision2;
        case 3: return puntosMision3;
        case 4: return puntosMision4;
        default: return 0;
    }
}


function establecerPuntuacionMision(numero, valor) {
    switch (numero) {
        case 1:
            puntosMision1 = valor;
            break;
        case 2:
            puntosMision2 = valor;
            break;
        case 3:
            puntosMision3 = valor;
            break;
        case 4:
            puntosMision4 = valor;
            break;
    }
}


function obtenerErroresMision(numero) {
    switch (numero) {
        case 1: return erroresM1;
        case 2: return erroresM2;
        case 3: return erroresM3;
        case 4: return erroresM4;
        default: return [];
    }
}


/* ==========================================
   NAVEGACIÓN ENTRE PANTALLAS
========================================== */

function mostrarPantalla(id) {
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.add("oculto");
    });

    const pantallaSeleccionada = obtenerElemento(id);

    if (pantallaSeleccionada) {
        pantallaSeleccionada.classList.remove("oculto");
    }

    if (/^(mision1|reto[1-5]|resultado1)$/.test(id)) {
        misionActual = 1;
    } else if (/^(mision2|retoM2_[1-5]|resultado2)$/.test(id)) {
        misionActual = 2;
    } else if (/^(mision3|retoM3_[1-5]|resultado3)$/.test(id)) {
        misionActual = 3;
    } else if (/^(mision4|retoM4_[1-5]|resultadoFinal)$/.test(id)) {
        misionActual = 4;
    } else if (id === "inicio") {
        misionActual = 0;
    }

    actualizarTablero();
}


/* ==========================================
   COMENZAR JUEGO
========================================== */

function comenzarJuego() {
    const campoNombre = obtenerElemento("nombreJugador");

    if (!campoNombre) {
        console.error('No se encontró el campo con id="nombreJugador".');
        return;
    }

    const nombre = campoNombre.value.trim();

    if (nombre === "") {
        establecerTexto(
            "mensajeNombre",
            "⚠️ Por favor, escribe tu nombre para comenzar."
        );

        campoNombre.focus();
        return;
    }

    establecerTexto("mensajeNombre", "");

    /*
       IMPORTANTE:
       Primero se reinician los datos.
       Después se guarda el nombre.
       Así no se borra al iniciar la partida.
    */

    reiniciarDatosJuego();

    nombreJugador = nombre;

    actualizarTablero();
    mostrarMision1();
}


/* ==========================================
   ACTUALIZAR TABLERO DE PROGRESO
========================================== */

function actualizarTablero() {
    const tablero = obtenerElemento("tableroProgreso");

    if (!tablero) {
        return;
    }

    if (misionActual === 0) {
        tablero.classList.add("oculto");
        return;
    }

    tablero.classList.remove("oculto");

    const total = obtenerPuntuacionTotal();

    const cantidadCompletadas =
        misionesCompletadas.filter(Boolean).length;

    const porcentaje = Math.round(
        (cantidadCompletadas / 4) * 100
    );

    /*
       Nombre del jugador.
    */

    establecerTexto(
        "nombreTablero",
        nombreJugador || "Jugador"
    );

    /*
       Puntuación acumulada.
    */

    establecerTexto(
        "puntosTablero",
        total + " / 50 puntos"
    );

    /*
       Actualizar el contador principal de misiones.
       Este elemento puede ser el que muestra:
       "🏁 Misiones 0 de 4".
    */

    establecerTexto(
        "misionesTablero",
        "🏁 Misiones " + cantidadCompletadas + " de 4"
    );

    /*
       Actualizar el texto descriptivo del progreso.
    */

    establecerTexto(
        "textoProgreso",
        cantidadCompletadas +
        " de 4 misiones completadas (" +
        porcentaje +
        "%)"
    );

    /*
       Actualizar la barra visual.
    */

    const barra = obtenerElemento("barraProgresoRelleno");

    if (barra) {
        barra.style.width = porcentaje + "%";
        barra.setAttribute("aria-valuenow", porcentaje);
    }

    /*
       Actualizar el estado y el logro de cada misión.
    */

    for (let numero = 1; numero <= 4; numero++) {
        const completada = misionesCompletadas[numero - 1];

        const estado = obtenerElemento(
            "estadoMision" + numero
        );

        const logro = obtenerElemento(
            "logroMision" + numero
        );

        let textoEstado = "🔒 Pendiente";

        if (completada) {
            textoEstado = "✅ Completada";
        } else if (misionActual === numero) {
            textoEstado = "▶️ En curso";
        }

        if (estado) {
            estado.textContent = textoEstado;

            estado.classList.toggle(
                "mision-completada",
                completada
            );

            estado.classList.toggle(
                "mision-en-curso",
                !completada && misionActual === numero
            );
        }

        if (logro) {
            if (completada) {
                logro.textContent =
                    configuracionMisiones[numero].logro;

                logro.classList.add("logro-desbloqueado");
            } else {
                logro.textContent = "🔒 Logro pendiente";

                logro.classList.remove("logro-desbloqueado");
            }
        }
    }
}


/* ==========================================
   COMPLETAR UNA MISIÓN
========================================== */

function completarMision(numero) {
    if (numero < 1 || numero > 4) {
        return;
    }

    misionesCompletadas[numero - 1] = true;

    actualizarTablero();
}


/* ==========================================
   REINICIAR DATOS DE UNA MISIÓN
========================================== */

function reiniciarMision(numero) {
    establecerPuntuacionMision(numero, 0);

    const errores = obtenerErroresMision(numero);
    errores.length = 0;
}


/* ==========================================
   MISIÓN 1
========================================== */

function mostrarMision1() {
    reiniciarMision(1);
    mostrarPantalla("mision1");
}


function iniciarReto1() {
    mostrarPantalla("reto1");
}


/* ==========================================
   MISIÓN 1 - RETO 1
========================================== */

function responderReto1(correcto) {
    procesarRespuesta({
        numeroMision: 1,
        numeroReto: 1,
        correcto: correcto,
        idMensaje: "mensajeReto1",
        idSiguiente: "siguienteReto1",
        idPantallaReto: "reto1",
        mensajeCorrecto:
            "✅ ¡Correcto! Separar los residuos ayuda a reciclar y cuidar el planeta."
    });
}


/* ==========================================
   MISIÓN 1 - RETO 2
========================================== */

function mostrarReto2() {
    mostrarPantalla("reto2");
}


function responderReto2(correcto) {
    procesarRespuesta({
        numeroMision: 1,
        numeroReto: 2,
        correcto: correcto,
        idMensaje: "mensajeReto2",
        idSiguiente: "siguienteReto2",
        idPantallaReto: "reto2",
        mensajeCorrecto:
            "✅ ¡Correcto! Reutilizar permite aprovechar nuevamente los objetos."
    });
}


/* ==========================================
   MISIÓN 1 - RETO 3
========================================== */

function mostrarReto3() {
    mostrarPantalla("reto3");
}


function responderReto3(correcto) {
    procesarRespuesta({
        numeroMision: 1,
        numeroReto: 3,
        correcto: correcto,
        idMensaje: "mensajeReto3",
        idSiguiente: "siguienteReto3",
        idPantallaReto: "reto3",
        mensajeCorrecto:
            "✅ ¡Correcto! El papel puede separarse para facilitar su reciclaje."
    });
}


/* ==========================================
   MISIÓN 1 - RETO 4
========================================== */

function mostrarReto4() {
    mostrarPantalla("reto4");
}


function responderReto4(correcto) {
    procesarRespuesta({
        numeroMision: 1,
        numeroReto: 4,
        correcto: correcto,
        idMensaje: "mensajeReto4",
        idSiguiente: "siguienteReto4",
        idPantallaReto: "reto4",
        mensajeCorrecto:
            "✅ ¡Correcto! Reutilizar significa volver a utilizar un objeto."
    });
}


/* ==========================================
   MISIÓN 1 - RETO 5
========================================== */

function mostrarReto5() {
    mostrarPantalla("reto5");
}


function responderReto5(correcto) {
    procesarRespuesta({
        numeroMision: 1,
        numeroReto: 5,
        correcto: correcto,
        idMensaje: "mensajeReto5",
        idSiguiente: "finalMision1",
        idPantallaReto: "reto5",
        mensajeCorrecto:
            "✅ ¡Correcto! Separar los residuos facilita su reciclaje y manejo."
    });
}


/* ==========================================
   RESULTADO MISIÓN 1
========================================== */

function mostrarResultado1() {
    establecerTexto(
        "puntosResultado1",
        "Puntos obtenidos: " + puntosMision1 + " / 10"
    );

    completarMision(1);
    mostrarPantalla("resultado1");
}


/* ==========================================
   MISIÓN 2
========================================== */

function mostrarMision2() {
    reiniciarMision(2);
    mostrarPantalla("mision2");
}


function iniciarMision2() {
    mostrarPantalla("retoM2_1");
}


/* ==========================================
   MISIÓN 2 - RETO 1
========================================== */

function responderM2Reto1(correcto) {
    procesarRespuesta({
        numeroMision: 2,
        numeroReto: 1,
        correcto: correcto,
        idMensaje: "mensajeM2Reto1",
        idSiguiente: "siguienteM2Reto1",
        idPantallaReto: "retoM2_1",
        mensajeCorrecto:
            "✅ ¡Correcto! Cerrar el grifo evita desperdiciar agua."
    });
}


/* ==========================================
   MISIÓN 2 - RETO 2
========================================== */

function mostrarM2Reto2() {
    mostrarPantalla("retoM2_2");
}


function responderM2Reto2(correcto) {
    procesarRespuesta({
        numeroMision: 2,
        numeroReto: 2,
        correcto: correcto,
        idMensaje: "mensajeM2Reto2",
        idSiguiente: "siguienteM2Reto2",
        idPantallaReto: "retoM2_2",
        mensajeCorrecto:
            "✅ ¡Correcto! Reparar las fugas ayuda a ahorrar agua."
    });
}


/* ==========================================
   MISIÓN 2 - RETO 3
========================================== */

function mostrarM2Reto3() {
    mostrarPantalla("retoM2_3");
}


function responderM2Reto3(correcto) {
    procesarRespuesta({
        numeroMision: 2,
        numeroReto: 3,
        correcto: correcto,
        idMensaje: "mensajeM2Reto3",
        idSiguiente: "siguienteM2Reto3",
        idPantallaReto: "retoM2_3",
        mensajeCorrecto:
            "✅ ¡Correcto! El agua es necesaria para los seres vivos."
    });
}


/* ==========================================
   MISIÓN 2 - RETO 4
========================================== */

function mostrarM2Reto4() {
    mostrarPantalla("retoM2_4");
}


function responderM2Reto4(correcto) {
    procesarRespuesta({
        numeroMision: 2,
        numeroReto: 4,
        correcto: correcto,
        idMensaje: "mensajeM2Reto4",
        idSiguiente: "siguienteM2Reto4",
        idPantallaReto: "retoM2_4",
        mensajeCorrecto:
            "✅ ¡Correcto! Informar sobre una fuga permite solucionarla."
    });
}


/* ==========================================
   MISIÓN 2 - RETO 5
========================================== */

function mostrarM2Reto5() {
    mostrarPantalla("retoM2_5");
}


function responderM2Reto5(correcto) {
    procesarRespuesta({
        numeroMision: 2,
        numeroReto: 5,
        correcto: correcto,
        idMensaje: "mensajeM2Reto5",
        idSiguiente: "finalMision2",
        idPantallaReto: "retoM2_5",
        mensajeCorrecto:
            "✅ ¡Correcto! Usar el agua solamente cuando es necesaria ayuda a conservarla."
    });
}


/* ==========================================
   RESULTADO MISIÓN 2
========================================== */

function mostrarResultado2() {
    establecerTexto(
        "puntosResultado2",
        "Puntos obtenidos: " + puntosMision2 + " / 10"
    );

    completarMision(2);
    mostrarPantalla("resultado2");
}


/* ==========================================
   MISIÓN 3
========================================== */

function mostrarMision3() {
    reiniciarMision(3);
    mostrarPantalla("mision3");
}


function iniciarMision3() {
    mostrarPantalla("retoM3_1");
}


/* ==========================================
   MISIÓN 3 - RETO 1
========================================== */

function responderM3Reto1(correcto) {
    procesarRespuesta({
        numeroMision: 3,
        numeroReto: 1,
        correcto: correcto,
        idMensaje: "mensajeM3Reto1",
        idSiguiente: "siguienteM3Reto1",
        idPantallaReto: "retoM3_1",
        mensajeCorrecto:
            "✅ ¡Correcto! Apagar las luces que no necesitamos ayuda a ahorrar energía."
    });
}


/* ==========================================
   MISIÓN 3 - RETO 2
========================================== */

function mostrarM3Reto2() {
    mostrarPantalla("retoM3_2");
}


function responderM3Reto2(correcto) {
    procesarRespuesta({
        numeroMision: 3,
        numeroReto: 2,
        correcto: correcto,
        idMensaje: "mensajeM3Reto2",
        idSiguiente: "siguienteM3Reto2",
        idPantallaReto: "retoM3_2",
        mensajeCorrecto:
            "✅ ¡Correcto! Apagar los aparatos cuando no se utilizan ayuda a ahorrar electricidad."
    });
}


/* ==========================================
   MISIÓN 3 - RETO 3
========================================== */

function mostrarM3Reto3() {
    mostrarPantalla("retoM3_3");
}


function responderM3Reto3(correcto) {
    procesarRespuesta({
        numeroMision: 3,
        numeroReto: 3,
        correcto: correcto,
        idMensaje: "mensajeM3Reto3",
        idSiguiente: "siguienteM3Reto3",
        idPantallaReto: "retoM3_3",
        mensajeCorrecto:
            "✅ ¡Correcto! Aprovechar la luz natural reduce el uso de electricidad."
    });
}


/* ==========================================
   MISIÓN 3 - RETO 4
========================================== */

function mostrarM3Reto4() {
    mostrarPantalla("retoM3_4");
}


function responderM3Reto4(correcto) {
    procesarRespuesta({
        numeroMision: 3,
        numeroReto: 4,
        correcto: correcto,
        idMensaje: "mensajeM3Reto4",
        idSiguiente: "siguienteM3Reto4",
        idPantallaReto: "retoM3_4",
        mensajeCorrecto:
            "✅ ¡Correcto! Desconectar los cargadores cuando no son necesarios ayuda a evitar el consumo innecesario."
    });
}


/* ==========================================
   MISIÓN 3 - RETO 5
========================================== */

function mostrarM3Reto5() {
    mostrarPantalla("retoM3_5");
}


function responderM3Reto5(correcto) {
    procesarRespuesta({
        numeroMision: 3,
        numeroReto: 5,
        correcto: correcto,
        idMensaje: "mensajeM3Reto5",
        idSiguiente: "finalMision3",
        idPantallaReto: "retoM3_5",
        mensajeCorrecto:
            "✅ ¡Correcto! Ahorrar energía permite utilizar los recursos de manera responsable."
    });
}


/* ==========================================
   RESULTADO MISIÓN 3
========================================== */

function mostrarResultado3() {
    establecerTexto(
        "puntosResultado3",
        "Puntos obtenidos: " + puntosMision3 + " / 10"
    );

    completarMision(3);
    mostrarPantalla("resultado3");
}


/* ==========================================
   MISIÓN 4
========================================== */

function mostrarMision4() {
    reiniciarMision(4);
    mostrarPantalla("mision4");
}


function iniciarMision4() {
    mostrarPantalla("retoM4_1");
}


/* ==========================================
   MISIÓN 4 - RETO 1
========================================== */

function responderM4Reto1(correcto) {
    procesarRespuesta({
        numeroMision: 4,
        numeroReto: 1,
        correcto: correcto,
        idMensaje: "mensajeM4Reto1",
        idSiguiente: "siguienteM4Reto1",
        idPantallaReto: "retoM4_1",
        mensajeCorrecto:
            "✅ ¡Correcto! Cuidar los árboles y las áreas verdes protege la naturaleza."
    });
}


/* ==========================================
   MISIÓN 4 - RETO 2
========================================== */

function mostrarM4Reto2() {
    mostrarPantalla("retoM4_2");
}


function responderM4Reto2(correcto) {
    procesarRespuesta({
        numeroMision: 4,
        numeroReto: 2,
        correcto: correcto,
        idMensaje: "mensajeM4Reto2",
        idSiguiente: "siguienteM4Reto2",
        idPantallaReto: "retoM4_2",
        mensajeCorrecto:
            "✅ ¡Correcto! Respetar las áreas naturales ayuda a conservarlas."
    });
}


/* ==========================================
   MISIÓN 4 - RETO 3
========================================== */

function mostrarM4Reto3() {
    mostrarPantalla("retoM4_3");
}


function responderM4Reto3(correcto) {
    procesarRespuesta({
        numeroMision: 4,
        numeroReto: 3,
        correcto: correcto,
        idMensaje: "mensajeM4Reto3",
        idSiguiente: "siguienteM4Reto3",
        idPantallaReto: "retoM4_3",
        mensajeCorrecto:
            "✅ ¡Correcto! Los animales forman parte importante de los ecosistemas."
    });
}


/* ==========================================
   MISIÓN 4 - RETO 4
========================================== */

function mostrarM4Reto4() {
    mostrarPantalla("retoM4_4");
}


function responderM4Reto4(correcto) {
    procesarRespuesta({
        numeroMision: 4,
        numeroReto: 4,
        correcto: correcto,
        idMensaje: "mensajeM4Reto4",
        idSiguiente: "siguienteM4Reto4",
        idPantallaReto: "retoM4_4",
        mensajeCorrecto:
            "✅ ¡Correcto! Cuidar los espacios naturales ayuda a proteger la biodiversidad."
    });
}


/* ==========================================
   MISIÓN 4 - RETO 5
========================================== */

function mostrarM4Reto5() {
    mostrarPantalla("retoM4_5");
}


function responderM4Reto5(correcto) {
    procesarRespuesta({
        numeroMision: 4,
        numeroReto: 5,
        correcto: correcto,
        idMensaje: "mensajeM4Reto5",
        idSiguiente: "finalJuego",
        idPantallaReto: "retoM4_5",
        mensajeCorrecto:
            "✅ ¡Excelente! Esa es una actitud propia de un Guardián de la Tierra."
    });
}


/* ==========================================
   PROCESAR RESPUESTAS
========================================== */

function procesarRespuesta(datos) {
    const {
        numeroMision,
        numeroReto,
        correcto,
        idMensaje,
        idSiguiente,
        idPantallaReto,
        mensajeCorrecto
    } = datos;

    const reto = obtenerElemento(idPantallaReto);

    if (!reto) {
        console.error("No se encontró la pantalla del reto:", idPantallaReto);
        return;
    }

    const botonesRespuesta = reto.querySelectorAll("button.opcion");

    const yaRespondido = Array.from(botonesRespuesta).some(
        function(boton) {
            return boton.disabled;
        }
    );

    if (yaRespondido) {
        return;
    }

    if (correcto) {
        const configuracion = configuracionMisiones[numeroMision];

        establecerPuntuacionMision(
            numeroMision,
            obtenerPuntuacionMision(numeroMision) +
            configuracion.puntosCorrectos
        );

        establecerTexto(idMensaje, mensajeCorrecto);
        mostrarElemento(idSiguiente);
        bloquearPregunta(idPantallaReto);
    } else {
        aplicarError(
            numeroReto,
            obtenerErroresMision(numeroMision),
            idMensaje,
            numeroMision
        );
    }

    actualizarTablero();
}


/* ==========================================
   FINAL DEL JUEGO
========================================== */

function finalizarJuego() {
    completarMision(4);

    const total = obtenerPuntuacionTotal();

    establecerTexto(
        "nombreFinal",
        "🎉 ¡Felicidades, " + (nombreJugador || "Guardián") + "! 🎉"
    );

    establecerTexto(
        "puntosFinales",
        "Puntaje final: " + total + " / 50"
    );

    let recompensa = "";

    if (total >= 45) {
        recompensa = "🏆 Guardián Experto de la Tierra";
    } else if (total >= 35) {
        recompensa = "🌎 Guardián de la Tierra";
    } else if (total >= 25) {
        recompensa = "🌱 Aprendiz de Guardián";
    } else {
        recompensa = "🔎 Explorador del Planeta";
    }

    establecerTexto("recompensaFinal", recompensa);

    mostrarPantalla("resultadoFinal");
    actualizarTablero();
    lanzarGlobos();
}


/* ==========================================
   BLOQUEAR PREGUNTA
========================================== */

function bloquearPregunta(idReto) {
    const reto = obtenerElemento(idReto);

    if (!reto) {
        return;
    }

    reto.querySelectorAll("button.opcion").forEach(
        function(boton) {
            boton.disabled = true;
        }
    );
}


/* ==========================================
   CONTROL DE ERRORES Y PENALIZACIONES
========================================== */

function aplicarError(
    numeroReto,
    listaErrores,
    idMensaje,
    numeroMision
) {
    if (!listaErrores.includes(numeroReto)) {
        listaErrores.push(numeroReto);

        establecerPuntuacionMision(
            numeroMision,
            obtenerPuntuacionMision(numeroMision) - 1
        );
    }

    establecerTexto(
        idMensaje,
        "❌ Esa no es la respuesta. Intenta nuevamente."
    );

    actualizarTablero();
}


/* ==========================================
   VOLVER AL INICIO
========================================== */

function volverAlInicio() {
    reiniciarDatosJuego();

    const campoNombre = obtenerElemento("nombreJugador");

    if (campoNombre) {
        campoNombre.value = "";
    }

    establecerTexto("mensajeNombre", "");

    establecerTexto("puntosResultado1", "");
    establecerTexto("puntosResultado2", "");
    establecerTexto("puntosResultado3", "");
    establecerTexto("nombreFinal", "");
    establecerTexto("puntosFinales", "");
    establecerTexto("recompensaFinal", "");

    const ventanaInstrucciones =
        obtenerElemento("ventanaInstrucciones");

    if (
        ventanaInstrucciones &&
        typeof ventanaInstrucciones.close === "function" &&
        ventanaInstrucciones.open
    ) {
        ventanaInstrucciones.close();
    }

    document.querySelectorAll(".globos").forEach(
        function(globos) {
            globos.remove();
        }
    );

    mostrarPantalla("inicio");
    actualizarTablero();

    if (campoNombre) {
        campoNombre.focus();
    }
}


/* ==========================================
   REINICIAR TODOS LOS DATOS
========================================== */

function reiniciarDatosJuego() {
    /*
       Esta función reinicia los datos de la partida.
       No guarda el nombre: comenzarJuego() lo asigna
       después de ejecutar esta función.
    */

    nombreJugador = "";

    puntosMision1 = 0;
    puntosMision2 = 0;
    puntosMision3 = 0;
    puntosMision4 = 0;

    erroresM1 = [];
    erroresM2 = [];
    erroresM3 = [];
    erroresM4 = [];

    misionesCompletadas = [false, false, false, false];
    misionActual = 0;

    const idsMensajes = [
        "mensajeReto1",
        "mensajeReto2",
        "mensajeReto3",
        "mensajeReto4",
        "mensajeReto5",

        "mensajeM2Reto1",
        "mensajeM2Reto2",
        "mensajeM2Reto3",
        "mensajeM2Reto4",
        "mensajeM2Reto5",

        "mensajeM3Reto1",
        "mensajeM3Reto2",
        "mensajeM3Reto3",
        "mensajeM3Reto4",
        "mensajeM3Reto5",

        "mensajeM4Reto1",
        "mensajeM4Reto2",
        "mensajeM4Reto3",
        "mensajeM4Reto4",
        "mensajeM4Reto5"
    ];

    idsMensajes.forEach(function(id) {
        establecerTexto(id, "");
    });

    const idsBotonesSiguiente = [
        "siguienteReto1",
        "siguienteReto2",
        "siguienteReto3",
        "siguienteReto4",
        "finalMision1",

        "siguienteM2Reto1",
        "siguienteM2Reto2",
        "siguienteM2Reto3",
        "siguienteM2Reto4",
        "finalMision2",

        "siguienteM3Reto1",
        "siguienteM3Reto2",
        "siguienteM3Reto3",
        "siguienteM3Reto4",
        "finalMision3",

        "siguienteM4Reto1",
        "siguienteM4Reto2",
        "siguienteM4Reto3",
        "siguienteM4Reto4",
        "finalJuego"
    ];

    idsBotonesSiguiente.forEach(function(id) {
        ocultarElemento(id);
    });

    document.querySelectorAll(".pantalla button.opcion").forEach(
        function(boton) {
            boton.disabled = false;
        }
    );

    actualizarTablero();
}


/* ==========================================
   ANIMACIÓN DE GLOBOS
========================================== */

function lanzarGlobos() {
    document.querySelectorAll(".globos").forEach(
        function(globos) {
            globos.remove();
        }
    );

    const contenedor = document.createElement("div");
    contenedor.className = "globos";

    document.body.appendChild(contenedor);

    const cantidadGlobos = 18;

    for (let i = 0; i < cantidadGlobos; i++) {
        const globo = document.createElement("div");
        globo.className = "globo";

        globo.style.left = Math.random() * 100 + "%";

        const tamano = 35 + Math.random() * 25;

        globo.style.width = tamano + "px";
        globo.style.height = tamano * 1.2 + "px";

        globo.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        globo.style.animationDelay =
            (Math.random() * 1.5) + "s";

        contenedor.appendChild(globo);
    }

    setTimeout(function() {
        if (contenedor.isConnected) {
            contenedor.remove();
        }
    }, 8000);
}


/* ==========================================
   INICIALIZACIÓN
========================================== */

document.addEventListener("DOMContentLoaded", function() {
    actualizarTablero();
});
