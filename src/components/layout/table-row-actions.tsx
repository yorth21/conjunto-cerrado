import { Row } from '@tanstack/react-table';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

interface TableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (value: TData) => void;
  onDelete: (value: TData) => void;
}

export function TableRowActions<TData>({ row, onEdit, onDelete }: TableRowActionsProps<TData>) {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => onEdit(row.original)}
        variant="secondary"
        size="sm"
        className="transition-colors hover:bg-accent"
      >
        <FaPencil />
      </Button>
      <Button onClick={() => onDelete(row.original)} size="sm">
        <FaTrashCan />
      </Button>
    </div>
  );
}
