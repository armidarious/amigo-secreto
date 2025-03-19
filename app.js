// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Codigo para presionar un Enter y ejecutar la funcion de agregarAmigo() a la Lista de amigos   
document.getElementById('amigo').addEventListener("keydown", function(event){
    if (event.key === "Enter") { 
        agregarAmigo();
    }});
    

function agregarAmigo() {
    let texto = document.getElementById('amigo').value;
    if (texto.trim() === ""){
        alert("Por favor, inserte un nombre.");      
    } else{
        amigos.push(texto);
        console.log(amigos);  
        document.getElementById('amigo').value = '';
        let listaNombres = document.createElement("li");
        listaNombres.textContent = texto;
        document.getElementById('listaAmigos').appendChild(listaNombres);          
    }
    return;
}

function sortearAmigo(){  
    if (amigos.length === 0){ // Checa que la lista no esté vacía
        alert("No has agregado amigos a tu lista");
    } else{
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        console.log(amigos[amigoSorteado]);
        resultado.innerHTML = `<li>El amigo secreto es: ${amigos[amigoSorteado]}</li>`;
        return; 
    } 
}