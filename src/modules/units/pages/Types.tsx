import { ListPlus } from 'lucide-react'
import { useTypes } from '../hooks/useTypes'
import { useModal } from '../../core/hooks/useModal'

import ButtonAction from '../../core/components/ui/ButtonAction'
import Modal from '../../core/components/Modal'
import TypeCreate from '../components/modal/TypeCreate'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import TypeTableHead from '../components/TypeTableHead'
import TypeTableBody from '../components/TypeTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'

export default function Types() {
  const { types, errorTypes, loadingTypes, active, activePercentage } =
    useTypes()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-2xl font-semibold">
                Listado de Tipos de Unidades
              </h1>

              <div>
                <ButtonAction
                  className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow"
                  onClick={() => handleModalToggle('create')}
                >
                  <ListPlus className="size-4" />
                  Nuevo Tipo
                </ButtonAction>
              </div>

              <Modal
                title="Crear Tipo de Unidad"
                isOpneModal={isModalOpen !== null}
                onClose={closeModal}
              >
                <TypeCreate closeModal={closeModal} />
              </Modal>
            </div>

            <GraphicChart
              className="px-3 py-1.5 bg-gradient-to-br from-yellow-50/55 to-orange-50/55 border border-yellow-100/60 rounded-lg"
              title="Total de tipos de Unidades"
              total={types.length}
              active={active.length}
              percentage={activePercentage}
            />
          </div>

          <div className="p-6 pt-0">
            <Table head={<TypeTableHead />}>
              {errorTypes ? (
                <TableMessage colSpan={6} message={errorTypes} />
              ) : (
                types.length > 0 &&
                types.map((type) => (
                  <TypeTableBody key={type.tu_id} type={type} />
                ))
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
