// Exercício 5: Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis: Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean). Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca. Implemente os seguintes métodos: filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado. buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico. obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.

interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: LivroBiblioteca[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor.toLowerCase().includes(autor.toLowerCase()));
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const gestaoBiblioteca = new BibliotecaGestao();
gestaoBiblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true });
gestaoBiblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });
gestaoBiblioteca.adicionarLivro({ titulo: "Dom Quixote", autor: "Miguel de Cervantes", genero: "Romance", disponivel: true });
gestaoBiblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Satira", disponivel: true });

console.log("Filtrar por gênero 'Romance':", gestaoBiblioteca.filtrarPorGenero("Romance"));
console.log("Buscar por autor 'George Orwell':", gestaoBiblioteca.buscarPorAutor("George Orwell"));
console.log("Livros disponíveis ordenados:", gestaoBiblioteca.obterLivrosDisponiveisOrdenados());

