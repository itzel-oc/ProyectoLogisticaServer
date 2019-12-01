const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const login = require('./routes/api/auth');
const clientes = require('./routes/api/clientes');
const proveedores = require('./routes/api/proveedores');
const rutas = require('./routes/api/rutas');
const productos = require('./routes/api/productos');
const tipoCarga = require('./routes/api/tipoCarga');
const ordenes = require('./routes/api/ordenes');
const cargas = require('./routes/api/cargas');
const datosBancarios = require('./routes/api/datosBancarios');
const agenciaAduanal = require('./routes/api/agenciaAduanal');

app.listen(3000, () =>
    console.log('App listening on port 3000!'),
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', login);
app.use('/', clientes);
app.use('/', proveedores);
app.use('/', rutas);
app.use('/', productos);
app.use('/', tipoCarga);
app.use('/', ordenes);
app.use('/', cargas);
app.use('/', datosBancarios);
app.use('/', agenciaAduanal);
