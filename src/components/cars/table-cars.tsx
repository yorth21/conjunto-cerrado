'use client';

import { ICar } from '@/interfaces/cars/car';
import { useMemo } from 'react';

import { CarsColumns } from '@/components/cars/columns-cars';
import { DataTableActions } from '@/components/layout/data-table-actions';

interface ITableCarsProps {
  listItems: ICar[];
  editItem: (item: ICar) => void;
  deleteItem: (item: ICar) => void;
}

export function TableCars({ listItems, editItem, deleteItem }: ITableCarsProps) {
  const editFun = (item: ICar) => {
    editItem(item);
  };

  const deleteFun = (item: ICar) => {
    deleteItem(item);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => CarsColumns({ editFun, deleteFun }), []);

  return <DataTableActions columns={columns} data={listItems} />;
}
