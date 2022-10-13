const numerosPares = [2, 4, 6, 8];
const numerosImpares = [1, 3, 5, 7];

const todosNumeros = [...numerosPares,...numerosImpares];
console.log(todosNumeros);

const [num1, num2] = [1, 2];
console.log(num1, num2);


const [num3, num4, ...outrosNumeros] = [3, 4, 5, 6];
console.log(num3, num4, outrosNumeros);

//valores padrão, bom 
const [nome1 = "Juh"] = [];

//Com objetos

const pessoa = {
    nome: "Bruna",
    idade: 30
}

const pessoaComTelefone = {...pessoa, telefone: 46564646545};

console.log(pessoa, pessoaComTelefone);

const {nome, idade, telefone} = pessoaComTelefone;

console.log(nome, idade, telefone);

//Com funções

function imprimeInformacoes({nome, idade}) {
    console.log("Imprimindo dados com destructuring: ",nome, idade);
}

imprimeInformacoes(pessoaComTelefone);
