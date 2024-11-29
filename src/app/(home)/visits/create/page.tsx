import { FormVisit } from '@/components/visits/form-visit';

export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Agregar Visitante</h1>
      <FormVisit />
    </div>
  );
}
