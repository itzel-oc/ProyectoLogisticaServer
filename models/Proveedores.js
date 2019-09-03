const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"mysql://root:againstme90!@localhost:3306/db_blas"
);

const Proveedor = sequelize.define("tbl_proveedores", {
	// attributes
	idProveedor: {
		type: Sequelize.NUMBER,
		primaryKey: true
	},
	idRuta: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: true
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
	},
	diasCredito: {
		type: Sequelize.NUMBER
	},
	limiteCredito: {
		type: Sequelize.NUMBER
	}
});

Proveedor.associate = models => {
	Proveedor.hasMany(models.rutas);
};

module.exports = Proveedor;
