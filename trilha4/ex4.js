// Exercício 4: 4 - Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean). Crie uma classe Biblioteca que contenha um array de livros que implementem Livro. Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true. 
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = []; // Inicializa o array de livros
    }
    // Método para adicionar livros à biblioteca
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    // Método para buscar livros disponíveis
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
// Exemplo de uso
var minhaBiblioteca = new Biblioteca();
// Adicionando livros
minhaBiblioteca.adicionarLivro({ titulo: "A espada do destino - The Witcher", autor: "Andrzej Sapkowski", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "Batismo de fogo - The Witcher", autor: "Andrzej Sapkowski", disponivel: false });
// Buscando livros disponíveis
var livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);
