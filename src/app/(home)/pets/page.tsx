'use client';

// import { deleteLicenseService, getLicensesService } from '@/services/licenseService';

import { IPet } from '@/interfaces/pets/pet';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { AlertDialogDeleteItem } from '@/components/layout/alert-dialog-delete-item';
import { SkeletonTable } from '@/components/layout/skeleton-table';
import { TablePets } from '@/components/pets/table-pets';
import { buttonVariants } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Page() {
  const { toast } = useToast();
  const router = useRouter();
  const [listItems, setListItems] = useState<IPet[]>([]);
  const [itemDelete, setItemDelete] = useState<IPet | null>(null);
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
    (item: IPet) => {
      router.push(`/pets/${item.id}/edit`);
    },
    [router],
  );

  const deleteItem = useCallback((item: IPet) => {
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
            nombre: 'Matias',
            raza: 'Pitbull',
            dueno: 'Juan',
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
        <h1 className="text-2xl font-bold">Mascotas</h1>
        <Link href="/pets/create" className={buttonVariants()}>
          <FaPlus className="mr-2" />
          Add Mascota
        </Link>
      </div>
      {isLoading ? (
        <SkeletonTable columns={4} />
      ) : (
        <TablePets listItems={listItems} editItem={editItem} deleteItem={deleteItem} />
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
