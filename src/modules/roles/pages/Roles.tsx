import { ListPlus } from 'lucide-react'
import { useRoles } from '../hooks/useRoles'

import ButtonAction from '../../core/components/ui/ButtonAction'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import RolesTableHead from '../components/RolesTableHead'
import RolesTableBody from '../components/RolesTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import { useModal } from '../../core/hooks/useModal'
import Modal from '../../core/components/Modal'
import RoleCreate from '../components/modal/RoleCreate'

export default function Roles() {
  const { roles, errorRoles, loading, active, activePercentage } = useRoles()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-2xl font-semibold">Listado de Roles</h1>

              <div>
                <ButtonAction
                  className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow"
                  onClick={() => handleModalToggle('create')}
                >
                  <ListPlus className="size-4" />
                  Nuevo rol
                </ButtonAction>
              </div>

              <Modal
                title="Crear nuevo Rol"
                isOpneModal={isModalOpen !== null}
                onClose={closeModal}
              >
                <RoleCreate closeModal={closeModal} />
              </Modal>
            </div>

            <GraphicChart
              className="px-3 py-1.5 bg-gradient-to-br from-yellow-50/55 to-orange-50/55 border border-yellow-100/60 rounded-lg"
              title="Total de Roles"
              total={roles.length}
              active={active.length}
              percentage={activePercentage}
            />
          </div>

          <div className="p-6 pt-0">
            <Table head={<RolesTableHead />}>
              {errorRoles ? (
                <TableMessage colSpan={7} message={errorRoles} />
              ) : (
                roles.length > 0 &&
                roles.map((role) => (
                  <RolesTableBody key={role.rol_id} role={role} />
                ))
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
