import {Substitute, Arg} from '@fluffy-spoon/substitute'
import { Asiento } from './asiento';
import { Servicio } from './servicio';
import { Vuelo } from './vuelo';



describe(' LAB2 Pruebas de integración utilizando Mock ',()=>{

    let vuelo : Vuelo;
    let asiento : Asiento;
    let servicio = Substitute.for<Servicio>();
    let tipoServicio : string = "Primera Clase"
    let idServicio : 1 ;
    let procEliminacion : 1;
    let precioServicio : 325;
    let correcto : true;
    beforeEach(()=>{
        vuelo = new Vuelo(1,"Costa Rica","Canada");

        asiento =  new Asiento(1,false);

        servicio = Substitute.for<Servicio>();

        vuelo.addAsiento(asiento)

        servicio.setTipo(tipoServicio)

        console.log("Funcionó");
    });
    
    /**Agregar nueva evaluacion al profesor
     * El objetivo de esta prueba es validar que el agrego a la list sea correcta 
     * se hace una instancia nueva de evaluaciones y se se envia la metodo del profesor para agregarla
     * antes de de agregar para por algunos filtros propios de la clase
     * --cuando se llame al metodo de geIdEvaluacion se devuelve en numero x en este caso -1 para que no sea igual
     * al  id del usuario que se busca , esto para que no coincidan y se puede proceder a agregar la 2da evaluacion
     * El doble de prueba tipo mock se estableció en el before each como una varaible global y con la creacion de 
     * la evaluacion 2 
     */

    it('Agregar un nuevo servicio al asiento', function () {
        asiento.setServiciosPrueba(servicio)   //esta funcion se llama para agregarle un servicio y que ya tenga una antes de agregarle
        //la segunda y asi poder comparar que hayan 2 elementos 
        var servicio2 = Substitute.for<Servicio>();
        servicio.getIdServicio().returns(-1) //que retorne -1 para que no coincida con lo que retorne la linea de abajo y de null
        asiento.setServicios(servicio2 , -3) //aqui como el valor de id es -3 , no coinciden y permite agregar 
        expect(asiento.getServicios().length).toBe(2) //se espera que el length de las evaluaciones sean de 2 y se prueba dicho caso
         
    });


    /**  Eliminar evaluacion al profesor
     * Se llaman metodos de la interface getIdEvaluacion, eliminarEvalucion 
     * y se usa el metodos de la clase profeor eliminarEvaluacion ,y se comparan dichos resultados  
     * En este caso al llamarse al metodo de la clase deberia de dar el mismo resultado que el metodo de la 
     * interface  (interface.eliminarEvaluacion() y clase.eliminarEvaluacion())
     * El doble de prueba tipo mock se estableció en el before each como una varaible global
     * 
     */
    it('Eliminar un servicio de un asiento', function () {
        servicio.getIdServicio().returns(idServicio);
        servicio.eliminarServicio().returns(procEliminacion)
        var eliminar = asiento.eliminarServicio(idServicio);
        expect(eliminar).toBe(procEliminacion);
    });

    /**  Verificar eliminar evaluacion al profesor
     * Se llaman metodos de la interface getIdEvaluacion, eliminarEvalucion 
     * y se usa el metodos de la clase profeor eliminarEvaluacion ,y se comparan dichos resultados  
     * En este caso lo que se quiere comparar es el length de la lista de la interface , deberia de ser cero
     * confirmando el funcionamiento del metodo
     * El doble de prueba tipo mock se estableció en el before each como una varaible global
     * 
     */   
    it('Verificar si se eliminó el servicio del asiento', function () {
        asiento.setServiciosPrueba(servicio)   //agrego una evaluacion 
        servicio.getIdServicio().returns(idServicio);
        servicio.eliminarServicio().returns(procEliminacion)
        asiento.eliminarServicio(idServicio); //la elimino 
        expect(asiento.getServicios().length).toBe(0); // entonces el length debe de ser cero
    });
    /**
     * se llaman a los metodos de la interface, setAyudante,getAyudante,getIdEvaluacion y puntuarAyudante
     * se usa el metodo con de la clase profesor con una complejidad ciclomatica mayor a 1 
     * En este caso al llamarse al metodo de la clase deberia de dar el mismo resultado que el metodo de la 
     * interface (interface.puntuarAyudante() y clase.puntuarAyudante())
     * 
     * El doble de prueba tipo mock se estableció en el before each como una varaible global
     *  
     */
    it('Asignar precio a un servicio', function () {
        
        servicio.setTipo(tipoServicio)
        servicio.getTipo(tipoServicio).returns(tipoServicio)
        servicio.getIdServicio().returns(idServicio);
        servicio.setPrecioServicio(precioServicio).returns(correcto)
        var proceso = asiento.setPrecioServicio(precioServicio,idServicio)
        expect(proceso).toBe(correcto);
    });

})

