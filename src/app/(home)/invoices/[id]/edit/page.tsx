import { IInvoice } from '@/interfaces/invoices/invoice';

import { FormInvoice } from '@/components/invoices/form-invoice';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const item: IInvoice = {
    id: parseInt(id),
    codigo: '001',
    nombre: 'Juan Perez',
    valor: 1000000,
    direccion: 'Calle 123',
  };

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Editar Factura</h1>
      <FormInvoice item={item} toCreate={false} />
    </div>
  );
}
