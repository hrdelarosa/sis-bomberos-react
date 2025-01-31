import { useEffect } from 'react'
import { useMenu } from '../core/hooks/menu/useMenu'
import { useModal } from '../core/hooks/modal/useModal'
import { PlusCircle } from '../core/components/Icons'
import useUnitsStore from './store/units'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Button from '../core/components/UI/Button'
import Loading from '../core/components/UI/Loading'
import ContentItems from '../core/components/ContentItems'
import CardType from './components/type/CardType'
import TypeCreateModal from './components/type/TypeCreateModal'

export default function Types() {
  const { types, error, getAllTypesU, loading, upgrade } = useUnitsStore()
  const { isMenuOpen, handleMenuToggle, handleClickOutside } = useMenu()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  useEffect(() => {
    getAllTypesU()
  }, [getAllTypesU, upgrade])

  return (
    <Layout>
      <ContainerPage onClick={() => handleClickOutside()}>
        <ContentTitlePage title="Tipos de unidad">
          <div>
            <Button onClick={handleModalToggle}>
              Crear tipo
              <PlusCircle />
            </Button>
          </div>
        </ContentTitlePage>

        {error && error !== 'El tipo de unidad ya existe' ? (
          <p>Error al encontrar los tipos de unidad: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ContentItems>
            {types &&
              types.map((type) => (
                <CardType
                  key={type.id}
                  type={type}
                  isMenuOpen={isMenuOpen === type.id}
                  handleMenuToggle={() => handleMenuToggle(type.id)}
                />
              ))}
          </ContentItems>
        )}
      </ContainerPage>

      <TypeCreateModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </Layout>
  )
}
