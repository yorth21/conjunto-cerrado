'use client';

import { ICar } from '@/interfaces/cars/car';
import { ColumnDef } from '@tanstack/react-table';

import { TableRowActions } from '@/components/layout/table-row-actions';

interface CarsColumnsProps {
  editFun: (item: ICar) => void;
  deleteFun: (item: ICar) => void;
}

export const CarsColumns = ({ editFun, deleteFun }: CarsColumnsProps): ColumnDef<ICar>[] => [
  {
    accessorKey: 'placa',
    header: 'Placa',
  },
  {
    accessorKey: 'marca',
    header: 'Marca',
  },
  {
    accessorKey: 'modelo',
    header: 'Modelo',
  },
  {
    accessorKey: 'color',
    header: 'Color',
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
