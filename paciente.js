import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente{
    /**
     * 
     * @param {string} nombre 
     * @param {string} fecha 
     * @param {number} telefono 
     */
    constructor(nombre, fecha, telefono){
        this.nombres = nombre
        this.fechas = fecha
        this.telefonos = telefono
    }
    getPerfil(){
        return `${this.nombres.getNombreCompleto()}, ${this.fechas.getFecha()}, ${this.telefonos}`
    }
}