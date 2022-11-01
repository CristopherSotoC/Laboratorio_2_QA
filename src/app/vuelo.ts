import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Evaluacion } from "./evaluacion";

export class Profesor {
    
nombre : string ;
apellido : string;
telefono: string;
puntosCurso : number; 
evaluaciones: Array<Evaluacion>;
evaluado : boolean
 constructor(nombre:string, apellido :string  ,telefono:string ){
    this.nombre = nombre;
    this.apellido = apellido; 
    this.telefono = telefono;
    this.evaluaciones  = new Array<Evaluacion>();
    this.puntosCurso = 0;
    this.evaluado = false
  }


  getEvaluado(){
    return this.evaluado;
    }
  setEvaluado(evaluado:boolean){
    
    this.evaluado = evaluado;
    }
getNombre(){
return this.nombre;
}
setNombre(nombre:string){

this.nombre = nombre;
}

getApellido(){
return this.apellido ;
}
setApellido(apellido :string){

this.apellido  = apellido ;
}

getTelefono(){
return this.telefono;
}
setTelefono(telefono:string){

this.telefono = telefono;
}
	
getEvaluaciones(){

return this.evaluaciones

}

//************************************************ */

/**
 * usa un metodo de la interfaz el cual es getIdEvaluacion
 * @param idEvaluacion id de la evaluacion a buscar
 * @returns la evaluacion si es encontrada sino retorna null
 */
buscarEvaluacion(idEvaluacion:number){

    for (let i = 0; i < this.evaluaciones.length; i++) {
        var evaluacion = this.evaluaciones[i]
        if(evaluacion.getIdEvaluacion()=== idEvaluacion){
                return i

        }

    }
return null

}
/**
 * 
 * @param idEvaluacionEliminar id de la evaluacion a eliminar
 * @returns null en caso de que el id a eliminar sea mayor que cero
 * manda a llamar al metodo buscar evaluacion para obtener su indece en la lista y proceder a eliminarlo
 */

EliminarEvaluacion(idEvaluacionEliminar:  number){
    //devuelve el indice de la lista de la evaluacion a buscar para eliminarlo con el splice
    var evaluacion = this.buscarEvaluacion(idEvaluacionEliminar);
    if(evaluacion !=null ){
        var evaluacionAux = this.evaluaciones[evaluacion]
        if(evaluacionAux!= null) {
            console.log("llego a eliminar");
            
            this.evaluaciones.splice(evaluacion,1)
            return evaluacionAux.EliminarEvaluacion() 
        }  
    }
    return undefined
}

/**********************************************************/
/**
 * usa un metodo de la interfaz el cual es getIdEvaluacion
 * @param idEvaluacion id de la evaluacion a buscar
 * @returns la evaluacion si es encontrada sino retorna null
 */
 buscarEvaluacionObjeto(idEvaluacion:number){

    for (let i = 0; i < this.evaluaciones.length; i++) {
        var evaluacion = this.evaluaciones[i]
        if(evaluacion.getIdEvaluacion()=== idEvaluacion){
                return evaluacion
                
        }

    }
return null

}
/**
 * 
 * @param puntaje el puntaje que voy a agregar 
 * @param idEvaluacion  la evaluacion para poder buscarla
 * @param nombreAyudante  el nombre del ayudante del profesor para evaluarlo
 * @returns  en caso que nombre no vaya nulo y el puntaje que se asigna no sea mayor a 100 retorna el metodo de la interface 
 *  en caso contrario undenfined
 */
puntuarAyudante(puntaje : number ,idEvaluacion : number, nombreAyudante: string){   
    var evaluacion = this.buscarEvaluacionObjeto(idEvaluacion);  
    if(evaluacion!= null){
        var nombreAyudanteEvaluacion = evaluacion?.getAyudante(nombreAyudante);
        if(nombreAyudanteEvaluacion != null){
            if(puntaje >= 0 && this.evaluado == false){
                if(puntaje<= 100){
                    return evaluacion?.puntuarAyudante(nombreAyudante,puntaje)
                }
            }    
        }
        
    }
    return undefined
   
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

 setEvaluaciones(evaluacion : Evaluacion, idEvaluacion:number){

    if(this.evaluaciones.length >0 ){
         var evaluacionl =  this.buscarEvaluacionObjeto(idEvaluacion)
         if(evaluacionl == null){
            this.evaluaciones.push(evaluacion)
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

setEvaluacionesPrueba(evaluacion : Evaluacion){

    this.evaluaciones.push(evaluacion)
    
}

}
