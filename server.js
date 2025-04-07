const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 5000;

app.get('/', (req, res) => {
    console.log('client is  calling a api');
  res.send('Hello World!');
})


app.get('/khiem', (req, res) => {
    console.log('client is  calling a api');
  res.json({ name: 'this is message from server' });
})


app.get('/profile', (req, res) => { 
    console.log('client is  calling a api');
  res.json({ name: 'Khiem', age: 22, address: 'Ha Noi' });

})

app.get('/profile', (req, res) => { 
    console.log(req.body);
  res.json({ name: 'Khiem', age: 22, address: 'Ha Noi' });

})


app.post('/profile', (req, res) => {
   const{email, password} = req.body; 
   if(!email || !password) {
       return res.json({ message: 'email and password are required' }); 

    }

    if(Number(password) === 123456) {
        return res.json({ message: 'password is correct' }); 
    }
    return res.json({ message: 'password is incorrect' });
    console.log(email, password);

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

