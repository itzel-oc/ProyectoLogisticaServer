const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"mysql://root:againstme90!@localhost:3306/db_blas"
);

const AgenciaAduanal = sequelize.define("tbl_agencia_aduanal", {
	// attributes
	idAgenciaAduanal: {
		type: Sequelize.NUMBER,
		primaryKey: true
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false
	},
	contacto: {
		type: Sequelize.STRING,
		allowNull: false
	},
	telefono: {
		type: Sequelize.STRING
	},
	email: {
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
	RFC: {
		type: Sequelize.STRING
	}
});

module.exports = AgenciaAduanal;
