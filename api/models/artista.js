'use strict'

var Sequelize = require('sequelize');
var sequelize = require('../index');

module.exports = function(sequelize, DataTypes) {

	 var Artista = sequelize.define("Artista", {
    nombre:DataTypes.STRING,
    descripcion:DataTypes.STRING,
    imagen: DataTypes.STRING
});
	 
	
	 return Artista;

};