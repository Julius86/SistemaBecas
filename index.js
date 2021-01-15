'use strict'
const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const config = require('./config');
const bodyParser =require('body-parser'); 
const expressLayouts = require('express-ejs-layouts');
const app = express();

// $ npm i -S method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//const mongodbUri =  'mongodb+srv://JulioLop:12345@solicitudesbeca.g8yei.mongodb.net/<dbname>?retryWrites=true&w=majority'

//Settings
//const port = process.env.PORT || 3000;

// Motor de Vistas Handlebars
app.engine('.hbs', hbs({
  defaultLayout : 'index',
  extname: '.hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

//use ejs and express layouts
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

//cargar recursos estaticos
app.use(express.static('public'));
//app.use('/static', express.static(C:\Users\kathy\Documents\Programación web\PrimerApp + '/public'));
app.use('/static', express.static(__dirname + '/public'));

//use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// route our app
const router = require('./app/routes');
app.use('/',router);

//start the server
/*app.listen(port, function() {
    console.log('app started in port 3003');
    });

  // app.listen(3000);*/

//Conexión a BD y levantar Servidor
mongoose.connect( config.db, config.urlParser, ( err,res ) =>{

  if(err){
      return console.log(`Error al conectar la BD ${err}`);
  }
  console.log('Conexion a la BD exitosa');

  app.listen(config.port, ()=>{
      console.log(`API-REST  yeiii ejecutando en http://locahost:${config.port}`)

  });
});
