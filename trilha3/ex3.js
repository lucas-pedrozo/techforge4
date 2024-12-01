// Exercício 3: Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        console.log("Pagamento Confirmado");
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(cartao) {
        var _this = _super.call(this) || this;
        _this.cartao = cartao;
        return _this;
    }
    PagamentoCartao.prototype.validacao = function () {
        var validaNumero = /^[0-9]{16}$/;
        return validaNumero.test(this.cartao);
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validacao()) {
            _super.prototype.processar.call(this);
        }
        else {
            console.log("Cartão inválido!");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(boleto) {
        var _this = _super.call(this) || this;
        _this.boleto = boleto;
        return _this;
    }
    PagamentoBoleto.prototype.processar = function () {
        this.boleto = "123456789";
        console.log("Boleto gerado: ".concat(this.boleto));
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamento(pagamento) {
    pagamento.forEach(function (pag) {
        pag.processar();
    });
}
var pagamentos = [
    new PagamentoCartao("111122223333"),
    new PagamentoBoleto("000000000"),
    new PagamentoCartao("1234567812345678"),
];
processarPagamento(pagamentos);
