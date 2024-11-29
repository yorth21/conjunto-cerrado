import Link from 'next/link';
import { FaCode } from 'react-icons/fa6';

import { ModeToggle } from '@/components/layout/mode-toggle';
import { NavLinks } from '@/components/layout/nav-links';

export default function SideNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link href="/">
          <FaCode className="text-primary-500 h-8 w-8" />
          <span className="sr-only">Conjunto cerrado</span>
        </Link>
        <NavLinks />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <ModeToggle />
      </nav>
    </aside>
  );
}
