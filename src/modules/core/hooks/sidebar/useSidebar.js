import { useState } from 'react'

export function useSideBar() {
  const [isAsideVisible, setAsideVisible] = useState(false)

  const toggleAside = () => {
    setAsideVisible(!isAsideVisible)
  }

  const closeAside = () => {
    setAsideVisible(false)
  }

  return { isAsideVisible, toggleAside, closeAside }
}
