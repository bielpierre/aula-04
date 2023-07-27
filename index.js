
let ul = document.querySelector("#tabuada");
let numero = window.prompt("Digite um número para ver a tabuada");

let i = 1;
while(i<=10){
    let resultado = numero / i;
    console.log(resultado);
    let li = document.createElement("li");
    li.innerText =`${numero} / ${i} = ${resultado}`;
    ul.appendChild(li);
    i++;

}

function exibirNoHTML(numero, i, resultado){
    ul.innerHTML = "";
    let li = document.createElement("li");
    li.innerText =`${numero} * ${i} = ${resultado}`;
    ul.appendChild(li);

}