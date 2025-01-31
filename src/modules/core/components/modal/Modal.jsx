import { createPortal } from 'react-dom'
import { useAnimation } from '../../hooks/useAnimation'
import { XIcon } from '../Icons'

export default function Modal({ isModalOpen, closeModal, children, ...props }) {
  const { animationParent } = useAnimation()

  if (!isModalOpen) return null

  return createPortal(
    <div
      ref={animationParent}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/15 backdrop-blur-sm"
    >
      <div
        className={`relative bg-white text-black p-6 rounded-md ${props.className} max-w-lg w-full`}
      >
        {children}
        <div
          onClick={closeModal}
          className="absolute text-gray-600 top-4 right-4 hover:rotate-90 transition-transform duration-200 ease-out cursor-pointer"
        >
          <XIcon />
        </div>
      </div>
    </div>,
    document.getElementById('content_main') || document.body
  )
}
