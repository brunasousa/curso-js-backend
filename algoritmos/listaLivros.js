class Livro {
    constructor (titulo, preco) {
        this.titulo = titulo;
        this.preco = preco;
    }
}

const precoLivros = [
    new Livro("JavaScript", 25), 
    new Livro("PHP", 15), 
    new Livro("Java", 30), 
    new Livro("Elixir", 50),
    new Livro("Go", 45),
    new Livro("Python", 20)
];

module.exports = precoLivros;