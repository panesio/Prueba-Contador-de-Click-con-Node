const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

//Uso de Middlewares

app.use(cookieParser());
app.use(cookieSession({ secret: "I'm a secret" }));

//Declarar la ruta en la cual queremos que se active la cookie

app.get('/', (peticion, respuesta) => {
    /*  if (peticion.session.visitas) {
         n = peticion.session.visitas++;
     } else {
         peticion.session.visitas = 0;
     }


     -------------------------------------

     let n= (peticion.session.visitas) ? peticion.session.visitas++ : (peticion.session.visitas=0);
     
     */

    peticion.session.visitas || (peticion.session.visitas = 0);
    let n = peticion.session.visitas++;
    respuesta.end(`<h1>Visita # ${n}</h1>`);

})

app.listen(8080);
console.log("Conexion realizada");