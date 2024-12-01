// Exercício 3: Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string). Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja. Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined

interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const minhaLoja = new Loja();

minhaLoja.adicionarProduto({ codigo: 1, nome: "Carro" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "nMoto" });

console.log(minhaLoja.buscarProdutoPorCodigo(1));
console.log(minhaLoja.buscarProdutoPorCodigo(2));
