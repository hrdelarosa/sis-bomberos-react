import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Props {
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
  path: string
  isSidebarCollapsed: boolean
  isOpen: boolean
}

export default function SidebarMenuCollapsible({
  onClick,
  icon,
  children,
  path,
  isSidebarCollapsed,
  isOpen,
}: Props) {
  const [animationParent] = useAutoAnimate()

  return (
    // Nota: Esta animación a la hora de cerrar el sidebar hace que se vean raros
    // los iconos cuando tienen el colapsable abierto, pero si se elimina esta
    // amimación hace que se solucione ese efecto raro de los iconos pero el
    // colapsable no tendra animación a la hora de desplegarlo
    <div ref={animationParent}>
      <li>
        <div
          className={`flex gap-3 items-center ${
            isSidebarCollapsed ? 'justify-center' : 'justify-between'
          } text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-primary-yellow hover:text-black transition-colors duration-150 ease-linear cursor-pointer select-none`}
          onClick={onClick}
        >
          <div className="flex gap-3 items-center">
            {icon}
            {!isSidebarCollapsed && <span>{path}</span>}
          </div>

          {!isSidebarCollapsed &&
            (isOpen ? (
              <ChevronUp className="size-5" />
            ) : (
              <ChevronDown className="size-5" />
            ))}
        </div>
      </li>
      {!isSidebarCollapsed && isOpen && (
        <ul className="flex flex-col gap-1 mx-5 pl-2 py-px border-l-[0.8px] border-l-primary-yellow/60">
          {children}
        </ul>
      )}
    </div>
  )
}
