interface Props extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

export default function TableTh({ children, ...props }: Props) {
  return (
    <th
      {...props}
      scope="col"
      className={`h-12 align-middle px-6 text-left text-sm font-medium text-muted-foreground text-gray-500 ${props.className}`}
    >
      {children}
    </th>
  )
}
