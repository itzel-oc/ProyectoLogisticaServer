const Sequelize = require('sequelize');

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`);


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
    