const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:againstme90!@localhost:3306/db_blas');


  const TipoCarga= sequelize.define('tbl_tipo_cargas', {
    // attributes
    idTipoCarga:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: true
      }})

      module.exports= TipoCarga;
    