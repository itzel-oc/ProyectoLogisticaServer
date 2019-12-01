const express = require('express');
const router = express.Router();
const cors = require ('cors');

//User model
const Orden = require('../../models/Ordenes');

router.use(cors());

router.get('/ordenes', (req, res)=>{
    Orden.findAll()
    .then(ordenes=>res.json(ordenes))
});

router.get('/ordenes/:idPO', (req, res) => {
  Orden.findByPk( req.params.idPO ).then((orden) => res.json(orden));
});

 router.post('/ordenes', (req, res)=>{
 Orden.create({
   idCliente:req.body.idCliente,
   idRuta:req.body.idRuta,
   producto:req.body.producto,
   PONumber: req.body.PONumber,
   tipoCarga:req.body.tipoCarga,
   fechaCarga:req.body.fechaCarga,
   direccionOrigen: req.body.direccionOrigen,
   direccionDestino: req.body.direccionDestino

 })
 .then(result=>res.json(result))
});  

router.put('/ordenes/:idPO', (req, res)=>{
 const id_PO=req.params.idPO;
 
 Orden.update({    
    idCliente:req.body.idCliente,
    idRuta:req.body.idRuta,
    producto:req.body.producto,
    tipoCarga:req.body.tipoCarga,
    PONumber: req.body.PONumber,
    fechaCarga:req.body.fechaCarga,
    direccionOrigen: req.body.direccionOrigen,
    direccionDestino: req.body.direccionDestino
 },{
   where: {
    idPO:id_PO
   }
 })
 .then(todo => res.json({
   error: false,
   message: 'Orden (PO) Actualizada.'
}))

}); 

router.delete('/ordenes/:idPO', (req, res)=>{
const id_PO=req.params.idPO;
 
 Orden.destroy({
   where: {
    idPO:id_PO
   }
 })
 .then(status => res.json({
   error: false,
   message: 'Orden (PO) Eliminada.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

module.exports= router;