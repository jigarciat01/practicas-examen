const CLAVE_DB = "mi_examen_db";

function guardarTodo() {
    // Convertimos el array de objetos a TEXTO
    localStorage.setItem(CLAVE_DB, JSON.stringify(lista));
}

function cargarTodo() {
    const datosTexto = localStorage.getItem(CLAVE_DB);
    if (datosTexto) {
        // Convertimos el TEXTO a Objetos JS
        lista = JSON.parse(datosTexto);
        console.log("Datos recuperados");
    } else {
        console.log("No hay datos guardados");
        lista = []; // Iniciamos vacío si no hay nada
    }
}