export default function TimeField({ text, time }) {
  const [hour, minu] = time.split(':')

  return (
    <div className="flex items-center gap-3">
      <strong className="text-gray-700">{text}:</strong>
      <p className="flex items-center border border-gray-700 py-px px-0.5 divide-x divide-gray-700">
        <span className="pr-0.5">{hour}</span>
        <span className="pl-0.5">{minu}</span>
      </p>
    </div>
  )
}
