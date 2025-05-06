import { useState } from 'react'

export function useUserDropdown() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)

  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen)

  const closeUserDropdown = () => {
    if (isUserDropdownOpen === false) return
    setIsUserDropdownOpen(false)
  }

  return { toggleUserDropdown, isUserDropdownOpen, closeUserDropdown }
}
