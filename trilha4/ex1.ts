// 1 - Produtos: Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número). Em seguida, crie uma classe ItemLoja que implemente essa interface. No construtor da classe, atribua valores às propriedades id, nome e preco.

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class Item implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {    
        this.id = id;
        this.nome = nome;
        this.preco = preco;    
    }
}

const produto1 = new Item(1, "iPhone 15 Pro Max", 10000);
console.log(`Produto ${produto1.nome}, valor R$ ${produto1.preco}`);	