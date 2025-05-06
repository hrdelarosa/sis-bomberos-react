interface Props {
  text: string
  time: string
}

export default function InfoTime({ text, time }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
        <p className="text-sm font-medium">{text}:</p>
        <span className="text-sm font-semibold">{time}</span>
      </div>
    </div>
  )
}
