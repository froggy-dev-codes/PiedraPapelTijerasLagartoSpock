// capturamos imagenes
let imagen = document.getElementsByClassName("imagenDesicion");

// capturamos contenedor final
let final = document.getElementById("final");

// capturamos la imagen de la maquina
let imagenMaquina = document.getElementById("imagenMaquina");

// reinicio
let reinicio = {
    src: imagenMaquina.src,
    alt: imagenMaquina.alt
}


// logica de la maquina
let valor, dato;

// capturamos espan de puntales
let cpu = document.getElementById("cpu");
let local = document.getElementById("local");


let contadorCPU = 0;
let contadorLOCAL = 0;

// eventos
imagen[0].addEventListener("click", () => {
    // tijeras
    final.src = imagen[0].src;
    final.alt = imagen[0].alt;

    valor = Math.trunc(Math.random() * 11) > 6;
    dato = Math.trunc(Math.random() * 2) > 0;
    if (valor) {

        if (dato) {
            imagenMaquina.src = imagen[3].src;
            imagenMaquina.alt = imagen[3].alt
        } else {
            imagenMaquina.src = imagen[4].src;
            imagenMaquina.alt = imagen[4].alt
        }
        contadorCPU++;
        cpu.textContent = `Maquina ➖ ${contadorCPU}`

    } else {
        if (!dato) {
            imagenMaquina.src = imagen[2].src;
            imagenMaquina.alt = imagen[2].alt
        } else {
            imagenMaquina.src = imagen[1].src;
            imagenMaquina.alt = imagen[1].alt
        }

        contadorLOCAL++;
        local.textContent = `Local ➖ ${contadorLOCAL}`
    }

    reiniciar();
})
// ---------------------------------
imagen[1].addEventListener("click", () => {
    // lagarto
    final.src = imagen[1].src;
    final.alt = imagen[1].alt;

    valor = Math.trunc(Math.random() * 11) > 6;
    dato = Math.trunc(Math.random() * 2) > 0;
    if (valor) {

        if (dato) {
            imagenMaquina.src = imagen[3].src;
            imagenMaquina.alt = imagen[3].alt
        } else {
            imagenMaquina.src = imagen[0].src;
            imagenMaquina.alt = imagen[0].alt
        }

        contadorCPU++;
        cpu.textContent = `Maquina ➖ ${contadorCPU}`

    } else {
        if (!dato) {
            imagenMaquina.src = imagen[4].src;
            imagenMaquina.alt = imagen[4].alt
        } else {
            imagenMaquina.src = imagen[3].src;
            imagenMaquina.alt = imagen[3].alt
        }

        contadorLOCAL++;
        local.textContent = `Local ➖ ${contadorLOCAL}`
    }

    reiniciar();
})
// ---------------------------------
imagen[2].addEventListener("click", () => {
    // papel
    final.src = imagen[2].src;
    final.alt = imagen[2].alt;

    valor = Math.trunc(Math.random() * 11) > 6;
    dato = Math.trunc(Math.random() * 2) > 0;
    if (valor) {
        if (dato) {
            imagenMaquina.src = imagen[0].src;
            imagenMaquina.alt = imagen[0].alt;
        } else {
            imagenMaquina.src = imagen[1].src;
            imagenMaquina.alt = imagen[1].alt;
        }

        contadorCPU++;
        cpu.textContent = `Maquina ➖ ${contadorCPU}`
    } else {
        if (!dato) {
            imagenMaquina.src = imagen[3].src;
            imagenMaquina.alt = imagen[3].alt;
        } else {
            imagenMaquina.src = imagen[4].src;
            imagenMaquina.alt = imagen[4].alt;
        }

        contadorLOCAL++;
        local.textContent = `Local ➖ ${contadorLOCAL}`
    }

    reiniciar();
})
// ---------------------------------
imagen[3].addEventListener("click", () => {
    // roca
    final.src = imagen[3].src;
    final.alt = imagen[3].alt;

    valor = Math.trunc(Math.random() * 11) > 6;
    dato = Math.trunc(Math.random() * 2) > 0;
    if (valor) {

        if (dato) {
            imagenMaquina.src = imagen[2].src;
            imagenMaquina.alt = imagen[2].alt
        } else {
            imagenMaquina.src = imagen[4].src;
            imagenMaquina.alt = imagen[4].alt
        }

        contadorCPU++;
        cpu.textContent = `Maquina ➖ ${contadorCPU}`

    } else {
        if (!dato) {
            imagenMaquina.src = imagen[0].src;
            imagenMaquina.alt = imagen[0].alt
        } else {
            imagenMaquina.src = imagen[1].src;
            imagenMaquina.alt = imagen[1].alt
        }

        contadorLOCAL++;
        local.textContent = `Local ➖ ${contadorLOCAL}`
    }

    reiniciar();
})
// ---------------------------------
imagen[4].addEventListener("click", () => {
    // spock
    final.src = imagen[4].src;
    final.alt = imagen[4].alt;

    valor = Math.trunc(Math.random() * 11) > 6;
    dato = Math.trunc(Math.random() * 2) > 0;
    if (valor) {

        if (dato) {
            imagenMaquina.src = imagen[2].src;
            imagenMaquina.alt = imagen[2].alt
        } else {
            imagenMaquina.src = imagen[1].src;
            imagenMaquina.alt = imagen[1].alt
        }

        contadorCPU++;
        cpu.textContent = `Maquina ➖ ${contadorCPU}`

    } else {
        if (!dato) {
            imagenMaquina.src = imagen[0].src;
            imagenMaquina.alt = imagen[0].alt
        } else {
            imagenMaquina.src = imagen[3].src;
            imagenMaquina.alt = imagen[3].alt
        }

        contadorLOCAL++;
        local.textContent = `Local ➖ ${contadorLOCAL}`
    }

    reiniciar();
})
// ---------------------------------


// reinicio
function reiniciar() {
    setTimeout(() => {
        final.src = reinicio.src;
        final.alt = reinicio.alt;

        imagenMaquina.src = reinicio.src;
        imagenMaquina.alt = reinicio.alt;
    }, 2500);
}
