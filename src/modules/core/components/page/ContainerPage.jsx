export default function ContainerPage({ children, ...props }) {
  return (
    <div {...props} className="flex flex-col gap-4 h-full">
      {children}
    </div>
  )
}
