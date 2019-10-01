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
	cdOrigen: {
		type: Sequelize.STRING,
		allowNull: true
	},
	CPOrigen: {
		type: Sequelize.STRING,
	},
	edoOrigen: {
		type: Sequelize.STRING,
		allowNull: true
	},
	paisOrigen: {
		type: Sequelize.STRING,
		allowNull: true
	},
	cdDestino: {
		type: Sequelize.STRING,
		allowNull: true
	},
	CPDestino: {
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
