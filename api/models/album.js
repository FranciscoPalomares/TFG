'use strict'

var Sequelize = require('sequelize');
var sequelize = require('../index');

var artista = require('./artista');

module.exports = function(sequelize, DataTypes) {

	 var Album = sequelize.define("Album", {
    titulo:DataTypes.STRING,
    descripcion:DataTypes.STRING,
    imagen: DataTypes.STRING,
    anio: DataTypes.INTEGER,



});



	 Album.belongsTo(sequelize.models.Artista, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

	

	 return Album;

};

