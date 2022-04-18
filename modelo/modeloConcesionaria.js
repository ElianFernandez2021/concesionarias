let fs = require('fs')
let autosDB = JSON.parase(fs.readFileSync('./data/autos.json', 'utf-8'))
let escribirJson = (array) => {
fs.writeFileSync('./data/autos.json', JSON.stringify(array), 'utf-8')
}


let concesionaria = {
autos: autosDB,
buscarAuto : function (patente) {//uso patente como parametro para luego pasarlo al metodo find
    let autoEncontrado = this.autos.find(auto => auto.patente == patente)//El metodo This recorre un array y devuelve el valor que coincida con el valor introducido
if(autoEncontrado){
    return autoEncontrado//devuelve el auto con la patente que coincida con la busqueda
}else {
    return null//si ninguna patente coincide devuelve null
}
},
venderAuto : function (patente){
    let auto = this.buscarAuto(patente)//el this sirve para hacer refeencia al modulo en el que me encuentro trabajando

    if(auto.vendido == false){
auto.vendido = true
escribirJson(this.autos)
return auto
}
},
autosParaLaVenta : function () {
return this.autos.filter(auto => auto.vendido == false)
},
autosNuevos: function () {
    return this.autosParaLaVenta().filter(auto => auto.km <= 100)
},
listaDeVentas : function () {
    let autosVendidos = this.autos.filter(auto => auto.vendido === true);
return autosVendidos.map(auto => auto.precio)
},
totalDeVentas: function () {
    let vendidos = this.listaDeVentas()
 let total = vendidos.length !== 0 ? vendidos.reduce((acum, item) => acum + item) : 0//el metodo reduce en este caso itera un array con numeros y devuelve la suma total de el mismo, acá devuelve la suma total de las ventas realizadas
 return total
},
puedeComprar: function ( auto, persona) {
    let cuota = auto.precio / auto.cuotas
    return auto.precio <= persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas >= cuota
},
autosQuePuedeComprar: function (persona) {
    let autosDisponibles = this.autosParaLaVenta()
  return autosDisponibles.filter(auto => this.puedeComprar(auto, persona))
  
    /* let autosQuePuedeComprar = []
   autosDisponibles.forEach(auto => {
       if(this.puedeComprar(auto,persona)){
           autosQuePuedeComprar.push(auto)
       }
   });
   return autosQuePuedeComprar */
}
}

module.exports = concesionaria