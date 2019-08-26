 const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:againstme90!@localhost:3306/db_blas');


  const Cliente = sequelize.define('tbl_clientes', {
    // attributes
    idCliente:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
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

      Cliente.associate = (models) => {
        Cliente.hasMany(models.flete);
      };
    
      module.exports= Cliente;
    