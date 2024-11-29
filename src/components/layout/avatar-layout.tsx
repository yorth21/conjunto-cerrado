import UserImg from '@/assets/images/user.webp';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function AvatarLayout() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
          <Image src={UserImg} width={36} height={36} alt="A" className="overflow-hidden rounded-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Administrador</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
