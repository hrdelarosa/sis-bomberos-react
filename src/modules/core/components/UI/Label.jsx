export default function Label({ htmlFor, label, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-gray-800 font-semibold text-sm"
    >
      {label ? label : children}
    </label>
  )
}
