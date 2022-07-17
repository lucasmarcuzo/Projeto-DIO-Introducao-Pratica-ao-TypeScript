"use strict";
//any: É um tipo de dado que pode receber qualquer valor.
let valorAny;
valorAny = "Qualquer valor";
valorAny = 3;
valorAny = true;
let valorString = 'texto';
valorString = valorAny;
let valorString2 = 'textaoo';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString('ola ', ',como vai?');
