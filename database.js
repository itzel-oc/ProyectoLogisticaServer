const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:againstme90!@localhost:3306/db_blas');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports=sequelize;