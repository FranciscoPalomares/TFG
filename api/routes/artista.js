'use strict'

var express = require('express');
var ArtistController = require('../controllers/artista');


var api = express.Router();


var md_autenticacion = require('../middlewares/autenticacion');


var multipart = require('connect-multiparty');

var md_subida_foto_artista = multipart({uploadDir:'./subidas/artistas'});


api.get('/artista/:id',md_autenticacion.comprobarToken,ArtistController.getArtista);
api.get('/get-artistas',md_autenticacion.comprobarToken,ArtistController.getArtistas);

api.post('/guardar-artista',md_autenticacion.comprobarRolToken,ArtistController.guardarArtista);
api.put('/actualizar-artista/:id',md_autenticacion.comprobarRolToken,ArtistController.actualizarArtista);
api.delete('/eliminar-artista/:id',md_autenticacion.comprobarRolToken,ArtistController.eliminarArtista);

api.post('/subir-foto-artista/:id',[md_autenticacion.comprobarRolToken,md_subida_foto_artista],ArtistController.subirImagen);

api.get('/obtener-foto-artista/:imageFile',ArtistController.obtenerImgenArtista);
api.get('/filtrar-artistas/:artista',md_autenticacion.comprobarToken,ArtistController.filtrarArtistas);
api.get('/ultimos-artistas',md_autenticacion.comprobarToken,ArtistController.ultimosArtistas);
module.exports = api;