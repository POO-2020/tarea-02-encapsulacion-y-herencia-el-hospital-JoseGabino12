import Paciente from "./paciente.js";

export default class PacienteAsegurado extends Paciente{
    constructor({nombre, fecha, telefono, numberPoliz, fechVigencia, compa}){
        super(nombre, fecha, telefono)
        this._numberPoliz = numberPoliz
        this._fechVigencia = fechVigencia
        this._compa = compa
    }

    getPerfil(){

    }
}