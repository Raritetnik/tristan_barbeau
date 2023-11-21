import nodemailer from 'nodemailer';

export default class Mail {
    #transporter = null;

    constructor() {
        this.#transporter = this.#getTransporter();
    }

    #getTransporter() {
        return nodemailer.createTransport({
            host: "smtp.example.com",
            port: 587,
            secure: false,
            service: 'outlook',
            auth: {
                user: "lesurvivaliste@outlook.com",
                pass: "T3qqU7HDT",
            },
        });
    }

    async sendContact(receive, message, name, phone = '', dispos = '') {
        try {
            const info = await this.#transporter.sendMail({
                from: 'lesurvivaliste@outlook.com',
                to: 'mkodarenko@gmail.com',
                subject: 'Message de contact',
                text: message,
                html:
                    `<p>Nom: ${name}</p>
                    <p>Courriel: ${receive}</p>
                    <p>Téléphone: ${phone}</p>
                    <p>Disponibilités:${dispos}</p>
                    <h2>Message:</h2>
                    <p>${message}</p>`,
            });
            return info.messageId;
        } catch (e) {
            return e;
        }
    }

    async sendEvaluation(receive, name, phone = '', adresse = '') {
        try {
            const info = await this.#transporter.sendMail({
                from: 'lesurvivaliste@outlook.com',
                to: 'mkodarenko@gmail.com',
                subject: 'Demande d\'évaluation de propriété',
                text: adresse,
                html:
                    `<p>Nom: ${name}</p>
                    <p>Courriel: ${receive}</p>
                    <p>Téléphone: ${phone}</p>
                    <p>Adresse: ${adresse}</p>`,
            });
            return info.messageId;
        } catch (e) {
            return e;
        }
    }
}