type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonCancel({ ...props }: Props) {
  return (
    <button
      {...props}
      type="button"
      className="flex items-center gap-1.5 select-none py-1 px-4 rounded-lg border border-gray-200 hover:bg-gray-100 text-sm font-semibold leading-loose transition-colors duration-200 ease-out cursor-pointer group"
    >
      Cancelar
    </button>
  )
}
