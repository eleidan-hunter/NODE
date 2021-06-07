const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const Prefix = '/api/v1';

app.get(`${Prefix}/date`, (req, res) => {
    let date =  new Date();
    res.send(date.toLocaleString());
})

app.listen(3000);

