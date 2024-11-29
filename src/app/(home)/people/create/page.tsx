import { FormPerson } from '@/components/people/form-person';

export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Agregar Persona</h1>
      <FormPerson />
    </div>
  );
}
