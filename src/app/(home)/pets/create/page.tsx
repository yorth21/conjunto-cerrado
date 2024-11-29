import { FormPet } from '@/components/pets/form-pet';

export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Agregar Mascota</h1>
      <FormPet />
    </div>
  );
}
