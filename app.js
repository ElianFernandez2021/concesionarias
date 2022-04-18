let concesionaria = require('./modulo/moduloConcesionaria');
let fs = require('fs')
let autosDB = JSON.parase(fs.readFileSync('./data/autos.json', 'utf-8'))
let personasDB = JSON.parase(fs.readFileSync('./data/personas.json', 'utf-8'))

//console.log(concesionaria.autos)
//console.log(concesionaria.buscarAuto("ABC584"))
//console.log(concesionaria.venderAuto('ABC584'))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.puedeComprar(autosDB[0], personasDB[1]))
console.log(concesionaria.autosQuePuedeComprar(autosDB[0], personasDB[1]))