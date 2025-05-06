import { Search } from 'lucide-react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  long?: string
}

export default function SearchInput({ label, long, ...props }: Props) {
  return (
    <div className={long ? long : 'w-60'}>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label ? label : 'Buscar un Personal'}
      </label>
      <div className="relative">
        <Search className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
        <input
          {...props}
          type="text"
          className={`pr-8 pl-2.5 py-1.5 w-full text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 appearance-none ${props.className}`}
        />
      </div>
    </div>
  )
}
