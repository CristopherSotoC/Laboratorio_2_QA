
export interface TipoAsiento {
    getNombre():string;

    getDescripcion():string;

    setNombre(n:string):void;

    setDescripcion(d:string):void;

    imprimir():string;
}
