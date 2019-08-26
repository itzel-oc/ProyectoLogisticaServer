const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:againstme90!@localhost:3306/db_blas');


  const Producto= sequelize.define('tbl_productos', {
    // attributes
    idProducto:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: true
      }})

      module.exports= Producto;
    