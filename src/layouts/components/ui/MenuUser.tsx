import { CircleUser, LogOut, User } from 'lucide-react'
import DropdownItem from './DropdownItem'

export default function MenuUser() {
  return (
    <div className="absolute top-13 right-0 w-60 p-1 bg-white border rounded-lg shadow-lg">
      <div className="flex flex-col gap-1 text-black px-1 py-1.5">
        <div className="flex items-center gap-1.5">
          <User className="size-10 rounded-lg p-1" />
          <div>
            <p className="text-sm truncate font-semibold">Hozmel Roberto</p>
            <p className="text-xs text-gray-600 truncate">Administrador</p>
            <p className="text-xs text-gray-600 truncate">
              juan.perez@bomberos.com
            </p>
          </div>
        </div>
      </div>
      <div className="m-1 border-t border-gray-200"></div>
      <DropdownItem icon={<CircleUser className="size-4" />} label="Perfil" />
      <div className="m-1 border-t border-gray-200"></div>
      <DropdownItem
        className="text-red-600"
        icon={<LogOut className="size-3.5" />}
        label="Cerrar Sesión"
      />
    </div>
  )
}
