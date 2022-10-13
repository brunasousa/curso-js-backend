const salaJs = [5, 3, 9, 8];
const salaJava = [10, 3, 9, 8];
const salaJPython = [5, 10, 6, 8];

function mediaSala(notasSala) {
    const somaDasNotas = notasSala.reduce((acum, atual) => {
        return atual + acum }
        , 0);
    return somaDasNotas/notasSala.length;
}

console.log(`Nota da sala js: ${mediaSala(salaJs)}`);
console.log(`Nota da sala java: ${mediaSala(salaJava)}`);
console.log(`Nota da sala python: ${mediaSala(salaJPython)}`);