const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const Cliente = require("../../models/Clientes");

router.use(cors());

router.get("/clientes", (req, res) => {
	Cliente.findAll().then(clientes => res.json(clientes));
});

router.post("/clientes", (req, res) => {
	Cliente.create({
		idCliente: req.body.idCliente,
		nombre: req.body.nombre,
		contacto: req.body.contacto,
		telefono: req.body.telefono,
		email: req.body.email,
		direccion: req.body.direccion,
		ciudad: req.body.ciudad,
		CP: req.body.CP,
		estado: req.body.estado,
		pais: req.body.pais,
		RFC: req.body.RFC,
		diasCredito: req.body.diasCredito,
		limiteCredito: req.body.limiteCredito
	}).then(result => res.json(result));
});

router.put("/clientes/:idCliente", (req, res) => {
	const id_cliente = req.params.idCliente;

	Cliente.update(
		{
			nombre: req.body.nombre,
			contacto: req.body.contacto,
			telefono: req.body.telefono,
			email: req.body.email,
			direccion: req.body.direccion,
			ciudad: req.body.ciudad,
			CP: req.body.CP,
			estado: req.body.estado,
			pais: req.body.pais,
			RFC: req.body.RFC,
			diasCredito: req.body.diasCredito,
			limiteCredito: req.body.limiteCredito
		},
		{
			where: {
				idCliente: id_cliente
			}
		}
	)
		.then(todo =>
			res.json({
				error: false,
				message: "Cliente Actualizado."
			})
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

router.delete("/clientes/:idCliente", (req, res) => {
	const id_cliente = req.params.idCliente;

	Cliente.destroy({
		where: {
			idCliente: id_cliente
		}
	})
		.then(status =>
			res.json({
				error: false,
				message: "Cliente Eliminado."
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
