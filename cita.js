export default class Cita{
    constructor(fecha, hora, doctor, paciente){
        this.fechas = fecha
        this.horas = hora
        this.doctores = doctor
        this.pacientes = paciente
    }
    getCita(){
        return `${this.fechas.getFecha()}, ${this.horas.getFormato24()}, Dr. ${this.doctores.getNombreCompleto()}, ${this.pacientes.getNombreCompleto()}`
    }
}