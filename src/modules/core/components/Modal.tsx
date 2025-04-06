import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface Props {
  title: string
  isOpneModal: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({
  title,
  isOpneModal,
  onClose,
  children,
}: Props) {
  if (!isOpneModal) return null

  return createPortal(
    <dialog className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50 p-4 z-50">
      <div className="relative bg-white text-black p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xl font-semibold">{title}</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:rotate-90 transition-transform duration-200 ease-out cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3">{children}</div>
      </div>
    </dialog>,
    document.getElementById('root') || document.body
  )
}
