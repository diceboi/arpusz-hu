import nodemailer from "nodemailer";


export default async function CalcAPI(req, res) {

    const { type, vastagsag, felulet, zipcode, email, bruttoar, nettoar, telefon } = req.body;
    const user = process.env.user;
    const customFrom = "Szabó Attila, Arpusz.hu <kapcsolat.arpusz@gmail.com>";

    const data = {
        type,
        vastagsag,
        felulet,
        zipcode,
        email,
        bruttoar,
        nettoar,
        telefon
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

        let firstMailSubject = `[HÍVD] Új árkalkuláció történt ${email} részéről`;

        if (!telefon) {
        firstMailSubject = `[ÍRJ] Új árkalkuláció történt ${email} részéről`;
        }
        
        const mail = await transporter.sendMail({
            from: "Arpusz.hu Kalkulátor",
            to: "kapcsolat.arpusz@gmail.com",
            replyTo: "szasz.szabolcs1995@gmail.com",
            subject: firstMailSubject,
            bcc: "szasz.szabolcs1995@gmail.com",
            html: `
                <h1>Szia Attila! Árkalkalkuláció történt az oldalon az alábbi adatokkal:</h1>
                <p>Szigetelés típusa: ${type}</p>
                <p>Szigetelés vastagsága: ${vastagsag} cm</p>
                <p>Szigetelni kívánt felület: ${felulet} m2</p>
                <p>Szigetelés kalkulált nettó ára: ${nettoar} Ft + ÁFA</p>
                <p>Szigetelés kalkulált bruttó ára: ${bruttoar} Ft </p>                
                <p>Helyszín irányítószáma: ${zipcode}</p>
                <p>Ügyfél email címe: ${email}</p>
                <p>Ügyfél telefonszáma címe: ${telefon}</p>
            `,
        });

        const mail2 = await transporter.sendMail({
            from: customFrom,
            to: email,
            replyTo: "kapcsolat.arpusz@gmail.com",
            subject: "Egy lépéssel közelebb az energiatakarékossághoz",
            html: `
                <h1>Üdvözöllek!</h1>
                <h3>Örülök, hogy kitöltötted a kalkulátorunkat, és érdeklődsz a púrhab szigetelés iránt. Garantálhatom, hogy jó irányba haladsz az energiatakarékosság és a hosszú távú komfort útján!<h3/>
                <br>
                <h2>A kalkulációban bekért adataid:</h2>
                <p>Szigetelés típusa: ${type}</p>
                <p>Szigetelés vastagsága: ${vastagsag} cm</p>
                <p>Szigetelni kívánt felület: ${felulet} m2</p>
                <p>Szigetelés kalkulált nettó ára: ${nettoar} Ft + ÁFA</p>
                <p>Szigetelés kalkulált bruttó ára: ${bruttoar} Ft </p>
                <p>Irányítószámod: ${zipcode}</p>
                <p>E-mail címed: ${email}</p>
                <p>Telefonszámod: ${telefon}</p>
                <br>
                <h3>Amennyiben szeretnél visszahívást kérni, kérlek küld el erre a levélre válaszolva a telefonszámodat, és mi lehetőség szerint még a mai napon visszahívunk.</h3>
                <h3>Ha bármivel kapcsolatban kérdésed lenne, vagy megbíznál bennünket, keress minket bátran az alábbi elérhetőségeken:</h3>
                <p>Tel:<br>+36 30 523 6866<br>+36 30 010 3001</p>
                <p>E-mail: kapcsolat.arpusz@gmail.com</p>
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