const salaPython = ['melissa', 'helena', 'rodrigo', 'ana'];
const medias = [10, 7, 9, 6];
const listaDeNotasEAlunos = [salaPython, medias];
console.log(listaDeNotasEAlunos);

const exibeNomeNota = (nomeAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno);
        return listaDeNotasEAlunos[0][indice] + " a sua media é " + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não cadastrado."
    }
}

console.log(exibeNomeNota("maria"));

const listNumeros = [100, 200, 300, 400, 500, 600];
for (let i = 0; i < listNumeros.length; i++) {
    console.log(i, listNumeros[i]);
}

let soma = 0;
listNumeros.forEach( numero => {
    soma += numero;
})

console.log(`A média é ${soma/listNumeros.length}`);

const notasPontoExtra = [10, 9, 8, 7, 6];
const notasAtualizadas = notasPontoExtra.map(nota => (nota == 10) ? nota : ++nota);
console.log(notasAtualizadas);

const notasMaioresQue8 = notasPontoExtra.filter( nota => nota > 8);
console.log(notasMaioresQue8);

let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];
const nomesAtualizados = nomes.map( nome => nome.toUpperCase());
console.log(nomesAtualizados);