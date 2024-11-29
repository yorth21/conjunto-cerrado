import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface SheetFormCompanyProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function SheetFormTable({ isOpen, setIsOpen, title, children }: SheetFormCompanyProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent size="md" className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="mb-4">{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
