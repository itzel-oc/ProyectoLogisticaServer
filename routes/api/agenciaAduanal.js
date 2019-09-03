const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const AgenciaAduanal = require("../../models/AgenciaAduanal");

router.use(cors());

router.get("/agenciaAduanal", (req, res) => {
	AgenciaAduanal.findAll().then(agenciasAduanales =>
		res.json(agenciasAduanales)
	);
});

router.post("/agenciaAduanal", (req, res) => {
	AgenciaAduanal.create({
		idAgenciaAduanal: req.body.idAgenciaAduanal,
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

router.put("/agenciaAduanal/:idAgenciaAduanal", (req, res) => {
	const id_agenciaAduanal = req.params.idAgenciaAduanal;

	AgenciaAduanal.update(
		{
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
		},
		{
			where: {
				idAgenciaAduanal: id_agenciaAduanal
			}
		}
	)
		.then(todo =>
			res.json({
				error: false,
				message: "Agencia Aduanal  Actualizada."
			})
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

router.delete("/agenciaAduanal/:idAgenciaAduanal", (req, res) => {
	const id_agenciaAduanal = req.params.idAgenciaAduanal;

	AgenciaAduanal.destroy({
		where: {
			idAgenciaAduanal: id_agenciaAduanal
		}
	})
		.then(status =>
			res.json({
				error: false,
				message: "Agencia Aduanal Eliminada."
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
