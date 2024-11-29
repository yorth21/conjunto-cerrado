export interface IInvoice {
  id: number;
  codigo: string;
  nombre: string;
  valor: number;
  direccion: string;
}

export interface IInvoiceCreate extends Omit<IInvoice, 'id'> {}
