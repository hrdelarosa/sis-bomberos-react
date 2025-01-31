export default function CardInfoService({ title, children, ...props }) {
  return (
    <div
      className={`flex flex-col gap-3 bg-white p-5 rounded-lg w-full ${props.className}`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="flex flex-col gap-3.5">{children}</div>
    </div>
  )
}
