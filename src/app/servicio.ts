export interface Servicio {
    new () : Servicio ;
    /*************************** */
    setTipo(tipoServicio :  string): void;
    getTipo(tipoServicio : string): string;

    setPrecioServicio(precio : number): boolean;

    getPrecioServicio(): number;
    
    setIdServicio(id:number):number;

    getIdServicio():number;

    eliminarServicio():number
}
