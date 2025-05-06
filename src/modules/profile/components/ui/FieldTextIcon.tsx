import React from 'react'

interface Props {
  label?: string
  icon?: React.ReactNode
  children: React.ReactNode
}

export default function FielTextIcon({ label, icon, children }: Props) {
  return (
    <div>
      <h4 className="flex items-center gap-1.5 text-sm text-gray-500">
        {icon} {label}
      </h4>

      <div className="mt-1 flex items-center gap-2.5 font-medium">
        {children}
      </div>
    </div>
  )
}
