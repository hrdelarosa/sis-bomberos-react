interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

function Input({ className, label, error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-gray-800 font-semibold text-sm">{label}</label>
      )}
      <input
        className={`w-full text-sm bg-white focus:bg-gray-50 text-gray-900 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal border-0 rounded-md p-2 ring-1 transition ease-in-out duration-150 ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

export default Input
