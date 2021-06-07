const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const Prefix = '/api/v1';

let RANDOM_NUMBER = 8;

app.get(`${Prefix}/date`, (req, res) => {
    let date =  new Date();
    res.send(date.toLocaleString());
});

app.get(`${Prefix}/try`, (req, res) => {

    const { query } = req;

    console.log(query.number);
    res.send(`${RANDOM_NUMBER}`);
});

app.listen(3000);

