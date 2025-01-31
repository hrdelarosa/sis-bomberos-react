export default function GroupInputs({ children, ...props }) {
  return <div className={`grid ${props.className} gap-3`}>{children}</div>
}
