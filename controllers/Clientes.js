const express = require('express');
const Cliente = require('../models/Clientes');
const router = express.Router();
const cors = require ('cors');

router.use(cors());

class ClienteController{
    addCliente(req, res){
        Cliente.create({
          idClientes:req.body.idClientes,
          nombre:req.body.nombre,
          RFC:req.body.RFC,
          direccion:req.body.direccion,
          telefono:req.body.telefono,
          diasCredito:req.body.diasCredito,
        })
        .then(result=>res.json(result))
       }; 
}

const clienteController = new ClienteController();
export default clienteController;