'use client';

import { IHouse } from '@/interfaces/houses/house';
import { ColumnDef } from '@tanstack/react-table';

import { TableRowActions } from '@/components/layout/table-row-actions';

interface HousesColumnsProps {
  editFun: (item: IHouse) => void;
  deleteFun: (item: IHouse) => void;
}

export const HousesColumns = ({ editFun, deleteFun }: HousesColumnsProps): ColumnDef<IHouse>[] => [
  {
    accessorKey: 'direccion',
    header: 'Dirección',
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
