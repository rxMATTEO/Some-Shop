const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = User;