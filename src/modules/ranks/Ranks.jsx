import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import useRanksStore from './store/ranks'
import { useEffect } from 'react'
import { useMenu } from '../core/hooks/menu/useMenu'
import { useModal } from '../core/hooks/modal/useModal'
import Loading from '../core/components/UI/Loading'
import ContentItems from '../core/components/ContentItems'
import CardRank from './components/CardRanks'
import Button from '../core/components/UI/Button'
import { PlusCircle } from '../core/components/Icons'
import RankCreateModal from './components/RankCreateModal'

export default function Ranks() {
  const { ranks, error, getAllRanks, loading, upgrade } = useRanksStore()
  const { isMenuOpen, handleMenuToggle, handleClickOutside } = useMenu()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  useEffect(() => {
    getAllRanks()
  }, [getAllRanks, upgrade])

  return (
    <Layout>
      <ContainerPage onClick={() => handleClickOutside()}>
        <ContentTitlePage title="Rangos">
          <div>
            <Button onClick={handleModalToggle}>
              Crear Rango
              <PlusCircle />
            </Button>
          </div>
        </ContentTitlePage>

        {error && error === 'Este rango ya existe' ? (
          <p>Error al encontrar los roles: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ContentItems>
            {ranks &&
              ranks.map((rank) => (
                <CardRank
                  key={rank.id}
                  rank={rank}
                  isMenuOpen={isMenuOpen === rank.id}
                  handleMenuToggle={() => handleMenuToggle(rank.id)}
                />
              ))}
          </ContentItems>
        )}
      </ContainerPage>

      <RankCreateModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </Layout>
  )
}
