// Exercício 2: Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, leitura) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.leitura = leitura;
    }
    Livro.prototype.apresentar = function () {
        if (this.leitura == undefined) {
            this.leitura = false;
        }
        console.log("Nome: ".concat(this.titulo, ", autor: ").concat(this.titulo, ", paginas: ").concat(this.paginas, ", leitura: ").concat(this.leitura));
    };
    Livro.prototype.lido = function (leitura) {
        if (leitura == true) {
            this.leitura = true;
            return console.log("Livro marcado como lido");
        }
        else if (leitura == false) {
            this.leitura = false;
            return console.log("Livro marcado como nao lido");
        }
        else {
            return console.log("Erro ao gravar livro");
        }
    };
    return Livro;
}());
var livro1 = new Livro("The Witcher - Batismo de fogo", "Andrzej Sapkowski", 347);
livro1.apresentar();
livro1.lido(true);
livro1.apresentar();
