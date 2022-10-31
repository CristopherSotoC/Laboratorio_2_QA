import { TipoServicio } from "./tipo-servicio.model";

export interface Servicio {

    getIdentificador():number;
    setIdentificador(identificador:number):void;

    getCosto():number;
    setCosto(costo:number):void;

    isPagado():boolean;
    setPagado(pagado:boolean):void;

    getTipo():TipoServicio;
    setTipo(tipo:TipoServicio):void;

    imprimir():string;
}
