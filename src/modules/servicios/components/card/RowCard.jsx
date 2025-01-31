export default function RowCard({ children, start, ...props }) {
  return (
    <div
      className={`flex ${start ? 'items-start' : 'items-center'} gap-1 ${
        props.className
      }`}
    >
      {children}
    </div>
  )
}
