function pintarMuchosElementos(lista) {
    const ul = document.getElementById('miLista');
    
    // 1. Creamos la "caja fantasma"
    const fragmento = document.createDocumentFragment();
    
    lista.forEach(texto => {
        const li = document.createElement('li');
        li.textContent = texto;
        // 2. Insertamos en la caja (no toca el DOM todavía)
        fragmento.appendChild(li);
    });
    
    // 3. Volcamos todo de una sola vez (Eficiente)
    ul.appendChild(fragmento);
}