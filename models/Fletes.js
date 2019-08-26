const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:againstme90!@localhost:3306/db_blas');


  const Flete= sequelize.define('tbl_fletes', {
    // attributes
    idFlete:{
        type: Sequelize.NUMBER,
        primaryKey: true
    }, 
    idProveedor:{
        type: Sequelize.NUMBER,
        foreignKey: true
    },       
    idPO:{
        type: Sequelize.NUMBER,
        foreignKey: true
    },  
    peso: {
      type: Sequelize.DECIMAL,      
    },
    numCajas: {
      type: Sequelize.NUMBER,
    },
    numPallets: {
      type: Sequelize.NUMBER,
    },
    temperatura: {
        type: Sequelize.NUMBER,
    },
    fechaDesCarga: {
        type: Sequelize.DATE,
    },
    precioCliente: {
        type: Sequelize.DECIMAL,      
      },
    costoProveedor: {
      type: Sequelize.DECIMAL,      
    },    
    idEstatusCarga:{
        type: Sequelize.NUMBER,
        foreignKey: true
    },
    idEstatusPago:{
        type: Sequelize.NUMBER,
        foreignKey: true
    }})
    
      module.exports= Flete;
    