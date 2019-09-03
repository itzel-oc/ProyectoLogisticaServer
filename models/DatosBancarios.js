const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"mysql://root:againstme90!@localhost:3306/db_blas"
);

const DatosBancarios = sequelize.define("tbl_datos_bancarios", {
	// attributes
	idDatosBancarios: {
		type: Sequelize.NUMBER,
		primaryKey: true
	},
	idCliente: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	idProveedor: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	idBanco: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	cuenta: {
		type: Sequelize.STRING,
		allowNull: false
	},
	clabe: {
		type: Sequelize.STRING
	},
	ABA: {
		type: Sequelize.STRING
	},
	SWIFT: {
		type: Sequelize.STRING
	},
	direccion: {
		type: Sequelize.STRING
	},
	ciudad: {
		type: Sequelize.STRING
	},
	CP: {
		type: Sequelize.STRING
	},
	idEstado: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	idPais: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	beneficiario: {
		type: Sequelize.STRING
	}
});

module.exports = AgenciaAduanal;
