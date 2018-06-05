'use strict'

var path = require('path');
var fs = require('fs');


var Artista = require('../models/index').artista;
var Album = require('../models/index').album;
var Cancion = require('../models/index').cancion;



function getAlbums(req,res){

	
	  Album.findAll({include:[Artista]}).then(function(albums_buscados) {
		  if (!albums_buscados) {
		    res.status(404).send({mesage:'El album no se ha encontrado'});
		  }
		  else{
		  	res.status(200).send({albums_buscados});
		  }
  
  	});
	 
}



function guardarAlbum(req,res){
	var params = req.body;

	var titulo = params.titulo;
	var descripcion = params.descripcion;
	var imagen = null;
	var anio = params.anio;
	var artista_id = params.id_artista;

	var album_nuevo = Album.build({'titulo':titulo,'descripcion':descripcion,'imagen':imagen,'anio':anio,'ArtistumId':artista_id});
					album_nuevo.save().then((album_creado) => {
  						console.log(album_creado);
  						res.status(200).send({album_creado});
					}).catch(function (err) {
  						// handle error;
  						console.log(err);
  						res.status(500).send({mesage:'Error al crear el album'});
					});

	
}

function getAlbum(req,res){

	var id_album = req.params.id;
	console.log(id_album);

	Album.find({ where: {id: id_album}, include: [Artista] }).then(function(album_buscado) {
	  if (!album_buscado) {
	    res.status(404).send({mesage:'El album no se ha encontrado'});
	  }
	  else{
	  	res.status(200).send({album_buscado});
	  }
  
  	});
}

function getAlbumsArtista(req,res){

	var id_artista = req.params.id;
	console.log("id artsita albums",id_artista);

	Album.findAll({ where: {ArtistumId: id_artista} }).then(function(albums_buscados) {
	  if (!albums_buscados) {
	    res.status(404).send({mesage:'El album no se ha encontrado'});
	  }
	  else{
	  	return res.status(200).send({albums_buscados});
	  }
  
  	});
}


function actualizarAlbum(req,res){

	var id_album = req.params.id;
	var campos_actualizar = req.body;
	console.log(campos_actualizar);

	Album.update(campos_actualizar,{where:{id:id_album}}).then((album_actualizado)=>{
		if(!album_actualizado){
					 res.status(500).send({mesage:'No se ha podido actualizar el album'});
		}
		else{
				res.status(200).send({album_actualizado});
		}
	});

}

function eliminarAlbum(req,res){

	var id_album = req.params.id;
	var campos_actualizar = req.body;
	console.log(campos_actualizar);

	Album.destroy({where:{id:id_album}}).then((album_eliminado)=>{
		if(!album_eliminado){					
					 res.status(500).send({mesage:'No se ha podido eliminar el album'});
		}
		else{
				res.status(200).send({album_eliminado});
		}
	});

}


function subirImagen(req,res){

	var id_album = req.params.id;
	var nombre_archivo = "Imagen no subida";

	if(req.files){



		//Buscamos si existe una imagen de ese album, y se borra
		//Para no tener archivos innecesarios
		Album.findById(id_album).then(function(album_buscado) {

		  if (!album_buscado) {
		    res.status(404).send({mesage:'El album no se ha encontrado'});
		  }
		  else{
		  	var ruta_archivo = "./subidas/albums/" + album_buscado.imagen;
		  	fs.exists(ruta_archivo,function(exits){

				if(exits){
					//Eliminamos el archivo
					fs.unlinkSync(ruta_archivo);
				}
				

			});
		  	
		  }
  
  		});




		var ruta_archivo = req.files.image.path;
		var archivo_split = ruta_archivo.split('\/');
		nombre_archivo = archivo_split[2];

		var extension_split = nombre_archivo.split('.');
		var extension_imagen = extension_split[1];

		//Comprobar extensión
		if(extension_imagen =='png' || extension_imagen =='jpg' || extension_imagen =='jpeg' || extension_imagen =='gif'){

			Album.update({imagen:nombre_archivo},{where:{id:id_album}}).then((album_actualizado)=>{
				if(!album_actualizado){
					 res.status(200).send({mesage:'No se ha podido actualizar la foto de album'});
				}
				else{
					res.status(200).send({album:album_actualizado,imagen:nombre_archivo});
				}
			});

		}
		else{
			res.status(200).send({message:'Extensión del archivo no válida'});
		}

		console.log(extension_imagen);

	}
	else{
		res.status(200).send({mesage:'No has subido ninguna imagen'});
	}

}

function obtenerImgenAlbum(req,res){

	var archivo_imagen = req.params.imageFile;
	var ruta_archivo = './subidas/albums/' + archivo_imagen;

	fs.exists(ruta_archivo,function(exits){

		if(exits){
			//Enviamos el archivo
			res.sendFile(path.resolve(ruta_archivo));
		}
		else{
			res.status(200).send({mesage:'No existe la imagen'});
		}

	});
}

function albumesArtista(req,res){	
	
	var id_artista = req.params.id;

	Album.findAll({where:{ArtistumId:id_artista}}).then(function(albums_buscados) {

		if (!albums_buscados) {
		  res.status(404).send({mesage:'El album no se ha encontrado'});
		}
		else{
			

			res.status(200).send({albums_buscados});
			
		}

		});
}


function filtrarAlbumes(req,res){
	var album_buscar = req.params.album;
    
	Album.findAll({where:{
		'titulo':{
			$iLike:'%' + album_buscar + '%'
		},
	},attributes:['id','titulo','imagen']}).then(function(albumes_buscados) {
		if (!albumes_buscados) {
		  res.status(404).send({mesage:'El artista no se ha encontrado'});
		}
		else{
			res.status(200).send({albumes_buscados});
		}
	
		});
}


function ultimosAlbumes(req,res){
	Album.findAll({
		attributes:['id','titulo','imagen'],
		limit:6,
		order:[ [ 'updatedAt', 'DESC' ]]
	}).then(function(albumes_buscados){
		if (!albumes_buscados) {
			res.status(404).send({mesage:'El artista no se ha encontrado'});
		  }
		  else{
			  res.status(200).send({albumes_buscados});
		  }
	})
}


module.exports = {
	getAlbums,
	guardarAlbum,
	getAlbum,
	actualizarAlbum,
	eliminarAlbum,
	subirImagen,
	obtenerImgenAlbum,
	getAlbumsArtista,
	albumesArtista,
	filtrarAlbumes,
	ultimosAlbumes
};