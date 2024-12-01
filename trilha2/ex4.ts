// Exercício 4: Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

class Temperatura {
    private celcius : number;
    private fahrenheit?: number;
    private kelvin?: number;

    constructor(celcius: number) {
        this.celcius = celcius;
    }

    conversorFahrenheit() {
        this.fahrenheit = this.celcius * 1.8 + 32;
        return console.log(`Temperatura em Celcius: ${this.celcius}, Temperatura em Farenheit: ${this.fahrenheit}`);
    }

    conversorKelvin() {
        this.kelvin = this.celcius + 273.15;
        return console.log(`Temperatura em Celcius: ${this.celcius}, Temperatura em Kelvin: ${this.kelvin}`);
    }

}

const temperatura1 = new Temperatura(38);
// Ta quente hoje ta loko kkkkk
temperatura1.conversorFahrenheit();
temperatura1.conversorKelvin();