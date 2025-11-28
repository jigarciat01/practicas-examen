
const btnCalcularPrecio = document.getElementById('calcular');
btnCalcularPrecio.addEventListener('click', calcularPrecio);
function calcularPrecio() {
    const precio = document.getElementById('precio').value;
    const tipo = document.getElementById('tipoCliente').value.toLowerCase();

    if (precio === "") {
        alert("Falta el precio");
        return;
    }
    if(tipo.trim()===""){
        alert("falat el tipo de cliente");
        return;
    }

    if (isNaN(precio)) {
        alert("El precio debe ser un número");
        return;
    }

    let precioFinal = 0;
    
    switch(tipo) {
        case "vip":
            precioFinal = precio * 0.80;
            break;
        case "nuevo":
            precioFinal = precio * 0.95;
            break;
        case "normal":
            precioFinal = precio;
            break;
        default:
            alert("Tipo de cliente no válido (Use: VIP, Normal, Nuevo)");
            return;
    }

    alert(`Precio final para ${tipo}: ${precioFinal}€`);
}