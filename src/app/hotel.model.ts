import { Habitacion } from "./habitacion.model";
import { Persona } from "./persona.model";
import { Servicio } from "./servicio";
import { TipoHabitacion } from "./tipo-habitacion";
import { TipoServicio } from "./tipo-servicio.model";

export class Hotel {
    private lista: Array<Habitacion>;

    constructor() {
        this.lista = new Array<Habitacion>();
    }

    public getLista(): Array<Habitacion> {
        return this.lista;
    }

    public setLista(lista: Array<Habitacion>): void {
        this.lista = lista;
    }

    public agregarHabitacion(h: Habitacion): void {
        this.lista.push(h);
    }

    public checkIn(nombre: string, ced: number, edad: number, tipoHabitacion: TipoHabitacion, huespedes: Array<Persona>): number {
        var habitacion: number = 0;
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].getCategoria() === tipoHabitacion && this.lista[i].isDisponible()) {
                this.lista[i].setResponsable(new Persona(nombre, ced, edad));
                this.lista[i].setListaHuespedes(huespedes);
                habitacion = i;
                break;
            }
        }
        return habitacion;
    }

    public isHuespedHotel(cedula: number): boolean {
        var esta: boolean = false;
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].isHuesped(cedula)) {
                esta = true;
                break;
            }
        }
        return esta;
    }

    public registrarHuesped(idHabitacion: number, nombre: string, ced: number, edad: number): string {
        var habitacion: Habitacion = this.lista[idHabitacion - 1];
        var resultado = "";
        if (habitacion.getListaHuespedes().length != 0) {
            if (habitacion.getListaHuespedes().length < habitacion.getCapacidad()) {
                habitacion.getListaHuespedes().push(new Persona(nombre, ced, edad));
                resultado = "Huesped registrado";
            }
            else
                resultado = "No se puede registrar, supera capacidad máxima de huespédes: <" + habitacion.getCapacidad() + ">";
        }
        else
            resultado = "Se debe hacer checkIn para registrar el Responsable";

        return resultado;
    }

    public darSalida(id: number): void {
        var habitacion: Habitacion = this.lista[id - 1];
        this.lista[id - 1] = new Habitacion(id, habitacion.getCategoria(), habitacion.getCapacidad());
    }

    public existResponsable(cedula: number): boolean {
        var resp: boolean = false;

        for (var i = 0; i < this.lista.length; i++) {
            if (!this.lista[i].isDisponible() && this.lista[i].getResponsable().getCedula() == cedula) {
                resp = true;
                i = this.lista.length;
            }
        }
        return resp;
    }

    public responsableHabitaciones(cedula: number): Array<Habitacion> {
        var list: Array<Habitacion> = new Array<Habitacion>();
        if (this.existResponsable(cedula)) {
            for (var i = 0; i < this.lista.length; i++) {
                if (this.lista[i].getResponsable() != null) {
                    var ced: number = this.lista[i].getResponsable().getCedula();
                    if (ced == cedula)
                        list.push(this.lista[i]);
                }
            }
        }
        return list;
    }

    public habitacionMayorConsumo(): number {
        var hab: number = 0;
        var mayor: number = this.lista[0].getConsumo();

        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].getConsumo() > mayor) {
                mayor = this.lista[i].getConsumo();
                hab = this.lista[i].getId();
            }
        }
        return hab;
    }

    public habitacionMayorDeuda(): number {
        var hab: number = 0;
        var mayor: number = this.lista[0].getSaldo();

        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].getSaldo() > mayor) {
                mayor = this.lista[i].getSaldo();
                hab = this.lista[i].getId();
            }
        }
        return hab;
    }

    public getTotalConsumoHotel(): number {
        var total: number = 0;

        for (var i = 0; i < this.lista.length; i++) {
            total += this.lista[i].getConsumo();
        }
        return total;
    }

    public buscarHabitacionCed(cedula: Number): number {
        var habitacion: number = 0;
        for (var i = 0; i < this.lista.length; i++) {
            for (var j = 0; j < this.lista[i].getListaHuespedes().length; j++) {

                if (this.lista[i].getListaHuespedes()[j].getCedula() == cedula) {
                    habitacion = i + 1;
                    j = this.lista[i].getListaHuespedes().length;
                }
            }
        }
        return habitacion;
    }

    public NumerohabitacionesDisponibles(): number {
        var count: number = 0;
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].isDisponible()) {
                count++;
            }
        }
        return count;
    }

    public incluirServicio(idHabitacion: number, servicio: Servicio): void {
        var habitacion: Habitacion = this.lista[idHabitacion - 1];
        habitacion.agregarServicio(servicio);
    }
}