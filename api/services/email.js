'use strict'

//Importamos el modulo de nodemailer
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tuemail',
      pass: 'tupassword'
    },
    tls: {
      rejectUnauthorized: false
  }
  });
  
  var mailOptions = {
    from: 'pacomotril18600@gmail.com',
    to: 'frajepala@msn.com',
    subject: 'Login',
    html: ''
  };
  

  exports.enviarEmail = function(usuario){
    console.log("usuario al enviar el correo",usuario)
    mailOptions.to = usuario.email;
    mailOptions.text = "Bienvenido a UGRFY " + usuario.nombre + " " + usuario.apellidos
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
    }

    

        exports.enviarEmailRegistro = function(usuario){
            console.log("usuario al enviar el correo de registro",usuario.email)
            mailOptions.to = usuario.email;
            mailOptions.html = '<h1>Bienvenido '+usuario.nombre + ' '+ usuario.apellidos+'</h1>'+
                                '<p>Ya puedes usar esto para escuchar música</p>'
           // mailOptions.text = "Bienvenido a UGRFY " + usuario.nombre + " " + usuario.apellidos
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
            }


            exports.enviarEmailTokenContrasena = function(email,token){
              console.log("usuario al enviar el correo de registro",email)
              mailOptions.to = email;
              mailOptions.html = '<h1>Buenas</h1>'+
                                  '<p>Aquí tienes tu enlace para restablecer tu contraseña, tienes 20 minutos</p>'
                                  + '<a href="http://localhost:4200/restablecer-contrasena/'+
                                  token + '"' +
                                  '>Link</a>'
             // mailOptions.text = "Bienvenido a UGRFY " + usuario.nombre + " " + usuario.apellidos
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
              }

