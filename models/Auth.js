const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`
);

const Auth = sequelize.define("tbl_accounts", {
    idAccount: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

module.exports = Auth;
