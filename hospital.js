import Doctor from "./doctor.js"
import Cita from "./cita.js"

export default class Hospital{
    constructor({nombre, direccion}){
        this._nombres = nombre
        this._direcciones = direccion
        this._doctores =  Array()
        this._citas =  Array()
    }
    getRegistrarDoctor(doctor){
        this._doctores.push(doctor)
    }
    getListarDoctores(){
        this._doctores.forEach((doctor,i) => {
            console.log(`No.- ${i + 1}: ${doctor.getPerfil()}`)
        })
    }
    getRegistrarCitas(cita){
        this._citas.push(cita)
    }
    getListarCitas(){
        this._citas.forEach((cita,i) => {
            console.log(`No.- ${i + 1}: ${cita.getCita()}`)
        })
    }
}