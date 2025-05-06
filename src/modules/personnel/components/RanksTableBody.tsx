import { Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RankWithStats } from '../types/RanksTypes'
import { useModal } from '../../core/hooks/useModal'
import { pathsAPIURL } from '../../core/constants/pathsApi'
import { firstCapitalLetter } from '../../core/utils/firstCapital'

import TableTd from '../../core/components/ui/table/TableTd'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import ButtonOption from '../../core/components/ui/ButtonOption'
import Modal from '../../core/components/Modal'
import DeleteItem from '../../core/components/DeleteItem'
import RankEditing from './modal/RankEditing'
import ranksStore from '../states/ranksStore'

export default function RanksTableBody({ rank }: { rank: RankWithStats }) {
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const { deleteRank } = ranksStore()
  const handleDelete = async () => {
    await deleteRank({ id: rank.ran_id })
    closeModal()
  }

  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd>{firstCapitalLetter(rank.ran_nombre)}</TableTd>

        <TableTd className="font-medium">
          <span className="ml-3">{rank.totalRanks}</span>
        </TableTd>

        <TableTd className="font-medium">
          <span className="ml-3">{rank.activeRanks}</span>
        </TableTd>
        <TableTd className="font-medium">
          <span className="ml-3">{rank.activePercentage}%</span>
        </TableTd>
        <TableTd>
          <BadgeState state={rank.est_nombre} />
        </TableTd>

        <TableTd>
          <TableButtonsActions handleModalToggle={handleModalToggle}>
            <Link to={`/${pathsAPIURL.personnel.getByRank}${rank.ran_id}`}>
              <ButtonOption className="hover:bg-gray-200">
                <Eye className="size-4" />
              </ButtonOption>
            </Link>
          </TableButtonsActions>
        </TableTd>
      </tr>

      <Modal
        title={
          isModalOpen === 'edit'
            ? 'Editar Rango'
            : isModalOpen === 'delete'
            ? 'Confirmar Eliminación'
            : ''
        }
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        {isModalOpen === 'edit' ? (
          <RankEditing rank={rank} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={firstCapitalLetter(rank.ran_nombre)}
            />
          )
        )}
      </Modal>
    </>
  )
}
