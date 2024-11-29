export interface ICar {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
  color: string;
  dueno: string;
}

export interface ICarCreate extends Omit<ICar, 'id'> {}
