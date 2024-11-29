import { IHouse } from '@/interfaces/houses/house';

import { FormHouse } from '@/components/houses/form-house';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const item: IHouse = {
    id: parseInt(id),
    dueno: 'Matias',
    direccion: 'udenar',
  };

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Editar Persona</h1>
      <FormHouse item={item} toCreate={false} />
    </div>
  );
}
