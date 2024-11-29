'use client';

import { IVisit } from '@/interfaces/visits/visit';
import { ColumnDef } from '@tanstack/react-table';

import { TableRowActions } from '@/components/layout/table-row-actions';

interface VisitsColumnsProps {
  editFun: (item: IVisit) => void;
  deleteFun: (item: IVisit) => void;
}

export const VisitsColumns = ({ editFun, deleteFun }: VisitsColumnsProps): ColumnDef<IVisit>[] => [
  {
    accessorKey: 'identificacion',
    header: 'Identificación',
  },
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'genero',
    header: 'Genero',
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
