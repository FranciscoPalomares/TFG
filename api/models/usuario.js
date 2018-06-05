'use strict'
var Sequelize = require('sequelize');
var sequelize = require('../index');


var Playlist = require('./playlist');



module.exports = function(sequelize, DataTypes) {

	 var Usuario = sequelize.define("Usuario", {
    nombre:DataTypes.STRING,
    apellidos: {type:DataTypes.STRING,allowNull: false},
    password: DataTypes.STRING,
    email: {type:DataTypes.STRING, unique: true,allowNull: false},
    rol:DataTypes.STRING,
    imagen: DataTypes.STRING
});




	 return Usuario;

};

