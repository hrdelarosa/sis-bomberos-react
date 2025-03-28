import { Link } from 'react-router-dom'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string
  children: React.ReactNode
}

export default function ButtonNav({ to, children, ...props }: Props) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-1.5 select-none py-1 px-4 rounded-lg ${props.className} text-sm font-semibold leading-loose transition-colors duration-200 ease-out group`}
    >
      {children}
    </Link>
  )
}
