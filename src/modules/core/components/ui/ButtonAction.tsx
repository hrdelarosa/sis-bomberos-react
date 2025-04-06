interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function ButtonAction({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className={`flex items-center gap-1.5 select-none py-1 px-4 rounded-lg ${props.className} text-sm font-semibold leading-loose transition-colors duration-200 ease-out cursor-pointer group`}
    >
      {children}
    </button>
  )
}
