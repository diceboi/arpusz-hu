import nodemailer from "nodemailer";


export default async function ContactAPI(req, res) {
    const { fname, lname, email, message } = req.body;
    const user = process.env.user;
    const customFrom = "Szabó Árpád, Arpusz.hu <info@arpusz.hu>";

    const data = {
        fname,
        lname,
        email,
        message
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
            from: `${email}`,
            to: "szasz.szabolcs1995@gmail.com",
            replyTo: `${email}`,
            subject: `Kapcsolatfelvétel érkezett ${lname} ${fname} részéről`,
            html: `
                <h1>Szia Árpi! A kapcsolatfelvételi űrlapon írtak neked az alábbi adatokkal:</h1>
                <p>Vezetéknév: ${lname}</p>
                <p>Keresztnév: ${fname}</p>
                <p>E-mail cím: ${email}</p>
                <p>Üzenet: ${message}</p>
                <h3>Válaszolj neki, amint lehetőséged adódik!</h3>
            `,
        });

        const mail2 = await transporter.sendMail({
            from: customFrom,
            to: email,
            replyTo: "kapcsolat.arpusz@gmail.com",
            subject: "Köszönjuk, hogy felvetted velünk a kapcsolatot",
            html: `
                <h1>Kedves ${fname}!</h1>
                <h3>Örülök, hogy felvetted velünk a kapcsolatot, és érdeklődsz a púrhab szigetelés iránt. Igyekszünk minél hamarabb,a legjobb tudásunk szerint válaszolni neked!<h3/>
                <br>
                <h2>Az üzeneted a következő volt:</h2>
                <p>Vezetéknév: ${lname}</p>
                <p>Keresztnév: ${fname}</p>
                <p>E-mail cím: ${email}</p>
                <p>Üzenet: ${message}</p>
                <br>
                <p style="font-size: 10px;"><i>Ez egy automatikus üzenet, kérlek ne válaszolj rá. A lehető leghamarabb keresni fogunk. Ha mégis valami égetően fontos ügyben szeretnél minket felkeresni, az alábbi telefonszámok egyikén megteheted:</i></p>
                <p>+36 30 523 6866<br>+36 30 010 3001</p>
            `,
        });

        return res.status(200).json({ message: "siker" });

        }
            
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Nem tudtuk elküldeni az emailt."
            });
        }
    }