import { FormHouse } from '@/components/houses/form-house';

export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Agregar Casa</h1>
      <FormHouse />
    </div>
  );
}
