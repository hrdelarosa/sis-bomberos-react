interface Props {
  type: string
  length: number
  children: React.ReactNode
}

export default function CardTypeUnit({ type, length, children }: Props) {
  return (
    <div className="rounded-lg bg-white shadow-sm">
      <div className="flex flex-col p-3 pb-0 rounded-t-lg">
        <span className="text-sm font-semibold capitalize">{type}</span>
      </div>

      <div className="p-3">
        <div
          className={`grid ${
            length >= 6 ? 'grid-cols-3' : 'grid-cols-2'
          } gap-1.5`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
