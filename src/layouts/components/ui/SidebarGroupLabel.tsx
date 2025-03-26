export default function SidebarGroupLabel({
  label,
  isSidebarCollapsed,
}: {
  label: string
  isSidebarCollapsed: boolean
}) {
  return (
    <>
      {!isSidebarCollapsed ? (
        <span className="text-xs text-gray-100 font-medium px-3 mb-1.5">
          {label}
        </span>
      ) : (
        <div className="border-t-2 bg-gray-300 w-full"></div>
      )}
    </>
  )
}
