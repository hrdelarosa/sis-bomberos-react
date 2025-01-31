import { capitalLetter } from '../../lib/firstCapitalLetter'
import { STATE } from '../../constants/statesItems'

export default function Badge({ state }) {
  return (
    <small
      className={`text-xs py-0.5 px-2 ${
        state === STATE.activo
          ? 'bg-green-700 text-green-100'
          : 'bg-fireRed-800 text-fireRed-50'
      } rounded-full flex flex-row items-center gap-1`}
    >
      <div
        className={`${
          state === STATE.activo ? 'bg-green-400' : 'bg-fireRed-400'
        } size-2 rounded-full`}
      ></div>
      {capitalLetter(state)}
    </small>
  )
}
