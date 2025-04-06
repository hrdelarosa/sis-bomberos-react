import { useState } from 'react'

export function useModal() {
  const [isModalOpen, setModalOpen] = useState<
    'create' | 'edit' | 'delete' | null
  >(null)
  const handleModalToggle = (type: 'create' | 'edit' | 'delete') =>
    setModalOpen(type)
  const closeModal = () => setModalOpen(null)

  return { isModalOpen, handleModalToggle, closeModal }
}
