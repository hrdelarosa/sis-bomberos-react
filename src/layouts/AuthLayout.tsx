import { Link, Outlet } from 'react-router-dom'
import ContentLogo from './components/ui/ContentLogo'

export default function AuthLayout() {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5 w-screen h-screen">
      <div className="flex items-center gap-1 px-6">
        <Link to="/login" className="group">
          <ContentLogo size="size-12" />
        </Link>
        <h1 className="text-2xl font-semibold">
          Sistema de Gestión de Bomberos
        </h1>
      </div>

      <section className="rounded-xl border border-gray-100 bg-white text-black-foreground shadow w-full max-w-lg">
        <Outlet />
      </section>
    </div>
  )
}
