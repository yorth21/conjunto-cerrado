'use client';

import { IHouse } from '@/interfaces/houses/house';
import { useMemo } from 'react';

import { HousesColumns } from '@/components/houses/columns-houses';
import { DataTableActions } from '@/components/layout/data-table-actions';

interface ITableHousesProps {
  listItems: IHouse[];
  editItem: (item: IHouse) => void;
  deleteItem: (item: IHouse) => void;
}

export function TableHouses({ listItems, editItem, deleteItem }: ITableHousesProps) {
  const editFun = (item: IHouse) => {
    editItem(item);
  };

  const deleteFun = (item: IHouse) => {
    deleteItem(item);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => HousesColumns({ editFun, deleteFun }), []);

  return <DataTableActions columns={columns} data={listItems} />;
}
