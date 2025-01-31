export default function MenuAction({ action, children, ...props }) {
  return (
    <li
      onClick={action}
      className={`flex items-center gap-2 py-1 px-2 text-sm font-medium rounded-md ${props.className} transition-transform duration-300 ease-out cursor-pointer`}
    >
      {children}
    </li>
  )
}
