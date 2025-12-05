let array_jgt=[];
const broma_key_jgt='bromas';
const texto_jgt=document.getElementById('texto_jgt');
const btnAdd_jgt=document.getElementById('btnAdd_jgt');
const lista_jgt=document.getElementById('lista_jgt');
const ul_jgt = document.createElement("ul");
const url_jgt='https://api.chucknorris.io/jokes/random';
const cita_jgt=document.getElementById('cita_jgt');
const color_jgt=document.getElementById('color_jgt');
const btnColor_jgt=document.getElementById('btnColor_jgt');

function anadir_jgt(){
    let valor_jgt=texto_jgt.value;
    let repetido_jgt=false;
    let vacio_jgt=false;
    array_jgt.forEach(joke_jgt=>{
        if(valor_jgt===joke_jgt){
            alert('Esa broma ya esta en la lista');
            repetido_jgt=true;
        }
    });
    if(valor_jgt.trim()===''){
        alert('El campo esta vacio');
        vacio_jgt=true;
    }
    if(!vacio_jgt && !repetido_jgt){
        alert('se ha añadido');
        array_jgt.push(valor_jgt);
        localStorage.setItem(broma_key_jgt,JSON.stringify(array_jgt));
        pintar_jgt();
    }
}

function pintar_jgt(){
    array_jgt.forEach(joke2_jgt => {
            let li_jgt = document.createElement("li"); 
            li_jgt.textContent = joke2_jgt;
            ul_jgt.appendChild(li_jgt);
        });
    lista_jgt.appendChild(ul_jgt);
}
btnAdd_jgt.addEventListener('click',anadir_jgt);

fetch(url_jgt)
    .then(response => response.json())
    .then(data => {
        pintarapi_jgt(data); 
    })
    .catch(error => console.error("Error cargando:", error));
    
function pintarapi_jgt(datos) {
    cita_jgt.innerHTML = '';
        cita_jgt.innerHTML +=`${datos.value}`;
}

btnColor_jgt.addEventListener('click',()=>{
    cita_jgt.style.color=color_jgt.value;
});

document.addEventListener('DOMContentLoaded', () => {
    const datosguardados_jgt=localStorage.getItem(broma_key_jgt);
    if (datosguardados_jgt) {
        array_jgt=JSON.parse(datosguardados_jgt);
    }
    pintar_jgt();
});
