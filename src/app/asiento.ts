import { Servicio } from './servicio';

export class Asiento {

  numeroAsiento: number;
  servicios: Array<Servicio>;
  ocupado: boolean;

  constructor(numeroAsiento: number,ocupado: boolean) {
    this.numeroAsiento = numeroAsiento;
    this.ocupado= ocupado;
    this.servicios = new Array<Servicio>;
  }
  getOcupado() {
    return this.ocupado;
  }
  setOcupado(ocupado: boolean) {
    this.ocupado = ocupado;
  }
  getNumeroAsiento() {
    return this.numeroAsiento;
  }
  setNumeroAsiento(numeroAsiento: number) {
    this.numeroAsiento = numeroAsiento;
  }
  getServicios(){
    return this.servicios;
  }
  //************************************************ */

  /**
   * usa un metodo de la interfaz el cual es getIdEvaluacion
   * @param idEvaluacion id de la evaluacion a buscar
   * @returns la evaluacion si es encontrada sino retorna null
   */
  buscarServicio(idServicio: number) {
    for (let i = 0; i < this.servicios.length; i++) {
      var servicio = this.servicios[i];
      if (servicio.getIdServicio() === idServicio) {
        return i;
      }
    }
    return null;
  }
  /**
   *
   * @param idEvaluacionEliminar id de la evaluacion a eliminar
   * @returns null en caso de que el id a eliminar sea mayor que cero
   * manda a llamar al metodo buscar evaluacion para obtener su indece en la lista y proceder a eliminarlo
   */

  eliminarServicio(idServicio: number) {
    //devuelve el indice de la lista de la evaluacion a buscar para eliminarlo con el splice
    var servicio = this.buscarServicio(idServicio);
    if (servicio != null) {
      var serviciox = this.servicios[servicio];
      if (serviciox != null) {
        console.log('Se eliminó');

        this.servicios.splice(servicio, 1);
        return serviciox.eliminarServicio();
      }
    }
    return undefined;
  }

  /**********************************************************/
  /**
   * usa un metodo de la interfaz el cual es getIdEvaluacion
   * @param idEvaluacion id de la evaluacion a buscar
   * @returns la evaluacion si es encontrada sino retorna null
   */
  buscarServicioObjeto(idServicio: number) {
    for (let i = 0; i < this.servicios.length; i++) {
      var servicio = this.servicios[i];
      if (servicio.getIdServicio() === idServicio) {
        return servicio;
      }
    }
    return null;
  }
  /**
   *
   * @param puntaje el puntaje que voy a agregar
   * @param idEvaluacion  la evaluacion para poder buscarla
   * @param nombreAyudante  el nombre del ayudante del profesor para evaluarlo
   * @returns  en caso que nombre no vaya nulo y el puntaje que se asigna no sea mayor a 100 retorna el metodo de la interface
   *  en caso contrario undenfined
   */
   setPrecioServicio(
    precio: number,
    idServicio: number
  ) {
    var servicio = this.buscarServicioObjeto(idServicio);
    if (servicio != null) {
        if (servicio.getPrecioServicio == null ) {
            return servicio.setPrecioServicio(precio);
        }
    }
    return undefined;
  }
  /**
   *
   * @param evaluacion la evaluacion que voy a agregar
   * @param idEvaluacion el id de la evaluacion
   * recibe la evaluacion y el id de esta , primer pregunta que la cantidad de evaluaciones que tenga no se
   * mayor a 5 ya que en este caso solo se permiten 5
   * luego pregunta llama al buscar en caso de retornar null es que la evaluacion de existe y esto nos permite
   * agregarla
   */

  setServicios(servicio: Servicio, idServicio: number) {
    if (this.servicios.length > 0) {
      var serviciox = this.buscarServicioObjeto(idServicio);
      if (serviciox == null) {
        this.servicios.push(servicio);
      }
    }
  }
  /**
   *
   * @param evaluacion recibe la evaluacion que se va a asignar
   *
   * Este metodo  se usa en los casos para probar el agrego a la lista de Evaluaciones sin condiciones, de manera rapida
   * simples pruebas para probar otros metodos
   */

  setServiciosPrueba(servicio: Servicio) {
    this.servicios.push(servicio);
  }
}
