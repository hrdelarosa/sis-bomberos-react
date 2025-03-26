interface Props {
  action: () => void
  icon: React.ReactNode
  path: string
  isSidebarCollapsed: boolean
}

export default function SidebarMenuItemAction({
  action,
  icon,
  path,
  isSidebarCollapsed,
}: Props) {
  return (
    <button
      onClick={action}
      className={`flex items-center ${
        isSidebarCollapsed ? 'justify-center' : 'justify-between'
      } cursor-pointer text-base font-semibold py-2 px-3 rounded-lg hover:bg-primary-yellow hover:text-black text-white group transition-colors duration-150 ease-linear select-none`}
    >
      <div className="flex gap-3 items-center">
        <div
          className={`group-hover:text-primary-red ${
            !isSidebarCollapsed
              ? 'group-hover:scale-110 group-hover:translate-x-1'
              : 'group-hover:scale-105 group-hover:translate-x-px'
          } duration-300`}
        >
          {icon}
        </div>
        {!isSidebarCollapsed && <span>{path}</span>}
      </div>
    </button>
  )
}
