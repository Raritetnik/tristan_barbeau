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
                user: "tristan-barbeau@outlook.com",
                pass: "S1M_w2p^6fLD",
            },
        });
    }

    async sendContact(receive, message, name, phone = '', dispos = '', action) {
        try {
            const info = await this.#transporter.sendMail({
                from: 'tristan-barbeau@outlook.com',
                to: 'clubcluisinebcbg@gmail.com',
                subject: 'Contact Site Tristan Barbeau',
                text: message,
                html:
                    `<p>Nom: ${name}</p>
                    <p>Courriel: ${receive}</p>
                    <p>Téléphone: ${phone}</p>
                    <p>Disponibilités:${dispos}</p>
                    <h2>Message pour <b><i>${action}</i></b>:</h2>
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
                from: 'tristan-barbeau@outlook.com',
                to: 'clubcluisinebcbg@gmail.com',
                subject: 'Site Tristan Barbeau - Demande d\'évaluation de propriété',
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