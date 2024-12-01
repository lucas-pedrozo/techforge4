var valicadacao = /** @class */ (function () {
    function valicadacao() {
    }
    valicadacao.prototype.validateEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    valicadacao.prototype.validatePhone = function (phone) {
        var phoneRegex = /^\+?\d[\d -]{8,12}\d$/;
        return phoneRegex.test(phone);
    };
    return valicadacao;
}());
var EmailSender = /** @class */ (function () {
    function EmailSender(validator) {
        this.validator = validator;
    }
    EmailSender.prototype.sendEmail = function (email, subject, body) {
        if (!this.validator.validateEmail(email)) {
            console.log("Email inválido. Envio cancelado.");
            return;
        }
        console.log("Email enviado para ".concat(email, " com o assunto '").concat(subject, "' e o corpo:\n").concat(body));
    };
    return EmailSender;
}());
var validator = new valicadacao();
var emailSender = new EmailSender(validator);
var email = "lucas@hotmail.com";
var subject = "fskjdfhjksdhfjhiufhw";
var body = "sdjkfjksdfjweufwefuiwefkweiuhfbu";
emailSender.sendEmail(email, subject, body);
