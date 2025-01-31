export default function Menu({ children, isMenuOpen, ...props }) {
  if (!isMenuOpen) return null
  return (
    <menu
      className={`absolute flex flex-col gap-2.5 ${props.className} bg-white w-fit py-2 rounded-[10px] shadow-lg`}
    >
      <ul className="flex flex-col gap-0.5 px-2">{children}</ul>
    </menu>
  )
}
