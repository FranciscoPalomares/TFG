'use strict'

var Sequelize = require('sequelize');
var app = require('./app');

var express = require('express');


//var app = express();


//Ejemplo de puerto
var puerto=process.env.PORT || 3977;

console.log(process.env.DB_HOST || 'localhost')

console.log("DATABASE URL " + process.env.DATABASE_URL)
var sequelize = new Sequelize(process.env.DATABASE_URL);
/*
var sequelize = new Sequelize('tfg','postgres','password',{
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  host: process.env.DB_HOST || 'localhost',
  define:{
    underscored: true
  }
});*/

/*
    console.log('Connection has been established successfully.');
    app.listen(puerto,function(){
    	console.log("Servidor corriendo en http://localhost:" + puerto);
    });
  
*/ 

    sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(puerto,function(){
    	console.log("Servidor corriendo en http://localhost:" + puerto);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



  module.exports = sequelize;




