'use client';

import { IPerson, IPersonCreate } from '@/interfaces/people/person';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  nombre: z.string().min(2, {
    message: 'Debe tener al menos 2 caracteres.',
  }),
  identificacion: z
    .string()
    .min(2, {
      message: 'Debe tener al menos 2 caracteres.',
    })
    .regex(/^\d+$/, { message: 'solo digitos' }),
  genero: z.string().min(1, {
    message: 'Debe tener al menos 1 caracteres.',
  }),
  edad: z
    .string()
    .min(1, {
      message: 'Debe tener al menos 1 caracteres.',
    })
    .regex(/^\d+$/, { message: 'solo digitos' }),
  telefono: z
    .string()
    .min(3, {
      message: 'Debe tener al menos 3 caracteres.',
    })
    .regex(/^\d+$/, { message: 'solo digitos' }),
  direccion: z.string().min(3, {
    message: 'Debe tener al menos 3 caracteres.',
  }),
});

interface FormCreateProps {
  item?: IPerson;
  toCreate?: boolean;
}

const itemPlaceholder: IPerson = {
  id: 0,
  nombre: '',
  identificacion: '',
  genero: '',
  edad: 0,
  telefono: '',
  direccion: '',
};

export function FormPerson({ item = itemPlaceholder, toCreate = true }: FormCreateProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: item.nombre,
      identificacion: item.identificacion,
      genero: item.genero,
      edad: item.edad ? item.edad.toString() : '',
      telefono: item.telefono,
      direccion: item.direccion,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const newItem: IPersonCreate = {
      nombre: data.nombre,
      identificacion: data.identificacion,
      genero: data.genero,
      edad: parseInt(data.edad),
      telefono: data.telefono,
      direccion: data.direccion,
    };

    if (toCreate) {
      await createItem(newItem);
      form.reset();
    } else {
      await updateItem(newItem, item.id);
    }
  };

  const createItem = async (data: IPersonCreate) => {
    console.log(data);
  };

  const updateItem = async (data: IPersonCreate, id: number) => {
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
            name="identificacion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identificacion</FormLabel>
                <FormControl>
                  <Input placeholder="Identificacion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genero"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genero</FormLabel>
                <FormControl>
                  <Input placeholder="Genero" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="edad"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Edad</FormLabel>
                <FormControl>
                  <Input placeholder="Edad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input placeholder="Telefono" {...field} />
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
          {toCreate ? 'Crear' : 'Editar'} Persona
        </Button>
      </form>
    </Form>
  );
}
