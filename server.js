const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dk", (req, res) => {
  console.log("Client calling a api");
 res.json({
    name: "Khiem",
    age: 20,
    address: "Nha Trang"
  });
});

app.post("/dk", (req, res) => { 
  const {email, password} = req.body;
  if(!email || !password){
    return res.json({
      message: "Email is required",
    })
  }
  if(password == 1234556) {
    return res.json({
      massage: "Login Success",
    })
  }
  else {
    return res.json({
      message: "Login Fail",
    })
  }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


 