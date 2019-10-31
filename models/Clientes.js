const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"mysql://root:soap123@localhost:3306/db_blas"
);

const Cliente = sequelize.define("tbl_clientes", {
	// attributes
	idCliente: {
		type: Sequelize.NUMBER,
		primaryKey: true,
		autoIncrement: true
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false
	},
	contacto: {
		type: Sequelize.STRING
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
	pais: {
		type: Sequelize.STRING
	},
	RFC: {
		type: Sequelize.STRING
	},
	diasCredito: {
		type: Sequelize.NUMBER
	},
	limiteCredito: {
		type: Sequelize.NUMBER
	}
});

Cliente.associate = models => {
	Cliente.hasMany(models.flete);
};

module.exports = Cliente;
