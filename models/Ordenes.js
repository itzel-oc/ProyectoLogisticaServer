const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"mysql://root:soap123@localhost:3306/db_blas"
);

const Orden = sequelize.define("tbl_ordenes", {
	// attributes
	idPO: {
		type: Sequelize.NUMBER,
		primaryKey: true
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
