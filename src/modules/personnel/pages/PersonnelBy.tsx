import { UserPlus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { usePersonnelBy } from '../hooks/usePersonnelBy'
import { useModal } from '../../core/hooks/useModal'

import Loader from '../../core/components/ui/Loader'
import ButtonAction from '../../core/components/ui/ButtonAction'
import Modal from '../../core/components/Modal'
import PersonnelCreate from '../components/modal/PersonnelCreate'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import PersonnelTableHead from '../components/PersonnelTableHead'
import PersonnelTableBody from '../components/PersonnelTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'

export default function PersonnelBy() {
  const { id, filter } = useParams<{ id: string; filter: string }>()
  const {
    personnel,
    loading,
    errorPersonnel,
    active,
    activePercentage,
    handleChangeSort,
  } = usePersonnelBy({ id: Number(id), filter })
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-2xl font-semibold">
                Listado del Personal por{' '}
                {filter === 'rank' ? 'Rango' : 'Guardia'}
              </h1>

              <div className="flex gap-2">
                <ButtonAction
                  className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow"
                  onClick={() => handleModalToggle('create')}
                >
                  <UserPlus className="size-4" />
                  Nuevo Personal
                </ButtonAction>
              </div>

              <Modal
                title="Crear nuevo Personal"
                isOpneModal={isModalOpen !== null}
                onClose={closeModal}
              >
                <PersonnelCreate closeModal={closeModal} />
              </Modal>
            </div>

            <GraphicChart
              className="px-3 py-1.5 bg-gradient-to-br from-yellow-50/55 to-orange-50/55 border border-yellow-100/60 rounded-lg"
              title="Total del Personal"
              total={personnel.length}
              active={active?.length}
              percentage={activePercentage}
            />
          </div>

          <div className="p-6 pt-0">
            <Table head={<PersonnelTableHead changeSort={handleChangeSort} />}>
              {loading ? (
                <Loader />
              ) : errorPersonnel ? (
                <TableMessage colSpan={8} message={errorPersonnel} />
              ) : !personnel || personnel.length === 0 ? (
                <TableMessage
                  colSpan={8}
                  message="No se han encontrado el personal por el rango"
                />
              ) : (
                personnel.map((person) => (
                  <PersonnelTableBody key={person.per_id} person={person} />
                ))
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
