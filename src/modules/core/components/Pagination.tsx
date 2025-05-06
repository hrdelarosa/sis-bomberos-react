import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import { PaginationProps } from '../types/PaginationTypes'
import { usePagination } from '../hooks/usePagination'

import Button from './ui/pagination/Button'

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}: PaginationProps) {
  const { startItem, endItem, handlePageChange, page, paginationItems } =
    usePagination({
      currentPage,
      totalPages,
      itemsPerPage,
      totalItems,
      onPageChange,
    })

  if (totalPages <= 1) return null

  return (
    <div className="w-full flex items-end justify-between mt-7">
      <span className="font-semibold text-gray-700">
        Resultados: {startItem}-{endItem} de {totalItems}
      </span>

      <div className="flex items-center justify-center gap-1">
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="hover:bg-gray-200"
        >
          <ChevronLeft className="size-4" />
        </Button>

        {paginationItems.map((pageNumber) => {
          if (pageNumber === -1 || pageNumber === -2) {
            return (
              <span
                key={pageNumber}
                className="flex items-center justify-center text-sm p-2"
              >
                <Ellipsis className="size-4" />
              </span>
            )
          }
          return (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={
                pageNumber === page
                  ? 'bg-primary-yellow text-black border-primary-yellow hover:bg-black hover:text-primary-yellow hover:border-black'
                  : 'hover:bg-gray-100 hover:border-gray-100'
              }
            >
              {pageNumber}
            </Button>
          )
        })}

        <Button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="hover:bg-gray-200"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
