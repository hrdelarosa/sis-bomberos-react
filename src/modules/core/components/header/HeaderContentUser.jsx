import { capitalLetter } from '../../lib/firstCapitalLetter'
import { UserCircle } from './Icons'
import useAuthStore from '../../../auth/store/auth'

import Dropdonw from './Dropdonw'

export default function HeaderContentUser() {
  const { user } = useAuthStore()

  return (
    <Dropdonw>
      <div className="flex items-center gap-1.5">
        <UserCircle />

        <div className="flex flex-col">
          <span className="text-base font-semibold">
            Hola, {user?.us_nombres}!
          </span>
          <small className="text-xs font-medium text-gray-500">
            {capitalLetter(user?.rol_nombre)}
          </small>
        </div>
      </div>
    </Dropdonw>
  )
}
