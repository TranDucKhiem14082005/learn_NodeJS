const express = require("express");
const bodyParser = require("body-parser");
const app = express;

app.request(bodyParser.json());

add.get("/khiem",(req,res) => {
    console.log("Cilent calling a API");
    res.send("Hello World!");
})
