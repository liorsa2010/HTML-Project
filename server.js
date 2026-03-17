const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    next();
});

app.post("/contact", (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    console.log("נתונים התקבלו:");
    console.log("שם מלא:", name);
    console.log("אימייל:", email);
    console.log("טלפון:", phone);
    console.log("נושא:", subject);
    console.log("תוכן:", message);

    res.json({ success: true, message: "הנתונים התקבלו בהצלחה!" });
});

app.listen(port, () => {
    console.log(`השרת רץ: http://localhost:${port}`);
});
