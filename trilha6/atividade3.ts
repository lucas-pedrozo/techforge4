class valicadacao {
    constructor() {}

    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validatePhone(phone: string): boolean {
        const phoneRegex = /^\+?\d[\d -]{8,12}\d$/;
        return phoneRegex.test(phone);
    }
}

class EmailSender {
    validator: valicadacao;

    constructor(validator: valicadacao) {
        this.validator = validator;
    }

    sendEmail(email: string, subject: string, body: string): void {
        if (!this.validator.validateEmail(email)) {
            console.log("Email inválido. Envio cancelado.");
            return;
        }
        console.log(`Email enviado para ${email} com o assunto '${subject}' e o corpo:\n${body}`);
    }
}


const validator = new valicadacao();
const emailSender = new EmailSender(validator);

const email = "lucas@hotmail.com";
const subject = "fskjdfhjksdhfjhiufhw";
const body = "sdjkfjksdfjweufwefuiwefkweiuhfbu";

emailSender.sendEmail(email, subject, body);
