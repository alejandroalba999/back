const express = require('express');
require('colors')
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        msg: 'Respuesta del servidor node'
    })
})

app.listen(3000, () => { console.log(`Servidor escuchando en el puerto:` + `${3000}`.yellow) })