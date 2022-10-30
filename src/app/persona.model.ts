export class Persona {
    private nombre:string;
    private cedula:number;
    private edad:number;

    constructor(nombre:string, cedula:number, edad:number) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
    }

    public getNombre():string {
        return this.nombre;
    }

    public setNombre(nombre:string):void {
        this.nombre = nombre;
    }

    public getCedula():number {
        return this.cedula;
    }

    public setCedula(cedula:number):void {
        this.cedula = cedula;
    }

    public getEdad():number {
        return this.edad;
    }

    public setEdad(edad:number):void {
        this.edad = edad;
    }

    public toString():string {
        return "Persona{" + "nombre=" + this.nombre + ", cedula=" + this.cedula + ", edad=" + this.edad + '}';
    }
}
