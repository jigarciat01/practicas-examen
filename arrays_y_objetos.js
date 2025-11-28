// --- DATOS DE EJEMPLO ---
let lista = [
    { id: 1, nombre: 'Ana', edad: 20, activo: true },
    { id: 2, nombre: 'Beto', edad: 25, activo: false },
    { id: 3, nombre: 'Carla', edad: 22, activo: true }
];

// 1. ELIMINAR (usando .filter) - No uses splice, es más seguro filter
function eliminarPorId(idParaBorrar) {
    // Crea una lista NUEVA con todos MENOS el que quieres borrar
    lista = lista.filter(item => item.id !== idParaBorrar);
    console.log("Eliminado. Quedan:", lista.length);
}

// 2. BUSCAR/VALIDAR (usando .some o .find)
function existeNombre(nombreBusqueda) {
    // .some devuelve true/false (ideal para validaciones)
    // .toLowerCase() evita errores de mayúsculas
    return lista.some(item => item.nombre.toLowerCase() === nombreBusqueda.toLowerCase());
}

// 3. ORDENAR (usando .sort)
function ordenarPorNombre() {
    // localeCompare gestiona tildes y ñ correctamente
    lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

// 4. TRANSFORMAR (usando .map)
function obtenerSoloNombres() {
    // Devuelve un array simple: ["Ana", "Beto", "Carla"]
    return lista.map(item => item.nombre);
}