export default function Loader() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <div className="w-full h-full gap-x-2 flex justify-center items-center">
        <div className="w-5 bg-[#FF4B4B] animate-pulse h-5 rounded-full"></div>
        <div className="w-5 animate-pulse h-5 bg-[#FF6B4B] rounded-full"></div>
        <div className="w-5 h-5 animate-pulse bg-[#FF8533] rounded-full"></div>
      </div>
    </div>
  )
}
