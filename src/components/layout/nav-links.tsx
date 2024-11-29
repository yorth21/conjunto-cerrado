'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHouse,
  FaHouseChimneyUser,
  FaCarSide,
  FaDog,
  FaPeopleGroup,
  FaFileInvoiceDollar,
  FaPerson,
} from 'react-icons/fa6';

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const links = [
  { href: '/', icon: FaHouse, label: 'Home' },
  { href: '/people', icon: FaPerson, label: 'Personas' },
  { href: '/houses', icon: FaHouseChimneyUser, label: 'Casas' },
  { href: '/cars', icon: FaCarSide, label: 'Vehiculos' },
  { href: '/pets', icon: FaDog, label: 'Mascotas' },
  { href: '/visits', icon: FaPeopleGroup, label: 'Visitantes' },
  { href: '/invoices', icon: FaFileInvoiceDollar, label: 'Facturas' },
];

export function NavLinks() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const segment = `/${segments[0] ? segments[0] : ''}`;

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <TooltipProvider key={link.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={clsx(
                    'flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8',
                    {
                      'bg-accent text-accent-foreground': segment === link.href,
                      'text-muted-foreground': segment !== link.href,
                    },
                  )}
                >
                  <LinkIcon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{link.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </>
  );
}
