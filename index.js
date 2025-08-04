const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3000;

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/submit', (req, res) => {
    const contact = req.body;

    let contacts = [];
    if (fs.existsSync("contacts.json")) {
        contacts = JSON.parse(fs.readFileSync("contacts.json"));
    }

   
    contacts.push(contact);
  

   
    fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2));

   
    res.send('Thank you! Your message has been received.');
});


app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});





