const {Sequelize} = require('sequelize');
const sequelize = require('../app.js').sequelize;
const Product = require("./Product.js");
const Brand = require("./Brand.js");
const ProductTypes = require("./ProductTypes.js");
const Categories = require("./Categories.js");
const Subcategories = require("./Subcategories.js");

function apply(){
  ProductTypes.belongsTo(Categories, { foreignKey: "CategoriesId"});
  Categories.hasMany(ProductTypes, { as: 'ProductTypes',foreignKey: "CategoriesId"});
  Subcategories.hasMany(ProductTypes, { as: "Subcategories", foreignKey: "SubcategoriesId" });
  ProductTypes.belongsTo(Subcategories, { foreignKey: "SubcategoriesId" });
  Brand.hasMany(ProductTypes, { as: "Brands", foreignKey: "BrandsId" });
  ProductTypes.belongsTo(Brand, { foreignKey: "BrandsId" });

  Categories.hasMany(Subcategories, { as:'Categories', foreignKey: "Categories"});
  Subcategories.belongsTo(Categories, {foreignKey: "Categories"});

  Brand.hasOne(Product);
  Subcategories.hasOne(Product);
}
module.exports = apply;