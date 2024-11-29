export interface IHouse {
  id: number;
  direccion: string;
  dueno: string;
}

export interface IHouseCreate extends Omit<IHouse, 'id'> {}
