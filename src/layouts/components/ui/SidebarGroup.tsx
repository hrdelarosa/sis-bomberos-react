import { ReactNode } from 'react'

export default function SidebarGroup({ children }: { children: ReactNode }) {
  return <ul className="flex flex-col justify-center gap-1.5">{children}</ul>
}
