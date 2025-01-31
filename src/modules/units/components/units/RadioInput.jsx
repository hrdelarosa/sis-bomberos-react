import { forwardRef } from 'react'
import { capitalLetter } from '../../../core/lib/firstCapitalLetter'
import { STATE } from '../../../core/constants/statesItems'
import { CheckCircle } from '../Icons'

function RadioInputs({ text, ...props }, ref) {
  return (
    <label className="relative flex items-center gap-1.5 cursor-pointer w-fit">
      <input className="sr-only peer" type="radio" ref={ref} {...props} />
      <div
        className={`size-6 bg-transparent rounded-full border-2 ${
          text === STATE.activo
            ? 'border-green-500 peer-checked:bg-green-500'
            : text === STATE.inactivo &&
              'border-fireRed-500 peer-checked:bg-fireRed-500'
        } transition duration-300 ease-in-out`}
      ></div>
      <div className="absolute peer-checked:block hidden text-white">
        <CheckCircle />
      </div>
      <span className="text-black">{capitalLetter(text)}</span>
    </label>
  )
}

export default forwardRef(RadioInputs)
