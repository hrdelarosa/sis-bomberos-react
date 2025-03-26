interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

export default function DropdownItem({
  icon,
  label,
  onClick,
  ...props
}: Props) {
  return (
    <div
      className={`flex items-center gap-1.5 ${props.className} text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
