import { useState } from 'react'
import Modal from '../../core/components/Modal'

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false)
  const handleModalToggle = () => setModalOpen(!isModalOpen)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="flex h-full">
      <div className="w-72 h-48 p-3 bg-primary-white-main text-black rounded-lg">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={handleModalToggle} className="p-2 bg-blue-300">
          Modal
        </button>

        <Modal title="Editar" isOpneModal={isModalOpen} onClose={closeModal}>
          <div>Nuevo Modal</div>
        </Modal>
      </div>
    </div>
  )
}
