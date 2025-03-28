import { ChevronDown } from 'lucide-react'

export default function Select({
  children,
  htmlFor,
  onChange,
}: {
  children: React.ReactNode
  htmlFor: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <div className="relative">
      <select
        className="w-full px-2.5 py-1.5 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 appearance-none cursor-pointer"
        name={htmlFor}
        id={htmlFor}
        onChange={onChange}
      >
        {children}
      </select>
      <ChevronDown className="size-5 absolute right-2.5 top-2 text-gray-600" />
    </div>
  )
}
