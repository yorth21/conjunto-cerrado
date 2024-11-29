'use client';

import { IInvoice, IInvoiceCreate } from '@/interfaces/invoices/invoice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  codigo: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  nombre: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  valor: z
    .string()
    .min(1, {
      message: 'Debe tener al menos 1 caracteres.',
    })
    .regex(/^\d+$/, { message: 'solo digitos' }),
  direccion: z.string().min(2, {
    message: 'Debe tener al menos 2 caracteres.',
  }),
});

interface FormCreateProps {
  item?: IInvoice;
  toCreate?: boolean;
}

const itemPlaceholder: IInvoice = {
  id: 0,
  codigo: '',
  nombre: '',
  valor: 0,
  direccion: '',
};

export function FormInvoice({ item = itemPlaceholder, toCreate = true }: FormCreateProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      codigo: item.codigo,
      nombre: item.nombre,
      valor: item.valor ? item.valor.toString() : '',
      direccion: item.direccion,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const newItem: IInvoiceCreate = {
      codigo: data.codigo,
      nombre: data.nombre,
      valor: parseInt(data.valor),
      direccion: data.direccion,
    };

    if (toCreate) {
      await createItem(newItem);
      form.reset();
    } else {
      await updateItem(newItem, item.id);
    }
  };

  const createItem = async (data: IInvoiceCreate) => {
    console.log(data);
  };

  const updateItem = async (data: IInvoiceCreate, id: number) => {
    console.log(data, id);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="codigo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codigo</FormLabel>
                <FormControl>
                  <Input placeholder="Codigo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="valor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor</FormLabel>
                <FormControl>
                  <Input placeholder="Valor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="direccion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                  <Input placeholder="Direccion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="mt-4" type="submit">
          {toCreate ? 'Crear' : 'Editar'} Factura
        </Button>
      </form>
    </Form>
  );
}
