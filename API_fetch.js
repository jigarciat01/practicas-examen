function cargarDesdeAPI() {
    const url = 'https://zenquotes.io/api/today'; 
    
    fetch(url)
        .then(response => response.json()) 
        .then(data => {
            pintarEnHTML(data); 
        })
}

function pintarEnHTML(datos) {
    const contenedor = document.getElementById('resultado');
    contenedor.innerHTML = ''; 
    
    datos.forEach(item => {
        contenedor.innerHTML += `
            <div class="tarjeta">
                <h2>"${item.q}"</h2> <p>-${item.a}</p>
            </div>
        `;
    });
}