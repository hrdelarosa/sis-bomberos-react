export default function TextRow({ children, ...props }) {
  return (
    <span className={`text-sm font-normal ${props.className}`}>{children}</span>
  )
}
