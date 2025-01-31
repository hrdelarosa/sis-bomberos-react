export default function SidebarAction({ children, action }) {
  return (
    <button
      onClick={action}
      className="flex flex-row gap-3 items-center text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-fireYellow-400 hover:text-black transition duration-150 ease-linear group"
    >
      {children}
    </button>
  )
}
