const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const json = express.json();
const Sequelize = require('sequelize');
const sequelize = new Sequelize("SomeShop","aboba1488_SQLLogin_1","y82tik4cun",
  {
    dialect: "mssql",
    host: "SomeShop.mssql.somee.com"
  }
  );
app.listen(port, () => console.log('Server is started'));

module.exports = {
  sequelize: sequelize
};
const Product = require("./model/Product.js");
sequelize.sync().then( res => console.log('SQL is connected') );

app.get("/popular-products", function (req, res){
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  Product.findAll({raw: true}).then( data =>{
    res.json(data);
  });
});