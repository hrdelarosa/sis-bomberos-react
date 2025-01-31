import { useEffect } from 'react'
import { useMenu } from '../core/hooks/menu/useMenu'
import { useSortedServices } from './hooks/useSortedServices'
import { MagnifyingGlass } from '../core/components/Icons'
import useServicesStore from './store/services'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Loading from '../core/components/UI/Loading'
import ContentServices from './components/ContentServices'
import ServicesCard from './components/card/ServicesCard'
import Input from '../core/components/UI/Input'

export default function Services() {
  const { services, error, getAllServices, loading } = useServicesStore()
  const { isMenuOpen, handleMenuToggle, handleClickOutside } = useMenu()
  const { search, setSearch, filteredServices } = useSortedServices({
    services,
  })

  useEffect(() => {
    getAllServices()
  }, [getAllServices])

  return (
    <Layout>
      <ContainerPage onClick={() => handleClickOutside()}>
        <ContentTitlePage title="Servicios">
          <div className="">
            <div className="relative">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className={`bg-white text-black ring-gray-300 focus:ring-gray-500 focus:bg-white w-72 pr-6 text-sm`}
                placeholder="Busca servicio..."
              />
              <div className="absolute top-2 right-1.5 text-gray-500">
                <MagnifyingGlass />
              </div>
            </div>
          </div>
        </ContentTitlePage>

        {error ? (
          <p>Error al encontrar los servicios: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ContentServices>
            {filteredServices &&
              filteredServices.map((service) => (
                <ServicesCard
                  key={service.id}
                  service={service}
                  isMenuOpen={isMenuOpen === service.id}
                  handleMenuToggle={() => handleMenuToggle(service.id)}
                />
              ))}
          </ContentServices>
        )}
      </ContainerPage>
    </Layout>
  )
}
