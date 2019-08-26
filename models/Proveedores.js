const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:againstme90!@localhost:3306/db_blas');


  const Proveedor= sequelize.define('tbl_proveedores', {
    // attributes
    idProveedor:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    idRuta:{
      type: Sequelize.NUMBER,
      foreignKey: true
  },
    nombre: {
      type: Sequelize.STRING,
      allowNull: true
    },
    direccion: {
      type: Sequelize.STRING
    },
    CP: {
      type: Sequelize.STRING
    },
    RFC: {
        type: Sequelize.STRING
      },
    telefono: {
        type: Sequelize.STRING
      },
    diasCredito: {
        type: Sequelize.NUMBER
      }})

      Proveedor.associate = (models) => {
        Proveedor.hasMany(models.rutas);
      };
    
      module.exports= Proveedor;
    