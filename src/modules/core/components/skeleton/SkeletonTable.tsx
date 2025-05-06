import TableTd from '../ui/table/TableTd'
import Skeleton from './ui/Skeleton'

interface Props {
  colums: number
  rows: number
}

export default function SkeletonTable({ colums, rows }: Props) {
  return (
    <>
      {Array.from({ length: rows }).map((rowIndex) => (
        <tr key={`skeleton-row-${rowIndex}`}>
          {Array.from({ length: colums }).map((colIndex) => (
            <TableTd key={`skeleton-col-${rowIndex}-${colIndex}`}>
              <Skeleton className="w-full h-7" />
            </TableTd>
          ))}
        </tr>
      ))}
    </>
  )
}
