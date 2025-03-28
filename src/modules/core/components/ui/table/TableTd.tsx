interface Props extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

export default function TableTd({ children, ...props }: Props) {
  return (
    <td className={`px-4 py-3.5 align-middle text-sm ${props.className}`}>
      {children}
    </td>
  )
}
