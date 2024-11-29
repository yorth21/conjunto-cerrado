export interface IVisit {
  id: number;
  nombre: string;
  identificacion: string;
  genero: string;
  edad: number;
  telefono: string;
  direccion: string;
}

export interface IVisitCreate extends Omit<IVisit, 'id'> {}
