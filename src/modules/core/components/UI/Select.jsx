import { forwardRef } from 'react'
import { ChevronDown } from '../Icons'
import { capitalLetter } from '../../lib/firstCapitalLetter'

function Select({ options, ...props }, ref) {
  return (
    <div className="relative">
      <div className="absolute right-1.5 top-3">
        <ChevronDown size="size-4" />
      </div>
      <select
        {...props}
        ref={ref}
        className={`w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 appearance-none focus:bg-slate-50 focus:outline-none ring-1 transition ease-in-out duration-150 ${props.className}`}
      >
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={value}>
            {key === 'NONE' ? 'Selecciona una opción' : capitalLetter(value)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default forwardRef(Select)
