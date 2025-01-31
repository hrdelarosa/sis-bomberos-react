export default function ContentTitlePage({ title, children }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[26px] font-medium">{title}</h1>
      {children && children}
    </div>
  )
}
