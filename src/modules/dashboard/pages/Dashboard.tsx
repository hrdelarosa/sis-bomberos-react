import { FilePlus, ShieldCheck, Truck, Users } from 'lucide-react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'
import { pathsAside } from '../../core/constants/pathsAside'

import BarServices from '../components/charts/BarServices'
import PieServices from '../components/charts/PieServices'
import IncidenteMonth from '../components/charts/IncidenteMonth'
import TimesServices from '../components/charts/TimesServices'
import DoughnutTypesUnit from '../components/charts/DoughnutTypesUnit'
import BarUnits from '../components/charts/BarUnits'
import ContentCard from '../../core/components/ui/ContentCard'
import AccessElement from '../components/AccessElement'
import ServicesMonth from '../components/charts/ServicesMonth'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 grid-rows-[1fr_auto_1fr_auto] gap-3">
      <BarServices />

      <PieServices />

      <IncidenteMonth />

      <TimesServices />

      <DoughnutTypesUnit />

      <BarUnits />

      <ContentCard className="p-5 col-span-2 row-start-4">
        <h1 className="text-2xl font-semibold mb-5">Accesos Rápidos</h1>

        <div className="grid grid-cols-4 gap-4">
          <AccessElement
            to={pathsAside.menu.services.items.create.to}
            title="Crear Servicio"
          >
            <FilePlus className="size-5 text-primary-button-delete" />
          </AccessElement>

          <AccessElement to={pathsAside.support.units.to} title="Unidades">
            <Truck className="size-5 text-blue-600" />
          </AccessElement>

          <AccessElement to={pathsAside.support.personnel.to} title="Personal">
            <Users className="size-5 text-green-600" />
          </AccessElement>

          <AccessElement
            to={pathsAside.support.stations.items.guards.to}
            title="Guardias"
          >
            <ShieldCheck className="size-5 text-yellow-600" />
          </AccessElement>
        </div>
      </ContentCard>

      <ServicesMonth />
    </div>
  )
}
