const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;
const Product = require("./Product.js");
const Brand = require("./Brand.js");
const ProductTypes = require("./ProductTypes.js");
const Categories = require("./Categories.js");
const Subcategories = require("./Subcategories.js");
const Bucket = require("./Bucket.js");
const User = require("./User.js");

const model = {
  applyRelationships(){
    Product.hasMany(Bucket, { as: 'Bucket', foreignKey: 'ProductId' });
    Bucket.belongsTo(Product);
    User.hasMany(Bucket, { foreignKey: 'UserId' });
    Bucket.belongsTo(User);

    Subcategories.hasMany(Product, {as: 'Subcategories', foreignKey: 'SubcategoryId'});
    Product.belongsTo(Subcategories);

    Brand.hasMany(Product, {as: 'Product', foreignKey: 'BrandId'});
    Product.belongsTo(Brand);

    Categories.hasMany(Subcategories, {as: 'Categories', foreignKey: 'CategoryId'});
    Subcategories.belongsTo(Categories);
  }
}

module.exports = model;
