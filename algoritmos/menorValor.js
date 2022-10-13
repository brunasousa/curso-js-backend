const livros = require('./listaLivros'); 

function menorValor (arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++ ) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }

    return maisBarato;
}

module.exports = menorValor;

// livros.forEach((atual, index) => {
//     if (atual.preco < livros[maisBarato].preco) {
//         maisBarato = index;
//     }
// });

// console.log(`O livro mais barato é ${livros[maisBarato].titulo} e o preço é ${livros[maisBarato].preco}`);