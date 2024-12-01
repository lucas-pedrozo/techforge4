// Exercício 1: Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().

class Veiculo{
    mover(){
        console.log(`O veiculo esta se movendo`);
    }
}

class Carro extends Veiculo{
    mover(){
        console.log(`O carro esta sendo dirigido`);
    }
}

class Bicicleta extends Veiculo{
    mover(){
        console.log(`A bicicleta esta pedalando`);
    }
}

const veiculo1 = new Veiculo;
veiculo1.mover();

const carro1 = new Carro;
carro1.mover();

const bike1 = new Bicicleta;
bike1.mover();