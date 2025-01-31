export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`flex items-center gap-1.5 select-none py-0.5 px-3 rounded-lg hover:bg-fireYellow-400 hover:text-black bg-black text-fireYellow-400 text-xs font-semibold leading-loose transition-colors duration-200 ease-out ${props.className}`}
    >
      {children}
    </button>
  )
}
