// Exercício 2: Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string). Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".

interface Documento {
    titulo: string;
    conteudo: string;

    exibir(): string;

}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`
    }
}

const texto1 = new Texto("Título 1", "Conteúdo 1");
console.log(texto1.exibir());

