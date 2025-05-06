interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string
  check: boolean
  text: string
}

export default function CheckUnit({ htmlFor, check, text, ...props }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className={`flex items-center gap-1.5 text-sm font-medium select-none cursor-pointer p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 transition ${
        check && 'bg-gray-100'
      }`}
    >
      <input id={htmlFor} type="checkbox" className="peer hidden" {...props} />
      <div className="size-3.5 flex rounded border border-gray-300 bg-white peer-checked:bg-black peer-checked:border-black transition"></div>
      {text}
    </label>
  )
}
