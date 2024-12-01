// Exercício 5: Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.
var Agenda = /** @class */ (function () {
    function Agenda(compromissos) {
        this.compromissos = [];
        this.compromissos = compromissos;
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listarCompromissos = function () {
        return this.compromissos;
    };
    return Agenda;
}());
var agenda = new Agenda(["Compromisso 1", "Compromisso 2", "Compromisso 3"]);
console.log(agenda.listarCompromissos());
agenda.adicionarCompromisso("Compromisso 4");
console.log(agenda.listarCompromissos());
// DOCUMETACAO Array
// function doSomething(value: Array<string>) {
//     // ...
//   }
//   let myArray: string[] = ["hello", "world"];
//   // either of these work!
//   doSomething(myArray);
//   doSomething(new Array("hello", "world"));
