// Exercício 2: Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.

class Livro{
    private titulo: string;
    private autor: string;
    private paginas: number;
    private leitura?: boolean;


    constructor(titulo: string, autor: string, paginas: number, leitura?: boolean){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.leitura = leitura;
    }

    apresentar(){
        if(this.leitura == undefined){
            this.leitura = false;
        }
        console.log(`Nome: ${this.titulo}, autor: ${this.titulo}, paginas: ${this.paginas}, leitura: ${this.leitura}`);
    }

    lido(leitura: boolean){
        if(leitura == true){
            this.leitura = true;
            return console.log("Livro marcado como lido");
        } else if(leitura == false){
            this.leitura = false;
            return console.log("Livro marcado como nao lido")
        } else{
            return console.log("Erro ao gravar livro")
        }
    }

}

const livro1 = new Livro("The Witcher - Batismo de fogo", "Andrzej Sapkowski", 347);
livro1.apresentar();
livro1.lido(true)
livro1.apresentar();