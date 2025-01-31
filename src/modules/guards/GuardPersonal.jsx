import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MagnifyingGlass, UserPlus } from '../core/components/Icons'
import { useSortedPersonal } from '../personnel/hooks/useSortedPersonal'
import { useModal } from '../core/hooks/modal/useModal'
import usePersonalStore from '../personnel/store/personnel'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Input from '../core/components/UI/Input'
import Loading from '../core/components/UI/Loading'
import ListPersonnelGuard from './components/ListPersonnelGuard'
import GuardAddPerModal from './components/GuardAddPerModal'
import Button from '../core/components/UI/Button'

export default function GuardPersonal() {
  const { id, guard } = useParams()
  const { personalGuard, loading, error, getAllPersonalGuard, upgrade } =
    usePersonalStore()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const { search, setSearch, handleChangeSort, sortedPersonal } =
    useSortedPersonal({ personal: personalGuard })

  useEffect(() => {
    getAllPersonalGuard({ id })
  }, [getAllPersonalGuard, upgrade, id])

  return (
    <Layout>
      <ContainerPage>
        <ContentTitlePage title={`${guard.split('-').join(' ')}`}>
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
              Agregar
              <UserPlus />
            </Button>
          </div>
        </ContentTitlePage>

        {error ? (
          <p>Error al encontrar el personal: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ListPersonnelGuard
            personal={sortedPersonal}
            changeSort={handleChangeSort}
          />
        )}
      </ContainerPage>

      <GuardAddPerModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        personal={personalGuard}
        id={id}
      />
    </Layout>
  )
}
