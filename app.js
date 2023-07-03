let fechaActual = new Date();  // Obtiene la fecha actual
let fechaFin = new Date('2023-07-07T00:00:00');  // Fecha de finalización: 7 de julio de 2023 a las 12 AM

let diferencia = fechaFin.getTime() - fechaActual.getTime();  // Calcula la diferencia en milisegundos

let segundos = Math.floor(diferencia / 1000);
let dias = Math.floor(segundos / (3600 * 24));
segundos %= 3600 * 24;
let horas = Math.floor(segundos / 3600);
segundos %= 3600;
let minutos = Math.floor(segundos / 60);
segundos %= 60;

function cargarDias() {
    let txtDias = dias < 10 ? `0${dias}` : dias;
    document.getElementById('dias').innerHTML = txtDias;
}

function cargarHoras() {
    let txtHoras = horas < 10 ? `0${horas}` : horas;
    document.getElementById('horas').innerHTML = txtHoras;
}

function cargarMinutos() {
    let txtMinutos = minutos < 10 ? `0${minutos}` : minutos;
    document.getElementById('minutos').innerHTML = txtMinutos;
}

function cargarSegundos() {
    let txtSegundos = segundos < 10 ? `0${segundos}` : segundos;
    document.getElementById('segundos').innerHTML = txtSegundos;
}

cargarDias();
cargarHoras();
cargarMinutos();
cargarSegundos();

setInterval(function () {
    segundos--;
    if (segundos < 0) {
        segundos = 59;
        minutos--;
        if (minutos < 0) {
            minutos = 59;
            horas--;
            if (horas < 0) {
                horas = 23;
                dias--;
                if (dias < 0) {
                    dias = 0;
                }
                cargarDias();
            }
            cargarHoras();
        }
        cargarMinutos();
    }
    cargarSegundos();
}, 1000);
