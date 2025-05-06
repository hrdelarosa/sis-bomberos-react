import { AuthType } from '../types/TitlesAuth'
import HeaderForm from './ui/HeaderForm'

interface Props {
  auth?: AuthType
  children: React.ReactNode
}

export default function ContentForm({ auth = 'login', children }: Props) {
  return (
    <>
      <header className="flex flex-col gap-1.5 p-6">
        <HeaderForm auth={auth} />
      </header>

      <div className="p-6 pt-0">{children}</div>
    </>
  )
}
