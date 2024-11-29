'use client';

import { IPerson } from '@/interfaces/people/person';
import { ColumnDef } from '@tanstack/react-table';

import { TableRowActions } from '@/components/layout/table-row-actions';

interface PeopleColumnsProps {
  editFun: (item: IPerson) => void;
  deleteFun: (item: IPerson) => void;
}

export const PeopleColumns = ({ editFun, deleteFun }: PeopleColumnsProps): ColumnDef<IPerson>[] => [
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'identificacion',
    header: 'Identificación',
  },
  {
    accessorKey: 'genero',
    header: 'Género',
  },
  {
    accessorKey: 'edad',
    header: 'Edad',
  },
  {
    accessorKey: 'telefono',
    header: 'Teléfono',
  },
  {
    accessorKey: 'direccion',
    header: 'Dirección',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <TableRowActions row={row} onEdit={editFun} onDelete={deleteFun} />
        </div>
      );
    },
  },
];
