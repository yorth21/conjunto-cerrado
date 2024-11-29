import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonTableProps {
  rows?: number;
  columns: number;
}

export function SkeletonTable({ rows = 5, columns }: SkeletonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="px-6 py-3">
                <Skeleton className="h-4 w-24" />
              </th>
            ))}
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="whitespace-nowrap px-6 py-4">
                  <Skeleton className="h-4 w-full" />
                </td>
              ))}
              <td className="flex items-center justify-end space-x-2 whitespace-nowrap px-6 py-4">
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-10" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
