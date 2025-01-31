export default function CheckBox({ htmlFor, text, onChange, checked }) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex flex-row items-center gap-1 light:text-black select-none cursor-pointer"
    >
      <input
        id={htmlFor}
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={onChange}
      />
      <div
        htmlFor={htmlFor}
        className="h-5 w-5 flex rounded-md border border-gray-300 bg-white peer-checked:bg-fireYellow-400 peer-checked:border-black transition"
      ></div>
      {text}
    </label>
  )
}
