
import { Asiento } from './asiento.model';

export interface AsientosSaldos {
    
      getAsientoMayorConsumo(lista:Array<Asiento>): number;
 
      getAsientoMayorDeuda(lista:Array<Asiento>): number;
 
      getTotalConsumoVuelo(lista:Array<Asiento>): number;
      
      getTotalConsumoCliente(cedula:number): number;
}
