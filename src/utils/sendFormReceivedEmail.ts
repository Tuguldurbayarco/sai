import nodemailer from "nodemailer";

function emailBody(body: any){
    return `
Dear ${body.name} ${body.last},<br>
Thank you for reaching out to Saibaitour in Mongolia! We appreciate you taking the time to contact us.<br>
Your message has been received, and we will get back to you as soon as possible.
<br><br>
Warm regards,
Saibaitour team
<br><br>
info@saibaitour.mn
<br>
www.saibaitour.mn
<br><br>
Please refrain from replying directly to this email, as it is sent from a no-reply address.
`
}

export default function sendFormReceivedEmail(body: any){
    const transporter = nodemailer.createTransport({
        name: process.env.MAIL_FROM_NAME,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    } as any);
    const mailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: body.email,
        subject: `Thank you for contacting Saibaitour!`,
        html: emailBody(body),
    };
    transporter.sendMail(mailOptions,(error, info) => {
        if (error){
            console.error(error);
        } else {
            console.log("Email Sent", info);
            return true;
        }
        transporter.close();
    });
}
