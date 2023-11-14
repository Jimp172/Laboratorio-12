// index.js
const express = require('express');
const conectarDB = require('./config/db');
const config = require('./config/global');
const cors = require('cors');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const app = express();

// Conectar BD
conectarDB();

app.use(cors());
app.use(express.json());

// Utiliza multipart directamente aquí
app.use('/api/subir', multipartMiddleware);

app.use('/api/productos', require('./routes/producto'));
app.use('/api/login', require('./routes/usuario'));
app.use('/api/create-user', require('./routes/usuario'));
app.use('/api/generate-pdf', require('./routes/pdf'))
app.use('/api/subir', require('./routes/subir'))

app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000');
});
