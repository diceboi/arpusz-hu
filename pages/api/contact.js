import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const { type, vastagsag, felulet, zipcode, email } = req.body;
    const user = process.env.user;

    const data = {
        type,
        vastagsag,
        felulet,
        zipcode,
        email
    };

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.pass,
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: email,
            replyTo: "szasz.szabolcs1995@gmail.com",
            subject: `Új kalkuláció történt ${email} részéről`,
            html: `
                <h1>Szia Árpi! Árkalkalkuláció történt az oldalon az alábbi adatokkal:</h1>
                <p>Szigetelés típusa: ${type}</p>
                <p>Szigetelés vastagsága: ${vastagsag} cm</p>
                <p>Szigetelni kívánt felület: ${felulet} m2</p>
                <p>Helyszín irányítószáma: ${zipcode}</p>
                <p>Ügyfél email címe: ${email}</p>
            `,
        });

        return res.status(200).json({ message: "siker" });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Nem tudtuk elküldeni az emailt."
        });
    }
}