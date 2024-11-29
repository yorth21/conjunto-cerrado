import { IPerson } from '@/interfaces/people/person';

import { FormPerson } from '@/components/people/form-person';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const item: IPerson = {
    id: parseInt(id),
    nombre: 'Matias',
    identificacion: '12345',
    genero: 'M',
    edad: 21,
    telefono: '312123123',
    direccion: 'udenar',
  };

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Editar Persona</h1>
      <FormPerson item={item} toCreate={false} />
    </div>
  );
}
