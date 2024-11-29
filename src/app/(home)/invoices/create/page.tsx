import { FormInvoice } from '@/components/invoices/form-invoice';

export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Agregar Factura</h1>
      <FormInvoice />
    </div>
  );
}
