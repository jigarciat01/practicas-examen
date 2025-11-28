function cargarDesdeAPI() {
    const url = 'https://jsonplaceholder.typicode.com/users'; // Cambiar URL
    
    fetch(url)
        .then(response => response.json()) // 1. Convertir a JSON
        .then(data => {
            // 2. Aquí tienes los datos en 'data'
            pintarEnHTML(data); 
        })
        .catch(error => console.error("Error cargando:", error));
}

function pintarEnHTML(datos) {
    const contenedor = document.getElementById('resultado');
    contenedor.innerHTML = ''; // IMPORTANTE: Limpiar antes de pintar
    
    // Recorrer y crear HTML
    datos.forEach(item => {
        contenedor.innerHTML += `
            <div class="tarjeta">
                <h3>${item.name}</h3> <p>${item.email}</p>
            </div>
        `;
    });
}