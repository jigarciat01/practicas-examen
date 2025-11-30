const hora_key='hora_guardada';

const reloj = document.getElementById('reloj');
const btnDetenerReloj = document.getElementById('btnDetenerReloj');
const btnguardar=document.getElementById('guardarhora');
const btnimprimir=document.getElementById('imprimirhora');
const imprimir = document.getElementById('imprimir');
let myinterval = setInterval(mostrarHora, 1000);

function mostrarHora(){
    const ahora = new Date();
    ultimaHora = ahora.toLocaleTimeString();
    if(reloj){
        reloj.innerHTML = `Hora actual: ${ultimaHora}`;
    }
}

function toggleReloj() {
    if(myinterval) {
        // DETENER EL RELOJ
        clearInterval(myinterval);
        myinterval = null;
        btnDetenerReloj.value = 'Iniciar Reloj';
    } else {
        // INICIAR EL RELOJ
        mostrarHora();
        myinterval = setInterval(mostrarHora, 1000);
        btnDetenerReloj.value = 'Detener Reloj';
    }
}


function guardar(){
    const hora=ultimaHora ?? new Date().toLocaleTimeString();
    localStorage.setItem(hora_key, hora);
}

function imprimirhora(){
    const horaimp=localStorage.getItem(hora_key);
    imprimir.innerHTML=`Hora guardada: ${horaimp}`;
}

btnimprimir.addEventListener('click', imprimirhora);
btnguardar.addEventListener('click', guardar);
// Reloj - Botón (Pausar/Reanudar)
btnDetenerReloj.addEventListener('click', toggleReloj);
