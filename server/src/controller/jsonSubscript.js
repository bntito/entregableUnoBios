const fs = require("fs").promises;
const dataEmailJson ="src/json/dataSubs.json";

const addSubscriptJson = async (req, res) => {
    try {
        const email = await fs.readFile(dataEmailJson, "utf-8");
        const jsonEmail = JSON.parse(email);
        console.log(req.body);
        let emailCont = {
            idS: getNextId(jsonEmail),
            email: req.body.emailSubsc
        };

        const idS = getNextId(jsonEmail);
        emailCont.idS = idS;
        jsonEmail.push(emailCont);
        await fs.writeFile(dataEmailJson, JSON.stringify(jsonEmail, null, 2));
        res.status(201).json({ message: "Se subscribió correctamente", exito: true});
    } catch (error) {
        console.log(error);
    }
};

function getNextId(dataEmailJson) {
    if (dataEmailJson.length === 0) {
        return 1;
      }
      const maxId = Math.max(...dataEmailJson.map((item) => item.idS));
      return maxId +1;
};

const getSubscriptJson = async (req, res) => {
    try {
        const email = await fs.readFile(dataEmailJson, "utf-8");
        const json = JSON.parse(email);
        res.status(200).send(json);
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = { addSubscriptJson, getSubscriptJson };