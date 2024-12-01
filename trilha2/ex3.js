// Exercício 3: Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).
var Produto = /** @class */ (function () {
    function Produto(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    Produto.prototype.calcularTotalEmEstoque = function () {
        return this.preco * this.quantidade;
    };
    return Produto;
}());
var produto1 = new Produto("iPhone 15 Pro Max", 5, 10000);
console.log(produto1.calcularTotalEmEstoque());
