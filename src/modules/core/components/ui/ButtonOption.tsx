interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function ButtonOption({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-gray-300 ${props.className} cursor-pointer h-8 w-8`}
    >
      {children}
    </button>
  )
}
