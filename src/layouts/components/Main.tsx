export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-layout flex-1 bg-white px-4 overflow-y-auto overflow-x-auto">
      {children}
    </main>
  )
}
