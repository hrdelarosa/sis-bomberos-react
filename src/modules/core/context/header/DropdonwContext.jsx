import { createContext, useState } from 'react'

const DropdonwContext = createContext(undefined)

export const DropdonwProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toogleDropdonw = () => setOpen(!open)

  const closeDropdonw = () => setOpen(false)

  return (
    <DropdonwContext.Provider value={{ open, toogleDropdonw, closeDropdonw }}>
      {children}
    </DropdonwContext.Provider>
  )
}

export default DropdonwContext
