// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee: Pessoa = {} as Pessoa;
employee.code = 10;
employee.name = "John";

interface Pessoa {
    name: string,
    code: number
};

const pessoaCadastro: Pessoa = {
    name: "John",
    code: 10,
};

console.log(pessoaCadastro.name, pessoaCadastro.code);