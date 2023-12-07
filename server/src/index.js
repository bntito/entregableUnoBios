const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const corOptions = {
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: false,
    maxAge: 3600,
};

app.use(cors(corOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/html/welcome.html");
});

app.use("/api", require("./routes/routes.js"));

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/html/404.html");
});

app.listen(port, () => {
    console.log(`Servidor disponible en http://localhost:${port}`)
});