import { forwardRef } from 'react'
import { ChevronDown } from '../Icons'
import { capitalLetter } from '../../lib/firstCapitalLetter'

function SelectItems({ items, ...props }, ref) {
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
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {capitalLetter(
              item.est_nombre ||
                item.gu_nombre ||
                item.ran_nombre ||
                item.rol_nombre
            )}
          </option>
        ))}
      </select>
    </div>
  )
}

export default forwardRef(SelectItems)
