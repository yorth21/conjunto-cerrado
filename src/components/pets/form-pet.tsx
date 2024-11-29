'use client';

import { IPet, IPetCreate } from '@/interfaces/pets/pet';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  nombre: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  raza: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  dueno: z.string().min(2, {
    message: 'Debe tener al menos 2 caracteres.',
  }),
});

interface FormCreateProps {
  item?: IPet;
  toCreate?: boolean;
}

const itemPlaceholder: IPet = {
  id: 0,
  nombre: '',
  raza: '',
  dueno: '',
};

export function FormPet({ item = itemPlaceholder, toCreate = true }: FormCreateProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: item.nombre,
      raza: item.raza,
      dueno: item.dueno,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const newItem: IPetCreate = {
      nombre: data.nombre,
      raza: data.raza,
      dueno: data.dueno,
    };

    if (toCreate) {
      await createItem(newItem);
      form.reset();
    } else {
      await updateItem(newItem, item.id);
    }
  };

  const createItem = async (data: IPetCreate) => {
    console.log(data);
  };

  const updateItem = async (data: IPetCreate, id: number) => {
    console.log(data, id);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            name="raza"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Raza</FormLabel>
                <FormControl>
                  <Input placeholder="Raza" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
        </div>
        <Button className="mt-4" type="submit">
          {toCreate ? 'Crear' : 'Editar'} Mascota
        </Button>
      </form>
    </Form>
  );
}
