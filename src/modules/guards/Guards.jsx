import { useEffect } from 'react'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Layout from '../core/layout/Layout'
import useGuardsStore from './store/guards'
import Loading from '../core/components/UI/Loading'
import ContentItems from '../core/components/ContentItems'
import CardGuard from './components/CardGuard'
import { useMenu } from '../core/hooks/menu/useMenu'

export default function Guards() {
  const { guards, error, getAllguards, loading, upgrade } = useGuardsStore()
  const { isMenuOpen, handleMenuToggle, handleClickOutside } = useMenu()

  useEffect(() => {
    getAllguards()
  }, [getAllguards, upgrade])

  return (
    <Layout>
      <ContainerPage onClick={() => handleClickOutside()}>
        <ContentTitlePage title="Guardias" />

        {loading ? (
          <Loading />
        ) : (
          <ContentItems>
            {guards &&
              guards.map((guard) => (
                <CardGuard
                  key={guard.id}
                  guard={guard}
                  isMenuOpen={isMenuOpen === guard.id}
                  handleMenuToggle={() => handleMenuToggle(guard.id)}
                />
              ))}
          </ContentItems>
        )}
      </ContainerPage>
    </Layout>
  )
}
