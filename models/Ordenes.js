const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`
);

const Orden = sequelize.define("tbl_ordenes", {
	// attributes
	idPO: {
		type: Sequelize.NUMBER,
		primaryKey: true,
		autoIncrement: true
	},
	idCliente: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	idRuta: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	producto: {
		type: Sequelize.STRING
	},
	PONumber: {
		type: Sequelize.STRING
	},
	tipoCarga: {
		type: Sequelize.STRING
	},
	fechaCarga: {
		type: Sequelize.DATE,
		allowNull: true
	},
	direccionOrigen: {
		type: Sequelize.NUMBER
	},
	direccionDestino: {
		type: Sequelize.NUMBER
	}
});

module.exports = Orden;
