const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const AgenciaAduanal = require("../../models/AgenciaAduanal");

router.use(cors());

router.get("/datosBancarios", (req, res) => {
	AgenciaAduanal.findAll().then(agenciasAduanales =>
		res.json(agenciasAduanales)
	);
});

router.post("/datosBancarios", (req, res) => {
	AgenciaAduanal.create({
		idDatosBancarios: req.body.idDatosBancarios,
		nombre: req.body.nombre,
		contacto: req.body.contacto,
		telefono: req.body.telefono,
		email: req.body.email,
		direccion: req.body.direccion,
		ciudad: req.body.ciudad,
		CP: req.body.CP,
		idEstado: req.body.idEstado,
		idPais: req.body.idPais,
		RFC: req.body.RFC
	}).then(result => res.json(result));
});

router.put("/datosBancarios/:idDatosBancarios", (req, res) => {
	const id_datosBancarios = req.params.idDatosBancarios;

	AgenciaAduanal.update(
		{
			idCliente: req.body.idCliente,
			idProveedor: req.body.idProveedor,
			idBanco: req.body.idBanco,
			cuenta: req.body.cuenta,
			clabe: req.body.clabe,
			ABA: req.body.ABA,
			SWIFT: req.body.SWIFT,
			direccion: req.body.direccion,
			ciudad: req.body.ciudad,
			CP: req.body.CP,
			idEstado: req.body.idEstado,
			idPais: req.body.idPais,
			beneficiario: req.body.beneficiario
		},
		{
			where: {
				idDatosBancarios: id_datosBancarios
			}
		}
	)
		.then(todo =>
			res.json({
				error: false,
				message: "Datos Bancarios Actualizados."
			})
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

router.delete("/datosBancarios/:idDatosBancarios", (req, res) => {
	const id_datosBancarios = req.params.idDatosBancarios;

	AgenciaAduanal.destroy({
		where: {
			idDatosBancarios: id_datosBancarios
		}
	})
		.then(status =>
			res.json({
				error: false,
				message: "Datos Bancarios Eliminados."
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
