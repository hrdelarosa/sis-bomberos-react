interface Props {
  children: React.ReactNode
  closeUserDropdown: () => void
}

export default function Main({ children, closeUserDropdown }: Props) {
  return (
    <main
      className="main-layout flex-1 bg-white p-4 pt-0 overflow-y-auto overflow-x-auto"
      onClick={closeUserDropdown}
    >
      {children}
    </main>
  )
}
