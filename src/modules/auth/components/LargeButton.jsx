export default function LargeButton({ loading, children, props }) {
  return (
    <button
      {...props}
      className="select-none py-1 px-7 rounded-lg bg-fireYellow-400 text-black hover:bg-black hover:text-fireYellow-400 text-sm font-semibold leading-loose transition-colors duration-200 ease-out"
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="size-6 border-[3px] border-t-gray-300 border-gray-100 rounded-full animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </button>
  )
}
