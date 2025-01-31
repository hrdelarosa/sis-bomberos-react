import { useState } from 'react'

export function useContentNav() {
  const [openSections, setOpenSections] = useState({
    services: false,
    personal: false,
    units: false,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return { openSections, toggleSection }
}
