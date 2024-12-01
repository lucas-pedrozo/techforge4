// Exercício 3: Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.

class Pagamento {
    processar() {
        console.log("Pagamento Confirmado");
    }
}

class PagamentoCartao extends Pagamento{
    private cartao: string;
    constructor(cartao: string) {
        super();
        this.cartao = cartao;
    }

    private validacao(): boolean {
        const validaNumero = /^[0-9]{16}$/;
        return validaNumero.test(this.cartao);
    }
    processar() {
        if (this.validacao()) {
            super.processar();
        } else {
            console.log("Cartão inválido!");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    private boleto: string;
    constructor(boleto: string) {
        super();
        this.boleto = boleto;
    }
    processar() {
        this.boleto = "123456789";
        console.log(`Boleto gerado: ${this.boleto}`);
    }
}


function processarPagamento(pagamento: Pagamento[]) {
    pagamento.forEach(pag => {
        pag.processar();
    })
}

const pagamentos: Pagamento[] = [
    new PagamentoCartao("111122223333"),
    new PagamentoBoleto("000000000"),
    new PagamentoCartao("1234567812345678"),
  ];
  
  processarPagamento(pagamentos);