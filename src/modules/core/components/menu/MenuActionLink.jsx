import { Link } from 'react-router-dom'

export default function MenuActionLink({ to, children, ...props }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 py-1 px-2 text-sm font-medium rounded-md text-gray-700 ${props.className} transition-transform duration-300 ease-out cursor-pointer`}
    >
      {children}
    </Link>
  )
}
