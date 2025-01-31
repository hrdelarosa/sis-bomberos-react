import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import useAuthStore from '../auth/store/auth'
import { useEffect } from 'react'
import { UserCircle } from '../core/components/header/Icons'
import Loading from '../core/components/UI/Loading'
import { Pensil } from './components/Icons'
import Button from './components/Button'
import InfoUser from './components/InfoUser'

import CardService from './components/CardService'
import ContentServices from './components/ContentServices'
import useServicesStore from '../servicios/store/services'

export default function Profile() {
  const { user, profile, getProfile, loading, error } = useAuthStore()
  const { services, getServiceByCreator } = useServicesStore()

  useEffect(() => {
    getProfile({ id: user.id })
    getServiceByCreator({ id: user.id })
  }, [getProfile, getServiceByCreator, user.id])

  console.log(services)

  return (
    <Layout>
      <ContainerPage>
        <ContentTitlePage title="Perfil" />

        {error.length > 0 ? (
          <p>Error al encontrar el usuario: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          profile && (
            <div className="rounded-lg bg-white">
              <div className="relative h-28">
                <div className="left-0 top-0 w-full h-full rounded-t-lg bg-gradient-to-r from-fireOrange-500 to-fireRed-700">
                  <Button className="absolute top-[72px] right-4 z-50">
                    Editar
                    <Pensil />
                  </Button>
                </div>
              </div>

              <div className=" px-5 pb-5">
                <div className="relative z-30 h-12">
                  <div className="relative -top-12">
                    <UserCircle size="size-24" />
                  </div>
                </div>

                <InfoUser profile={profile} />

                <div className="flex flex-col gap-4 mt-8 h-fit">
                  <h3 className="text-xl font-medium">{`Ultimos ${services.length} servicios`}</h3>
                  <ContentServices>
                    {services &&
                      services.map((service) => (
                        <CardService key={service.id} service={service} />
                      ))}
                  </ContentServices>
                </div>
              </div>
            </div>
          )
        )}
      </ContainerPage>
    </Layout>
  )
}
