const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/khiem", (req, res) => {
    console.log("Client calling a API");
    res.send("Hello World!");
});

module.exports = app;