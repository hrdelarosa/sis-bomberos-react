interface Props extends React.HTMLAttributes<HTMLTableCellElement> {
  text: string
}

export default function TableTh({ text, ...props }: Props) {
  return (
    <th
      scope="col"
      className={`h-12 align-middle px-6 text-left text-sm font-medium text-muted-foreground text-gray-500 ${props.className}`}
    >
      {text}
    </th>
  )
}
