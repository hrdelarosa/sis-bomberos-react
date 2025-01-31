export default function Button({ text }) {
  return (
    <button className="bg-gradient-to-r from-fireRed-500 to-fireOrange-400 text-white font-bold py-2 px-4 rounded-md mt-1.5 hover:bg-fireRed-600 hover:to-fireOrange-500 transition ease-in-out duration-150">
      {text}
    </button>
  )
}
