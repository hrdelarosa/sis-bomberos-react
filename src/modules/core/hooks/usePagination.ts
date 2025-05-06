import { useState } from 'react'
import { PaginationProps } from '../types/PaginationTypes'

export function usePagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
}: PaginationProps) {
  const [page, setPage] = useState(currentPage)
  const siblingsCount = 1

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return
    setPage(newPage)
    onPageChange({ page: newPage })
  }

  const generatePagination = () => {
    const pagination = [1]
    const leftSibling = Math.max(page - siblingsCount, 2)
    const rightSibling = Math.min(page + siblingsCount, totalPages - 1)

    if (leftSibling > 2) {
      pagination.push(-1)
    }

    for (let i = leftSibling; i <= rightSibling; i++) {
      pagination.push(i)
    }

    if (rightSibling < totalPages - 1) {
      pagination.push(-2)
    }

    if (totalPages > 1) {
      pagination.push(totalPages)
    }

    return pagination
  }

  const paginationItems = generatePagination()
  const startItem = (page - 1) * itemsPerPage + 1
  const endItem = Math.min(page * itemsPerPage, totalItems)

  return {
    page,
    totalPages,
    startItem,
    endItem,
    totalItems,
    paginationItems,
    handlePageChange,
  }
}
