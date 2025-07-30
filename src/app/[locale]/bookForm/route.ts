import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import sendFormReceivedEmail from "@/utils/sendFormReceivedEmail";

function emailBody(body: any){
    return `
First name: ${body.name}<br>
Last name: ${body.last}<br>
Email: ${body.email}<br>
Улс/Country: ${body.country}<br>
Tour: ${body.tour}<br>
Number of participants/Оролцогчдийн тоо: ${body.number}<br>
Мессеж/Message: ${body.message}<br>
`
}

export async function POST(req: NextRequest){
    const body = await req.json();
    const transporter = nodemailer.createTransport({
        name: process.env.MAIL_FROM_NAME,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    } as any);
    const mailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: process.env.MAIL_TO_ADDRESS,
        subject: `Saibaitour Booking Form ашиглан хэрэглэгч холбогдсон байна.`,
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
    sendFormReceivedEmail(body);
    return NextResponse.json({});
}
