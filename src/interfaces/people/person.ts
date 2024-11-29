export interface IPerson {
  id: number;
  nombre: string;
  identificacion: string;
  genero: string;
  edad: number;
  telefono: string;
  direccion: string;
}

export interface IPersonCreate extends Omit<IPerson, 'id'> {}
