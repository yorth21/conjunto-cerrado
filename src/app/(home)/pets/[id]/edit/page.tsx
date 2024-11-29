import { IPet } from '@/interfaces/pets/pet';

import { FormPet } from '@/components/pets/form-pet';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const item: IPet = {
    id: parseInt(id),
    nombre: 'Firulais',
    raza: 'Pastor Aleman',
    dueno: 'Matias',
  };

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Editar Persona</h1>
      <FormPet item={item} toCreate={false} />
    </div>
  );
}
