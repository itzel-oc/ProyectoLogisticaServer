const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"mysql://root:againstme90!@localhost:3306/db_blas"
);

const Ruta = sequelize.define("tbl_rutas", {
	// attributes
	idRuta: {
		type: Sequelize.NUMBER,
		primaryKey: true
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false
	},
	ciudadOrigen: {
		type: Sequelize.STRING,
		allowNull: true
	},
	edoOrigen: {
		type: Sequelize.STRING,
		allowNull: true
	},
	paisOrigen: {
		type: Sequelize.STRING,
		allowNull: true
	},
	ciudadDestino: {
		type: Sequelize.STRING,
		allowNull: true
	},
	edoDestino: {
		type: Sequelize.STRING,
		allowNull: true
	},
	paisDestino: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

Ruta.associate = models => {
	Ruta.hasMany(models.proveedor);
};

module.exports = Ruta;
