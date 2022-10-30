export class TipoServicio {
    private nombre:string;
    private descripcion:string;

    constructor(n:string,d:string){
        this.nombre = n;
        this.descripcion = d;
    }

    getNombre():string{
        return this.nombre;
    }

    getDescripcion():string{
        return this.descripcion;
    }

    setNombre(n:string):void{
        this.nombre=n;
    }

    setDescripcion(d:string):void{
        this.descripcion=d;
    }

    toString():string{
        return "Nombre: " + this.nombre + " Descripción: " + this.descripcion;
    }
}