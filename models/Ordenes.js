const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:againstme90!@localhost:3306/db_blas');


  const Orden= sequelize.define('tbl_ordenes', {
    // attributes
    idPO:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    idCliente:{
      type: Sequelize.NUMBER,
      foreignKey: true
  },
    idRuta:{
      type: Sequelize.NUMBER,
      foreignKey: true
  },
    idProducto:{
      type: Sequelize.NUMBER,
      foreignKey: true
  },
    idTipoCarga:{
      type: Sequelize.NUMBER,
      foreignKey: true
  },
    fechaCarga: {
      type: Sequelize.DATE,
      allowNull: true
    }})
    
      module.exports= Orden;
    