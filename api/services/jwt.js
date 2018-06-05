'use strict'

var jwt = require('jwt-simple');

//payload fecha de creación y expiración de token
var moment = require('moment');
var clave_secreta = 'wEsqed5SDswa';

exports.createToken = function(usuario){

	var payload ={
		id:usuario.id,
		nombre: usuario.nombre,
		apellidos: usuario.apellidos,
		rol:usuario.rol,
		imagen:usuario.imagen,
		iat:moment().unix(),
		exp:moment().add(15,'days').unix()
	};

	//Ciframos los datos del usuario con secret
	return jwt.encode(payload,clave_secreta);
};


exports.createTokenContrasena = function(usuario){

	var payload ={
		id:usuario.id,
		password: usuario.password,
		exp:moment().add(20,'minutes').unix()
	};

	//Ciframos los datos del usuario con secret
	return jwt.encode(payload,clave_secreta);
};


exports.devolverTokenContrasena = function(token){
	

	try{
		var payload = jwt.decode(token,clave_secreta);

			console.log("payload devolver",payload)
		//Comprobamos fecha de expiración
		if(payload.exp <= moment().unix()){
			return null;
		}

		else{
			return payload;
		}


	}catch(ex){
		console.log(ex);
		return null;
	};

	
};