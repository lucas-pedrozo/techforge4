// Exercício 3: Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).


class Produto {
    private nome: string;
    private quantidade: number;
    private preco: number;

    constructor(nome: string, quantidade: number, preco: number) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    calcularTotalEmEstoque() {
        return this.preco * this.quantidade;
    }
}

const produto1 = new Produto("iPhone 15 Pro Max", 5, 10000);
console.log(produto1.calcularTotalEmEstoque());