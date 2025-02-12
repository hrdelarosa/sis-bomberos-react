export default function Button({ text, loading }) {
  return (
    <button
      disabled={loading}
      className="bg-gradient-to-r from-fireRed-500 to-fireOrange-400 text-white font-bold py-2 px-4 rounded-md mt-1.5 hover:bg-fireRed-600 hover:to-fireOrange-500 transition ease-in-out duration-150"
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="size-6 border-[3px] border-t-gray-300 border-gray-100 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>{text}</>
      )}
    </button>
  )
}
