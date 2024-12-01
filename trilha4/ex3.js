// Exercício 3: Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string). Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja. Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined
var Loja = /** @class */ (function () {
    function Loja() {
        this.produtos = [];
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (produto) { return produto.codigo === codigo; });
    };
    return Loja;
}());
var minhaLoja = new Loja();
minhaLoja.adicionarProduto({ codigo: 1, nome: "Carro" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "nMoto" });
console.log(minhaLoja.buscarProdutoPorCodigo(1));
console.log(minhaLoja.buscarProdutoPorCodigo(2));
