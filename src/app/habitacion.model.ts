import { Persona } from "./persona.model";
import { Servicio } from "./servicio";
import { TipoHabitacion } from "./tipo-habitacion";

export class Habitacion {
    private id: number;
    private capacidad: number;
    private categoria: TipoHabitacion;
    private listaServicios: Array<Servicio>;
    private listaHuespedes: Array<Persona>;
    private responsable: Persona = new Persona();
    private saldo: number = 0;

    constructor(id: number, categoria: TipoHabitacion, capacidad: number) {
        this.listaHuespedes = new Array<Persona>();
        this.listaServicios = new Array<Servicio>();
        this.id = id;
        this.categoria = categoria;
        this.capacidad = capacidad;
    }

    public isDisponible(): boolean {
        return this.responsable == null;
    }

    public isHuesped(cedula: number): boolean {
        var esta: boolean = false;

        for (var i = 0; i < this.listaHuespedes.length; i++) {
            if (this.listaHuespedes[i].getCedula() == cedula) {
                esta = true;
                break;
            }
        }
        return esta;
    }

    public registrarServicio(servicio: Servicio): void {
        this.listaServicios.push(servicio);

        if (!servicio.isPagado())
            this.saldo += servicio.getCosto();
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

    public getCategoria(): TipoHabitacion {
        return this.categoria;
    }

    public setCategoria(categoria: TipoHabitacion): void {
        this.categoria = categoria;
    }

    public getResponsable(): Persona {
        return this.responsable;
    }

    public setResponsable(responsable: Persona): void {
        this.responsable = responsable;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }

    public setCapacidad(capacidad: number): void {
        this.capacidad = capacidad;
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

    public getListaHuespedes(): Array<Persona> {
        return this.listaHuespedes;
    }

    public agregarHuesped(p: Persona): void {
        this.listaHuespedes.push(p);
    }

    public setListaHuespedes(p: Array<Persona>): void {
        this.listaHuespedes = p;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    public toString(): string {
        var a: string = "---------------- Servicios ----------------";
        for (var i = 0; i < this.listaServicios.length; i++) {
            a = a + this.listaServicios[i].imprimir() + "/n";
        }
        a = a + "---------------- Huespedes ----------------";;
        for (var i = 0; i < this.listaHuespedes.length; i++) {
            a = a + this.listaHuespedes[i].toString() + "/n";
        }

        a = a + "Habitacion{" + "id=" + this.id + ", categoria=" + this.categoria.imprimir() + '}';

        return a;


    }
}
