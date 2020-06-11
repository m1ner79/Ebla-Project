const serveIndex = require('serve-index');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

app.use('/nest', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});
app.use('/test', express.static('public'))
app.use('/test', serveIndex('public'))