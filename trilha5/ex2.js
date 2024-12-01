// Exercício 2: Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string). Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = {};
    }
    return Inventory;
}());
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarehouseInventory.prototype.addItem = function (item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
        console.log("Item \"".concat(item, "\" atualizado no estoque do armaz\u00E9m: ").concat(this.items[item], " unidades."));
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log("Item \"".concat(item, "\" removido do estoque do armaz\u00E9m."));
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado no estoque do armaz\u00E9m."));
        }
    };
    WarehouseInventory.prototype.getInventory = function () {
        return this.items;
    };
    return WarehouseInventory;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory(maxQuantity) {
        if (maxQuantity === void 0) { maxQuantity = 10; }
        var _this = _super.call(this) || this;
        _this.maxQuantity = maxQuantity;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        if (this.items[item]) {
            if (this.items[item] + quantity > this.maxQuantity) {
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar ".concat(quantity, " unidades de \"").concat(item, "\". Limite m\u00E1ximo (").concat(this.maxQuantity, ") excedido."));
            }
            else {
                this.items[item] += quantity;
                console.log("Item \"".concat(item, "\" atualizado no estoque da loja: ").concat(this.items[item], " unidades."));
            }
        }
        else {
            if (quantity > this.maxQuantity) {
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar \"".concat(item, "\". Quantidade inicial excede o limite m\u00E1ximo (").concat(this.maxQuantity, ")."));
            }
            else {
                this.items[item] = quantity;
                console.log("Item \"".concat(item, "\" adicionado ao estoque da loja: ").concat(this.items[item], " unidades."));
            }
        }
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log("Item \"".concat(item, "\" removido do estoque da loja."));
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado no estoque da loja."));
        }
    };
    StoreInventory.prototype.getInventory = function () {
        return this.items;
    };
    return StoreInventory;
}(Inventory));
var warehouse = new WarehouseInventory();
warehouse.addItem("Cadeira", 50);
warehouse.addItem("Mesa", 30);
warehouse.addItem("Cadeira", 20);
warehouse.removeItem("Mesa");
console.log("Inventário do armazém:", warehouse.getInventory());
var store = new StoreInventory(10);
store.addItem("Notebook", 5);
store.addItem("Notebook", 6);
store.addItem("Celular", 12);
store.removeItem("Notebook");
console.log("Inventário da loja:", store.getInventory());
