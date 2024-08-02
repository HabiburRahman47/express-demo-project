const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const logger = (req, res, next) =>{
    // console.log(`${req.method} ${res.url}`);
    console.log(`${req.method} and ${req.url}`);
    next();
}
app.use(logger);

//parse URL-endcoded bodies
app.use(bodyParser.urlencoded({extended: false}));

//parse JSON bodies
app.use(bodyParser.json());
app.get('/',(req, res) => {
    res.send('Hello, world!');

});

app.post('/user', (req, res) =>{
    const name= req.body.name;
    const age = req.body.age;
    res.send(`User name is ${name} and age is ${age}`)
});

app.listen(port, () =>{
    console.log('Connected');
});