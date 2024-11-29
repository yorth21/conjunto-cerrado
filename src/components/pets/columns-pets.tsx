'use client';

import { IPet } from '@/interfaces/pets/pet';
import { ColumnDef } from '@tanstack/react-table';

import { TableRowActions } from '@/components/layout/table-row-actions';

interface PetsColumnsProps {
  editFun: (item: IPet) => void;
  deleteFun: (item: IPet) => void;
}

export const PetsColumns = ({ editFun, deleteFun }: PetsColumnsProps): ColumnDef<IPet>[] => [
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'raza',
    header: 'Raza',
  },
  {
    accessorKey: 'dueno',
    header: 'Dueño',
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
