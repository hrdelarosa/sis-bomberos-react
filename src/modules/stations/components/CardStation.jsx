import { Stations } from '../../core/components/sidebar/Icons'
import { Map } from '../components/Icons'
import { useAnimation } from '../../core/hooks/useAnimation'

import Badge from '../../core/components/UI/Badge'
import ButtomOptionsCars from '../../core/components/UI/ButtonOptionsCard'
import Menu from '../../core/components/menu/Menu'
import MenuAction from '../../core/components/menu/MenuAction'
import { Trash } from '../../core/components/Icons'
import useStationsStore from '../store/stations'

export default function CardStation({ station, isMenuOpen, handleMenuToggle }) {
  const { deleteStationById } = useStationsStore()
  const { animationParent } = useAnimation()
  const estacion = station.et_nombre.split('-')

  return (
    <div
      ref={animationParent}
      className="flex flex-col gap-2 bg-white p-6 rounded-lg w-full max-w-[580px]"
    >
      <div className="flex justify-between items-center gap-3 w-full">
        <div className="flex items-center gap-1.5 text-fireRed-950">
          <Stations />

          <span className="text-gray-700 font-semibold">{estacion[0]}</span>
        </div>
        <div>
          <div className="mr-1.5">
            <Badge state={station.est_id_et} />
          </div>

          <ButtomOptionsCars
            className="-top-9 -right-4"
            handleMenuToggle={handleMenuToggle}
          />
        </div>
      </div>

      <h3 className="text-xl text-black font-semibold">{estacion[1]}</h3>

      <div className="grid grid-cols-[20px,_1fr] gap-1 h-[72px]">
        <div className="mt-[3px]">
          <Map />
        </div>
        <p className="text-base">{station.et_ubicacion}</p>
      </div>

      <Menu className="-top-7 right-7" isMenuOpen={isMenuOpen}>
        <MenuAction
          action={() => deleteStationById({ id: station.id })}
          className="hover:bg-fireRed-800 hover:text-fireRed-50"
        >
          <Trash />
          Eliminar
        </MenuAction>
      </Menu>
    </div>
  )
}
