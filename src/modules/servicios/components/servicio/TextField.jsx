export default function TextField({ field, text }) {
  return (
    <p className="text-[17px]">
      <strong className="text-gray-700">{field}:</strong> {text}
    </p>
  )
}
