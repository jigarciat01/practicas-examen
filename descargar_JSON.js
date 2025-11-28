function descargarDatos() {
    // 1. Preparar datos
    const datosStr = JSON.stringify(lista);
    // 2. Crear Blob
    const blob = new Blob([datosStr], { type: "application/json" });
    // 3. Crear enlace temporal
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mis_datos.json";
    // 4. Clic y limpieza
    link.click();
    URL.revokeObjectURL(link.href);
}