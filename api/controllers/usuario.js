'use strict'

var user = require('../models/index').usuario;


var bcrypt = require('bcrypt-nodejs');

var pass = bcrypt.genSaltSync(10);


var jwt = require('../services/jwt');


var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize')

//email
var nodemailer = require('../services/email');

function registrarUsuario(req,res,next){


	console.log("ENTRANDO AL REGISTRO")
	console.log(user);

	var params = req.body;

	var nombre = params.nombre;
	var apellidos = params.apellidos;
	var email = params.email;

	var rol = 'ROLE_USER';

	if(email == 'pacomotril18600@gmail.com' || email =='frajepala96@gmail.com'){
		rol = 'ROLE_ADMIN';
	}
	
	var image = null;
	var emailbuscar =email;

	console.log(params);
	if(nombre==null || apellidos==null || email==null){

		res.status(500).send({message:'Los datos no pueden ser vacíos'});

	}

	//Buscamos si existe algún usuario con ese email
	user.find({ where: {email:  emailbuscar.toLowerCase()} }).then(function(usuario) {

		if (usuario) {
    		res.status(500).send({message:'Existe un usuario con ese email'});

 	 	}


 	 	else{
 	 		if(params.password){
				//Encriptar contraseña
				bcrypt.hash(params.password,pass,null,function(err,hash){

					var password = hash;

					var usuario = user.build({'nombre':nombre,'apellidos':apellidos,'email':email.toLowerCase(),'rol':rol,'imagen':image,'password':password});
					usuario.save().then(() => {

					})

					if(err){
						res.status(500).send({message:'Error al crear el usuario'});
					}

					else{
						nodemailer.enviarEmailRegistro(usuario);
						res.status(200).send({usuario});
					}


				});



			}

			else{
				res.status(500).send({message:'Introduzca contraseña'});
			}
 	 	}

  	})


}

function loginUsuario(req,res){

	var params = req.body;
	var emailbuscar = params.email;
	var password = params.password;
	var passwordcomparar=password;

	//Buscamos si existe algún usuario con ese email
	user.findOne({ where: {email:emailbuscar.toLowerCase()} }).then(function(usuario) {
  		console.log(usuario);
		if (!usuario) {
    		res.status(500).send({message:'No existe este usuario'});
 	 	}

 	 	else{
 	 		console.log(usuario.password);

 	 		bcrypt.hash(password,pass,null,function(err,hash){
			var contra= hash;
			console.log(contra);

			})

 	 		//Comprobamos la contraseña
 	 		bcrypt.compare(params.password,usuario.password,function(err,check){
 	 			console.log("Comparacion contraseña: "+check);
 	 			if(check){
 	 				//devolvemos los usuarios del usuario
 	 				if(params.gethash){

						//nodemailer.enviarEmail(usuario);
 	 					//devolver token de jwt (creamos token)
 	 					res.status(200).send({
 	 						token: jwt.createToken(usuario)
 	 					});
 	 				}
 	 				else{
 	 					res.status(200).send({usuario});
 	 				}
 	 			}
 	 			else{
 	 				res.status(404).send({message:'El usuario no ha podido loguearse'});
 	 			}
 	 		});


 	 	}

 	 })



}

function actualizarUsuario(req,res){

	var id_usuario = req.params.id;
	var campos_actualizar = req.body;
	console.log(campos_actualizar);

	user.update(campos_actualizar,{where:{id:id_usuario},returning: true}).then((usuario_actualizado)=>{
		if(!usuario_actualizado){
					return res.status(500).send({mesage:'No se ha podido actualizar el usuario'});
				}
				else{
					return res.status(200).send({usuario_actualizado});
				}
	});



}

function buscaUser(req,res){
	//console.log(user);
	var id_usuario=null;

	if ( res.locals.id) {
			 id_usuario =  res.locals.id;
	 }
	 console.log("Midlleware",id_usuario);


	 user.findById(id_usuario).then(function(usuario) {
 			if (!usuario) {
 				 return res.status(404).send({mesage:'Error al buscar usuario'});
 			}
 			else{
 				console.log(usuario);
 				 return res.status(200).send({usuario});
 			}

 			});

}

function InfoUsuario(req,res){
	//console.log(user);
	

	var id_usuario = req.params.id;
	 console.log("Midlleware",id_usuario);


	 user.findById(id_usuario,{attributes:['nombre','apellidos','imagen']}).then(function(usuario) {
 			if (!usuario) {
 				 return res.status(404).send({mesage:'Error al buscar usuario'});
 			}
 			else{
 				console.log(usuario);
 				 return res.status(200).send({usuario});
 			}

 			});

}

function subirImagen(req,res){

	var id_usuario = req.params.id;
	var nombre_archivo = "Imagen no subida";

	if(req.files){

		user.findById(id_usuario).then(function(usuario_buscado) {
		  if (!usuario_buscado) {
		    res.status(404).send({mesage:'El usuario no se ha encontrado'});
		  }
		  else{
		  	var ruta_archivo = "./subidas/usuarios/" + usuario_buscado.imagen;
		  	fs.exists(ruta_archivo,function(exits){

				if(exits){
					//Eliminamos el archivo
					fs.unlinkSync(ruta_archivo);
				}


			});

		  }

  		});

			console.log(req.files);
		var ruta_archivo = req.files.image.path;
		var archivo_split = ruta_archivo.split('\/');
		nombre_archivo = archivo_split[2];

		var extension_split = nombre_archivo.split('.');
		var extension_imagen = extension_split[1];

		//Comprobar extensión
		if(extension_imagen =='png' || extension_imagen =='jpg' || extension_imagen =='jpeg' || extension_imagen =='gif'){

			user.update({imagen:nombre_archivo},{where:{id:id_usuario}}).then((usuario_actualizado)=>{
				if(!usuario_actualizado){
					 res.status(200).send({message:'No se ha podido actualizar la foto de usuario'});
				}
				else{
					res.status(200).send({usuario:usuario_actualizado,imagen:nombre_archivo});
				}
			});

		}
		else{
			res.status(200).send({message:'Extensión del archivo no válida'});
		}

	}
	else{
		res.status(200).send({mesage:'No has subido ninguna imagen'});
	}

}


function obtenerImgenUsuario(req,res){

	var archivo_imagen = req.params.imageFile;
	var ruta_archivo = './subidas/usuarios/' + archivo_imagen;

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

function obtenerTokenContrasena(req,res){
	var params = req.body;
	var emailbuscar = params.email;

	console.log("email para contraseña",req.body)

	user.findOne({ where: {email:emailbuscar.toLowerCase()} }).then(function(usuario) {
		console.log(usuario);
	  if (!usuario) {
		  res.status(500).send({message:'No existe este usuario'});
		}
		else{

			var token_devolver = jwt.createTokenContrasena(usuario);
			nodemailer.enviarEmailTokenContrasena(emailbuscar,token_devolver);
			res.status(200).send({
				token: token_devolver
			});
		}
		
	})


}

function obtenerContrasenaToken(req,res){
	var token = req.params.token;

	var payload = jwt.devolverTokenContrasena(token);

	console.log("payload",payload);

	if(payload==null){
		res.status(404).send({message:'Token malo'});
   }
   else{
	user.findById(payload.id).then(function(usuario_buscado) {
		console.log("payload en actualizar",payload.id)
		if (!usuario_buscado) {
			console.log("Las contraseñas no son iguales")
		  res.status(404).send({mesage:'El usuario no se ha encontrado'});
		}
		else{
			if(usuario_buscado.password == payload.password){
				console.log("Las contraseñas son iguales")
				//Si la contraseña es igual, actualizamos el payload
				return res.status(200).send({message:'Perfecto'});
			}

			else{
				return res.status(500).send({mesage:'No se ha podido actualizar el usuario'});
			}

		}

		});
   }
}


function actualizarCotrasenaToken(req,res){
	var token = req.params.token;
	var params = req.body;
	var password = params.password;

	var payload = jwt.devolverTokenContrasena(token);

	if(payload==null){
		res.status(404).send({message:'Token malo'});
   }
   else{


	user.findById(payload.id).then(function(usuario_buscado) {
		console.log("payload en actualizar",payload.id)
		if (!usuario_buscado) {
			console.log("Las contraseñas no son iguales")
		  res.status(404).send({mesage:'El usuario no se ha encontrado'});
		}
		else{
			if(usuario_buscado.password == payload.password){
				console.log("Las contraseñas son iguales")
				//Si la contraseña es igual, actualizamos el payload
				bcrypt.hash(password,pass,null,function(err,hash){
					//La contraseña es hash
				user.update({password:hash},{where:{id:payload.id},returning: true}).then((usuario_actualizado)=>{
					if(!usuario_actualizado){
								return res.status(500).send({mesage:'No se ha podido actualizar el usuario,las contraseas no son iguales'});
							}
							else{
								return res.status(200).send({usuario_actualizado});
							}
				});
			   });
			}

			else{
				return res.status(500).send({mesage:'No se ha podido actualizar el usuario'});
			}

		}

		});




	
}


}

function filtrarUsuarios(req,res){
	var busqueda = req.params.usuario;
	user.findAll({
		where:{
			$or: [
				Sequelize.where(Sequelize.fn('concat', Sequelize.col('nombre'), ' ', Sequelize.col('apellidos')), {
				  $ilike: '%' + busqueda + '%'
				}),
				  { nombre: { $ilike: '%' + busqueda + '%' } },
				  { apellidos: { $ilike: '%' + busqueda + '%' } }
			  ]
		}
	,attributes:['nombre','id','apellidos','imagen']}).then(function(usuarios_buscados){
		if (!usuarios_buscados) {
			return res.status(404).send({mesage:'Error al buscar usuarios'});
	   }
	   else{
		   console.log(usuarios_buscados);
			return res.status(200).send({usuarios_buscados});
	   }
	})
}



function refrescarToken(req,res){
	var id_usuario=null;

	if ( res.locals.id) {
			 id_usuario =  res.locals.id;
	 }
	 console.log("Midlleware",id_usuario);


	 user.findById(id_usuario).then(function(usuario) {
 			if (!usuario) {
 				 return res.status(404).send({mesage:'Error al buscar usuario'});
 			}
 			else{
 				console.log(usuario);
				 res.status(200).send({
					token: jwt.createToken(usuario)
				});
 			}

 			});
}

module.exports = {
	registrarUsuario,
	buscaUser,
	loginUsuario,
	actualizarUsuario,
	subirImagen,
	obtenerImgenUsuario,
	obtenerTokenContrasena,
	obtenerContrasenaToken,
	actualizarCotrasenaToken,
	InfoUsuario,
	filtrarUsuarios,
	refrescarToken
};
