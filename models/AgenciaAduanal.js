const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`
);

const AgenciaAduanal = sequelize.define("tbl_agencia_aduanal", {
	// attributes
	idAgenciaAduanal: {
		type: Sequelize.NUMBER,
		primaryKey: true,
		autoIncrement: true
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false
	},
	RFC: {
		type: Sequelize.STRING
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
	estado: {
		type: Sequelize.STRING	
	},
	Pais: {
		type: Sequelize.STRING,
	}
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = AgenciaAduanal;
