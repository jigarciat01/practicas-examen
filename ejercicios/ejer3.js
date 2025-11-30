// Enunciado: Genera 50 botones. Al hacer clic en cualquier botón, 
// debe borrarse el contenedor entero (el padre) de esos botones.

function generarBotones() {
    const contenedor = document.getElementById('contenedorBotones');
    
    // 1. Crear el Fragmento (La "caja fantasma" para optimizar)
    const fragmento = document.createDocumentFragment();

    for (let i = 1; i <= 50; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Botón ${i}`;
        btn.style.margin = "5px";
        
        // Añadir evento individual
        btn.addEventListener('click', function() {
             alert(`Soy el ${this.textContent}`);
        });

        // Añadir al fragmento (NO al DOM todavía)
        fragmento.appendChild(btn);
    }

    // 2. Volcar todo de golpe (Solo 1 repintado)
    contenedor.appendChild(fragmento);
    
    // 3. Añadir un botón especial para borrar al padre (Traversal)
    const btnBorrarPadre = document.createElement('button');
    btnBorrarPadre.textContent = "BORRAR TODO EL CONTENEDOR";
    btnBorrarPadre.style.backgroundColor = "red";
    
    btnBorrarPadre.addEventListener('click', function() {
        // Usamos parentNode para subir y borrar el contenedor
        // 'this' es el botón rojo, 'this.parentNode' es el div #contenedorBotones
        const padre = this.parentNode; 
        padre.remove(); // Adiós contenedor
    });

    contenedor.appendChild(btnBorrarPadre);
}