const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"mysql://root:soap123@localhost:3306/db_blas"
);

const DatosBancarios = sequelize.define("tbl_datos_bancarios", {
	// attributes
	idDatoBanco: {
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
	banco: {
		type: Sequelize.STRING
	},
	beneficiario: {
		type: Sequelize.STRING
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
	estado: {
		type: Sequelize.STRING
	},
	pais: {
		type: Sequelize.STRING
	}

}, {
	timestamps: false
});

module.exports = DatosBancarios;
