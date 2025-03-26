import { useState } from 'react'

export function useUserDropdown() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen)
  }

  const closeUserDropdown = () => {
    setIsUserDropdownOpen(false)
  }

  return { toggleUserDropdown, isUserDropdownOpen, closeUserDropdown }
}
