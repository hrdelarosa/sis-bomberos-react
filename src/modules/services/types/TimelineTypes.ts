import { LucideIcon } from 'lucide-react'

export interface TimelineStructure {
  title: string
  sub: string
  icon: LucideIcon
}

export type TimelineType = 'departure' | 'arrival' | 'control' | 'base'
