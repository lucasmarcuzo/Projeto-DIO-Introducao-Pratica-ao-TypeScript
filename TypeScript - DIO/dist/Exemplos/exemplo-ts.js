"use strict";
let button = document.getElementById('btn');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumero(numero1, numero2, devPrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + " " + resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase = 'O valor é:';
if (button) {
    button.addEventListener('click', function () {
        adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase);
    });
}
