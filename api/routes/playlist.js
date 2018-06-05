'use strict'

var express = require('express');
var PlaylistController = require('../controllers/playlist');


var api = express.Router();


var md_autenticacion = require('../middlewares/autenticacion');


api.post('/crear-playlist',md_autenticacion.delvolverIdToken,PlaylistController.crearPlaylist);
api.delete('/eliminar-playlist/:id',md_autenticacion.delvolverIdToken,PlaylistController.eliminarPlaylist);
api.get('/get-playlist/:id',md_autenticacion.comprobarToken,PlaylistController.getPlaylist);
api.get('/get-playlists',md_autenticacion.comprobarToken,PlaylistController.getPlaylists);
api.get('/seguir-playlist/:id',md_autenticacion.delvolverIdToken,PlaylistController.seguirPlaylist);
api.get('/dejar-seguir-playlist/:id',md_autenticacion.delvolverIdToken,PlaylistController.dejarSeguirPlaylist);
api.get('/get-playlists-creadas',md_autenticacion.delvolverIdToken,PlaylistController.getPlaylistsCreadas);
api.get('/get-playlists-seguidas',md_autenticacion.delvolverIdToken,PlaylistController.getPlaylistsSeguidas);
api.put('/modificar-playlist/:id',md_autenticacion.delvolverIdToken,PlaylistController.modificarPlaylist);
api.post('/add-cancion-playlist/:id',md_autenticacion.delvolverIdToken,PlaylistController.addCancionPlaylist);
api.post('/borrar-cancion-playlist/:id',md_autenticacion.delvolverIdToken,PlaylistController.borrarCancionPlaylist);
api.get('/filtrar-playlists/:playlist',md_autenticacion.comprobarToken,PlaylistController.filtrarPlaylists);
api.get('/ver-playlist-seguida/:id',md_autenticacion.delvolverIdToken,PlaylistController.getPlaylistSeguida);
api.get('/ver-playlists-seguidas-usuario/:id',md_autenticacion.comprobarToken,PlaylistController.getPlaylistsSeguidasUsuario);
api.get('/ver-playlists-creadas-usuario/:id',md_autenticacion.comprobarToken,PlaylistController.getPlaylistsCreadasUsuario);

module.exports = api;
