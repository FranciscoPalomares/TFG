'use strict'

var Sequelize = require('sequelize');
var sequelize = require('../index');

var artista = require('./artista');

module.exports = function(sequelize, DataTypes) {

	 var Cancion = sequelize.define("Cancion", {
    numero:DataTypes.STRING,
    nombre:DataTypes.STRING,
    duracion: DataTypes.STRING,
    archivo: DataTypes.STRING,
    
});



	 Cancion.belongsTo(sequelize.models.Album, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

	

	 return Cancion;

};