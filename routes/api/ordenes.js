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

 router.post('/ordenes', (req, res)=>{
 Orden.create({
   idPO:req.body.idPO,
   idCliente:req.body.idRuta,
   idRuta:req.body.idRuta,
   idProducto:req.body.idRuta,
   idTipoCarga:req.body.idTipoCarga,
   idFechaCarga:req.body.idFechaCarga,

 })
 .then(result=>res.json(result))
});  

router.put('/ordenes/:idPO', (req, res)=>{
 const id_PO=req.params.idPO;
 
 Orden.update({    
    idCliente:req.body.idRuta,
    idRuta:req.body.idRuta,
    idProducto:req.body.idRuta,
    idTipoCarga:req.body.idTipoCarga,
    idFechaCarga:req.body.idFechaCarga,
 },{
   where: {
    idPO:id_PO
   }
 })
 .then(todo => res.json({
   error: false,
   message: 'Orden (PO) Actualizada.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
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