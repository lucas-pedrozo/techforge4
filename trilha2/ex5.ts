// Exercício 5: Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.

class Agenda{
    private compromissos: string[] = [];
    
    constructor(compromissos: string[]){
        this.compromissos = compromissos;
    }

    addCompromisso(compromisso: string){
        this.compromissos.push(compromisso);
    }
    
    listCompromisso(){    
        return this.compromissos;    
    }
}

const agenda = new Agenda(["Estudar", "Trabalhar"]);
console.log(agenda.listCompromisso());  

agenda.addCompromisso("Ir pra Faculdade");
console.log(agenda.listCompromisso());  











// DOCUMETACAO Array

// function doSomething(value: Array<string>) {
//     // ...
//   }
   
//   let myArray: string[] = ["hello", "world"];
   
//   // either of these work!
//   doSomething(myArray);
//   doSomething(new Array("hello", "world"));