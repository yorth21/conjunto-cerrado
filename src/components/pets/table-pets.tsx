'use client';

import { IPet } from '@/interfaces/pets/pet';
import { useMemo } from 'react';

import { DataTableActions } from '@/components/layout/data-table-actions';
import { PetsColumns } from '@/components/pets/columns-pets';

interface ITablePetsProps {
  listItems: IPet[];
  editItem: (item: IPet) => void;
  deleteItem: (item: IPet) => void;
}

export function TablePets({ listItems, editItem, deleteItem }: ITablePetsProps) {
  const editFun = (item: IPet) => {
    editItem(item);
  };

  const deleteFun = (item: IPet) => {
    deleteItem(item);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => PetsColumns({ editFun, deleteFun }), []);

  return <DataTableActions columns={columns} data={listItems} />;
}
