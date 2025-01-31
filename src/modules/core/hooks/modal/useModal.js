import { useState } from 'react'

export function useModal() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const handleModalToggle = () => setModalOpen(true)

  const closeModal = () => setModalOpen(false)

  const handleEdit = (unit) => setEditingItem(unit)

  return { isModalOpen, editingItem, handleModalToggle, closeModal, handleEdit }
}
