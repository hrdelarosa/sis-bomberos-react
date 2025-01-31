import style from '../styles/ContentMain.module.css'
import { useAnimation } from '../hooks/useAnimation'
import { useDropdonw } from '../hooks/header/useDropdonw'

export default function ContentMain({ children }) {
  const { animationParent } = useAnimation()
  const { closeDropdonw } = useDropdonw()

  return (
    <main
      ref={animationParent}
      onClick={closeDropdonw}
      id="content_main"
      className={`main relative bg-mainWhite px-9 py-6 overflow-y-auto overflow-x-auto ${style.main_container}`}
    >
      {children}
    </main>
  )
}
