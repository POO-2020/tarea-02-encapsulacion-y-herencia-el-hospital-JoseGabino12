export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this._nombres = nombre
        this._apellidoPaternos = apellidoPaterno
        this._apellidoMaternos = apellidoMaterno
    }
    getApellidoPaterno(){
        return `${this._apellidoPaternos}`
    }
    getNombreCompleto(){
        return `${this._nombres} ${this._apellidoPaternos} ${this._apellidoMaternos}`
    }
    getApellidoNombre(){
        return `${this._apellidoPaternos} ${this._apellidoMaternos} ${this._nombres}`
    }
    getIniciales(){
        let nombreCompleto = `${this._nombres} ${this._apellidoPaternos} ${this._apellidoMaternos}`
        let separador = " "
        let iniciales = [] 
        let nombreSeparado = nombreCompleto.split(separador)
        for(let i=0; i < nombreSeparado.length; i++){
            iniciales[i] = nombreSeparado[i].substring(0, 1)
        }
        return `${iniciales} `

    }
}