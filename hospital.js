import Doctor from "./doctor.js"
import Cita from "./cita.js"

export default class Hospital{
    constructor(nombre, direccion){
        this.nombres = nombre
        this.direcciones = direccion
        this.doctores =  Array()
        this.citas =  Array()
    }
    getRegistrarDoctor(doctor){
        this.doctores.push(doctor)
    }
    getListarDoctores(){
        this.doctores.forEach((doctor,i) => {
            console.log(`${doctor.getPerfil()}, ${i}`)
        })
    }
    getRegistrarCitas(cita){
        this.citas.push(cita)
    }
    getListarCitas(){
        this.citas.forEach((cita,i) => {
            console.log(`${cita.getCita()}, ${i}`)
        })
    }
}