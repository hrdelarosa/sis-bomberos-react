import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  toggleDropdown: () => void
  children: React.ReactNode
  menu?: React.ReactNode
}

export default function Dropdown({ toggleDropdown, children, menu }: Props) {
  const [animationParent] = useAutoAnimate()

  return (
    <div ref={animationParent} className="relative">
      <div className="cursor-pointer w-full" onClick={toggleDropdown}>
        {children}
      </div>
      {menu}
    </div>
  )
}
