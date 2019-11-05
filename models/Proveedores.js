const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`
);

const Proveedor = sequelize.define("tbl_proveedores", {
	// attributes
	idProveedor: {
		type: Sequelize.NUMBER,
		primaryKey: true,
		autoIncrement: true
	},
	idRuta: {
		type: Sequelize.NUMBER,
		foreignKey: true
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: true
	},
	RFC: {
		type: Sequelize.STRING
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
