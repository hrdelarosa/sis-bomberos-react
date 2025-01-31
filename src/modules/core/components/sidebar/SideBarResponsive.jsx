import { XIcon } from '../Icons'
import Aside from './Aside'

export default function SideBarResponsive({ isAsideVisible, closeAside }) {
  return (
    <div className="relative z-50 lg:hidden block">
      <div
        className={`fixed inset-0 bg-gray-900 transition-opacity duration-300 ease-in-out ${
          isAsideVisible ? 'opacity-80' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeAside}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-blue-600 text-white transform transition-transform duration-300 ease-in-out ${
          isAsideVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Aside />
        {isAsideVisible && (
          <div className="absolute left-full top-0 flex justify-center w-16 pt-5">
            <button onClick={closeAside}>
              <XIcon />{' '}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
