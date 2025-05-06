import { ServicesState } from '../../types/ServicesTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'

export default function BadgeStateService({ state }: { state: ServicesState }) {
  const stateStyles = {
    nuevo: 'bg-green-100 text-green-800 hover:bg-green-200',
    reciente: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    antiguo: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    archivado: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold transition-colors duration-300 ease-in focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none ${stateStyles[state]}`}
    >
      {firstCapitalLetter(state)}
    </div>
  )
}
