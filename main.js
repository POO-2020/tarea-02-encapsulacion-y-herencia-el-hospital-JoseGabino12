import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
class Main{
    constructor(){
         this.horas = new Tiempo(11,30,"AM")
         this.fechas = new Fecha(30,4,2001)
         this.nombres = new Nombre("José Gabino", "Morales", "González")
         this.nombreDoctor = new Nombre("Juan Manuel", "Michel", "Herrera")
         this.telefonos = new Paciente(this.nombres, this.fechas, 3123194899)
         this.doctores = new Doctor(this.nombres, "Oftalmologo", 3123194899, 10203050)
         this.doctor1 = new Doctor(this.nombreDoctor, "Oftalmologo", 3123194899, 10203050)

         this.citas = new Cita(this.fechas, this.horas, this.nombres, this.nombres)
         this.hospitales = new Hospital("Hospital Gab", "Av. San Fernando #312")
    }
    getTempo(){
        console.log(`Son las ${this.horas.getFormato12()}`)
        console.log(`Son las ${this.horas.getFormato24()}`)

    }
    getFecha(){
        console.log(`Año ${this.fechas.getAños()}`)
        console.log(`Meses ${this.fechas.getMeses()}`)
        console.log(`Semanas ${this.fechas.getSemanas()}`)
        console.log(`Días ${this.fechas.getDias()}`)
        console.log(`Fecha ${this.fechas.getFecha()}`)
        console.log(`Día ${this.fechas.getDiaFecha()}`)
    }
    getNombre(){
        console.log(`Nombre ${this.nombres.getNombreCompleto()}`)
        console.log(`Nombre ${this.nombres.getApellidoNombre()}`)
        console.log(`Iniciales ${this.nombres.getIniciales()}`)
    }
    getPaciente(){
        console.log(`Perfil ${this.telefonos.getPerfil()}`)
    }
    getDoctor(){
        console.log(`Doctor ${this.doctores.getPerfil()}`)
    }
    getCita(){
        console.log(`${this.citas.getCita()}`)
    }
    getHospital(){
        this.hospitales.getRegistrarDoctor(this.doctor1)
        this.hospitales.getRegistrarCitas(this.citas)

        this.hospitales.getListarDoctores()
        this.hospitales.getListarCitas()
    }
}
let app = new Main()
app.getHospital()