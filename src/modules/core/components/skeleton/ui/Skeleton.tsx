type Props = React.HTMLAttributes<HTMLDivElement>

export default function Skeleton({ ...props }: Props) {
  return (
    <div
      className={`rounded-lg bg-gray-600/10 animate-pulse ${props.className}`}
    ></div>
  )
}
