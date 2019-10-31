const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const Proveedor = require("../../models/Proveedores");
const DatosBancarios = require("../../models/DatosBancarios");

router.use(cors());

router.get("/proveedores", (req, res) => {
	Proveedor.findAll().then(proveedores => res.json(proveedores));
});

router.get("/proveedores/:idProveedor", (req, res) => {
	const {idProveedor} = req.params;
	Proveedor.findByPk( idProveedor)
	.then(proveedor => {
		DatosBancarios.findAll({where: {idProveedor : proveedor.idProveedor} })
		.then((response) =>  {
			res.send({DatosBancarios: response, ...proveedor.dataValues});
		})
	});
})

router.post("/proveedores", (req, res) => {
	Proveedor.create({
		idRuta: req.body.idRuta,
		nombre: req.body.nombre,
		contacto: req.body.contacto,
		telefono: req.body.telefono,
		email: req.body.email,
		direccion: req.body.direccion,
		ciudad: req.body.ciudad,
		CP: req.body.CP,
		idEstado: req.body.idEstado,
    	pais: req.body.pais,
   		estado: req.body.estado,
		RFC: req.body.RFC,
		diasCredito: req.body.diasCredito,
		limiteCredito: req.body.limiteCredito
	}).then(result => {
    if (req.body.DatosBancarios) {
      DatosBancarios.create({
        idDatoBanco: req.body.DatosBancarios.idDatoBanco,
        idProveedor: result.idProveedor,
        banco: req.body.DatosBancarios.banco,
        beneficiario: req.body.DatosBancarios.beneficiario,
        cuenta: req.body.DatosBancarios.cuenta,
        clabe: req.body.DatosBancarios.clabe,
        ABA: req.body.DatosBancarios.ABA,
        SWIFT: req.body.DatosBancarios.SWIFT,
        direccion: req.body.DatosBancarios.direccion,
        ciudad: req.body.DatosBancarios.ciudad,
        CP: req.body.DatosBancarios.CP,
        estado: req.body.DatosBancarios.estado,
        pais: req.body.DatosBancarios.pais
      }).then(response => res.json(result));
    } else {
      res.json(result)
    }
  });
});

router.put("/proveedores/:idProveedor", (req, res) => {
	const id_proveedor = req.params.idProveedor;

	Proveedor.update(
		{
			idRuta: req.body.idRuta,
			nombre: req.body.nombre,
			contacto: req.body.contacto,
			telefono: req.body.telefono,
			email: req.body.email,
			direccion: req.body.direccion,
			ciudad: req.body.ciudad,
			CP: req.body.CP,
			idEstado: req.body.idEstado,
			idPais: req.body.idPais,
			RFC: req.body.RFC,
			diasCredito: req.body.diasCredito,
			limiteCredito: req.body.limiteCredito
		},
		{
			where: {
				idProveedor: id_proveedor
			}
		}
	)
		.then(todo =>
			DatosBancarios.update({
				banco: req.body.DatosBancarios.banco,
				beneficiario: req.body.DatosBancarios.beneficiario,
				cuenta: req.body.DatosBancarios.cuenta,
				clabe: req.body.DatosBancarios.clabe,
				ABA: req.body.DatosBancarios.ABA,
				SWIFT: req.body.DatosBancarios.SWIFT,
				direccion: req.body.DatosBancarios.direccion,
				ciudad: req.body.DatosBancarios.ciudad,
				CP: req.body.DatosBancarios.CP,
				estado: req.body.DatosBancarios.estado,
				pais: req.body.DatosBancarios.pais
					}, {
				where: {
				  idProveedor: id_proveedor
				}
			  }).then(()=>{
				res.json({
				  error: false,
				  message: "Proveedor Actualizado."
				})
			  })
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

router.delete("/proveedores/:idProveedor", (req, res) => {
	const id_proveedor = req.params.idProveedor;

	Proveedor.destroy({
		where: {
			idProveedor: id_proveedor
		}
	})
		.then(status =>
			res.json({
				error: false,
				message: "Proveedor Eliminado."
			})
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

module.exports = router;
