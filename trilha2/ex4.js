// Exercício 4: Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.
var Temperatura = /** @class */ (function () {
    function Temperatura(celcius) {
        this.celcius = celcius;
    }
    Temperatura.prototype.conversorFahrenheit = function () {
        this.fahrenheit = this.celcius * 1.8 + 32;
        return console.log("Temperatura em Celcius: ".concat(this.celcius, ", Temperatura em Farenheit: ").concat(this.fahrenheit));
    };
    Temperatura.prototype.conversorKelvin = function () {
        this.kelvin = this.celcius + 273.15;
        return console.log("Temperatura em Celcius: ".concat(this.celcius, ", Temperatura em Kelvin: ").concat(this.kelvin));
    };
    return Temperatura;
}());
var temperatura1 = new Temperatura(38);
// Ta quente hoje ta loko kkkkk
temperatura1.conversorFahrenheit();
temperatura1.conversorKelvin();
