'use strict'

var Sequelize = require('sequelize');
var sequelize = require('../index');

var usuario = require('./usuario');

var playlist = require('./playlist');


module.exports = function(sequelize, DataTypes) {

    var Sigue = sequelize.define("Sigue", {

   
    });

  

   return Sigue;
}