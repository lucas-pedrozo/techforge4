// Exercício 2: Inventário de Itens: Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript. Crie duas subclasses WarehouseInventory e StoreInventory. WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica. StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite. Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.

abstract class Inventory {
    protected items: Record<string, number>;

    constructor() {
        this.items = {};
    }

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
        console.log(`Item "${item}" atualizado no estoque do armazém: ${this.items[item]} unidades.`);
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Item "${item}" removido do estoque do armazém.`);
        } else {
            console.log(`Item "${item}" não encontrado no estoque do armazém.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private maxQuantity: number;

    constructor(maxQuantity: number = 10) {
        super();
        this.maxQuantity = maxQuantity;
    }

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            if (this.items[item] + quantity > this.maxQuantity) {
                console.log(
                    `Não é possível adicionar ${quantity} unidades de "${item}". Limite máximo (${this.maxQuantity}) excedido.`
                );
            } else {
                this.items[item] += quantity;
                console.log(`Item "${item}" atualizado no estoque da loja: ${this.items[item]} unidades.`);
            }
        } else {
            if (quantity > this.maxQuantity) {
                console.log(`Não é possível adicionar "${item}". Quantidade inicial excede o limite máximo (${this.maxQuantity}).`);
            } else {
                this.items[item] = quantity;
                console.log(`Item "${item}" adicionado ao estoque da loja: ${this.items[item]} unidades.`);
            }
        }
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Item "${item}" removido do estoque da loja.`);
        } else {
            console.log(`Item "${item}" não encontrado no estoque da loja.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Cadeira", 50);
warehouse.addItem("Mesa", 30);
warehouse.addItem("Cadeira", 20);
warehouse.removeItem("Mesa");
console.log("Inventário do armazém:", warehouse.getInventory());

const store = new StoreInventory(10);
store.addItem("Notebook", 5);
store.addItem("Notebook", 6);
store.addItem("Celular", 12);
store.removeItem("Notebook");
console.log("Inventário da loja:", store.getInventory());
