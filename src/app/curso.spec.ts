import { Curso } from './curso';
import {Substitute, Arg} from '@fluffy-spoon/substitute'
import { Profesor } from './profesor';
import { Evaluacion } from './evaluacion';



describe(' casos de mock lab 2 en el spec curso ',()=>{

    let curso : Curso;
    let profesor : Profesor;
    let evaluacion = Substitute.for<Evaluacion>();
    let nombreAyudante : string = "Pedrito Sola"
    let idEvaluacion : 32 ;
    let procesoEliminacion : 1;
    let evaluacionAyudante : 95;
    let correcto : true;
    beforeEach(()=>{
        curso = new Curso("mate discreta","GRM51");
        profesor =  new Profesor("Carlos","Mendez","80324332");
        evaluacion = Substitute.for<Evaluacion>();
        curso.setProfesores(profesor)
        // profesor.setEvaluaciones(evaluacion)
        evaluacion.setAyudante(nombreAyudante)
        console.log("llego");
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

    it('Agregar nueva evaluacion al profesor', function () {
        profesor.setEvaluacionesPrueba(evaluacion)   //esta funcion se llama para agregarle una evaluacion y que ya tenga una antes de agregarle
        //la segunda y asi poder comparar que hayan 2 elementos 
        var evaluacion2 = Substitute.for<Evaluacion>();
        evaluacion.getIdEvaluacion().returns(-1) //que retorne -1 para que no coincida con lo que retorne la linea de abajo y de null
        profesor.setEvaluaciones(evaluacion2 , -3) //aqui como el valor de id es -3 , no coinciden y permite agregar 
        expect(profesor.getEvaluaciones().length).toBe(2) //se espera que el length de las evaluaciones sean de 2 y se prueba dicho caso
         
    });



    /**  Eliminar evaluacion al profesor
     * Se llaman metodos de la interface getIdEvaluacion, eliminarEvalucion 
     * y se usa el metodos de la clase profeor eliminarEvaluacion ,y se comparan dichos resultados  
     * En este caso al llamarse al metodo de la clase deberia de dar el mismo resultado que el metodo de la 
     * interface  (interface.eliminarEvaluacion() y clase.eliminarEvaluacion())
     * El doble de prueba tipo mock se estableció en el before each como una varaible global
     * 
     */
    it('Eliminar evaluacion al profesor', function () {
        evaluacion.getIdEvaluacion().returns(idEvaluacion);
        evaluacion.EliminarEvaluacion().returns(procesoEliminacion)
        var procesoEliminar = profesor.EliminarEvaluacion(idEvaluacion);
        expect(procesoEliminar).toBe(procesoEliminacion);
    });

    /**  Verificar eliminar evaluacion al profesor
     * Se llaman metodos de la interface getIdEvaluacion, eliminarEvalucion 
     * y se usa el metodos de la clase profeor eliminarEvaluacion ,y se comparan dichos resultados  
     * En este caso lo que se quiere comparar es el length de la lista de la interface , deberia de ser cero
     * confirmando el funcionamiento del metodo
     * El doble de prueba tipo mock se estableció en el before each como una varaible global
     * 
     */   
    it('Verificar eliminar evaluacion al profesor', function () {
        profesor.setEvaluacionesPrueba(evaluacion)   //agrego una evaluacion 
        evaluacion.getIdEvaluacion().returns(idEvaluacion);
        evaluacion.EliminarEvaluacion().returns(procesoEliminacion)
        profesor.EliminarEvaluacion(idEvaluacion); //la elimino 
        expect(profesor.getEvaluaciones().length).toBe(0); // entonces el length debe de ser cero
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
    it('Puntuar Ayudante', function () {
        
        evaluacion.setAyudante(nombreAyudante)
        evaluacion.getAyudante(nombreAyudante).returns(nombreAyudante)
        evaluacion.getIdEvaluacion().returns(idEvaluacion);
        evaluacion.puntuarAyudante(nombreAyudante,evaluacionAyudante).returns(correcto)
        var proceso = profesor.puntuarAyudante(evaluacionAyudante,idEvaluacion,nombreAyudante)
        expect(proceso).toBe(correcto);
    });


})

