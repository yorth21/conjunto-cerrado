import { ICar } from '@/interfaces/cars/car';

import { FormCar } from '@/components/cars/form-car';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const item: ICar = {
    id: parseInt(id),
    placa: 'abc123',
    marca: 'chevrolet',
    modelo: '2021',
    color: 'rojo',
    dueno: 'Matias',
  };

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Editar Persona</h1>
      <FormCar item={item} toCreate={false} />
    </div>
  );
}
