// Exercício 5: Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.


abstract class Funcionario {
    private nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;

    exibirSalarioComBonus(): void {
        console.log(`Funcionário: ${this.nome}, Salário com bônus: ${this.calcularBonus().toFixed(2)}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.salario * 1.10;
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.salario * 1.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach((funcionario) => {
        funcionario.exibirSalarioComBonus();
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Leonardo", 3460),
    new Operario("Sergio", 1460),
];

calcularSalarioComBonus(funcionarios);
