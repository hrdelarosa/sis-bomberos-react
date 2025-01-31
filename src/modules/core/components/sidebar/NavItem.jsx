import { ChevronDown, ChevronUp } from '../Icons'

export default function NavItem({
  label,
  icon: Icon,
  hasChildren,
  isOpen,
  onClick,
}) {
  return (
    <div
      className={`flex flex-row gap-3 items-center justify-between text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-fireYellow-400 hover:text-black transition-colors duration-150 ease-linear cursor-pointer select-none`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      <span className="flex-1">{label}</span>
      {hasChildren && (isOpen ? <ChevronUp /> : <ChevronDown />)}
    </div>
  )
}
