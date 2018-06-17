'use strict'

var path = require('path');
var fs = require('fs');


var Artista = require('../models/index').artista;
var Album = require('../models/index').album;
var Cancion = require('../models/index').cancion;

//Obtener metadatos canción
var mm = require('musicmetadata');

//Duración MP3
var mp3Duration = require('mp3-duration');

//Hacer streaming
var ms = require('mediaserver');


function getCanciones(req,res){

	  Cancion.findAll({include:[Album]}).then(function(canciones_buscados) {
		  if (!canciones_buscados) {
		    res.status(404).send({mesage:'El album no se ha encontrado'});
		  }
		  else{
		  	res.status(200).send({canciones_buscados});
		  }

  	});

}


function guardarCancion(req,res){
	var params = req.body;
	var numero = params.numero;
	var nombre = params.nombre;
	var album_id = params.album;

	

	var cancion_nuevo = Cancion.build({'numero':numero,'nombre':nombre,'AlbumId':album_id});
					cancion_nuevo.save().then((cancion_creado) => {
  						console.log(cancion_creado);
  						res.status(200).send({cancion_creado});
					}).catch(function (err) {
  						// handle error;
  						console.log(err);
  						res.status(500).send({mesage:'Error al crear la canción'});
					});


}

function getCancion(req,res){

	var id_cancion = req.params.id;
	console.log(id_cancion);

	Cancion.find({ where: {id: id_cancion}, include: [Album] }).then(function(cancion_buscado) {
	  if (!cancion_buscado) {
	    res.status(404).send({mesage:'El album no se ha encontrado'});
	  }
	  else{
	  	res.status(200).send({cancion_buscado});
	  }

  	});
}

function getCancionesAlbum(req,res){

	var id_album = req.params.id;
	console.log("canciones del album",id_album);

	Cancion.findAll({ where: {AlbumId: id_album} }).then(function(canciones_buscadas) {
	  if (!canciones_buscadas) {
	    res.status(404).send({mesage:'N se han encontrado canciones de ese album'});
	  }
	  else{
	  	res.status(200).send({canciones_buscadas});
	  }

  	});
}


function actualizarCancion(req,res){

	var id_cancion = req.params.id;
	var campos_actualizar = req.body;
	console.log(campos_actualizar);

	Cancion.update(campos_actualizar,{where:{id:id_cancion}}).then((cancion_actualizado)=>{
		if(!cancion_actualizado){
					 res.status(500).send({mesage:'No se ha podido actualizar el album'});
		}
		else{
				res.status(200).send({cancion_actualizado});
		}
	});

}

function eliminarCancion(req,res){

	var id_cancion = req.params.id;
	var campos_actualizar = req.body;
	console.log(campos_actualizar);

	Cancion.destroy({where:{id:id_cancion}}).then((cancion_eliminado)=>{
		if(!cancion_eliminado){
					 res.status(500).send({mesage:'No se ha podido eliminar el album'});
		}
		else{
				res.status(200).send({cancion_eliminado});
		}
	});

}


function subirFichero(req,res){

	var id_cancion = req.params.id;
	var nombre_archivo = "Cancion no subida";



		console.log("id cancion",id_cancion);
		console.log("nombre archivo",req.files.cancion.path);


		var ruta_archivo = req.files.cancion.path;
		var archivo_split = ruta_archivo.split('\/');
		nombre_archivo = archivo_split[2];

		var extension_split = nombre_archivo.split('.');
		var extension_cancion = extension_split[1];

		//Comprobar extensión
		if(extension_cancion =='mp3'){

			//Obtener metadatos canción
			var parser = mm(fs.createReadStream(ruta_archivo), function (err, metadata) {
 			 if (err) throw err;
 				 console.log(metadata);
			});


			mp3Duration(ruta_archivo, function (err, duration) {
  				if (err) return console.log(err.message);
  					console.log('La canción dura ' + duration + ' segundos');

  					var minutos = duration/60;
  					minutos = parseInt(minutos ,10);
			var minutos_string = minutos.toString();

			var segundos = duration % 60;
			segundos = parseInt(segundos, 10);
			var segundos_string = segundos.toString();

			var duracion_total = minutos_string + ":" + segundos_string;

			console.log(duracion_total);

			Cancion.update({archivo:nombre_archivo,duracion:duracion_total},{where:{id:id_cancion}}).then((cancion_actualizado)=>{
				if(!cancion_actualizado){
					 res.status(200).send({mesage:'No se ha podido actualizar el fichero de la canción'});
				}
				else{
					res.status(200).send({cancion_actualizado});
				}
			});


				});


		}
		else{
			res.status(200).send({message:'Extensión del archivo no válida'});
		}

		console.log(extension_cancion);

	

}


function obtenerFichero(req,res){

	var archivo_cancion = req.params.cancionFile;
	var ruta_archivo = './subidas/canciones/' + archivo_cancion;
	console.log(ruta_archivo);

	fs.exists(ruta_archivo,function(exits){

		if(exits){
			//Enviamos el archivo
			ms.pipe(req, res, ruta_archivo);
			//res.sendFile(path.resolve(ruta_archivo));
		}
		else{
			res.status(404).send({mesage:'No existe la cancion'});
		}

	});
}

function getArtistaAlbum(req,res){
	var id_cancion = req.params.id;

	Cancion.find({ where: {id: id_cancion}, attributes:[],include: [{model:Album,attributes:['id','titulo','imagen'], include:[{model:Artista, attributes:['id','nombre']}]}] }).then(function(cancion_buscado) {
		if (!cancion_buscado) {
		  res.status(404).send({mesage:'El album no se ha encontrado'});
		}
		else{
			res.status(200).send({cancion_buscado});
		}
  
		});
}


function filtrarCanciones(req,res){
	var artista_buscar = req.params.cancion;
	Cancion.findAll({where:{
		'nombre':{
			$iLike:'%' + artista_buscar + '%'
		},
	},attributes:['id','nombre','duracion','archivo'],include:[{model:Album,attributes:['id','titulo'], include:[{model:Artista, attributes:['id','nombre']}]}]}).then(function(canciones_buscados) {
		if (!canciones_buscados) {
		  res.status(404).send({mesage:'El artista no se ha encontrado'});
		}
		else{
			res.status(200).send({canciones_buscados});
		}
	
		});
}


module.exports = {
	getCanciones,
	guardarCancion,
	getCancion,
	getCancionesAlbum,
	actualizarCancion,
	eliminarCancion,
	subirFichero,
	obtenerFichero,
	getArtistaAlbum,
	filtrarCanciones
};
