const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const AgenciaAduanal = require("../../models/AgenciaAduanal");
const DatosBancarios = require("../../models/DatosBancarios");

router.use(cors());

// router.get("/datosBancarios", (req, res) => {
// 	AgenciaAduanal.findAll().then(agenciasAduanales =>
// 		res.json(agenciasAduanales)
// 	);
// });

router.post("/datosBancarios", (req, res) => {
	DatosBancarios.create({
		idDatosBanco: req.body.idDatosBanco,
		idCliente: req.body.idCliente ? req.body.idCliente : null,
		idProveedor: req.body.idProveedor ? req.body.idProveedor : null,
    cuenta: req.body.cuenta,
    clabe: req.body.clabe,
    ABA: req.body.ABA,
    SWIFT: req.body.SWIFT,
    direccion: req.body.direccion,
    CP: req.body.CP,
    estado: req.body.estado,
    pais: req.body.pais
	})
});

router.get("/datosBancarios:idDatoBanco", (req, res) => {
	const { idCliente, idProveedor } = req.params;
	if (idCliente) {
		DatosBancarios.findByPk(idCliente).
		then((datosBancarios) => res.json(datosBancarios) )
	} else {
		DatosBancarios.findByPk(idProveedor).
		then((datosBancarios) => res.json(datosBancarios) )
	}
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
