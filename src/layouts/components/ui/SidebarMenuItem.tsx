import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Props {
  to: string
  icon: React.ReactNode
  path: string
  isSidebarCollapsed: boolean
}

export default function SidebarMenuItem({
  to,
  icon,
  path,
  isSidebarCollapsed,
}: Props) {
  const resolvedPath = useResolvedPath(to)
  const isMatch = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center ${
          isSidebarCollapsed ? 'justify-center' : 'justify-between'
        } text-base font-semibold py-2 px-3 rounded-lg ${
          isMatch
            ? 'bg-primary-yellow text-black'
            : 'hover:bg-primary-yellow hover:text-black text-white group'
        } transition-colors duration-150 ease-linear select-none`}
      >
        <div className="flex gap-3 items-center">
          {icon}
          {!isSidebarCollapsed && <span>{path}</span>}
        </div>

        {!isSidebarCollapsed &&
          (isMatch ? (
            <ChevronRight className="size-5" />
          ) : (
            <ChevronRight className="size-5 hidden group-hover:block" />
          ))}
      </Link>
    </li>
  )
}
