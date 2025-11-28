// Enunciado: Trae los usuarios de https://jsonplaceholder.typicode.com/users 
// y pinta una lista <ul> donde cada <li> muestre el Nombre y el Email.

const btnCargarAPI=document.getElementById('cargarDatos');
btnCargarAPI.addEventListener('click',api);
function api(){
    const url='https://jsonplaceholder.typicode.com/users';
        fetch(url)
        .then(response => response.json()) 
        .then(data => {
            imprimir(data); 
        })

        function imprimir(datos) {
            const contenedor = document.getElementById('contenedor');
            let html = `
                <h2>Usuarios Cargados desde API</h2>
                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>`;

            datos.forEach(user => {
                html += `
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                    </tr>`;
            });

            html += `</table>`;
            contenedor.innerHTML = html;
        }
}