const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) =>{
    // console.log(`${req.method} ${res.url}`);
    console.log(`${req.method} and ${req.url}`);
    next();
}
app.use(logger);

app.use(express.json());
app.get('/',(req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () =>{
    console.log('Connected');
});