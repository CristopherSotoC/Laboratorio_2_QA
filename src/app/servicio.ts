export interface Servicio {
    new () : Servicio ;
    /*************************** */
    setTipo(tipoServicio :  string): void;
    getTipo(tipoServicio : string): string;

    setPrecioServicio(tipoServicio :  string, precio : number): boolean;
    
    setIdServicio(id:number):number;

    getIdServicio():number;

    eliminarServicio():number
}
