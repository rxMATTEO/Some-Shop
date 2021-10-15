const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;
const Categories = require('./Categories.js');
const Subcategories = require('./Subcategories.js');
const Brands = require('./Brand.js');
const ProductTypes = sequelize.define("ProductTypes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = ProductTypes;