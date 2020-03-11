import Nombre from "./nombre.js"
export default class Doctor{
    constructor(nombre, especialidad, telefono, cedula){
        this.nombres = nombre
        this.especialidades = especialidad
        this.telefonos = telefono
        this.cedulas = cedula
    }
    getPerfil(){
        return `${this.cedulas}, ${this.especialidades}, ${this.nombres.getNombreCompleto()}, ${this.telefonos}`
    }
}