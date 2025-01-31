import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Form from './components/nuevo/Form'

export default function CreateService() {
  return (
    <Layout>
      <ContainerPage>
        <ContentTitlePage title="Crear servicio" />

        <Form />
      </ContainerPage>
    </Layout>
  )
}
