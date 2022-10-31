import { Asiento } from './asiento.model';
import { AsientosSaldos } from './asientosSaldos';
import { Persona } from './persona.model';
import { Servicio } from './servicio';
import { TipoAsiento } from './tipo-asiento';

export class Vuelo implements AsientosSaldos {
  private lista: Array<Asiento>;
  private origen: string;
  private destino: string;

  constructor(origen: string, destino: string) {
    this.lista = new Array<Asiento>();
    this.origen = origen;
    this.destino = destino;
  }
  public getLista(): Array<Asiento> {
    return this.lista;
  }
  public setLista(lista: Array<Asiento>): void {
    this.lista = lista;
  }
  public agregarAsiento(h: Asiento): void {
    this.lista.push(h);
  }
  public getorigen(): string {
    return this.origen;
  }
  public setorigen(origen: string): void {
    this.origen = origen;
  }
  public getdestino(): string {
    return this.origen;
  }
  public setdestino(destino: string): void {
    this.destino = this.destino;
  }

  public checkIn(
    nombre: string,
    ced: number,
    edad: number,
    tipoAsiento: TipoAsiento,
    cliente: Persona
  ): number {
    var Asiento: number = 0;
    for (var i = 0; i < this.lista.length; i++) {
      if (
        this.lista[i].getCategoria() === tipoAsiento &&
        this.lista[i].isDisponible()
      ) {

        this.lista[i].setCliente(new Persona(nombre, ced, edad));
        
        this.lista[i].setCliente(cliente);
        Asiento = i;
        break;
      }
    }
    return Asiento;
  }

  public isClienteVuelo(cedula: number): boolean {
    var esta: boolean = false;
    for (var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].isCliente(cedula)) {
        esta = true;
        break;
      }
    }
    return esta;
  }

  public cancelarVuelo(id: number): void {
    var asiento: Asiento = this.lista[id - 1];
    this.lista[id - 1] = new Asiento(
      id,
      asiento.getCategoria(),
      asiento.getCliente()
    );
  }

  public existCliente(cedula: number): boolean {
    var resp: boolean = false;

    for (var i = 0; i < this.lista.length; i++) {
      if (
        !this.lista[i].isDisponible() &&
        this.lista[i].getCliente().getCedula() == cedula
      ) {
        resp = true;
        i = this.lista.length;
      }
    }
    return resp;
  }
  
  public clienteAsiento(cedula: number): Array<Asiento> {
    var list: Array<Asiento> = new Array<Asiento>();
    if (this.existCliente(cedula)) {
      for (var i = 0; i < this.lista.length; i++) {
        if (this.lista[i].getCliente() != null) {
          var ced: number = this.lista[i].getCliente().getCedula();
          if (ced == cedula) list.push(this.lista[i]);
        }
      }
    }
    return list;
  }

  public getAsientoMayorConsumo(): number {
    var asi: number = 0;
    var mayor: number = this.lista[0].getConsumo();
    for (var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].getConsumo() > mayor) {
        mayor = this.lista[i].getConsumo();
        asi = this.lista[i].getId();
      }
    }
    return asi;
  }
  public getAsientoMayorDeuda(): number {
    var asi: number = 0;
    var mayor: number = this.lista[0].getSaldo();

    for (var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].getSaldo() > mayor) {
        mayor = this.lista[i].getSaldo();
        asi = this.lista[i].getId();
      }
    }
    return asi;
  }
  public getTotalConsumoVuelo(): number {
    var total: number = 0;
    for (var i = 0; i < this.lista.length; i++) {
      total += this.lista[i].getConsumo();
    }
    return total;
  }

  public getTotalConsumoCliente(cedula:number): number {
    var total: number = 0;
    for (var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].getCliente().getCedula() == cedula){
        total += this.lista[i].getConsumo();
      }
    }
    return total;
  }

  public buscarAsientoCed(cedula: Number): Array<Asiento> {
    var asientos: Array<Asiento> = new Array<Asiento>();
    for (var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].getCliente().getCedula() == cedula) {
        asientos.push(this.lista[i]);
      }
    }
    return asientos;
  }

  public numeroAsientosDisponibles(): number {
    var count: number = 0;
    for (var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].isDisponible()) {
        count++;
      }
    }
    return count;
  }

  public incluirServicio(idAsiento: number, servicio: Servicio): void {
    var Asiento: Asiento = this.lista[idAsiento - 1];
    Asiento.agregarServicio(servicio);
  }
}
