import { Persona } from './persona.model';
import { Servicio } from './servicio';
import { TipoAsiento } from './tipo-asiento';

export class Asiento {
  private id: number;
  private categoria: TipoAsiento;
  private listaServicios: Array<Servicio>;
  private cliente: Persona;
  private saldo: number = 0;

  constructor(id: number, categoria: TipoAsiento, cliente: Persona) {
    this.listaServicios = new Array<Servicio>();
    this.id = id;
    this.categoria = categoria;
    this.cliente = cliente;
  }

  public isDisponible(): boolean {
    return this.cliente == null;
  }

  public isCliente(cedula: number): boolean {
    var esta: boolean = false;
    if (this.cliente.getCedula() == cedula) {
      esta = true;
    }
    return esta;
  }

  public registrarServicio(servicio: Servicio): void {
    this.listaServicios.push(servicio);
    if (!servicio.isPagado()) this.saldo += servicio.getCosto();
  }

  public getConsumo(): number {
    var consumo: number = 0;
    for (var i = 0; i < this.listaServicios.length; i++) {
      consumo += this.listaServicios[i].getCosto();
    }
    return consumo;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getCategoria(): TipoAsiento {
    return this.categoria;
  }

  public setCategoria(categoria: TipoAsiento): void {
    this.categoria = categoria;
  }

  public getCliente(): Persona {
    return this.cliente;
  }

  public setCliente(responsable: Persona): void {
    this.cliente = responsable;
  }

  public getListaServicios(): Array<Servicio> {
    return this.listaServicios;
  }

  public agregarServicio(s: Servicio): void {
    this.listaServicios.push(s);
  }

  public setListaServicios(s: Array<Servicio>): void {
    this.listaServicios = s;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo;
  }

  public toString(): string {
    var a: string = '---------------- Servicios ----------------';
    for (var i = 0; i < this.listaServicios.length; i++) {
      a = a + this.listaServicios[i].imprimir() + '/n';
    }
    a = a + '---------------- Clientes ----------------';
    
    a = a + this.cliente.toString() + '/n';

    a =
      a +
      'Asiento{' +
      'id=' +
      this.id +
      ', categoria=' +
      this.categoria.imprimir() +
      '}';
    return a;
  }
}
