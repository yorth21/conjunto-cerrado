'use client';

// import { deleteLicenseService, getLicensesService } from '@/services/licenseService';
import { IVisit } from '@/interfaces/visits/visit';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { AlertDialogDeleteItem } from '@/components/layout/alert-dialog-delete-item';
import { SkeletonTable } from '@/components/layout/skeleton-table';
import { buttonVariants } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { TableVisits } from '@/components/visits/table-visits';

export default function Page() {
  const { toast } = useToast();
  const router = useRouter();
  const [listItems, setListItems] = useState<IVisit[]>([]);
  const [itemDelete, setItemDelete] = useState<IVisit | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const deleteItemService = async (id?: number) => {
    if (!id) {
      toast({
        title: 'Error deleting',
        description: 'License deleting error',
      });
      return;
    }

    try {
      // await deleteLicenseService(id);
      setListItems((prev) => prev.filter((m) => m.id !== id));
      toast({
        title: 'Deleting',
        description: 'License deleted successfully',
      });
    } catch (error) {
      toast({
        title: 'Error deleting',
        description: 'License deleting error',
      });
    }
  };

  const editItem = useCallback(
    (item: IVisit) => {
      router.push(`/visits/${item.id}/edit`);
    },
    [router],
  );

  const deleteItem = useCallback((item: IVisit) => {
    setItemDelete(item);
    setIsAlertOpen(true);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // const response = await getLicensesService();
        setListItems([
          {
            id: 1,
            nombre: 'Juan',
            identificacion: '123456789',
            genero: 'Masculino',
            edad: 25,
            telefono: '123456789',
            direccion: 'Calle 123',
          },
          {
            id: 2,
            nombre: 'Pedro',
            identificacion: '987654321',
            genero: 'Masculino',
            edad: 30,
            telefono: '987654321',
            direccion: 'Calle 321',
          },
        ]);
      } catch (error) {
        toast({
          title: 'Error fetching',
          description: 'Items fetching error',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [toast]);

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <h1 className="text-2xl font-bold">Visitantes</h1>
        <Link href="/visits/create" className={buttonVariants()}>
          <FaPlus className="mr-2" />
          Add Visita
        </Link>
      </div>
      {isLoading ? (
        <SkeletonTable columns={4} />
      ) : (
        <TableVisits listItems={listItems} editItem={editItem} deleteItem={deleteItem} />
      )}
      <AlertDialogDeleteItem
        isOpen={isAlertOpen}
        setIsOpen={setIsAlertOpen}
        description="This action cannot be undone. This will permanently delete the license."
        onAction={() => deleteItemService(itemDelete?.id)}
      />
    </div>
  );
}
