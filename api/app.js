'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var usuario_routes = require('./routes/usuario');
var artista_routes = require('./routes/artista');
var album_routes = require('./routes/album');
var canciones_routes = require('./routes/cancion');
var playlist_routes = require('./routes/playlist');


//Convertir a JSON los datos que nos llegan por POST y GET
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


var compression = require('compression');
// Usar comprensión en todas las llamadas
app.use(compression());

var cors = require('cors');

app.use(cors({
    credentials: true,
  }));

/*
//Configurar cabeceras http
app.use((req, res, next) => {

    console.log("Entrando a los headers")
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});
*/


//Carga de rutas base
app.use('/api',usuario_routes);
app.use('/api',artista_routes);
app.use('/api',album_routes);
app.use('/api',canciones_routes);
app.use('/api',playlist_routes);


//Usar app en otros ficheros
module.exports = app;
