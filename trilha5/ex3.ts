// Exercício 3: Gerenciador de Favoritos: Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[]. Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager. MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 

abstract class FavoriteManager {
    protected favorites: string[];

    constructor() {
        this.favorites = [];
    }

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item); 
        } else {
            console.log(`O filme "${item}" já está na lista de favoritos.`);
        }
    }

    getFavorites(): string[] {
        return this.favorites.sort(); 
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites.unshift(item);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("Inception");
moviesManager.addFavorite("The Matrix");
moviesManager.addFavorite("Inception");
console.log("Filmes favoritos:", moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("The Catcher in the Rye");
booksManager.addFavorite("1984");
booksManager.addFavorite("The Great Gatsby");
console.log("Livros favoritos:", booksManager.getFavorites());
