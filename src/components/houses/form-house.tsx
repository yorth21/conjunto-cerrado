'use client';

import { IHouse, IHouseCreate } from '@/interfaces/houses/house';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  dueno: z.string().min(2, {
    message: 'Debe tener al menos 2 caracteres.',
  }),
  direccion: z.string().min(3, {
    message: 'Debe tener al menos 3 caracteres.',
  }),
});

interface FormCreateProps {
  item?: IHouse;
  toCreate?: boolean;
}

const itemPlaceholder: IHouse = {
  id: 0,
  dueno: '',
  direccion: '',
};

export function FormHouse({ item = itemPlaceholder, toCreate = true }: FormCreateProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dueno: item.dueno,
      direccion: item.direccion,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const newItem: IHouseCreate = {
      dueno: data.dueno,
      direccion: data.direccion,
    };

    if (toCreate) {
      await createItem(newItem);
      form.reset();
    } else {
      await updateItem(newItem, item.id);
    }
  };

  const createItem = async (data: IHouseCreate) => {
    console.log(data);
  };

  const updateItem = async (data: IHouseCreate, id: number) => {
    console.log(data, id);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="dueno"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dueño</FormLabel>
                <FormControl>
                  <Input placeholder="Dueño" {...field} />
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
          {toCreate ? 'Crear' : 'Editar'} Casa
        </Button>
      </form>
    </Form>
  );
}
