import { Profesor } from './profesor';

export class Curso {
  nombreCurso: string;
  idCurso: string;
  profesores: Array<Profesor>;

  constructor(nombreCurso: string, idCurso: string) {
    this.nombreCurso = nombreCurso;
    this.idCurso = idCurso;
    this.profesores = new Array<Profesor>();
  }

  getNombreCurso() {
    return this.nombreCurso;
  }
  setNombreCurso(nombreCurso: string) {
    this.nombreCurso = nombreCurso;
  }

  getIdCurso() {
    return this.idCurso;
  }
  setIdCurso(idCurso: string) {
    this.idCurso = idCurso;
  }

  getProfesores() {
    return this.profesores;
  }

  setProfesores(profesor: Profesor) {
    this.profesores.push(profesor);
  }
}
