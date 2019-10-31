const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const clientes = require('./routes/api/clientes');
const proveedores = require('./routes/api/proveedores');
const rutas = require('./routes/api/rutas');
const productos = require('./routes/api/productos');
const tipoCarga = require('./routes/api/tipoCarga');
const ordenes = require('./routes/api/ordenes');
const cargas = require('./routes/api/cargas');
const datosBancarios = require('./routes/api/datosBancarios');


app.listen(3000, () =>
 console.log('App listening on port 3000!'),
); 
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', clientes);
app.use('/', proveedores);
app.use('/', rutas);
app.use('/', productos);
app.use('/', tipoCarga);
app.use('/', ordenes);
app.use('/', cargas);
app.use('/', datosBancarios);

 