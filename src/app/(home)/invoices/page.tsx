'use client';

// import { deleteLicenseService, getLicensesService } from '@/services/licenseService';
import { IInvoice } from '@/interfaces/invoices/invoice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { TableInvoices } from '@/components/invoices/table-invoices';
import { AlertDialogDeleteItem } from '@/components/layout/alert-dialog-delete-item';
import { SkeletonTable } from '@/components/layout/skeleton-table';
import { buttonVariants } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Page() {
  const { toast } = useToast();
  const router = useRouter();
  const [listItems, setListItems] = useState<IInvoice[]>([]);
  const [itemDelete, setItemDelete] = useState<IInvoice | null>(null);
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
    (item: IInvoice) => {
      router.push(`/invoices/${item.id}/edit`);
    },
    [router],
  );

  const deleteItem = useCallback((item: IInvoice) => {
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
            codigo: '0001',
            nombre: 'Juan',
            valor: 100,
            direccion: 'Calle 1',
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
        <h1 className="text-2xl font-bold">Facturas</h1>
        <Link href="/invoices/create" className={buttonVariants()}>
          <FaPlus className="mr-2" />
          Add Factura
        </Link>
      </div>
      {isLoading ? (
        <SkeletonTable columns={4} />
      ) : (
        <TableInvoices listItems={listItems} editItem={editItem} deleteItem={deleteItem} />
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
