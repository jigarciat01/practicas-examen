function calcular() {
    // 1. Obtener valores y asegurar que son números
    const input1 = document.getElementById('num1');
    const valor1 = parseFloat(input1.value); // Usa parseFloat para decimales
    
    // Validación: ¿Es un número válido?
    if (isNaN(valor1)) {
        alert("Por favor escribe un número");
        return; // Detiene la función
    }

    // 2. Switch para operaciones (REQUISITO EXAMEN)
    const operacion = "sumar"; // Esto vendría de un <select>
    let resultado;

    switch(operacion) {
        case "sumar":
            resultado = valor1 + 10;
            break; // ¡No olvides el break!
        case "restar":
            resultado = valor1 - 10;
            break;
        default:
            alert("Operación no válida");
            return;
    }
}