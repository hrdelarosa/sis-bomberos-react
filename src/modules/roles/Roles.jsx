import { useEffect } from 'react'
import { useMenu } from '../core/hooks/menu/useMenu'
import { useModal } from '../core/hooks/modal/useModal'
import { PlusCircle } from '../core/components/Icons'
import useRoleStore from './store/roles'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Button from '../core/components/UI/Button'
import Loading from '../core/components/UI/Loading'
import ContentItems from '../core/components/ContentItems'
import CardRole from './components/CardRole'
import RoleCreateModal from './components/RoleCreateModal'

export default function Roles() {
  const { roles, error, getAllRoles, loading, upgrade } = useRoleStore()
  const { isMenuOpen, handleMenuToggle, handleClickOutside } = useMenu()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  useEffect(() => {
    getAllRoles()
  }, [getAllRoles, upgrade])

  return (
    <Layout>
      <ContainerPage onClick={() => handleClickOutside()}>
        <ContentTitlePage title="Roles">
          <div>
            <Button onClick={handleModalToggle}>
              Crear role
              <PlusCircle />
            </Button>
          </div>
        </ContentTitlePage>

        {loading ? (
          <Loading />
        ) : (
          <ContentItems>
            {roles &&
              roles.map((role) => (
                <CardRole
                  key={role.id}
                  role={role}
                  isMenuOpen={isMenuOpen === role.id}
                  handleMenuToggle={() => handleMenuToggle(role.id)}
                />
              ))}
          </ContentItems>
        )}
      </ContainerPage>

      <RoleCreateModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </Layout>
  )
}
