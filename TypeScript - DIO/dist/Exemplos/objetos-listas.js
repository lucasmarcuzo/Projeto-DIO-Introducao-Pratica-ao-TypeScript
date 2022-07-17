"use strict";
const pessoa = {
    name: 'Diego',
    idade: 23,
    profissao: 'Desenvolvedor'
};
pessoa.idade = 23;
const andre = {
    nome: 'Andre',
    idade: 23,
    profissao: 'Pintor'
};
const paula = {
    nome: 'Paula',
    idade: 23,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.JogadoraDeFutebol
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática Discreta', 'POO', 'ES II']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática Discreta', 'POO', 'ES II']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ' + item);
    }
}
listar(monica.materias);
