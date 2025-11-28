const elemento = document.querySelector('.mi-clase');

// --- IR HACIA ARRIBA (PADRE) ---
// Útil para borrar una tarjeta entera cuando pulsas un botón dentro de ella
const padre = elemento.parentNode; 
// Ejemplo: padre.remove(); // Borra el contenedor

// --- IR HACIA ABAJO (HIJOS) ---
// ¡OJO! No uses firstChild (puede ser texto vacío). Usa estos:

// 1. Obtener solo las ETIQUETAS hijas (div, li, p...)
const hijosUtiles = elemento.children; 
// hijosUtiles[0] es el primer hijo real.

// 2. Obtener el primer elemento directo
const primerHijo = elemento.firstElementChild; 

// 3. Recorrer hijos
for (let hijo of elemento.children) {
    hijo.style.color = 'red'; // Cambiar algo a todos los hijos
}