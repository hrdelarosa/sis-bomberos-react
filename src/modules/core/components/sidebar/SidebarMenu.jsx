import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ChevronRight } from '../Icons'

export default function SidebarMenu({ to, children }) {
  const resolvedPath = useResolvedPath(to)
  const isMatch = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link
      to={to}
      className={
        isMatch
          ? 'flex flex-row gap-3 items-center justify-between text-sm font-semibold py-2.5 px-3 rounded-lg bg-fireYellow-400 text-black transition-colors duration-150 ease-linear select-none'
          : 'flex flex-row gap-3 items-center justify-between text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-fireYellow-400 hover:text-black text-white group transition-colors duration-150 ease-linear select-none'
      }
    >
      <div className="flex flex-row gap-3 items-center">{children}</div>

      {isMatch ? (
        <ChevronRight />
      ) : (
        <div className="hidden group-hover:block">
          <ChevronRight />
        </div>
      )}
    </Link>
  )
}
