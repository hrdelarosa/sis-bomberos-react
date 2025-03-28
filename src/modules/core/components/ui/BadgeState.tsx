import { firstCapitalLetter } from '../../utils/firstCapital'

export default function BadgeState({ state }: { state: string }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent select-none ${
        state === 'activo'
          ? 'bg-green-100 text-green-800 hover:bg-green-200'
          : 'bg-red-100 text-red-800 hover:bg-red-200'
      }`}
    >
      {firstCapitalLetter(state)}
    </div>
  )
}
