'use strict'

var path = require('path');
var fs = require('fs');


var Artista = require('../models/index').artista;
var Album = require('../models/index').album;
var Cancion = require('../models/index').cancion;



function getArtista(req,res){

	var id_artista = req.params.id;
	console.log(id_artista);
	Artista.findById(id_artista).then(function(artista_buscado) {
	  if (!artista_buscado) {
	    res.status(404).send({mesage:'El artista no se ha encontrado'});
	  }
	  else{
	  	res.status(200).send({artista_buscado});
	  }
  
  	});
}


function getArtistas(req,res){

	
	Artista.findAll({raw:true}).then(function(artistas_buscados) {
	  if (!artistas_buscados) {
	    res.status(404).send({mesage:'El artista no se ha encontrado'});
	  }
	  else{
	  	res.status(200).send({artistas_buscados});
	  }
  
  	});
}




function guardarArtista(req,res){

	var params = req.body;
	var nombre = params.nombre;
	var descripcion = params.descripcion;
	var imagen = null;


	var artista_nuevo = Artista.build({'nombre':nombre,'descripcion':descripcion,'imagen':imagen});
					artista_nuevo.save().then((artista_creado) => {
						res.status(200).send({artista_creado});
					}).catch(function (err) {
  						// handle error;
  						res.status(500).send({mesage:'Error al crear el artista'});
					});

	


}

function actualizarArtista(req,res){

	var id_artista = req.params.id;
	var campos_actualizar = req.body;
	console.log(campos_actualizar);

	Artista.update(campos_actualizar,{where:{id:id_artista},returning: true}).then((artista_actualizado)=>{
		if(!artista_actualizado){
					 res.status(500).send({mesage:'No se ha podido actualizar el artista'});
		}
		else{
				res.status(200).send({artista_actualizado});
		}
	});

}

function eliminarArtista(req,res){

	var id_artista = req.params.id;
	var campos_actualizar = req.body;
	console.log(campos_actualizar);

	Artista.destroy({where:{id:id_artista}}).then((artista_eliminado)=>{
		if(!artista_eliminado){					
					 res.status(500).send({mesage:'No se ha podido eliminar el artista'});
		}
		else{
				res.status(200).send({artista_eliminado});
		}
	});

}


function subirImagen(req,res){

	var id_artista = req.params.id;
	var nombre_archivo = "Imagen no subida";

	if(req.files){

		//Eliminamos la foto que tenía antes (si existe)
		//Para no tener archivos innecesarios
		
		Artista.findById(id_artista).then(function(artista_buscado) {
		  if (!artista_buscado) {
		    res.status(404).send({mesage:'El artista no se ha encontrado'});
		  }
		  else{
		  	var ruta_archivo = "./subidas/artistas/" + artista_buscado.imagen;
		  	fs.exists(ruta_archivo,function(exits){

				if(exits){
					//Eliminamos el archivo
					fs.unlinkSync(ruta_archivo);
				}
				

			});
		  	
		  }
  
  		});

		var ruta_archivo = req.files.image.path;
		console.log("Subida foto artista",ruta_archivo);
		var archivo_split = ruta_archivo.split('\/');
		nombre_archivo = archivo_split[2];

		var extension_split = nombre_archivo.split('.');
		var extension_imagen = extension_split[1];

		//Comprobar extensión
		if(extension_imagen =='png' || extension_imagen =='jpg' || extension_imagen =='jpeg' || extension_imagen =='gif'){

			Artista.update({imagen:nombre_archivo},{where:{id:id_artista}}).then((artista_actualizado)=>{
				if(!artista_actualizado){
					 res.status(200).send({mesage:'No se ha podido actualizar la foto de artista'});
				}
				else{
					res.status(200).send({artista:artista_actualizado,imagen:nombre_archivo});
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

function obtenerImgenArtista(req,res){

	var archivo_imagen = req.params.imageFile;
	var ruta_archivo = './subidas/artistas/' + archivo_imagen;

	fs.exists(ruta_archivo,function(exits){
		console.log("Exists de foto artista",exits);
		if(exits){
			//Enviamos el archivo
			console.log("Fichero de artista",ruta_archivo);
			res.sendFile(path.resolve(ruta_archivo));
		}
		else{
			res.status(200).send({mesage:'No existe la imagen'});
		}

	});
}

function filtrarArtistas(req,res){
	var artista_buscar = req.params.artista;
	Artista.findAll({where:{
		'nombre':{
			$iLike:'%' + artista_buscar + '%'
		},
	},attributes:['id','nombre','imagen']}).then(function(artistas_buscados) {
		if (!artistas_buscados) {
		  res.status(404).send({mesage:'El artista no se ha encontrado'});
		}
		else{
			res.status(200).send({artistas_buscados});
		}
	
		});
}


function ultimosArtistas(req,res){
	Artista.findAll({
		attributes:['id','nombre','imagen','descripcion'],
		limit:6,
		order:[ [ 'updatedAt', 'DESC' ]]
	}).then(function(artistas_buscados){
		if (!artistas_buscados) {
			res.status(404).send({mesage:'El artista no se ha encontrado'});
		  }
		  else{
			  res.status(200).send({artistas_buscados});
		  }
	})
}

module.exports = {
	getArtista,
	guardarArtista,
	getArtistas,
	actualizarArtista,
	eliminarArtista,
	subirImagen,
	obtenerImgenArtista,
	filtrarArtistas,
	ultimosArtistas
};