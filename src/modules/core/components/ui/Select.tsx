import { ChevronDown } from 'lucide-react'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  children: React.ReactNode
  label: string
  htmlFor: string
}

export default function Select({
  className,
  children,
  label,
  htmlFor,
  ...props
}: Props) {
  return (
    <div className={className ? className : 'w-48'}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      <div className="relative">
        <select
          className="w-full px-2.5 py-1.5 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 appearance-none cursor-pointer"
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="size-5 absolute right-2.5 top-2 text-gray-600" />
      </div>
    </div>
  )
}
