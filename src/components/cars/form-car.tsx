'use client';

import { ICar, ICarCreate } from '@/interfaces/cars/car';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  placa: z.string().min(6, {
    message: 'Debe tener al menos 6 caracteres.',
  }),
  marca: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  modelo: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  color: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  dueno: z.string().min(2, {
    message: 'Debe tener al menos 2 caracteres.',
  }),
});

interface FormCreateProps {
  item?: ICar;
  toCreate?: boolean;
}

const itemPlaceholder: ICar = {
  id: 0,
  placa: '',
  marca: '',
  modelo: '',
  color: '',
  dueno: '',
};

export function FormCar({ item = itemPlaceholder, toCreate = true }: FormCreateProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      placa: item.placa,
      marca: item.marca,
      modelo: item.modelo,
      color: item.color,
      dueno: item.dueno,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const newItem: ICarCreate = {
      placa: data.placa,
      marca: data.marca,
      modelo: data.modelo,
      color: data.color,
      dueno: data.dueno,
    };

    if (toCreate) {
      await createItem(newItem);
      form.reset();
    } else {
      await updateItem(newItem, item.id);
    }
  };

  const createItem = async (data: ICarCreate) => {
    console.log(data);
  };

  const updateItem = async (data: ICarCreate, id: number) => {
    console.log(data, id);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FormField
            control={form.control}
            name="placa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Placa</FormLabel>
                <FormControl>
                  <Input placeholder="Placa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="marca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <FormControl>
                  <Input placeholder="Marca" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="modelo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input placeholder="Modelo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Color" {...field} />
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
          {toCreate ? 'Crear' : 'Editar'} Vehiculo
        </Button>
      </form>
    </Form>
  );
}
