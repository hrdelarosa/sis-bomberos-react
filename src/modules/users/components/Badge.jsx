import { STATE } from '../../core/constants/statesItems'
import { capitalLetter } from '../../core/lib/firstCapitalLetter'

export default function Badge({ text }) {
  return (
    <>
      {text === STATE.activo ? (
        <span className="text-xs font-medium px-2 py-0.5 bg-green-50 text-green-700 rounded-md ring-1 ring-green-200">
          {capitalLetter(text)}
        </span>
      ) : (
        text === STATE.inactivo && (
          <span className="text-xs font-medium px-2 py-0.5 bg-red-50 text-red-700 rounded-md ring-1 ring-red-200">
            {capitalLetter(text)}
          </span>
        )
      )}
    </>
  )
}
