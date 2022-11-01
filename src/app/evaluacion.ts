export interface Evaluacion {
    new () : Evaluacion ;
    /*************************** */
    setAyudante(nombreAyudante :  string): void;
    getAyudante(nombre : string): string;
    puntuarAyudante(nombreAyudante :  string, evaluacion : number): boolean;
    getIdEvaluacion():number
    EliminarEvaluacion():number
}
