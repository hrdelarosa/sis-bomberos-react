import { capitalLetter } from '../../core/lib/firstCapitalLetter'
import style from '../../core/styles/NoneScroll.module.css'
import Badge from './Badge'
import StatusBadge from './StatusBadge'

export default function ListUsers({ users, onEdit, handleModalToggle }) {
  const editingUser = (user) => {
    onEdit(user)
    handleModalToggle()
  }

  return (
    <div className={`bg-white rounded-lg overflow-x-auto ${style.none_scroll}`}>
      <table className="relative w-full border-collapse divide-y divide-gray-800">
        <thead className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm">
          <tr>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              No
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Nombre
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Correo
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Role
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Estado
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Verificado
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Creado
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Actualizado
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            ></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => (
              <tr key={user.id} className="odd:bg-white even:bg-slate-50">
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {`${
                    (i + 1).toString().length === 1
                      ? `00${i + 1}`
                      : (i + 1).toString().length === 2 && `0${i + 1}`
                  }`}
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {`${user.us_nombres} ${user.us_apellidos}`}
                </td>
                <td className="text-sm text-black font-medium text-left px-3 py-[14px]">
                  {user.us_correo}
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {capitalLetter(user.rol_nombre)}
                </td>
                <td className="text-left px-3 py-[14px]">
                  <Badge text={user.est_nombre} />
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  <StatusBadge verified={user.us_verificado} />
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {new Date(user.us_creado).toLocaleDateString()}
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {new Date(user.us_actualizacion).toLocaleDateString()}
                </td>
                <td className="text-sm font-medium text-right px-3 py-[14px]">
                  <button
                    onClick={() => editingUser(user)}
                    className="text-blue-500 hover:text-gray-600 transition-colors duration-300 ease-out"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
