const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;
const ProductTypes = require('./ProductTypes.js');

const Categories = sequelize.define("Categories", {
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
module.exports = Categories;