//Declaração de função

function imprimeTexto(texto) {
    console.log(texto);
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(9));

//Expressões de funções

const soma = function(num1, num2) { return num1 + num2 };
console.log(soma(3,4));

// Arrow function

const apresentarArrow = nome => `meu nome é ${nome}`;
const subtrai = (num1, num2) => num1-num2;

//Arrow function com + de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros pequenos";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(11,3))