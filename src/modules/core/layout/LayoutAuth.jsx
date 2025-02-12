import { Link } from 'react-router-dom'
import { BomberosIcon } from '../components/Icons'

export default function LayoutAuth({ children }) {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-3 px-5 bg-slate-100/60">
      <div className="flex flex-row items-center justify-center gap-2">
        <Link to="/login">
          <BomberosIcon size="size-12" />{' '}
        </Link>
        <span className="text-lg font-medium md:text-xl xl:text-2xl">
          Sistema de Gestión de Bomberos
        </span>
      </div>
      {children}
    </main>
  )
}
