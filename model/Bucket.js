const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;

const Bucket = sequelize.define("Bucket", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }
});
module.exports = Bucket;
