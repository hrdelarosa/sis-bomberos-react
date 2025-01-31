import { capitalLetter } from '../../core/lib/firstCapitalLetter'

export function GroupOtion({ label, children }) {
  return (
    <optgroup className="text-xs text-gray-500 font-bold" label={label}>
      {children}
    </optgroup>
  )
}

export function Option({ text, ...props }) {
  return (
    <option className="text-sm text-gray-800" {...props}>
      {capitalLetter(text)}
    </option>
  )
}
