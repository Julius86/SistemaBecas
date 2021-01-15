//import modules
const express = require ('express');
const { collection, db } = require('./models/personales');
const Personales = require('./models/personales');
let solicitud = new Personales();

//create a router object
const router = express.Router();

//export our router
module.exports = router;

//const correoa = "kathy.ramos17@tectijuana.edu.mx";
//const passworda = "17211556";
//const correod = "david.becerra@tectijuana.edu.mx";
//const passwordD = "cruzAzul"

//route to HOME
 router.get('/', function(req, res){
     res.render('pages/home',);
 });

router.get('/login', function(req, res){
    res.render('pages/login');
});

router.get('/recuperarContrasena', function(req, res){
    res.render('pages/recuperarContrasena');
});

router.get('/loginDocente', function(req, res){
    res.render('pages/loginDocente');
});

router.get('/personales', function(req, res){
    res.render('pages/datosPersonales');
});

router.post('/personales', function(req, res){
    solicitud.paterno = req.body.aPaterno;
    solicitud.materno = req.body.aMaterno;
    solicitud.nombres = req.body.nombre;
    solicitud.edad = req.body.Edad;
    solicitud.estadocivil = req.body.edoCivil;
    solicitud.direccion = req.body.Dir;
    solicitud.telefono = req.body.NoCel;
    solicitud.becaanterior = req.body.AntecedenteBeca;

    res.render('pages/datosAcademicos');
});

router.get('/academicos', function(req, res){
    res.render('pages/datosAcademicos');
});

router.post('/academicos', function(req, res){
    solicitud.nocontrol = req.body.noControl;
    solicitud.carrera = req.body.carrera;
    solicitud.semestre = req.body.semestre;
    solicitud.turno = req.body.turno;
    solicitud.examenespecial = req.body.especial;
    solicitud.creditos = req.body.NoCreditos;
    solicitud.adeudo = req.body.adeudo;
    solicitud.trabaja = req.body.trabajo;

    res.render('pages/datosSocioeconomicos');
    /*solicitud.save( (err, solicitudStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en BD ${err} `})
        res.status(200).send( {message:`Se ha guardado correctamente la información. `, solicitud: solicitudStored } )
    });*/
});

router.get('/socioeconomicos', function(req, res){
    res.render('pages/datosSocioeconomicos');
});

router.post('/socioeconomicos', function(req, res){
    solicitud.ingresomes = req.body.ingresosMensuales;
    solicitud.vivecon = req.body.viveCon;
    solicitud.tiempovivienda = req.body.tiempoenVivienda;
    solicitud.nopersonas = req.body.nodePersonas;
    solicitud.casa = req.body.casaEs;
    solicitud.casamateria = req.body.casaEsDe;
    solicitud.norecamaras = req.body.noRecamaras;
    solicitud.agua = req.body.agua;
    solicitud.luz = req.body.luz;
    solicitud.drenaje = req.body.drenaje;
    solicitud.tel = req.body.telefono;
    solicitud.internet = req.body.internet;
    solicitud.tv = req.body.tv;
    solicitud.autos = req.body.autos;
    solicitud.transporte = req.body.transporte;
    solicitud.descripFamiliares = req.body.descripFamiliares;

    res.render('pages/requisitos');
    /*solicitud.save( (err, solicitudStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en BD ${err} `})
        res.status(200).send( {message:`Se ha guardado correctamente la información. `, solicitud: solicitudStored } )
    });*/
});

router.get('/requisitos', function(req, res){
    res.render('pages/requisitos');
});

router.post('/requisitos', function(req, res){
    var d = new Date();
    solicitud.horario = req.body.horario;
    solicitud.promedio = req.body.promedio;
    solicitud.kardex = req.body.kardex;
    solicitud.comprobanteIngresos = req.body.comprobanteIngresos;
    solicitud.credencial = req.body.credencial;
    solicitud.DecirVerdad = req.body.DecirVerdad;
    solicitud.capacidadesDiferentes = req.body.capacidadesDiferentes;
    solicitud.becaEspecial = req.body.becaEspecial;
    solicitud.servicio = req.body.servicio;
    solicitud.hijo = req.body.hijo;
    solicitud.noHijos = req.body.noHijos;
    solicitud.actaHijo = req.body.actaHijo;
    solicitud.equipo = req.body.equipo;
    solicitud.motivosdeBeca = req.body.motivosdeBeca;
    solicitud.acuerdo = req.body.acuerdo;
    solicitud.estadoBeca = 'En Proceso';
    solicitud.fecha = d.toString();

    solicitud.save( (err, solicitudStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en BD ${err} `})
        res.status(200).send( {message:`Se ha guardado correctamente la información. `, solicitud: solicitudStored } )
    });
});

router.get('/solicitudes', function(req, res){
    Personales.find({}, (err, database)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
        if(!database) return res.status(404).send({message:`No se encontró información.`})
        res.render('pages/solicitudes', {data: database});
    })
});

/*router.get('/solicitudes/:numcontrol', function(req, res){
    Personales.findById({numcontrol}, (err, database)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
        if(!database) return res.status(404).send({message:`No existen productos`})
        //numcontrol = database.noControl;
        res.render('pages/veralumno', {data: database});
    })
});*/

router.get('/inicioAlumno', function(req, res){
    Personales.find({}, (err, database)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
        if(!database) return res.status(404).send({message:`No se encontró información.`})
        res.render('pages/inicioAlumno', {data: database});
    })
});

router.get('/inicioAlumno/:logID', (req, res)=>{
    let logID= req.params.logID;
    database = null;    
    //console.log('El numero de control es: ', alID)
    Personales.findOne({_id : logID}, (err, datawea)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion ${err}`})
        if(!datawea) return res.status(404).send({message:`No existen datos para ${logID}`})
        res.render('pages/inicioAlumno', {wea: datawea});
        //console.log(datawea)
    })
});

/*router.get('/veralumno', function(req, res){
    res.render('pages/veralumno', {data: database});
});*/

router.get('/ver/:alID', (req, res)=>{
    let alID= req.params.alID;
    database = null;    
    //console.log('El numero de control es: ', alID)
    Personales.findOne({_id : alID}, (err, datawea)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion ${err}`})
        if(!datawea) return res.status(404).send({message:`No existen datos para ${alID}`})
        res.render('pages/ver', {wea: datawea});
        //console.log(datawea)
    })
});

/*router.get('', function(req, res){
res.
});*/
/*
router.post('/loginAlumno', function(req, res){
    var correoEntrada = req.body.correoA;
    var passwordEntrada = req.body.passwordA;

    if (correoEntrada =! correoa){
            alert("¡Correo incorrecto!");
    }
    res.render('pages/datos');
});*/


