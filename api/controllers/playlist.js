'use strict'


var Playlist = require('../models/index').playlist;
var Usuario = require('../models/index').usuario;
var SiguePlaylist = require('../models/index').sigue;
var CancionPlaylist = require('../models/index').cancion_playlist;
var Cancion = require('../models/index').cancion;
var Artista = require('../models/index').artista;
var Album = require('../models/index').album;
function crearPlaylist(req,res){
    
    var params = req.body;
    var nombre = params.nombre;
    var id_usuario = res.locals.id ;
      
    var playlist_nueva = Playlist.build({'nombre':nombre,'UsuarioId':id_usuario});


    playlist_nueva.save().then((playlist_creada)=>{
        
        res.status(200).send({playlist_creada});
    }).catch(function (err) {
        // handle error;
        res.status(500).send({mesage:'Error al crear el playlist'});
    });
    
}

function eliminarPlaylist(req,res){
    var id_playlist = req.params.id;
    
    var id_usuario = res.locals.id ;

    Playlist.destroy({where:{id:id_playlist,UsuarioId:id_usuario}}).then((playlist_eliminado)=>{
		if(!playlist_eliminado){					
					 res.status(500).send({mesage:'No se ha podido eliminar la playlist'});
		}
		else{
				res.status(200).send({playlist_eliminado});
		}
	}); 
    
}


function getPlaylist(req,res){
    var id_playlist = req.params.id;
    

    Playlist.find({ where: {id: id_playlist}, include: [{throught:{attributes:[]},model:Usuario,attributes:['id','nombre']},{model:Cancion,through:{attributes:[]},attributes:['id','nombre','duracion','archivo'],as:'canciones',include:[{
        model:Album,attributes:['titulo','id'],include:{model:Artista,attributes:['nombre','id']}
    }]},],attributes: ['id', 'nombre'] }).then(function(playlist_buscado) {
        if (!playlist_buscado) {
          res.status(404).send({mesage:'La playlist no se ha encontrado'});
        }
        else{

            res.status(200).send({playlist_buscado});
        }
    
        });
    
}



function getPlaylists(req,res){    
    

    Playlist.findAll({ include: [{model:Usuario,attributes:['id','nombre']}],attributes: ['id', 'nombre'] }).then(function(playlists_buscadas) {
        if (!playlists_buscadas) {
          res.status(404).send({mesage:'Las playlists no se han encontrado'});
        }
        else{
            res.status(200).send({playlists_buscadas});
        }
    
        });
    
}


function seguirPlaylist(req,res){   
    

    var id_usuario = res.locals.id ;
    
    var id_playlist = req.params.id;

        console.log("id_usuario",id_playlist)

    var sigue_playlist_nueva =  SiguePlaylist.build({'playlist':id_playlist,'usuario':id_usuario,'createdAt': new Date()});


    sigue_playlist_nueva.save().then((sigue_playlist_creada)=>{
        res.status(200).send({sigue_playlist_creada});
    }).catch(function (err) {
        // handle error;
        console.log(err)
        res.status(500).send({mesage:'Error al crear el sigue_playlist'});
    });
    
}

function dejarSeguirPlaylist(req,res){
    var id_usuario = res.locals.id ;
    var id_playlist = req.params.id;
    SiguePlaylist.destroy({where:{playlist:id_playlist,usuario:id_usuario}}).then((sigue_eliminado)=>{
		if(!sigue_eliminado){					
					 res.status(500).send({mesage:'No se ha podido eliminar la playlist'});
		}
		else{
				res.status(200).send({sigue_eliminado});
		}
	}); 
}

function getPlaylistsCreadas(req,res){
    var id_usuario = res.locals.id ;
    console.log("hola")
    Playlist.findAll({attributes:['id','nombre'],
        include: [ { model: Usuario, where:{id:id_usuario},attributes:[] } ]
      }).then((playlists_buscados)=>{
		if(!playlists_buscados){					
					 res.status(500).send({mesage:'No se ha podido eliminar la playlist'});
		}
		else{
				res.status(200).send({playlists_buscados});
		}
	}); 
}

function getPlaylistSeguida(req,res){
    var id_usuario = res.locals.id ;
    var id_playlist = req.params.id;
    
    Usuario.findOne({where:{id : id_usuario},attributes:[],
        include: [ { model: Playlist, as:'playlists',attributes:['nombre','id'],
        where:{id:id_playlist},
    through:{attributes:[]}} ]
      }).then((playlists_buscados)=>{
		if(!playlists_buscados){					
					 res.status(500).send({sigue:false});
		}
		else{
				res.status(200).send({sigue:true});
		}
	}); 
}

function getPlaylistsSeguidas(req,res){
    var id_usuario = res.locals.id ;
    console.log("hola")
    Usuario.findOne({where:{id : id_usuario},attributes:[],
        include: [ { model: Playlist, as:'playlists',attributes:['nombre','id'],
    through:{attributes:[]}} ]
      }).then((playlists_buscados)=>{
		if(!playlists_buscados){					
					 res.status(500).send({mesage:'No se ha podido eliminar la playlist'});
		}
		else{
				res.status(200).send({playlists_buscados});
		}
	}); 
}




function modificarPlaylist(req,res){

    var id_playlist = req.params.id;
    var campos_actualizar = req.body;
    var nombre_playlist = campos_actualizar.nombre;
    var id_usuario = res.locals.id ;

	

	Playlist.update(campos_actualizar,{where:{id:id_playlist,UsuarioId:id_usuario},returning: true}).then((playlist_actualizado)=>{
		if(!playlist_actualizado){
					 res.status(500).send({mesage:'No se ha podido actualizar la playlist'});
		}
		else{
				res.status(200).send({playlist_actualizado});
		}
	});

}

function addCancionPlaylist(req,res){

    var id_playlist = req.params.id;
    var campos_actualizar = req.body;
    var id_cancion = campos_actualizar.id;
    var id_usuario = res.locals.id ;
    console.log("id_cancion", id_cancion);


    Playlist.find({ where: {id: id_playlist,UsuarioId:id_usuario}}).then(function(playlist_buscado) {
        if (!playlist_buscado) {
            //No se ha encontrado la playlist
          res.status(404).send({mesage:'La playlist no se ha encontrado'});
        }
        else{               

            var cancion_playlist_nueva =  CancionPlaylist.build({'CancionId':id_cancion,'PlaylistId':id_playlist});


            cancion_playlist_nueva.save().then((cancion_playlist_creada)=>{
                res.status(200).send({cancion_playlist_creada});
            }).catch(function (err) {
                // handle error;
                res.status(500).send({mesage:'Error al crear el cancion_playlist'});
            });
        }
    
        });
}

function borrarCancionPlaylist(req,res){

    var id_playlist = req.params.id;
    var campos_actualizar = req.body;
    var id_cancion = campos_actualizar.id_cancion;
    var id_usuario = res.locals.id ;
    console.log("id_cancion", id_cancion);

    Playlist.find({ where: {id: id_playlist,UsuarioId:id_usuario}}).then(function(playlist_buscado) {
        if (!playlist_buscado) {
            //No se ha encontrado la playlist
          res.status(404).send({mesage:'La playlist no se ha encontrado'});
        }
        else{               
            CancionPlaylist.destroy({where:{CancionId:id_playlist,PlaylistId:id_playlist}}).then((cancion_playlist_eliminado)=>{
                if(!cancion_playlist_eliminado){					
                             res.status(500).send({mesage:'No se ha podido eliminar la canción de la playlist'});
                }
                else{
                        res.status(200).send({cancion_playlist_eliminado});
                }
            }); 
            
        }
    
        });
}


function filtrarPlaylists(req,res){

    var artista_buscar = req.params.playlist;
    
	Playlist.findAll({where:{
		'nombre':{
			$iLike:'%' + artista_buscar + '%'
		},
	},attributes:['id','nombre']}).then(function(playlists_buscados) {
		if (!playlists_buscados) {
		  res.status(404).send({mesage:'El artista no se ha encontrado'});
		}
		else{
			res.status(200).send({playlists_buscados});
		}
	
		});
}


function getPlaylistsCreadasUsuario(req,res){
    var id_usuario = req.params.id ;
    console.log("hola")
    Playlist.findAll({attributes:['id','nombre'],
        include: [ { model: Usuario, where:{id:id_usuario},attributes:[] } ]
      }).then((playlists_buscados)=>{
		if(!playlists_buscados){					
					 res.status(500).send({mesage:'No se ha podido eliminar la playlist'});
		}
		else{
				res.status(200).send({playlists_buscados});
		}
	}); 
}


function getPlaylistsSeguidasUsuario(req,res){
    var id_usuario = req.params.id ;
    console.log("hola")
    Usuario.findOne({where:{id : id_usuario},attributes:[],
        include: [ { model: Playlist, as:'playlists',attributes:['nombre','id'],
    through:{attributes:[]}} ]
      }).then((playlists_buscados)=>{
		if(!playlists_buscados){					
					 res.status(500).send({mesage:'No se ha podido eliminar la playlist'});
		}
		else{
				res.status(200).send({playlists_buscados});
		}
	}); 
}

module.exports = {
    crearPlaylist,
    eliminarPlaylist,
    getPlaylist,
    getPlaylists,
    seguirPlaylist,
    dejarSeguirPlaylist,
    getPlaylistsSeguidas,
    modificarPlaylist,
    addCancionPlaylist,
    borrarCancionPlaylist,
    getPlaylistsCreadas,
    filtrarPlaylists,
    getPlaylistSeguida,
    getPlaylistsCreadasUsuario,
    getPlaylistsSeguidasUsuario

};
