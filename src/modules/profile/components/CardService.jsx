import { capitalLetter } from '../../core/lib/firstCapitalLetter'
import RowCard from '../../servicios/components/card/RowCard'
import TextRow from '../../servicios/components/card/TextRow'
import {
  Calendar,
  DocumenteText,
  Eye,
  Identification,
  MapPin,
  Phone,
} from '../../servicios/components/Icons'

export default function CardService({ service }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg p-3 w-full max-w-[368px] h-[201px] border-2 border-gray-300">
      <div className="flex flex-col gap-0.5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            {capitalLetter(service.ser_incidente)}
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-0.5 text-sm text-gray-600">
            <Calendar />
            {new Date(service.ser_creado).toLocaleDateString()}
          </span>

          <span className="flex items-center gap-0.5 text-sm text-gray-700">
            <DocumenteText />
            {service.ser_folio}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <RowCard>
          <div>
            <Identification />
          </div>
          <TextRow>
            {service.ser_nombre ? service.ser_nombre : 'No definido'}
          </TextRow>
        </RowCard>

        <RowCard>
          <div>
            <Phone />
          </div>
          <TextRow>
            {service.ser_telefono ? service.ser_telefono : 'No definido'}
          </TextRow>
        </RowCard>

        <RowCard>
          <div>
            <MapPin />
          </div>
          <TextRow className="h-5 truncate">
            {service.ser_ubicacion ? service.ser_ubicacion : 'No definido'}
          </TextRow>
        </RowCard>

        <RowCard start>
          <div>
            <Eye />
          </div>
          <TextRow className="text-pretty truncate h-10">
            {service.ser_observaciones
              ? service.ser_observaciones
              : 'Sin comentarios'}
          </TextRow>
        </RowCard>
      </div>
    </div>
  )
}
