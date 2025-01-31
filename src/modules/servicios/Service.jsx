import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useServicesStore from './store/services'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Loading from '../core/components/UI/Loading'
import InfoService from './components/servicio/InfoService'

export default function Service() {
  const { id } = useParams()
  const { serviceId, getServiceById, loading } = useServicesStore()

  useEffect(() => {
    getServiceById({ id })
  }, [getServiceById, id])

  console.log(serviceId)

  return (
    <Layout>
      <ContainerPage>
        <div className="flex flex-col ">
          <ContentTitlePage title="Detalles del servicio" />
          <p className="text-sm text-gray-600">ID: {serviceId?.id_servicio}</p>
        </div>

        {loading ? (
          <Loading />
        ) : (
          serviceId && <InfoService service={serviceId} />
        )}
      </ContainerPage>
    </Layout>
  )
}
