export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this.nombres = nombre
        this.apellidoPaternos = apellidoPaterno
        this.apellidoMaternos = apellidoMaterno
    }
    getNombreCompleto(){
        return `${this.nombres} ${this.apellidoPaternos} ${this.apellidoMaternos}`
    }
    getApellidoNombre(){
        return `${this.apellidoPaternos} ${this.apellidoMaternos} ${this.nombres}`
    }
    getIniciales(){
        let nombreCompleto = `${this.nombres} ${this.apellidoPaternos} ${this.apellidoMaternos}`
        let separador = " "
        let iniciales = [] 
        let nombreSeparado = nombreCompleto.split(separador)
        for(let i=0; i < nombreSeparado.length; i++){
            iniciales[i] = nombreSeparado[i].substring(0, 1)
        }
        return `${iniciales} `

    }
}