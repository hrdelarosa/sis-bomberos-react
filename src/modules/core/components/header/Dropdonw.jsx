import { Link } from 'react-router-dom'
import { LogoutIcon } from '../sidebar/Icons'
import { Account } from './Icons'
import { useAnimation } from '../../hooks/useAnimation'
import { useDropdonw } from '../../hooks/header/useDropdonw'
import useAuthStore from '../../../auth/store/auth'

export default function Dropdonw({ children }) {
  const { animationParent } = useAnimation()
  const { open, toogleDropdonw, closeDropdonw } = useDropdonw()
  const { logout } = useAuthStore()

  const onClick = () => {
    logout()
    closeDropdonw()
  }

  return (
    <div ref={animationParent} className="relative inline-block text-left">
      <div className="cursor-pointer select-none" onClick={toogleDropdonw}>
        {children}
      </div>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            <Link
              to="profile"
              onClick={closeDropdonw}
              className="flex gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-fireYellow-50/65 hover:text-fireYellow-800 transition-colors duration-300"
            >
              <Account />
              Tu perfil
            </Link>

            <hr />

            <Link
              to="/login"
              className="flex gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-fireRed-50/35 hover:text-fireRed-800 transition-colors duration-300"
              onClick={onClick}
            >
              <LogoutIcon />
              Cerrar sesión
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
