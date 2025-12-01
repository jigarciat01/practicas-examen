const tarea_key='lista tareas';
const url = 'https://jsonplaceholder.typicode.com/users'; 
const btnpintar = document.getElementById('btnpintar');
const contenedor = document.getElementById('resultado'); 
const tarea=document.getElementById('tarea');
const btntarea=document.getElementById('btntarea');
const listatareas=document.getElementById('listatareas');
const lista = document.createElement("ul");
let tareas=[];

fetch(url)
    .then(response => response.json())
    .then(data => {
        pintarEnHTML(data); 
    })
    .catch(error => console.error("Error cargando:", error));
    
function pintarEnHTML(datos) {
        
    contenedor.innerHTML = '';
        contenedor.innerHTML += `
            <h2>${datos[0].name}-${datos[0].email}</h2>
        `;
}

function agregarTarea() {
    let tareatext = tarea.value;
    tareas.push(tareatext);
    localStorage.setItem(tarea_key, JSON.stringify(tareas));
    tarea.value = '';
}

function pintartarea() {
    agregarTarea(); 
    lista.innerHTML = '';
    tareas.forEach((textoTarea, index) => {
        let item = document.createElement("li"); 
        item.textContent = textoTarea + " "; 
        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.id = "tarea-" + index; 

        boton.addEventListener('click', function() {
            let elementoPadre = this.parentElement;
            elementoPadre.remove();
            let posicion = tareas.indexOf(textoTarea);
            if (posicion > -1) {
                tareas.splice(posicion, 1);
            }
        });

        item.appendChild(boton);
        lista.appendChild(item);
    });
}

btntarea.addEventListener('click', pintartarea);

