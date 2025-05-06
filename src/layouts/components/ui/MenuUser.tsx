import { CircleUser, LogOut, User } from 'lucide-react'
import { firstCapitalLetter } from '../../../modules/core/utils/firstCapital'
import authStore from '../../../modules/auth/states/authStore'

import DropdownItem from './DropdownItem'
import { Link } from 'react-router-dom'

export default function MenuUser() {
  const { user, logout } = authStore()

  return (
    <div className="absolute top-full right-0 mt-2 w-60 p-1 bg-white border border-gray-100 rounded-lg shadow-md z-50">
      <div className="flex flex-col gap-1 text-black px-1 py-1.5">
        <div className="flex items-center gap-1.5">
          <User className="size-10 rounded-lg p-1" />
          <div>
            <p className="text-sm truncate font-semibold">{user?.us_nombres}</p>
            <p className="text-xs text-gray-600 truncate">
              {user && firstCapitalLetter(user.rol_nombre)}
            </p>
            <p className="text-xs text-gray-600 truncate">{user?.us_correo}</p>
          </div>
        </div>
      </div>
      <div className="m-1 border-t border-gray-200"></div>
      <Link to="/profile">
        <DropdownItem icon={<CircleUser className="size-4" />} label="Perfil" />
      </Link>
      <div className="m-1 border-t border-gray-200"></div>
      <DropdownItem
        onClick={() => logout()}
        className="text-red-600"
        icon={<LogOut className="size-3.5" />}
        label="Cerrar Sesión"
      />
    </div>
  )
}
