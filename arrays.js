//Adicionando notas
const notas = [10, 6, 8];
notas.push(7);
console.log(notas);

//Removendo notas
const notasParaRemover = [10, 6, 8];
notas.pop();
console.log(notasParaRemover);

//divindo arrays

const listaPrecos = [0, 4, 5, 93, 52, 25 , 4];
//                                  Não inclusivo
const parte1 = listaPrecos.slice(0, listaPrecos.length/2);
const parte2 = listaPrecos.slice(listaPrecos.length/2);
console.log(parte1);
console.log(parte2);

//atualizar lista

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjore', 'Leo'];
listaDeChamada.splice(1,2, 'Rodrigo'); // Remove 2 elementos a partir da posição 1 e adiciona 1
console.log(listaDeChamada);
listaDeChamada.splice(2,0, 'Maria'); //Não remove e adiciona 1
console.log(listaDeChamada);

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
console.log(animaisDoAquario)
animaisDoAquario.splice(3,2,'🐟')
console.log(animaisDoAquario)

//Juntando dois arrays

const salaPython = ['melissa', 'helena', 'rodrigo'];
const salaJavascript = ['carla', 'ana', 'leo'];

const salasUnificadas = salaPython.concat(salaJavascript);
console.log(salasUnificadas);

//Lista de duas dimensões
const medias = [10, 7, 9, 6];
const listaDeNotasEAlunos = [salaPython, medias];
console.log(listaDeNotasEAlunos);