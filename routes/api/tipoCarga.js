const express = require('express');
const router = express.Router();
const cors = require ('cors');

//User model
const TipoCarga = require('../../models/TipoCarga');

router.use(cors());

router.get('/tipocarga', (req, res)=>{
    TipoCarga.findAll()
    .then(tipocarga=>res.json(tipocarga))
}); 

 router.post('/tipocarga', (req, res)=>{
    TipoCarga.create({   
   idTipoCarga:req.body.idTipoCarga,   
   nombre:req.body.nombre,   
 })
 .then(result=>res.json(result))
});  

router.put('/tipocarga/:idTipoCarga', (req, res)=>{
 const id_tipoCarga=req.params.idTipoCarga;
 
 TipoCarga.update({        
    nombre:req.body.nombre,  
 },{
   where: {
    idTipoCarga:id_tipoCarga
   }
 })
 .then(todo => res.json({
   error: false,
   message: 'Tipo Carga Actualizado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

router.delete('/tipoCarga/:idTipoCarga', (req, res)=>{
    const id_tipoCarga=req.params.idTipoCarga;
 
    TipoCarga.destroy({
   where: {
    idTipoCarga:id_tipoCarga
   }
 })
 .then(status => res.json({
   error: false,
   message: 'Tipo Carga Eliminado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

module.exports= router;