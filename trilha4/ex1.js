// 1 - Produtos: Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número). Em seguida, crie uma classe ItemLoja que implemente essa interface. No construtor da classe, atribua valores às propriedades id, nome e preco.
var Item = /** @class */ (function () {
    function Item(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    return Item;
}());
var produto1 = new Item(1, "iPhone 15 Pro Max", 10000);
console.log("Produto ".concat(produto1.nome, " valor R$ ").concat(produto1.preco));
