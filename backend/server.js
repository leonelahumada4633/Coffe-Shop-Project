const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenido a Coffe Shop");
});

app.listen(3000, () => {
    console.log("servidor de Coffe Shop iniciado en el puerto 3000");
});