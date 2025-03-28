import { Ambulance, Car, Droplets, Truck } from 'lucide-react'

export default function GetIcon({
  type,
  size,
}: {
  type: string
  size: string
}) {
  switch (type.toLowerCase()) {
    case 'ambulancias':
      return <Ambulance className={`text-red-500 ${size}`} />
    case 'camioneta':
      return <Car className={`text-green-400 ${size}`} />
    case 'motobombas':
      return <Truck className={`text-orange-400 ${size}`} />
    case 'pipas':
      return <Droplets className={`text-blue-400 ${size}`} />
    default:
      return <Truck className={`text-orange-400 ${size}`} />
  }
}
