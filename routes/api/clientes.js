const express = require('express');
const router = express.Router();
const cors = require ('cors');

//User model
const Cliente = require('../../models/Clientes');

router.use(cors());

router.get('/clientes', (req, res)=>{
    Cliente.findAll()
    .then(clientes=>res.json(clientes))
}); 

 router.post('/clientes', (req, res)=>{
 Cliente.create({
   idCliente:req.body.idCliente,
   nombre:req.body.nombre,
   direccion:req.body.direccion,
   CP:req.body.CP,
   RFC:req.body.RFC,   
   telefono:req.body.telefono,
   diasCredito:req.body.diasCredito,
 })
 .then(result=>res.json(result))
});  

router.put('/clientes/:idCliente', (req, res)=>{
 const id_cliente=req.params.idCliente;
 
 Cliente.update({    
  nombre:req.body.nombre,
  direccion:req.body.direccion,
  CP:req.body.CP,
  RFC:req.body.RFC,   
  telefono:req.body.telefono,
  diasCredito:req.body.diasCredito,
 },{
   where: {
     idCliente:id_cliente
   }
 })
 .then(todo => res.json({
   error: false,
   message: 'Cliente Actualizado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

router.delete('/clientes/:idCliente', (req, res)=>{
 const id_cliente=req.params.idCliente;
 
 Cliente.destroy({
   where: {
     idCliente:id_cliente
   }
 })
 .then(status => res.json({
   error: false,
   message: 'Cliente Eliminado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

module.exports= router;