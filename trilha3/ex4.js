// Exercício 4: Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
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
var Animal = /** @class */ (function () {
    function Animal(energia) {
        this.energia = energia;
    }
    Animal.prototype.comer = function () {
        console.log("Come");
    };
    Animal.prototype.aumentarEnergia = function (valor) {
        this.energia + valor;
    };
    Animal.prototype.diminuirEnergia = function (valor) {
        this.energia - valor;
    };
    Animal.prototype.statusEnergia = function () {
        console.log(this.energia);
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(energia) {
        return _super.call(this, energia) || this;
    }
    Leao.prototype.comer = function () {
        console.log("Leao: Comcou a caça!");
        this.diminuirEnergia(10);
        console.log("Nivel energia ".concat(this.energia));
        console.log("Esta Comendo");
        this.aumentarEnergia(26);
        console.log("Nvel energia ".concat(this.energia));
        console.log("---------------------------------");
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comer = function () {
        this.aumentarEnergia(10);
        console.log("Passaro: Comer, nivel energia ".concat(this.energia));
    };
    return Passaro;
}(Animal));
var leao = new Leao(100);
var passaro = new Passaro(100);
leao.comer();
passaro.comer();
