import { useState } from 'react'

export function useMenu() {
  const [isMenuOpen, setMenu] = useState(null)

  const handleMenuToggle = (id) => setMenu((prev) => (prev === id ? null : id))

  const handleClickOutside = () => setMenu(null)

  return { isMenuOpen, handleMenuToggle, handleClickOutside }
}
