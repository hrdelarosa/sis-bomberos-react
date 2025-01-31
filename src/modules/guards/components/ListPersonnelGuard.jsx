import { ChevronUpDown } from '../../core/components/Icons'
import { capitalLetter } from '../../core/lib/firstCapitalLetter'
import style from '../../core/styles/NoneScroll.module.css'
import { SortBy } from '../../personnel/constants/sortBy'
import usePersonalStore from '../../personnel/store/personnel'

export default function ListPersonnelGuard({ personal, changeSort }) {
  const { deletePersonnelById, updatePersGuard } = usePersonalStore()

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
              Rango
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
              N/P
            </th>
            <th
              onClick={() => {
                changeSort(SortBy.BASE)
              }}
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px] cursor-pointer hover:bg-fireYellow-200 transition-colors duration-150 group"
            >
              <span className="inline-block align-middle">Base</span>
              <span className="inline-block ml-1 align-middle group-hover:text-red-800 group-hover:-translate-y-px transition duration-200 ease-in">
                <ChevronUpDown />
              </span>
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            >
              Estación
            </th>
            <th
              scope="col"
              className="text-sm text-left font-semibold px-3 py-[14px]"
            ></th>
          </tr>
        </thead>
        <tbody>
          {personal &&
            personal.map((persona, i) => (
              <tr key={persona.id} className="odd:bg-white even:bg-slate-50">
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {`${
                    (i + 1).toString().length === 1
                      ? `00${i + 1}`
                      : (i + 1).toString().length === 2 && `0${i + 1}`
                  }`}
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {capitalLetter(persona.ran_nombre)}
                </td>
                <td className="text-sm text-black font-medium text-left px-3 py-[14px]">{`${persona.per_nombres} ${persona.per_apellidos}`}</td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {persona.per_np}
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {capitalLetter(persona.per_base)}
                </td>
                <td className="text-sm text-gray-600 font-medium text-left px-3 py-[14px]">
                  {persona.et_nombre && persona.et_nombre.split('-')[1]}
                </td>
                <td className="flex items-center gap-3 justify-end text-sm font-medium px-3 py-[14px]">
                  <button
                    onClick={() =>
                      updatePersGuard({
                        id: null,
                        input: { personal: [persona.id] },
                      })
                    }
                    className="text-blue-700 hover:text-gray-600 transition-colors duration-300 ease-out"
                  >
                    Quitar
                  </button>

                  <button
                    onClick={() => deletePersonnelById({ id: persona.id })}
                    className="text-red-600 hover:text-gray-600 transition-colors duration-300 ease-out"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
