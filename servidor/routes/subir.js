const express = require('express');
const router = express.Router();

router.post('/api/subir', (req, res) => {
    res.json({
        'message': 'Fichero subido correctamente.....!!!'
    });
});

router.get('/', (req, res) => {
    res.send('Hola Mundo....!!!');
});

module.exports = router;