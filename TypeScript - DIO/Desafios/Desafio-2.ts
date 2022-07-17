// Como podemos melhorar o esse código usando TS? 

type Cadastro = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

enum Trabalho {
    Atriz,
    Padeiro
}

let pessoa1: Cadastro = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Cadastro = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Cadastro = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Cadastro = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}