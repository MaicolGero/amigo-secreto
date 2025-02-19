// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres =[];

function agregarAmigo() {
    let amigo = (document.getElementById('amigo').value);
    if (amigo==="") {
        alert("Por favor, inserte un nombre.")
    }else{
        nombres.push(amigo);
    }
    console.log(nombres);
    limpiarCaja();
    actualizarLista();
}

function limpiarCaja() {
    document.getElementById('amigo').value='';  
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML='';
    for (let i = 0; i < nombres.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent =nombres[i];
        lista.appendChild(elementoLista);
        
    }
}
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("no hay nombres para sortear")
    }else{
        let numeroMaximo = nombres.length;
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo);
        let nombreElegido = nombres[numeroGenerado];
        document.getElementById('resultado').innerHTML=nombreElegido;

    }
    
}
    
