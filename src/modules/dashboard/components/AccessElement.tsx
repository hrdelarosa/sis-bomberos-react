import { Link } from 'react-router-dom'

interface Props {
  to: string
  children: React.ReactNode
  title: string
}

export default function AccessElement({ to, children, title }: Props) {
  return (
    <Link
      to={to}
      className="p-3 flex flex-col items-center text-center gap-2 rounded-lg bg-white border-2 border-gray-200 hover:bg-stone-50/40 hover:border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      {children}
      <h3 className="text-sm font-medium">{title}</h3>
    </Link>
  )
}
