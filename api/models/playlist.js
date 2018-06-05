'use strict'

var Sequelize = require('sequelize');
var sequelize = require('../index');


var Usuario = require('./usuario');
module.exports = function(sequelize, DataTypes) {

    var Playlist = sequelize.define("Playlist", {
   nombre:DataTypes.STRING
   
});

Playlist.belongsTo(sequelize.models.Usuario, {
    onDelete: "CASCADE",
    foreignKey: {
      allowNull: false
    }
  }); 
  

  

   return Playlist;
}