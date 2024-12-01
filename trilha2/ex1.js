// Exercício 1: Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.depositar = function (valorDeposito) {
        this.saldo = this.saldo + valorDeposito;
        return "Deposito realizado, valor atual: ".concat(this.saldo);
    };
    ContaBancaria.prototype.saque = function (valorSaque) {
        this.saldo = this.saldo - valorSaque;
        return "Saque realizado, valor atual: ".concat(this.saldo);
    };
    ContaBancaria.prototype.extrato = function () {
        return "Extrato: ".concat(this.saldo);
    };
    return ContaBancaria;
}());
var conta1 = new ContaBancaria("Leonardo", 5000);
var extrato = conta1.extrato();
console.log(extrato);
var deposito = conta1.depositar(1000);
console.log(deposito);
var saque = conta1.saque(2000);
console.log(saque);
