const fs = require("fs").promises;
const dataMsgJson ="src/json/dataMsg.json";

const addMessageJson = async (req, res) => {
    try {
        const message = await fs.readFile(dataMsgJson, "utf-8");
        const json = JSON.parse(message);
        console.log(req.body);
        let messageCont = {
            idM: getNextId(json),
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            email: req.body.correo,
            mensaje: req.body.mensaje
        };

        const idM = getNextId(json);
        messageCont.idM = idM;
        json.push(messageCont);
        await fs.writeFile(dataMsgJson, JSON.stringify(json, null, 2));
        res.status(201).json({ message: "Se envío su mesanje", exito: true});
    } catch (error) {
        console.log(error);
    }
};

function getNextId(dataMsgJson) {
    if (dataMsgJson.length === 0) {
        return 1;
    }
    const maxId = Math.max(...dataMsgJson.map((item) => item.idM));
    return maxId +1;
};

const getMessageJson = async (req, res) => {
    try {
        const message = await fs.readFile(dataMsgJson, "utf-8");
        const json = JSON.parse(message);
        res.status(200).send(json);
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
};

const delMessageJson = async (req, res) => {
    try {
        let idM = parseInt(req.params.idM)
        const message = await fs.readFile(dataMsgJson, "utf-8");
        const json = JSON.parse(message);
        const index = json.findIndex((item) => item.idM === idM);
        if (index >= 0) {
            json.splice(index, 1);
            await fs.writeFile(dataMsgJson, JSON.stringify(json, null, 2));
        }
        res.status(204).json({ message: "Mensaje eleiminado", exito: true});
    } catch (error) {
        console.log(error);
    }
};

const readMessageJson = async (req, res) => {
    try {
        let idM = parseInt(req.params.idM);
        const message = await fs.readFile(dataMsgJson, "utf-8");
        const json = JSON.parse(message);
        const index = json.findIndex((item) => item.idM === idM);

        if (index >= 0) {
            json[index].read = true;
            await fs.writeFile(dataMsgJson, JSON.stringify(json, null, 2));
            res.status(200).json({ message: "Mensaje leído", exito: true});
        } else {
            res.status(404).json({ message: "Mensaje no encontrado", exito: false});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error interno del servidor", exito: false});
    }
};


module.exports = { 
    addMessageJson,
    getMessageJson,
    delMessageJson,
    readMessageJson
};