import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente{
    /**
     * 
     * @param {string} nombre 
     * @param {string} fecha 
     * @param {number} telefono 
     */
    constructor({nombre, fecha, telefono}){
        this._nombres = nombre
        this._fechas = fecha
        this._telefonos = telefono
    }
    getNombreCompleto(){
        return `${this._nombres.getNombreCompleto()}`
    }
    getPerfil(){
        return `${this._nombres.getNombreCompleto()}, ${this._fechas.getFecha()}, ${this._telefonos}`
    }
}