const http = require('http');
const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const json = express.json();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize("SomeShop","aboba1488_SQLLogin_1","nvbxum4n5s",
  {
    dialect: "mssql",
    host: "SomeShop.mssql.somee.com"
  });

module.exports = {
  sequelize: sequelize
};
const model = require("./model/model.js");
model.applyRelationships();
const Product = require("./model/Product.js");
const Brand = require("./model/Brand.js");
const ProductTypes = require("./model/ProductTypes.js");
const Categories = require("./model/Categories.js");
const Subcategories = require("./model/Subcategories.js");
const User = require("./model/User.js");
const ViewHistory = require("./model/ViewHistory.js");
const Bucket = require("./model/Bucket.js");
const path = require("path");
sequelize.sync().then( res =>
{
  console.log('SQL is connected');
});
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', function(req,res, next) {
  if(req.path.includes('api')){
    return next();
  }
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log('Server is started'));

app.get('/api/category/:categoryName', function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
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
            cat._productKind_ = cat.nameRU;
            res.json([...products, cat]);
          }
        )
      }
    )
  });
});

app.get("/api/subcategory/:subcategoryName", function (req, res, next){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const subcategory = req.params["subcategoryName"];
  Subcategories.findOne({where: {name: subcategory}, raw: true}).then(
    sub => {
      if(!sub){
        res.writeHead(404);
        res.end();
      }
      Product.findAll({where: {SubcategoryId: sub.id}, raw : true}).then(
        products => {
          sub._productKind_ = sub.nameRU;
          res.json([...products, sub]);
        }
      )
    }
  );
});

app.get("/api/popular-products", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  Product.findAll({raw: true}).then( data =>{
    res.json(data.sort( (a,b) => parseInt(a.viewsCount) < parseInt(b.viewsCount) ? 1 : -1 ));
  });
});

app.get("/api/products/:id", function (req, res, next){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const id = req.params["id"];
  if(!isFinite(id)) {
    res.writeHead(404);
    res.end();
  } else {
    const product = Product.findByPk(id);
    product.then( data =>{
      if(!data) res.writeHead(404);
      else res.json(data);
    });
  }
});

app.get("/api/categories", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  Categories.findAll({raw: true}).then( data => res.json(data) );
});

app.get("/api/brands", function (req, res, next) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const id = req.query["id"];
  if (!isFinite(id)) {
    res.writeHead(404);
    res.end();
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

app.get("/api/:subcategory/:brand", function (req, res, next){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const subcategory = req.params["subcategory"];
  const brand = req.params["brand"];
  Subcategories.findOne({where: {name: subcategory}, raw: true}).then(
    sub => {
      if(!sub){
        next();
      } else
      Brand.findOne({where: {name: brand}, raw : true}).then(
        brand => {
          if(!brand) {
            res.writeHead(404);
            res.end();
          } else
          Product.findAll({where: {brandId: brand.id, SubcategoryId: sub.id}, raw : true}).then(
            products => {
              if(products) res.json([...products, { _productKind_: `${sub.nameRU} ${brand.name}` }]);
            }
          )
        }
      )
    }
  );
});

app.get("/api/products/:productId/brand/:brandId", function (req, res, next){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const brandId = req.params["brandId"];
  if(!brandId){
    res.end();
    return;
  }
  Product.findAll({where: {brandId}}).then(
    products => {
      if(!products){
        res.writeHead(404);
        res.end();
      } else{
        products[0].getBrand().then(brand => {
          res.json([...products, {_productKind_: brand.name}]);
        })
      }
    }
  );
});

app.get("/api/search", function (req, res, next){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const query = req.query["query"];
  if(!query){
    res.writeHead(404);
    res.end();
  }else
  Product.findAll({
    where: {
      [Op.or] : [ { name: { [Op.like]: `%${query}%` } }, { description: { [Op.like]: `%${query}%` } }, { shortDescription: { [Op.like]: `%${query}%` } }]
    }, raw: true}).then(
    products => {
      if(!products){
        res.writeHead(404);
        res.end();
      } else{
        res.json(products);
      }
    }
  );
});

app.get("/api/set-product-view", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const productId = req.query["productId"];
  const views = req.query["views"];
  if(productId && views){
    Product.update( {viewsCount: views}, { where:{ id: productId } } ).then(
      () => {
        res.json({isSuccess: true});
      }
    );
} else{
    res.writeHead(404);
    res.end();
  }
});

app.get("/api/set-product-rating", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const productId = req.query["productId"];
  const rating = req.query["rating"];
  if(productId && rating){
    Product.update( {rating: rating}, { where:{ id: productId } } ).then(
      () => {
        res.json({isSuccess: true});
      }
    );
  } else{
    res.writeHead(404);
    res.end();
  }
});

app.get("/api/create-user", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const token = req.query["token"];
  if(token){
    User.create({token: token}).then(
      (user) => {
        res.json({isSuccess: true, user: user});
      }
    );
  }
  else{
    res.writeHead(404);
    res.end();
  }
});

app.get("/api/get-user", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const token = req.query["token"];
  if(token){
    User.findOne({where: {token: token}}).then(
      (user) => {
        res.json({user: user});
      }
    );
  }
  else{
    res.writeHead(404);
    res.end();
  }
});

app.get("/api/append-view-to-history", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const userId = req.query["userId"];
  const productId = req.query["productId"];
  if(userId && productId){
    ViewHistory.findOne({where: {userId, productId}}).then(history => {
      if(!history) {
        ViewHistory.create({userId: userId, productId: productId}).then(
          () => {
            res.json({isSuccess: true});
          }
        );
      } else res.json({isSuccess: false});
    });
  }
  else{
    res.writeHead(404);
    res.end();
  }
});

app.get("/api/get-view-history", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const userId = req.query["userId"];
  if(userId){
    ViewHistory.findAll({ where: {userId: userId}, limit: 10, order: [ ['createdAt', 'DESC'] ] }).then(
      (viewHistory) => {
        res.json(viewHistory);
      }
    );
  }
});

app.get("/api/bucket/get", function(req,res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const userId = req.query["userId"];
  if(userId){
    Bucket.findAll({where: {userId}}).then(bucket => {
      return new Promise(resolve => {
        const productArray = [];
        for (let i = 0; i < bucket.length; i++) {
          bucket[i].getProduct().then(product => {
            productArray.push(product);
            if(i === bucket.length - 1) resolve(productArray);
          });
        }
      })
    }).then(products => res.json(products));
  }
  else {
    res.writeHead(404);
    res.end();
  }
});

app.get("/api/bucket/set", function(req,res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const userId = req.query["userId"];
  const productId = req.query["productId"];
  if(userId && productId){
    Bucket.findOne({where: {userId, productId}}).then(bucket => {
      if(!bucket){
        Bucket.create({ProductId: productId, UserId: userId}).then(bucket => {
          res.json(bucket);
        });
      }
    });
  }
  else {
    res.writeHead(404);
    res.end();
  }
});

app.get("/api/bucket/remove", function(req,res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  const userId = req.query["userId"];
  const productId = req.query["productId"];
  if(userId && productId){
    Bucket.destroy({where: {userId, productId}}).then(bucket => {
      if(bucket) res.json(bucket);
      else res.json({isSuccess: false});
    });
  }
  else {
    res.writeHead(404);
    res.end();
  }
});
