const express = require('express');
const router = express.Router();
const cors = require ('cors');

//User model
const Proveedor = require('../../models/Proveedores');

router.use(cors());

router.get('/proveedores', (req, res)=>{
    Proveedor.findAll()
    .then(proveedores=>res.json(proveedores))
}); 

 router.post('/proveedores', (req, res)=>{
 Proveedor.create({
   idProveedor:req.body.idProveedor,
   idRuta:req.body.idRuta,
   nombre:req.body.nombre,   
   direccion:req.body.direccion,
   CP:req.body.CP,
   RFC:req.body.RFC,   
   telefono:req.body.telefono,
   diasCredito:req.body.diasCredito,
 })
 .then(result=>res.json(result))
});  

router.put('/proveedores/:idProveedor', (req, res)=>{
 const id_proveedor=req.params.idProveedor;
 
 Proveedor.update({    
  idRuta:req.body.idRuta,
  nombre:req.body.nombre,   
  direccion:req.body.direccion,
  CP:req.body.CP,
  RFC:req.body.RFC,  
  telefono:req.body.telefono,
  diasCredito:req.body.diasCredito,
 },{
   where: {
    idProveedor:id_proveedor
   }
 })
 .then(todo => res.json({
   error: false,
   message: 'Proveedor Actualizado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

router.delete('/proveedores/:idProveedor', (req, res)=>{
const id_proveedor=req.params.idProveedor;
 
 Proveedor.destroy({
   where: {
    idProveedor:id_proveedor
   }
 })
 .then(status => res.json({
   error: false,
   message: 'Proveedor Eliminado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

module.exports= router;