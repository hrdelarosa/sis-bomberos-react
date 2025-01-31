import { useContext } from 'react'
import DropdonwContext from '../../context/header/DropdonwContext'

export const useDropdonw = () => {
  const context = useContext(DropdonwContext)

  if (!context)
    throw new Error('useDropdonw debe ser usado dentro del DropdonwProvider')

  return context
}
