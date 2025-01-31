import { capitalLetter } from '../../../core/lib/firstCapitalLetter'

export default function UnitMiniCard({ unit }) {
  return (
    <div className="flex flex-col justify-center items-center gap-0.5 py-1 px-2 border-2 border-gray-300 rounded-lg">
      <span className="text-black font-medium"># {unit.numero}</span>
      <small className="text-xs text-gray-500 font-semibold">
        {capitalLetter(unit.tipo)}
      </small>
    </div>
  )
}
