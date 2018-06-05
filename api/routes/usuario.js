'use strict'

var express = require('express');
var UserController = require('../controllers/usuario');

//Importamos middleware de autnticacion
var md_autenticacion = require('../middlewares/autenticacion');

var multipart = require('connect-multiparty');

var md_subida_foto_perfil = multipart({uploadDir:'./subidas/usuarios'});

var api = express.Router();
//El middleware es el segundo parámetro

api.post('/registrarse',UserController.registrarUsuario);
api.post('/login',UserController.loginUsuario);
api.get('/buscauser/',md_autenticacion.delvolverIdToken,UserController.buscaUser);
api.put('/actualizar-usuario/:id',md_autenticacion.comprobarIdUsuario,UserController.actualizarUsuario);
api.post('/subir-foto-perfil/:id',[md_autenticacion.comprobarIdUsuario,md_subida_foto_perfil],UserController.subirImagen);
api.get('/obtener-foto-perfil/:imageFile',UserController.obtenerImgenUsuario);
api.post('/obtener-contrasena-token/',UserController.obtenerTokenContrasena);

api.get('/devolver-payload-token/:token',UserController.obtenerContrasenaToken);

api.post('/actualizar-contrasena-token/:token',UserController.actualizarCotrasenaToken);

api.get('/info-usuario/:id',md_autenticacion.comprobarToken,UserController.InfoUsuario);
api.get('/filtrar-usuarios/:usuario',md_autenticacion.comprobarToken,UserController.filtrarUsuarios);

api.get('/refrescar-token/',md_autenticacion.delvolverIdTokenRefrescar,UserController.refrescarToken);

module.exports = api;