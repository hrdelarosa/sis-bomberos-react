interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className={`flex items-center justify-center size-9 text-sm font-medium rounded-lg border-2 border-gray-200 ${props.className} leading-loose transition-colors duration-300 ease-in-out cursor-pointer disabled:text-gray-400 disabled:hover:bg-inherit disabled:cursor-auto`}
    >
      {children}
    </button>
  )
}
