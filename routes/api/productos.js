const express = require('express');
const router = express.Router();
const cors = require ('cors');

//User model
const Producto = require('../../models/Productos');

router.use(cors());

router.get('/productos', (req, res)=>{
    Producto.findAll()
    .then(productos=>res.json(productos))
}); 

 router.post('/productos', (req, res)=>{
    Producto.create({   
   idProducto:req.body.idProducto,   
   nombre:req.body.nombre,   
 })
 .then(result=>res.json(result))
});  

router.put('/productos/:idProducto', (req, res)=>{
 const id_producto=req.params.idProducto;
 
 Producto.update({        
    nombre:req.body.nombre,  
 },{
   where: {
    idProducto:id_producto
   }
 })
 .then(todo => res.json({
   error: false,
   message: 'Producto Actualizado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

router.delete('/productos/:idProducto', (req, res)=>{
    const id_producto=req.params.idProducto;
 
    Producto.destroy({
   where: {
    idProducto:id_producto
   }
 })
 .then(status => res.json({
   error: false,
   message: 'Producto Eliminado.'
}))
.catch(error => res.json({
   error: true,
   error: error
}));
}); 

module.exports= router;