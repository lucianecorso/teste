let nomeUsuário = ""
let element = document.querySelector("#nome-usuario");

while (nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    element.textContent = aqui;
}else{
    elemento.textContent = nomeUsuário;
}

