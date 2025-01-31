import { useAnimation } from '../../../core/hooks/useAnimation'
import { capitalLetter } from '../../../core/lib/firstCapitalLetter'
import {
  Calendar,
  CreateBy,
  DocumenteText,
  Eye,
  Identification,
  MapPin,
  Phone,
} from '../Icons'
import { BoxArchiveX, VisitArrow } from '../../../core/components/Icons'
import useServicesStore from '../../store/services'

import ButtomOptionsCard from '../../../core/components/UI/ButtonOptionsCard'
import RowCard from '../card/RowCard'
import TextRow from '../card/TextRow'
import Menu from '../../../core/components/menu/Menu'
import MenuActionLink from '../../../core/components/menu/MenuActionLink'
import MenuAction from '../../../core/components/menu/MenuAction'

export default function ServicesCard({
  service,
  isMenuOpen,
  handleMenuToggle,
}) {
  const { deleteServiceById } = useServicesStore()
  const { animationParent } = useAnimation()

  return (
    <div
      ref={animationParent}
      className="flex flex-col gap-4 bg-white p-5 rounded-lg w-full max-w-[378px]"
    >
      <div className="flex flex-col gap-0.5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            {capitalLetter(service.ser_incidente)}
          </h3>

          <ButtomOptionsCard
            className="-top-[23px] -right-[9px]"
            handleMenuToggle={handleMenuToggle}
          />
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
          <div className="text-fireRed-950">
            <Identification />
          </div>
          <TextRow>{service.ser_nombre}</TextRow>
        </RowCard>

        <RowCard>
          <div className="text-fireRed-950">
            <Phone />
          </div>
          <TextRow>{service.ser_telefono}</TextRow>
        </RowCard>

        <RowCard>
          <div className="text-fireRed-950">
            <MapPin />
          </div>
          <TextRow>{service.ser_ubicacion}</TextRow>
        </RowCard>

        <RowCard start>
          <div className="text-fireRed-950">
            <Eye />
          </div>
          <TextRow className="text-pretty truncate h-10">
            {service.ser_observaciones}
          </TextRow>
        </RowCard>

        <RowCard className="mt-2">
          <div className="text-fireRed-950">
            <CreateBy />
          </div>
          <span className="text-xs font-medium text-gray-600">
            Creada por: {service.us_nombres}
          </span>
        </RowCard>
      </div>

      <Menu className="-top-11 right-9" isMenuOpen={isMenuOpen}>
        <MenuActionLink
          to={`/services/${service.id}`}
          className="hover:bg-fireYellow-300 hover:text-black"
        >
          <VisitArrow />
          Ver
        </MenuActionLink>
        <MenuAction
          action={() => deleteServiceById({ id: service.id })}
          className="hover:bg-fireRed-700 hover:text-fireRed-50"
        >
          <BoxArchiveX />
          Eliminar
        </MenuAction>
      </Menu>
    </div>
  )
}
