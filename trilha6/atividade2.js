var Email_notificacao = /** @class */ (function () {
    function Email_notificacao() {
    }
    Email_notificacao.prototype.sendEmail = function (email, subject, message) {
        // Simulação de envio de email
        console.log("Enviando email para ".concat(email, ":\nAssunto: ").concat(subject, "\nMensagem: ").concat(message));
    };
    return Email_notificacao;
}());
var UserManager = /** @class */ (function () {
    function UserManager(emailNotification) {
        this.users = [];
        this.emailNotification = emailNotification;
    }
    UserManager.prototype.createUser = function (name, email) {
        var user = { name: name, email: email };
        this.users.push(user);
        this.emailNotification.sendEmail(email, "Bem-vindo!", "Ol\u00E1 ".concat(name, ", bem-vindo ao nosso sistema!"));
    };
    return UserManager;
}());
var emailNotification = new Email_notificacao();
var userManager = new UserManager(emailNotification);
userManager.createUser("João", "joao@example.com");
// eu descobri um novo  jeito mais não sei se mais pratico do que o jeito ensinado na aula claidia
