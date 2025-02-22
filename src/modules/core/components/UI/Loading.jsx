export default function Loading() {
  return (
    <div className="grid place-content-center h-full pb-24">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-fireRed-700 text-4xl animate-spin flex items-center justify-center border-t-fireRed-300 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-fireYellow-700 text-2xl animate-spin flex items-center justify-center border-t-fireYellow-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
