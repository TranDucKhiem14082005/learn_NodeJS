const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const app = express;

app.request(bodyParser.json());

add.get("/khiem",(req,res) => {
    console.log("Cilent calling a API");
    res.send("Hello World!");
})
=======
const app = express();

app.use(bodyParser.json());


app.use("/v1/auth", require("./app/v1/routes"));
module.exports = app; 
>>>>>>> 7ccb2e04d93e108b671a2e2ebe022eb91f8dc642
