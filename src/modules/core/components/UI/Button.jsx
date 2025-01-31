export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`flex items-center gap-1.5 select-none py-1 px-4 rounded-lg bg-fireYellow-400 text-black hover:bg-black hover:text-fireYellow-400 text-sm font-semibold leading-loose transition-colors duration-200 ease-out group`}
    >
      {children}
    </button>
  )
}
