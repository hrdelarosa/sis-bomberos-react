import { BomberosLogo } from './Icons'

export default function ContentLogo({ size }: { size?: string }) {
  return (
    <div className="group-hover:scale-[1.03] group-hover:translate-x-0.5 transition-transform">
      <BomberosLogo size={size} />
    </div>
  )
}
