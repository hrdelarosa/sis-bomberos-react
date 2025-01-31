import { useEffect } from 'react'
import { useMenu } from '../core/hooks/menu/useMenu'
import { useModal } from '../core/hooks/modal/useModal'
import { PlusCircle } from '../core/components/Icons'
import useStationsStore from './store/stations'
import useStatesStore from '../states/store/states'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Loading from '../core/components/UI/Loading'
import ContentItems from '../core/components/ContentItems'
import CardStation from './components/CardStation'
import Button from '../core/components/UI/Button'
import StationCreateModal from './components/StationCreateModal'

export default function Stations() {
  const { stations, error, getAllStations, loading, upgrade } =
    useStationsStore()
  const { isMenuOpen, handleMenuToggle, handleClickOutside } = useMenu()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const { states, getAllStates } = useStatesStore()

  useEffect(() => {
    getAllStations()
    getAllStates()
  }, [getAllStations, getAllStates, upgrade])

  return (
    <Layout>
      <ContainerPage onClick={() => handleClickOutside()}>
        <ContentTitlePage title="Estaciones">
          <div>
            <Button onClick={handleModalToggle}>
              Crear Estación
              <PlusCircle />
            </Button>
          </div>
        </ContentTitlePage>

        {error && error !== 'Esta estación ya esta creada' ? (
          <p>Error al encontrar las estaciones: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ContentItems>
            {stations &&
              stations.map((station) => (
                <CardStation
                  key={station.id}
                  station={station}
                  isMenuOpen={isMenuOpen === station.id}
                  handleMenuToggle={() => handleMenuToggle(station.id)}
                />
              ))}
          </ContentItems>
        )}
      </ContainerPage>

      <StationCreateModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        states={states}
      />
    </Layout>
  )
}
