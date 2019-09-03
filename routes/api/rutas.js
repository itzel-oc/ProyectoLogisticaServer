const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const Ruta = require("../../models/Rutas");

router.use(cors());

router.get("/rutas", (req, res) => {
	Ruta.findAll().then(rutas => res.json(rutas));
});

router.post("/rutas", (req, res) => {
	Ruta.create({
		idRuta: req.body.idRuta,
		nombre: req.body.nombre,
		ciudadOrigen: req.body.ciudadOrigen,
		edoOrigen: req.body.edoOrigen,
		paisOrigen: req.body.paisOrigen,
		ciudadDestino: req.body.ciudadDestino,
		edoDestino: req.body.edoDestino,
		paisDestino: req.body.paisDestino
	}).then(result => res.json(result));
});

router.put("/rutas/:idRuta", (req, res) => {
	const id_ruta = req.params.idRuta;

	Proveedor.update(
		{
			ciudadOrigen: req.body.ciudadOrigen,
			edoOrigen: req.body.edoOrigen,
			paisOrigen: req.body.paisOrigen,
			ciudadDestino: req.body.ciudadDestino,
			edoDestino: req.body.edoDestino,
			paisDestino: req.body.paisDestino
		},
		{
			where: {
				idRuta: id_ruta
			}
		}
	)
		.then(todo =>
			res.json({
				error: false,
				message: "Ruta Actualizada."
			})
		)
		.catch(error =>
			res.json({
				error: true,
				error: error
			})
		);
});

router.delete("/rutas/:idRuta", (req, res) => {
	const id_ruta = req.params.idRuta;

	Ruta.destroy({
		where: {
			idRuta: id_ruta
		}
	})
		.then(status =>
			res.json({
				error: false,
				message: "Ruta Eliminada."
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
