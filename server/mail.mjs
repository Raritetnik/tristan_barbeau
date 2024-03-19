import nodemailer from 'nodemailer';

export default class Mail {
    #transporter = null;

    constructor() {
        this.#transporter = this.#getTransporter();
    }

    #getTransporter() {
        return nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 587,
            secure: false,
            service: 'sendgrid',
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }

    
    async sendContact(receive, message, name, phone = '', dispos = '', action) {
        try {
            const info = await this.#transporter.sendMail({
                from: 'tristan-barbeau@outlook.com',
                to: 'tristanbarbeau@gmail.com, clubcluisinebcbg@gmail.com',
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
                to: 'tristanbarbeau@gmail.com, clubcluisinebcbg@gmail.com',
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