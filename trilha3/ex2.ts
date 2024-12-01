// Exercício 2: Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica{
    constructor(private raio: number){
        super();
    }
    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

class Quadrado extends FiguraGeometrica{
    constructor(private lados: number){
        super();
    }
    calcularArea(): number {
        return Math.pow(this.lados, 2)
    }
}

class Triangulo extends FiguraGeometrica{
    constructor(private base: number, private altura: number){
        super();
    }
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]) {
    figuras.forEach((figura, index) => {
      console.log(`Área da Figura ${index + 1}: ${figura.calcularArea().toFixed(2)}`);
    });
  }
  
  const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3),
  ];
  
  imprimirAreas(figuras);