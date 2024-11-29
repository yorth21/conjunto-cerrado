import { FaPencil, FaTrashCan } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

interface ButtonsTableProps {
  onEdit: () => void;
  onDelete: () => void;
}

export function ButtonsTable({ onEdit, onDelete }: ButtonsTableProps) {
  return (
    <div className="flex gap-2">
      <Button onClick={() => onEdit()} variant="secondary" size="sm" className="transition-colors hover:bg-accent">
        <FaPencil />
      </Button>
      <Button onClick={() => onDelete()} size="sm">
        <FaTrashCan />
      </Button>
    </div>
  );
}
