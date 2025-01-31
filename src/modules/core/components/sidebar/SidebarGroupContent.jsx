export default function SidebarGroupContent({ group, children }) {
  return (
    <li className="flex flex-col gap-1">
      {group && (
        <span className="text-xs text-gray-300 font-semibold">
          {group.toUpperCase()}
        </span>
      )}
      <div className="flex flex-col gap-1 justify-center">{children}</div>
    </li>
  )
}
