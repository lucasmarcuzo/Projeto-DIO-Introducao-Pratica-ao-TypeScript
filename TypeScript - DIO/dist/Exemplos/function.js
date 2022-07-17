"use strict";
//: number = define o tipo de retorno do valor da função.
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
    //return numero1 + numero2.toString(); //Ocorre erro de compilação.
}
console.log(somarValoresNumericos(1, 3));
//: void = retorna nada.
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
//Callback: função que é passada como parâmetro para outra função.
function somarValoresNumericosCallback(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosCallback(1, 3, aoQuadrado));
console.log(somarValoresNumericosCallback(1, 3, dividirPorEleMesmo));
