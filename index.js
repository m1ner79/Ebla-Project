const serveIndex = require('serve-index');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Webhook received.');
});

app.listen(4000, () => console.log('Ebla app listening on port 4000!'));
