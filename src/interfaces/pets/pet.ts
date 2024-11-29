export interface IPet {
  id: number;
  nombre: string;
  raza: string;
  dueno: string;
}

export interface IPetCreate extends Omit<IPet, 'id'> {}
