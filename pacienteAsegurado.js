import Paciente from "./paciente.js";

export default class PacienteAsegurado extends Paciente{
    constructor({nombres, fecha, telefono, numberPoliz, fechVigencia, compa}){
        super(nombres, fecha, telefono)
        this._numberPoliz = numberPoliz
        this._fechVigencia = fechVigencia
        this._compa = compa
    }
    
    getPerfil(){
        return `${this._nombres.getNombreCompleto()}, ${this._fechas}`
    }
}