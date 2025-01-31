import { useEffect } from 'react'
import { useModal } from '../core/hooks/modal/useModal'
import { useMenu } from '../core/hooks/menu/useMenu'
import useUnitsStore from './store/units'
import useStatesStore from '../states/store/states'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Loading from '../core/components/UI/Loading'
import ContentItems from '../core/components/ContentItems'
import UnitCard from './components/units/UnitCard'
import UnitEditModal from './components/units/UnitEditModal'

export default function Units() {
  const { units, error, getAllUnits, loading, upgrade } = useUnitsStore()
  const { states, getAllStates } = useStatesStore()
  const { isMenuOpen, handleMenuToggle, handleClickOutside } = useMenu()
  const {
    isModalOpen,
    editingItem,
    handleModalToggle,
    closeModal,
    handleEdit,
  } = useModal()

  useEffect(() => {
    getAllUnits()
    getAllStates()
  }, [getAllUnits, getAllStates, upgrade])

  return (
    <Layout>
      <ContainerPage onClick={() => handleClickOutside()}>
        <ContentTitlePage title="Unidades" />

        {error ? (
          <p>Error al encontrar las unidades: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ContentItems>
            {units &&
              units.map((unidad) => (
                <UnitCard
                  key={unidad.id}
                  unit={unidad}
                  isMenuOpen={isMenuOpen === unidad.id}
                  handleMenuToggle={() => handleMenuToggle(unidad.id)}
                  onEdit={handleEdit}
                  handleModalToggle={handleModalToggle}
                />
              ))}
          </ContentItems>
        )}
      </ContainerPage>

      {editingItem && (
        <UnitEditModal
          unit={editingItem}
          states={states}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </Layout>
  )
}
