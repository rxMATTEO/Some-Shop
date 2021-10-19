const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const json = express.json();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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

app.use(function(req,res, next){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  next();
});

app.get('/category/:categoryName', function (req, res){
  const categoryName = req.params["categoryName"];
  Categories.findOne({where: {name: categoryName}, raw: true}).then( cat => {
    Subcategories.findAll({where: {CategoryId: cat.id}}).then(
      sub => {
        Product.findAll().then(
          result => {
            let products = [];
            for (let i = 0; i < result.length; i++) {
              for (let j = 0; j < sub.length; j++) {
                if(result[i].SubcategoryId == sub[j].id){
                  products.push(result[i]);
                }
              }
            }
            res.json(products);
          }
        )
      }
    )
  });
});

app.get("/subcategory/:subcategoryName", function (req, res, next){
  const subcategory = req.params["subcategoryName"];
  Subcategories.findOne({where: {name: subcategory}, raw: true}).then(
    sub => {
      if(!sub){
        res.sendStatus(404);
        next();
      }
      Product.findAll({where: {SubcategoryId: sub.id}, raw : true}).then(
        products => {
          res.json(products);
        }
      )
    }
  );
});

app.get("/popular-products", function (req, res){
  Product.findAll({raw: true}).then( data =>{
    res.json(data);
  });
});

app.get("/products/:id", function (req, res, next){
  const id = req.params["id"];
  if(!isFinite(id)) {
    res.sendStatus(404);
    next();
  } else {
    const product = Product.findByPk(id);
    product.then( data =>{
      if(!data) res.sendStatus(404);
      else res.json(data);
    });
  }
});

app.get("/categories", function (req, res){
  Categories.findAll({raw: true}).then( data => res.json(data) );
});

app.get("/brands", function (req, res, next) {
  const id = req.query["id"];
  if (!isFinite(id)) {
    res.sendStatus(404);
    next();
  } else {
    Product.findByPk(id).then(data => {
      Brand.findByPk(data.BrandId).then(
        brand => {
          res.json(brand);
        }
      )
    });
  }
});

app.get("/:subcategory/:brand", function (req, res, next){
  const subcategory = req.params["subcategory"];
  const brand = req.params["brand"];
  Subcategories.findOne({where: {name: subcategory}, raw: true}).then(
    sub => {
      if(!sub){
        res.sendStatus(404);
        next();
      } else
      Brand.findOne({where: {name: brand}, raw : true}).then(
        brand => {
          if(!brand) {
            res.sendStatus(404);
            next();
          } else
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

app.get("/products/:productId/brand/:brandId", function (req, res, next){
  const brandId = req.params["brandId"];
  if(!brandId){
    next();
    return;
  }
  Product.findAll({where: {brandId: brandId}, raw: true}).then(
    products => {
      if(!products){
        res.sendStatus(404);
        next();
      } else{
        res.json(products);
      }
    }
  );
});