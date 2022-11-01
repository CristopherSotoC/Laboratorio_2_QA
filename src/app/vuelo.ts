import { Asiento } from './asiento';

export class Vuelo {
  numeroVuelo: number;
  origen: string;
  destino: string;
  asientos: Array<Asiento>;

  constructor(numeroVuelo: number, origen: string, destino: string) {
    this.numeroVuelo = numeroVuelo;
    this.destino = destino;
    this.origen = origen;
    this.asientos = new Array<Asiento>();
  }

  getNumeroVuelo() {
    return this.numeroVuelo;
  }
  setNumeroVuelo(numeroVuelo: number) {
    this.numeroVuelo = numeroVuelo;
  }

  getOrigen() {
    return this.origen;
  }
  setOrigen(origen: string) {
    this.origen = origen;
  }
  getDestino() {
    return this.destino;
  }
  setDestino(destino: string) {
    this.destino = destino;
  }

  getAsientos() {
    return this.asientos;
  }

  addAsiento(asiento: Asiento) {
    this.asientos.push(asiento);
  }

}
