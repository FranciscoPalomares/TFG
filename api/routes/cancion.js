'use strict'

var express = require('express');
var CancionController = require('../controllers/cancion');


var api = express.Router();


var md_autenticacion = require('../middlewares/autenticacion');


var multipart = require('connect-multiparty');

var md_subida_archivo_cancion = multipart({uploadDir:'./subidas/canciones'});

api.get('/get-canciones',md_autenticacion.comprobarToken,CancionController.getCanciones);
api.post('/guardar-cancion',md_autenticacion.comprobarRolToken,CancionController.guardarCancion);
api.get('/get-cancion/:id',md_autenticacion.comprobarToken,CancionController.getCancion);
api.put('/actualizar-cancion/:id',md_autenticacion.comprobarRolToken,CancionController.actualizarCancion);
api.delete('/eliminar-cancion/:id',md_autenticacion.comprobarRolToken,CancionController.eliminarCancion);

api.post('/subir-fichero-cancion/:id',[md_autenticacion.comprobarRolToken,md_subida_archivo_cancion],CancionController.subirFichero);

api.get('/obtener-fichero-cancion/:cancionFile',CancionController.obtenerFichero);

api.get('/get-canciones-album/:id',md_autenticacion.comprobarToken,CancionController.getCancionesAlbum);

api.get('/get-album-artista-cancion/:id',md_autenticacion.comprobarToken,CancionController.getArtistaAlbum);

api.get('/filtrar-canciones/:cancion',md_autenticacion.comprobarToken,CancionController.filtrarCanciones);
module.exports = api;