import { capitalLetter } from '../../core/lib/firstCapitalLetter'
import { Trash } from '../../core/components/Icons'
import { Ranks } from '../../core/components/sidebar/Icons'
import { useAnimation } from '../../core/hooks/useAnimation'
import useRanksStore from '../store/ranks'

import ButtomOptionsCard from '../../core/components/UI/ButtonOptionsCard'
import Menu from '../../core/components/menu/Menu'
import MenuAction from '../../core/components/menu/MenuAction'

export default function CardRank({ rank, isMenuOpen, handleMenuToggle }) {
  const { deleteRankById } = useRanksStore()
  const { animationParent } = useAnimation()

  return (
    <div
      ref={animationParent}
      className="flex flex-col gap-4 bg-white p-5 rounded-lg w-full max-w-[288px]"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-gray-700">
              <Ranks />
            </div>

            <span className="text-xl font-semibold">
              {capitalLetter(rank.ran_nombre)}
            </span>
          </div>

          <ButtomOptionsCard
            className="-top-[18px] -right-2"
            handleMenuToggle={handleMenuToggle}
          />
        </div>
      </div>

      <Menu className="-top-11 right-9" isMenuOpen={isMenuOpen}>
        <MenuAction
          action={() => deleteRankById({ id: rank.id })}
          className="hover:bg-fireRed-800 hover:text-fireRed-50"
        >
          <Trash />
          Eliminar
        </MenuAction>
      </Menu>
    </div>
  )
}
