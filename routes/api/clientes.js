const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const Cliente = require("../../models/Clientes");
const DatosBancarios = require("../../models/DatosBancarios");
router.use(cors());

router.get("/clientes", (req, res) => {
	Cliente.findAll().then(clientes => res.json(clientes));
});



router.get("/clientes/:idCliente", (req, res) => {
	const {idCliente} = req.params;
	Cliente.findByPk( idCliente)
	.then(cliente => {
    DatosBancarios.findAll({where: {idCliente : cliente.idCliente} })
    .then((response) =>  {
			res.send({DatosBancarios: response, ...cliente.dataValues});
		})
	});
});

router.post("/clientes", (req, res) => {
	Cliente.create({
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
	}).then(result => {
    if (req.body.DatosBancarios) {
      DatosBancarios.create({
        idDatoBanco: req.body.DatosBancarios.idDatoBanco,
        idCliente: result.idCliente,
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
          idCliente: id_cliente
        }
      }).then(()=>{
        res.json({
          error: false,
          message: "Cliente Actualizado."
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
