// Exercício 4: 4 - Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean). Crie uma classe Biblioteca que contenha um array de livros que implementem Livro. Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true. 

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[]; // Array para armazenar os livros

    constructor() {
        this.livros = []; // Inicializa o array de livros
    }

    // Método para adicionar livros à biblioteca
    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    // Método para buscar livros disponíveis
    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

// Exemplo de uso
const minhaBiblioteca = new Biblioteca();

// Adicionando livros
minhaBiblioteca.adicionarLivro({ titulo: "A espada do destino - The Witcher", autor: "Andrzej Sapkowski", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "Batismo de fogo - The Witcher", autor: "Andrzej Sapkowski", disponivel: false });

// Buscando livros disponíveis
const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);
