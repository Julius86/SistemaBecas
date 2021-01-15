'use strict'

//const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SolicitudSchema = Schema({
    paterno: { type: String, uppercase:true },
    materno: { type: String, uppercase:true },
    nombres: { type: String, uppercase:true },
    edad: { type: Number },
    estadocivil: { type: String, enum: ['Soltero', 'Casado'] },
    direccion: { type: String, uppercase:true },
    telefono: { type: Number },
    becaanterior: { type: String, enum: ['Primera vez', 'Anteriormente'] },
    nocontrol: { type: String, unique:true },
    carrera: { type: String, uppercase:true },
    semestre: { type: Number },
    turno: { type: String, enum: ['MATUTINO', 'VESPERTINO'] },
    examenespecial: { type: String, enum: ['SI', 'NO'] },
    creditos: { type: Number },
    adeudo: { type: String, enum: ['SI', 'NO'] },
    trabaja: { type: String, enum: ['SI', 'NO'] },
    ingresomes: { type: Number },
    vivecon: { type: String, enum: ['Solo', 'Padres', 'Familiares', 'Esposo(a)', 'Amigos'] },
    tiempovivienda: { type: String },
    nopersonas: { type: String },
    casa: { type: String, enum: ['Propia', 'Rentada', 'Prestada', 'Otra'] },
    casamateria: { type: String, enum: ['Material', 'Madera', 'Otro'] },
    norecamaras: { type: Number },
    agua: { type: String, default: 'No' },
    luz: { type: String, default: 'No' },
    drenaje: { type: String, default: 'No' },
    tel: { type: String, default: 'No' },
    internet: { type: String, default: 'No' },
    tv: { type: String, default: 'No' },
    autos: { type: Number },
    transporte: { type: String, enum: ['Propio', 'Familiar', 'Camion', 'Taxi', 'App Web', 'Otro'] },
    descripFamiliares: { type: String },
    horario: { type: String },
    promedio: { type: Number },
    kardex: { type: String },
    comprobanteIngresos: { type: String },
    cartaTrabajo: { type: String },
    INE: { type: String },
    comprobanteDomicilio: { type: String },
    credencial: { type: String },
    DecirVerdad: { type: String },
    capacidadesDiferentes: { type: String, enum: ['si', 'no'] },
    becaEspecial: { type: String },
    servicio: { type: String, enum: ['si', 'no'] },
    hijo: { type: String, enum: ['si', 'no'] },
    noHijos: { type: Number },
    actaHijo: { type: String },
    equipo: { type: String, enum: ['si', 'no'] },
    motivosdeBeca: { type: String },
    acuerdo: { type: String, enum: ['si', 'no'] },
    estadoBeca: { type: String },
    fecha: { type: String }

});

module.exports = mongoose.model('Solicitud', SolicitudSchema);