// Ejercicio 5: Carrito de Compra (Arrays Avanzados + Reduce)
// Objetivo: Practicar push, filter y especialmente .reduce() para sumar precios (algo muy típico de examen).
// Enunciado: Tienes una lista de productos (botones). 
// Al pulsar uno, se añade al carrito. Debes mostrar el carrito y calcular el total automáticamente.

let carrito = [];

const listaUl = document.getElementById('lista');
const spanTotal = document.getElementById('total');

const btnCoca = document.getElementById('coca');
const btnMaria = document.getElementById('maria');
const btnFentanilo = document.getElementById('fentanilo');

btnCoca.addEventListener('click', () => {agregarProducto('Coca', 20);});

btnMaria.addEventListener('click', () => {agregarProducto('Maria', 5);});

btnFentanilo.addEventListener('click', () => {agregarProducto('Fentanilo', 12);});

function agregarProducto(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    pintar();
}

function pintar() {
    listaUl.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.precio}$`;
        listaUl.appendChild(li);
    });

    const total = carrito.reduce((acumulador, item) => acumulador + item.precio, 0);
    spanTotal.textContent = total;
}


