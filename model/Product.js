const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;

const Product = sequelize.define("Product", {
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
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imagePath: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  viewsCount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  miniatures: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Product;