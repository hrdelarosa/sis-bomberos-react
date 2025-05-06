interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function GroupInputs({ children, ...props }: Props) {
  return <div className={`grid ${props.className} gap-3`}>{children}</div>
}
