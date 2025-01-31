import { BarsIcon } from '../components/header/Icons'
import { DocumentAdd } from '../components/Icons'
import { PATHS } from '../constants/sidebar/pathLink'

import NavigatorButton from '../components/UI/NavigatorButton'
import HeaderContentUser from '../components/header/HeaderContentUser'

export default function Header({ toggleAside }) {
  return (
    <header className="header sticky top-0 z-10 h-16 content-center px-5 md:px-8 lg:px-10 bg-white">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleAside}
            className="p-1 rounded hover:bg-fireYellow-100 lg:hidden"
          >
            <BarsIcon />
          </button>

          <div className="w-px h-8 bg-gray-600 opacity-20 lg:hidden"></div>

          <HeaderContentUser />
        </div>

        <div className="flex items-center justify-center gap-3.5">
          {/* <ToggleTheme /> */}

          <NavigatorButton to={PATHS.services.new.to}>
            Nuevo Servicio
            <DocumentAdd />
          </NavigatorButton>
        </div>
      </div>
    </header>
  )
}
