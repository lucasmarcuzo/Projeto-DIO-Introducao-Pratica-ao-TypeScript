"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 1;
anyEstaDeVolta = 'Oi';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
//stringTest2 = unknownValor; //Erro gerado pois o tipo string não aceita o tipo unknown.
//unknown: O tipo unknown é um tipo de dados que não tem um tipo definido. (Não é muito utilizado)
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor; //Erro não é gerado pois é verificado se unknownValor é string.
}
//never: O tipo never é um tipo de código que nunca foi finalizado por alguma razão.
//throw: Lança um erro.
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Erro', 500);
