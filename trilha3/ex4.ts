// Exercício 4: Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.


class Animal {
    protected energia: number;

    constructor(energia: number) {
        this.energia = energia;
    }

    comer() {
        console.log("Come");
        
    }

    aumentarEnergia(valor: number) {
        this.energia + valor;
    }

    diminuirEnergia(valor: number) {
        this.energia - valor;
    }
    statusEnergia() {
        console.log(this.energia);
    }
}

class Leao extends Animal {
    constructor(energia: number) {
        super(energia);
    }
    comer() {
        console.log("Leao: Comcou a caça!");
        this.diminuirEnergia(10);
        console.log(`Nivel energia ${this.energia}`);
        console.log("Esta Comendo");
        this.aumentarEnergia(26);
        console.log(`Nvel energia ${this.energia}`);
        console.log("---------------------------------");
        
    }
}

class Passaro extends Animal {
    comer() {
        this.aumentarEnergia(10);
        console.log(`Passaro: Comer, nivel energia ${this.energia}`);
    }
}


const leao = new Leao(100);
const passaro = new Passaro(100);

leao.comer();    
passaro.comer();