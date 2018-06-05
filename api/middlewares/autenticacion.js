'use strict'

var jwt = require('jwt-simple');


var moment = require('moment');
var clave_secreta = 'wEsqed5SDswa';



//Middleware que comprueba el token
//next para salir de la función
exports.comprobarToken = function(req,res,next){
	if(!req.headers.authorization){
		return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
	}
	//Eliminamos las comillas que nos lleguen del token
	var token = req.headers.authorization.replace(/['"]+/g,'');

	try{
		var payload = jwt.decode(token,clave_secreta);

		//Comprobamos fecha de expiración
		if(payload.exp <= moment().unix()){
			console.log("TOKEN EXPIRADO COMPROBARTOKEN 401")
			return res.status(401).send({message: 'El token ha expirado'});
		}


	}catch(ex){
		console.log(ex);
		console.log("TOKEN EXPIRADO COMPROBARTOKEN 3")
		return res.status(403).send({message: 'Token no válido'});
	};

	req.user = payload;
	next(); //Para salir del middleware
};

//Middleware que comprueba el rol del token
//next para salir de la función
exports.comprobarRolToken = function(req,res,next){
	if(!req.headers.authorization){
		return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
	}
	//Eliminamos las comillas que nos lleguen del token
	var token = req.headers.authorization.replace(/['"]+/g,'');

	try{
		var payload = jwt.decode(token,clave_secreta);

		//Comprobamos fecha de expiración
		if(payload.exp <= moment().unix()){
			return res.status(401).send({message: 'El token ha expirado'});
		}

		if(payload.rol == "ROLE_USER"){
			return res.status(403).send({message: 'No tienes permisos para hacer esto'});
		}


	}catch(ex){
		console.log(ex);
		return res.status(403).send({message: 'Token no válido'});
	};

	req.user = payload;
	next(); //Para salir del middleware
};

//Middleware que comprueba que el usuario
//solo se puede actualizar él mismo
//También se ve la expiración y si el usuario no es administrador

exports.comprobarIdUsuario = function(req,res,next){
	if(!req.headers.authorization){
		return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
	}
	//Eliminamos las comillas que nos lleguen del token
	var token = req.headers.authorization.replace(/['"]+/g,'');

	try{
		var payload = jwt.decode(token,clave_secreta);

		//Comprobamos fecha de expiración
		if(payload.exp <= moment().unix()){
			return res.status(401).send({message: 'El token ha expirado'});
		}

		if(payload.id != req.params.id && payload.rol != "ROLE_ADMIN"){
			return res.status(403).send({message: 'No tienes permisos para hacer esto, este no es tu usuario'});
		}


	}catch(ex){
		console.log(ex);
		return res.status(403).send({message: 'Token no válido'});
	};

	req.user = payload;
	next(); //Para salir del middleware
};


//Obtener los datos del usuario a través del token guardado en el cliente
exports.delvolverIdToken = function(req,res,next){
	if(!req.headers.authorization){
		return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
	}
	//Eliminamos las comillas que nos lleguen del token
	var token = req.headers.authorization.replace(/['"]+/g,'');

	try{
		
		var token_descifrado = jwt.decode(token,clave_secreta);
		
		 res.locals.id = token_descifrado.id;
		 //Comprobamos fecha de expiración
 		if(token_descifrado.exp <= moment().unix()){
 			return res.status(401).send({message: 'El token ha expirado'});
 		}


	}catch(ex){
		console.log(ex);
		return res.status(403).send({message: 'Token no válido'});
	};

	next(); //Para salir del middleware
};


//Obtener los datos del usuario a través del token guardado en el cliente
exports.delvolverIdTokenRefrescar = function(req,res,next){
	if(!req.headers.authorization){
		return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
	}
	//Eliminamos las comillas que nos lleguen del token
	var token = req.headers.authorization.replace(/['"]+/g,'');

		console.log(token)
		
		var token_descifrado = jwt.decode(token,clave_secreta,true);
		
		 res.locals.id = token_descifrado.id;
		


	

	next(); //Para salir del middleware
};
