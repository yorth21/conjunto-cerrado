'use client';

import { IPerson } from '@/interfaces/people/person';
import { useMemo } from 'react';

import { DataTableActions } from '@/components/layout/data-table-actions';
import { PeopleColumns } from '@/components/people/columns-people';

interface ITablePeopleProps {
  listItems: IPerson[];
  editItem: (item: IPerson) => void;
  deleteItem: (item: IPerson) => void;
}

export function TablePeople({ listItems, editItem, deleteItem }: ITablePeopleProps) {
  const editFun = (item: IPerson) => {
    editItem(item);
  };

  const deleteFun = (item: IPerson) => {
    deleteItem(item);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => PeopleColumns({ editFun, deleteFun }), []);

  return <DataTableActions columns={columns} data={listItems} />;
}
