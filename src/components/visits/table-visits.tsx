'use client';

import { IVisit } from '@/interfaces/visits/visit';
import { useMemo } from 'react';

import { DataTableActions } from '@/components/layout/data-table-actions';
import { VisitsColumns } from '@/components/visits/columns-visits';

interface ITableVisitsProps {
  listItems: IVisit[];
  editItem: (item: IVisit) => void;
  deleteItem: (item: IVisit) => void;
}

export function TableVisits({ listItems, editItem, deleteItem }: ITableVisitsProps) {
  const editFun = (item: IVisit) => {
    editItem(item);
  };

  const deleteFun = (item: IVisit) => {
    deleteItem(item);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => VisitsColumns({ editFun, deleteFun }), []);

  return <DataTableActions columns={columns} data={listItems} />;
}
