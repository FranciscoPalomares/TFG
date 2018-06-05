'use strict'

var express = require('express');
var AlbumController = require('../controllers/album');


var api = express.Router();


var md_autenticacion = require('../middlewares/autenticacion');


var multipart = require('connect-multiparty');

var md_subida_foto_album = multipart({uploadDir:'./subidas/albums'});



api.get('/get-albums',md_autenticacion.comprobarToken,AlbumController.getAlbums);
api.post('/guardar-album',md_autenticacion.comprobarRolToken,AlbumController.guardarAlbum);
api.get('/get-album/:id',md_autenticacion.comprobarToken,AlbumController.getAlbum);

api.get('/get-albums-artista/:id',md_autenticacion.comprobarToken,AlbumController.getAlbumsArtista);

api.put('/actualizar-album/:id',md_autenticacion.comprobarRolToken,AlbumController.actualizarAlbum);
api.delete('/eliminar-album/:id',md_autenticacion.comprobarRolToken,AlbumController.eliminarAlbum);

api.post('/subir-foto-album/:id',[md_autenticacion.comprobarRolToken,md_subida_foto_album],AlbumController.subirImagen);

api.get('/obtener-foto-album/:imageFile',AlbumController.obtenerImgenAlbum);

api.get('/filtrar-albumes/:album',md_autenticacion.comprobarToken,AlbumController.filtrarAlbumes);
api.get('/ultimos-albumes',md_autenticacion.comprobarToken,AlbumController.ultimosAlbumes);
module.exports = api;