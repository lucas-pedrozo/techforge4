class Email_notificacao {
    sendEmail(email: string, subject: string, message: string) {
        // Simulação de envio de email
        console.log(`Enviando email para ${email}:\nAssunto: ${subject}\nMensagem: ${message}`);
    }
}

class UserManager {
    users: { name: string; email: string }[];
    emailNotification: Email_notificacao;

    constructor(emailNotification: Email_notificacao) {
        this.users = [];
        this.emailNotification = emailNotification;
    }

    createUser(name: string, email: string) {
        const user = { name, email };
        this.users.push(user);
        this.emailNotification.sendEmail(email, "Bem-vindo!", `Olá ${name}, bem-vindo ao nosso sistema!`);
    }
}

const emailNotification = new Email_notificacao();
const userManager = new UserManager(emailNotification);
userManager.createUser("João", "joao@example.com");


// eu descobri um novo  jeito mais não sei se mais pratico do que o jeito ensinado na aula claidia
// eu estava pensado em inplementar esse codigo no meu projeto mais não seu se compença pois esta muito ensima da hora