import { STATE } from '../../core/constants/statesItems'
import { capitalLetter } from '../../core/lib/firstCapitalLetter'

export default function BadgeState({ state }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className={`grid place-content-center size-5 rounded-full ${
          state === STATE.activo ? 'bg-green-200/30' : 'bg-red-200/30'
        }`}
      >
        <div
          className={`size-2.5 rounded-full ${
            state === STATE.activo ? 'bg-green-400' : 'bg-red-500'
          }`}
        ></div>
      </div>
      <span
        className={`text-base font-medium ${
          state === STATE.activo ? 'text-green-700' : 'text-red-700'
        }`}
      >
        {capitalLetter(state === STATE.activo ? STATE.activo : STATE.inactivo)}
      </span>
    </div>
  )
}
