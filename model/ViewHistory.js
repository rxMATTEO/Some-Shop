const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;

const ViewHistory = sequelize.define("ViewHistory", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
module.exports = ViewHistory;