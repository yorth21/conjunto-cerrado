'use client';

import { IInvoice } from '@/interfaces/invoices/invoice';
import { ColumnDef } from '@tanstack/react-table';

import { TableRowActions } from '@/components/layout/table-row-actions';

interface InvoicesColumnsProps {
  editFun: (item: IInvoice) => void;
  deleteFun: (item: IInvoice) => void;
}

export const InvoicesColumns = ({ editFun, deleteFun }: InvoicesColumnsProps): ColumnDef<IInvoice>[] => [
  {
    accessorKey: 'codigo',
    header: 'Codigo',
  },
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'valor',
    header: 'Valor',
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
