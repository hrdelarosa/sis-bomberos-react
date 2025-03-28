import Select from '../../../core/components/ui/Select'

interface Props {
  children: React.ReactNode
  label: string
  htmlFor: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Filter({ children, label, htmlFor, onChange }: Props) {
  return (
    <div className="w-60">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <Select htmlFor={htmlFor} onChange={onChange}>
        {children}
      </Select>
    </div>
  )
}
