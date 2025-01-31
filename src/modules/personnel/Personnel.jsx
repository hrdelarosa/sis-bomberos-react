import { useEffect } from 'react'
import { MagnifyingGlass, UserPlus } from '../core/components/Icons'
import { useModal } from '../core/hooks/modal/useModal'
import usePersonalStore from './store/personnel'
import useRanksStore from '../ranks/store/ranks'
import useGuardsStore from '../guards/store/guards'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Loading from '../core/components/UI/Loading'
import ListPersonnel from './components/ListPersonnel'
import Button from '../core/components/UI/Button'
import PersonalCreateModal from './components/PersonalCreateModal'
import { useSortedPersonal } from './hooks/useSortedPersonal'
import Input from '../core/components/UI/Input'

export default function Personnel() {
  const { personal, loading, error, getAllPersonal } = usePersonalStore()
  const { ranks, getAllRanks } = useRanksStore()
  const { guards, getAllguards } = useGuardsStore()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const { search, setSearch, handleChangeSort, sortedPersonal } =
    useSortedPersonal({ personal })

  useEffect(() => {
    getAllPersonal()
    getAllRanks()
    getAllguards()
  }, [getAllPersonal, getAllRanks, getAllguards])

  return (
    <Layout>
      <ContainerPage>
        <ContentTitlePage title="Personal">
          <div className="flex items-center gap-5">
            <div className="relative">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className={`bg-white text-black ring-gray-300 focus:ring-gray-500 focus:bg-white w-80 pr-6 text-sm`}
                placeholder="Buscar personal..."
              />
              <div className="absolute top-2 right-1.5 text-gray-500">
                <MagnifyingGlass />
              </div>
            </div>
            <Button onClick={handleModalToggle}>
              Crear Personal
              <UserPlus />
            </Button>
          </div>
        </ContentTitlePage>

        {error ? (
          <p>Error al encontrar el personal: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ListPersonnel
            personal={sortedPersonal}
            changeSort={handleChangeSort}
          />
        )}
      </ContainerPage>

      <PersonalCreateModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        ranks={ranks}
        guards={guards}
      />
    </Layout>
  )
}
