import { forwardRef } from 'react'

export const Input = (props, ref) => (
  <input
    {...props}
    ref={ref}
    className={`w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 focus:bg-slate-50 focus:outline-none ring-1 transition ease-in-out duration-150 ${props.className}`}
  />
)

export default forwardRef(Input)
