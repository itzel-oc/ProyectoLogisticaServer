const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const Flete = require("../../models/Fletes");

router.use(cors());

router.get("/fletes", (req, res) => {
	Flete.findAll().then(fletes => res.json(fletes));
});

router.post("/fletes", (req, res) => {
	Flete.create({
		idFlete: req.body.idFlete,
		idProveedor: req.body.idProveedor,
		idPO: req.body.idPO,
		peso: req.body.peso,
		numCajas: req.body.numCajas,
		numPallets: req.body.numPallets,
		temperatura: req.body.temperatura,
		fechaDescarga: req.body.fechaDescarga,
		precioCliente: req.body.precioCliente,
		costoProveedor: req.body.precioCliente,
		idEstatusCarga: req.body.idEstatusCarga,
		idEstatusPago: req.body.idEstatusPago,
		comisionBroker: req.body.comisionBroker,
		idMetodoPago: req.body.idMetodoPago,
		idAgenciaAduanal: req.body.idAgenciaAduanal,
		placasTractor: req.body.placasTractor,
		ecoTractor: req.body.ecoTractor,
		codigoAlpha: req.body.codigoAlpha,
		caat: req.body.caat,
		ecoThermo: req.body.ecoThermo,
		placas: req.body.placas,
		pies: req.body.pies,
		nombreOperador: req.body.nombreOperador,
		numOperador: req.body.numOperador
	}).then(result => res.json(result));
});

router.put("/fletes/:idFlete", (req, res) => {
	const id_flete = req.params.idFlete;

	Flete.update(
		{
			idProveedor: req.body.idProveedor,
			idPO: req.body.idPO,
			peso: req.body.peso,
			numCajas: req.body.numCajas,
			numPallets: req.body.numPallets,
			temperatura: req.body.temperatura,
			fechaDescarga: req.body.fechaDescarga,
			precioCliente: req.body.precioCliente,
			costoProveedor: req.body.precioCliente,
			idEstatusCarga: req.body.idEstatusCarga,
			idEstatusPago: req.body.idEstatusPago,
			comisionBroker: req.body.comisionBroker,
			idMetodoPago: req.body.idMetodoPago,
			idAgenciaAduanal: req.body.idAgenciaAduanal,
			placasTractor: req.body.placasTractor,
			ecoTractor: req.body.ecoTractor,
			codigoAlpha: req.body.codigoAlpha,
			caat: req.body.caat,
			ecoThermo: req.body.ecoThermo,
			placas: req.body.placas,
			pies: req.body.pies,
			nombreOperador: req.body.nombreOperador,
			numOperador: req.body.numOperador
		},
		{
			where: {
				idFlete: id_flete
			}
		}
	)
		.then(todo =>
			res.json({
				error: false,
				message: "Flete Actualizado."
			})
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

router.delete("/fletes/:idFlete", (req, res) => {
	const id_flete = req.params.idFlete;

	Flete.destroy({
		where: {
			idFlete: id_flete
		}
	})
		.then(status =>
			res.json({
				error: false,
				message: "Flete Eliminado."
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
