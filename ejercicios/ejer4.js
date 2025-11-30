// Ejercicio 4: LocalStorage + Descargar Archivo (Blob)
// Objetivo: Guardar un array de objetos y permitir descargarlo. (Basado en tu archivo jsonsavedata.html).
// Enunciado: Tienes una lista de tareas. Guárdala en LocalStorage. Crea un botón que descargue esa lista en un archivo .json.
const btn = document.getElementById('descargar');

btn.addEventListener('click', descargar);

let tareas = [
    { id: 1, texto: "Estudiar JS", hecha: false },
    { id: 2, texto: "Aprobar examen", hecha: true }
];

function guardar(){
    localStorage.setItem('misTareas', JSON.stringify(tareas));
}

function descargar(){
    const tareas = localStorage.getItem('misTareas');
    const blob = new Blob([tareas], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mis_tareas.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

guardar();
