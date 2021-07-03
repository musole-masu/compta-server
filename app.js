const express = require('express');
const app = express();

/**
 * PORT NUMBER ON LOCALHOST
 */
const port = 4000;

app.get('/compta', (req, res, next) => {
    res.send('WELCOME TO LA COMPTA OF LE PETIT')
});


app.listen(port, () => {
    console.log('LISTENING ON ' + port);
})