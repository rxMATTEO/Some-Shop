const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;
const ProductTypes = require('./ProductTypes.js');

const Subcategories = sequelize.define("Subcategories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nameRU: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Subcategories;
