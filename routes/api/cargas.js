const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const Carga = require("../../models/cargas");

router.use(cors());

router.get("/cargas", (req, res) => {
	Carga.findAll().then(cargas => res.json(cargas));
});

router.get("/cargas/:idCarga", (req, res) => {
	const { idCarga } = req.params;
	Carga.findByPk(idCarga).then(response => res.json(response));
});

router.post("/cargas", (req, res) => {
	Carga.create({
		idCarga: req.body.idCarga,
		idProveedor: req.body.idProveedor,
		idPO: req.body.idPO,
		peso: req.body.peso,
		numCajas: req.body.numCajas,
		numPallets: req.body.numPallets,
		temperatura: req.body.temperatura,
		fechaDescarga: req.body.fechaDescarga,
		precioCliente: req.body.precioCliente,
		costoProveedor: req.body.precioCliente,
		estatusCarga: req.body.estatusCarga,
		estatusPago: req.body.estatusPago,
		estatusPagoProveedor: req.body.estatusPagoProveedor,
		comisionBroker: req.body.comisionBroker,
		metodoPago: req.body.metodoPago,
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

router.put("/cargas/:idCarga", (req, res) => {
	const id_carga = req.params.idCarga;

	Carga.update(
		{
			idProveedor: req.body.idProveedor,
			idPO: req.body.idPO,
			peso: req.body.peso,
			numCajas: req.body.numCajas,
			numPallets: req.body.numPallets,
			temperatura: req.body.temperatura,
			fechaDescarga: req.body.fechaDescarga,
			precioCliente: req.body.precioCliente,
			costoProveedor: req.body.costoProveedor,
			estatusCarga: req.body.estatusCarga,
			estatusPago: req.body.estatusPago,
			estatusPagoProveedor: req.body.estatusPagoProveedor,
			comisionBroker: req.body.comisionBroker,
			metodoPago: req.body.metodoPago,
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
				idCarga: id_carga
			}
		}
	)
		.then(todo =>
			res.json({
				error: false,
				message: "Carga Actualizado."
			})
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

router.delete("/cargas/:idCarga", (req, res) => {
	const id_carga = req.params.idCarga;

	Carga.destroy({
		where: {
			idCarga: id_carga
		}
	})
		.then(status =>
			res.json({
				error: false,
				message: "Carga Eliminado."
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
