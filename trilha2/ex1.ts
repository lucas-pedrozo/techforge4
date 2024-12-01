// Exercício 1: Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.

class ContaBancaria{
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valorDeposito: number): string{
        this.saldo = this.saldo + valorDeposito;
        return `Deposito realizado, valor atual: ${this.saldo}`
    }
    saque(valorSaque: number): string{
        this.saldo = this.saldo - valorSaque;
        return `Saque realizado, valor atual: ${this.saldo}`
    }
    extrato(){
        return `Extrato: ${this.saldo}`
    }
}

const conta1 = new ContaBancaria("Leonardo", 5000)

const extrato = conta1.extrato()
console.log(extrato)

const deposito = conta1.depositar(1000)
console.log(deposito)

const saque = conta1.saque(2000)
console.log(saque)