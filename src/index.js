require('dotenv').config();
const nodemailer = require('nodemailer');

const createTransport = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.USER_PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
    }
})

async function send() {
    const mail = await createTransport.sendMail({
        text: `Text`,
        from: `NodeMailer <contato@devnicolas.net>`,
        to: `nicolas@example.com, devnicolas@example.com`,
        subject: `E-mail Subject`,
        text: `Hello World 👋`,
        html: "<p>HTML Example👋</p>"
    })

    console.log(`[SUCCESS] Email successfully sent.`);
    console.log(mail)
}

send().catch(err => {
    console.log(`[ERROR] ${err}`)
})