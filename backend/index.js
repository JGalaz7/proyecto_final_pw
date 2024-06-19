const express = require('express');


const app = express();

const puerto = 3000;

app.get('/', (req, res) => {
    res.send('prueba de que se esta ejecutando desde el servidor');
});

app.listen(puerto, () => {
    console.log(`estamos vivos desde el puerto: ${puerto}`);
});
