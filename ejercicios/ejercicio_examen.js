// EJERCICIO: Agenda de Contactos (API + DOM + Storage)
// Objetivo: Crear una aplicación web para gestionar contactos. Al iniciar, si no hay datos guardados, debe traer contactos de "ejemplo" de una API.

// Requisitos:

// Carga Inicial (Lógica Híbrida):

// Al cargar la página, comprueba si hay contactos en localStorage.

// SI HAY: Cárgalos y muéstralos.

// NO HAY: Haz un fetch a https://jsonplaceholder.typicode.com/users.

// Toma solo los 3 primeros usuarios.

// Guárdalos en tu array local y en localStorage.

// Píntalos en el DOM.

// Añadir Contacto:

// Dos inputs: "Nombre" y "Email".

// Al pulsar "Añadir": Validar que no estén vacíos, agregar al array, guardar en Storage y actualizar el DOM con innerHTML.

// Renderizado (DOM):

// Los contactos deben aparecer dentro de un <div id="agenda">.

// Cada contacto debe ser una tarjeta (div) que muestre el Nombre en negrita y el Email debajo.

// Borrar Contacto:

// Cada tarjeta tiene un botón "Borrar".

// Al pulsarlo:

// Borrar el contacto del Array y actualizar localStorage.

// Borrar el elemento visual del DOM usando parentElement (o parentNode).

const url= 'https://jsonplaceholder.typicode.com/users';
const imprimir=document.getElementById('imprimir');
let usuarios=[];
const usuario_key='usuarios';
const lista = document.createElement("ul");
const nombre=document.getElementById('nombre');
const email=document.getElementById('email');
const btnanadir=document.getElementById('btnanadir');

function pintar(){
    lista.innerHTML='';
    usuarios.forEach(contacto => {
        let item = document.createElement("li");
        item.textContent = `${contacto.name}-${contacto.email}`;
        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.addEventListener('click', function() {
            let elementoPadre = this.parentElement;
            elementoPadre.remove();
            let posicion = usuarios.indexOf(contacto);
            if (posicion > -1) {
                usuarios.splice(posicion, 1);
            }
            localStorage.setItem(usuario_key, JSON.stringify(usuarios));
        });
        item.appendChild(boton);
        lista.appendChild(item);
    });  
        imprimir.appendChild(lista);
}

function anadir(){
    let nombretext=nombre.value;
    let emailtext=email.value;
    if(nombretext.trim()===''||emailtext.trim()===''){
        alert('faltan campos por rellenar');
    }else{
        let usuario={ name: nombretext, email: emailtext};
        usuarios.push(usuario);
        localStorage.setItem(usuario_key, JSON.stringify(usuarios));
        pintar();
    }
    nombre.value='';
    email.value='';
}

btnanadir.addEventListener('click', anadir);

document.addEventListener('DOMContentLoaded', () => {
    const guardados = localStorage.getItem(usuario_key);

    if (guardados) {
        usuarios = JSON.parse(guardados);
        pintar();
    } else {
        fetch(url)
    .then(response => response.json())
    .then(data => {
        agregarapi(data); 
    })
    
function agregarapi(datos) {
        for(let i=0; i<3; i++){
            let usuario={ name: datos[i].name, email: datos[i].email };
            usuarios.push(usuario);
            localStorage.setItem(usuario_key, JSON.stringify(usuarios));
        }
        pintar();
}
    }
});