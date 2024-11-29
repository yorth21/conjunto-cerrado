'use client';

import { IInvoice } from '@/interfaces/invoices/invoice';
import { useMemo } from 'react';

import { InvoicesColumns } from '@/components/invoices/columns-invoices';
import { DataTableActions } from '@/components/layout/data-table-actions';

interface ITableInvoicesProps {
  listItems: IInvoice[];
  editItem: (item: IInvoice) => void;
  deleteItem: (item: IInvoice) => void;
}

export function TableInvoices({ listItems, editItem, deleteItem }: ITableInvoicesProps) {
  const editFun = (item: IInvoice) => {
    editItem(item);
  };

  const deleteFun = (item: IInvoice) => {
    deleteItem(item);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => InvoicesColumns({ editFun, deleteFun }), []);

  return <DataTableActions columns={columns} data={listItems} />;
}
