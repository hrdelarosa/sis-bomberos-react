import { useParams } from 'react-router-dom'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Layout from '../core/layout/Layout'
import Input from '../core/components/UI/Input'
import { MagnifyingGlass } from '../core/components/Icons'
import usePersonalStore from '../personnel/store/personnel'
import { useEffect } from 'react'
import { usePersonalSearch } from '../personnel/hooks/usePersonalSearch'
import ItemPersonalGuard from './components/ItemPersonalGuard'
import { capitalLetter } from '../core/lib/firstCapitalLetter'

export default function AddPerGuard() {
  const { id, guard } = useParams()
  const { personal, getAllPersonal } = usePersonalStore()
  const {
    search,
    setSearch,
    filterPersonal,
    selectedPersonal,
    togglePersonalSelection,
  } = usePersonalSearch({ personal })

  useEffect(() => {
    getAllPersonal()
  }, [getAllPersonal])

  return (
    <Layout>
      <ContainerPage>
        <ContentTitlePage
          title={`Añadir personal a la ${guard.split('-').join(' ')}`}
        >
          <div className="relative">
            <Input
              id="search-personal"
              type="text"
              placeholder="Buscar trabajador..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`bg-white text-black ring-gray-300 focus:ring-gray-500 focus:bg-white w-64 pr-6 text-sm`}
            />
            <div className="absolute top-2 right-1.5 text-gray-500">
              <MagnifyingGlass />
            </div>
          </div>
        </ContentTitlePage>

        <div className="grid grid-cols-2 gap-5 w-full h-full">
          <div className="h-full bg-white rounded-lg ">
            <div className={`rounded-lg overflow-y-auto overflow-x-auto`}>
              <ul className="divide-y divide-slate-200">
                {filterPersonal.map((persona) => (
                  <ItemPersonalGuard
                    key={persona.id}
                    persona={persona}
                    selectedPersonal={selectedPersonal}
                    togglePersonalSelection={togglePersonalSelection}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* <div className="bg-red-300">
            <ul>
              {selectedPersonal &&
                selectedPersonal.map((select) => (
                  <li key={select.id}>
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {`${select.per_nombres} ${select.per_apellidos}`}
                      </span>
                      <small className="text-xs text-gray-500">
                        {`${select.per_np} - ${capitalLetter(
                          select.ran_nombre
                        )}`}
                      </small>
                    </div>
                  </li>
                ))}
            </ul>
          </div> */}
        </div>
      </ContainerPage>
    </Layout>
  )
}
