import { forwardRef } from 'react'
import { ChevronDown } from '../../core/components/Icons'

function SelectFilter({ children, ...props }, ref) {
  return (
    <div className="relative">
      <div className="absolute right-1.5 top-3 text-gray-600">
        <ChevronDown size="size-4" />
      </div>
      <select
        {...props}
        ref={ref}
        className={`w-36 bg-white text-sm text-black ring-1 ring-gray-300 focus:ring-gray-500 border-0 rounded-md p-2 appearance-none focus:outline-none transition ease-in-out duration-150 ${props.className}`}
      >
        {children}
      </select>
    </div>
  )
}

export default forwardRef(SelectFilter)
