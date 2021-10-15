const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const json = express.json();
const Sequelize = require('sequelize');
const sequelize = new Sequelize("SomeShop","admin","1234567",
  {
    dialect: "mssql",
    host: "home-pc"
  }
  );
app.listen(port, () => console.log('Server is started'));

module.exports = {
  sequelize: sequelize
};
const apply = require("./model/index.js");
apply();
const Product = require("./model/Product.js");
const Brand = require("./model/Brand.js");
const ProductTypes = require("./model/ProductTypes.js");
const Categories = require("./model/Categories.js");
const Subcategories = require("./model/Subcategories.js");
sequelize.sync().then( res =>
{
  console.log('SQL is connected');
}).then(
  () => {
    Brand.findByPk(10).then(
      brand => {
        Product.findByPk(2).then(
          prod => {
            brand.setProduct(prod);
          }
        )
      }
    );
  }
);

app.get("/popular-products", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  Product.findAll({raw: true}).then( data =>{
    res.json(data);
  });
});

app.get("/products/:id", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const id = req.params["id"];
  if(!isFinite(id)) {
    res.sendStatus(404);
  } else {
    const product = Product.findByPk(id);
    product.then( data =>{
      if(!data) res.sendStatus(404);
      else res.json(data);
    });
  }
});

app.get("/categories", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  Categories.findAll({raw: true}).then( data => res.json(data) );
});

app.get("/products/", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const id = req.query["brand"];
  if(id){
    Product.findByPk(id).then( data =>{
      Brand.findByPk(data.BrandId).then(
        brand => {
          res.json(brand);
        }
      )
    });
  }
  else res.sendStatus(404);
});

app.get("/:subcategory/:brand", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const subcategory = req.params["subcategory"];
  const brand = req.params["brand"];
  Subcategories.findOne({where: {name: subcategory}, raw: true}).then(
    sub => {
      if(!sub){
        res.sendStatus(404);
        return;
      }
      Brand.findOne({where: {name: brand}, raw : true}).then(
        brand => {
          if(!brand) {
            res.sendStatus(404);
            return;
          }
          Product.findAll({where: {brandId: brand.id, SubcategoryId: sub.id}, raw : true}).then(
            products => {
              if(products) res.json(products);
            }
          )
        }
      )
    }
  );
});