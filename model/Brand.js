const Product = require("./Product.js");

const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;

const Brand = sequelize.define("Brand", {
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
  imagePath: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Brand.hasMany(Product);

module.exports = Brand;